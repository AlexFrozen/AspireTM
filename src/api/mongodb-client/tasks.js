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
    }else pagesize = 1*req.query.pagesize
  }

  if ('pagenum' in req.query) {
    if (req.query.pagenum < 1) {
      answer.status = 400
      res.status(answer.status).json(answer)
      return
    }else pagenum = req.query.pagenum - 1
  }

  const Tokens = db.collection('Tokens')
  Tokens.findOne(
    {
      token: req.params.token,
    }, (err, r) => {
      if (err) {
        answer.status = 500
        res.status(answer.status).json(answer)
      }else if (r) {
        const Tasks = db.collection('Tasks')
        const query = {
          $or: [
            { 'doer.id': r.idUser },
            { 'manager.id': r.idUser }
          ]
        }
        if ('filter' in req.query) {
          if ('doer' in req.query.filter) {
            query['doer.id'] = new ObjectID(req.query.filter.doer)
          }
          // FIXME doublw priorities like Low-Medium
          if ('priority' in req.query.filter ) {
            query.priority = req.query.filter.priority
          }
          if ('search' in req.query.filter ) {
            query.name = { $regex: req.query.filter.search, $options: 'i' }
          }
        }
        Tasks.count(query , (err, count) => {
          if (err) {
            answer.status = 500
            res.status(answer.status).json(answer)
          }else if (count == 0) {
            answer.status = 200
            answer.totalTasks = 0
            res.status(answer.status).json(answer)
          }else{
            const order = {}
            let sortDir = 1
            if ('order' in req.query && req.query.order === 'desc') {
              sortDir = -1
            }
            if ('sort' in req.query) {
              switch (req.query) {
                case 'name': order.name = sortDir; break
                case 'doer': order.doer = { fullName: sortDir }; break
                case 'priority': order.priority = sortDir; break
                case 'deadline': order.deadline = sortDir; break
                default: order.name = sortDir
              }
            }else{
                order.name = sortDir
            }
            const tasklist = []
            Tasks.find(query).sort(order)
            .skip(pagesize*pagenum)
            .limit(pagesize)
            .each((err, r) => {
              if (err) {
                answer.status = 500
                res.status(answer.status).json(answer)
              }else if (r) {
                tasklist.push({
                  idTask: r._id,
                  name: r.name,
                  doer: r.doer.fullName,
                  priority: r.priority,
                  deadline: r.deadline
                })
              }else{
                answer.status = 200
                answer.tasks = tasklist
                res.status(answer.status).json(answer)
              }
            })
          }
        })
      }else{
        answer.status = 403
        res.status(answer.status).json(answer)
      }
    }
  )
}

export { listTasks }
