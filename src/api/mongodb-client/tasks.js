import { ObjectID } from 'mongodb'

// filter: doer, priority, substr_name
// sort: name, doer, priority, deadline, asc, desc
// pages: pagesize, pagenum

function listTasks (req, res, db) {
  const answer = {}
  let pagesize = 10
  let pagenum = 0

  // FIXME input data validation

  if ('pagesize' in req.query) {
    if (req.query.pagesize > 100) {
      answer.status = 400
      res.status(answer.status).json(answer)
      return
    } else pagesize = 1 * req.query.pagesize
  }

  if ('pagenum' in req.query) {
    if (req.query.pagenum < 1) {
      answer.status = 400
      res.status(answer.status).json(answer)
      return
    } else pagenum = req.query.pagenum - 1
  }

  const Tokens = db.collection('Tokens')
  Tokens.findOne({ token: req.params.token }, (errorFindToken, resToken) => {
    if (errorFindToken) {
      answer.status = 500
      res.status(answer.status).json(answer)
    } else if (resToken) {
      const Tasks = db.collection('Tasks')
      const query = {
        $or: [
          { 'doer.id': resToken.idUser },
          { 'manager.id': resToken.idUser },
        ],
      }
      if ('filter' in req.query) {
        if ('doer' in req.query.filter) {
          query['doer.id'] = new ObjectID(req.query.filter.doer)
        }
        // FIXME double priorities like Low-Medium
        if ('priority' in req.query.filter) {
          query.priority = req.query.filter.priority
        }
        if ('search' in req.query.filter) {
          query.name = { $regex: req.query.filter.search, $options: 'i' }
        }
      }
      Tasks.count(query , (errorTasksCount, count) => {
        if (errorTasksCount) {
          answer.status = 500
          res.status(answer.status).json(answer)
        } else if (count == 0) {
          answer.status = 200
          answer.totalTasks = 0
          res.status(answer.status).json(answer)
        } else {
          const order = {}
          let sortDir = 1
          let orderField = ''
          if ('order' in req.query && req.query.order === 'desc') {
            sortDir = -1
          }
          if ('sort' in req.query) {
            switch (req.query.sort) {
            case 'name':
              orderField = req.query.sort
              order.name = sortDir
              break
            case 'doer':
              orderField = req.query.sort
              order['doer.fullName'] = sortDir
              break
            case 'priority':
              orderField = req.query.sort
              order.priority = sortDir
              break
            case 'deadline':
              orderField = req.query.sort
              order.deadline = sortDir
              break
            default:
              order.name = sortDir
              orderField = 'name'
            }
          } else {
            orderField = 'name'
            order.name = sortDir
          }
          const tasklist = []
          Tasks.find(query).sort(order)
            .skip(pagesize * pagenum)
            .limit(pagesize)
            .each((errorFindTasks, resTask) => {
              if (errorFindTasks) {
                answer.status = 500
                res.status(answer.status).json(answer)
              } else if (resTask) {
                tasklist.push({
                  idTask: resTask._id,
                  name: resTask.name,
                  doer: resTask.doer.fullName,
                  priority: resTask.priority,
                  deadline: resTask.deadline,
                })
              } else {
                answer.status = 200
                answer.totalTasks = count
                answer.tasksSkipped = pagesize * pagenum
                answer.tasksSent = tasklist.length
                answer.sort = {
                  field: orderField,
                  order: sortDir == -1 ? 'desc' : 'asc',
                }
                if ('filter' in req.query) {
                  answer.filter = {}
                  if ('doer.id' in query) {
                    answer.filter.doer = query['doer.id']
                  }
                  if ('priority' in query) {
                    answer.filter.priority = query.priority
                  }
                  if ('name' in query) {
                    answer.filter.search = query.name.$regex
                  }
                }
                answer.tasks = tasklist
                res.status(answer.status).json(answer)
              }
            })
        }
      })
    } else {
      answer.status = 403
      res.status(answer.status).json(answer)
    }
  })
}

export { listTasks }
