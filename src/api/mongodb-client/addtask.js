import { ObjectID } from 'mongodb'

function createTask (req, res, db) {
  const answer = {}
  const Tokens = db.collection('Tokens')
  Tokens.findOne(
    {
      token: req.params.token,
    }, (err, r) => {
      if (err) {
        answer.status = 500
        res.status(answer.status).json(answer)
      }else if (r) {
        if (
             !('name' in req.body)
          || !('idDoer' in req.body)
          || !('priority' in req.body)
          || !('deadline' in req.body)
          || !('descr' in req.body)
        ){
          answer.status = 400
          res.status(answer.status).json(answer)
          return
        }

        // FIXME validation.
        // Especially idDoer as 24 length and [0-9a-f] symbols or '0'

        const Users = db.collection('Users')
        const Tasks = db.collection('Tasks')
        const idManager = new ObjectID(r.idUser)
        const doc = {
          name: req.body.name,
          priority: req.body.priority,
          deadline: req.body.deadline,
          descr: req.body.descr,
          manager: {
            id: idManager
          }
        }
        if (req.body.idDoer === '0') {
          doc.doer = {
            id: idManager,
            fullName: r.fullName
          }
          doc.manager.fullName = 'Self'
          insertTask(res, Tasks, doc)
        }else{
          const idDoer = new ObjectID(req.body.idDoer)
          doc.doer = { id: idDoer }
          doc.manager.fullName = r.fullName
          Users.findOne(
            {
              _id: idDoer,
              'manager.id': idManager
            }, (err, r) => {
              if (err) {
                answer.status = 500
                res.status(answer.status).json(answer)
              }else if (r){
                doc.doer.fullName = r.firstName+' '+r.lastName
                insertTask (res, Tasks, doc)
              }else{
                answer.status = 422
                res.status(answer.status).json(answer)
              }
            }
          )
        }
      }else{
        answer.status = 403
        res.status(answer.status).json(answer)
      }
    }
  )
}

function insertTask (res, Tasks, doc) {
  const answer = {}
  Tasks.insertOne(
    doc, (err, r) => {
      if (err || r.insertedCount != 1) {
        answer.status = 500
      }else{
        answer.status = 200
        answer.idTask = r.insertedId
      }
      res.status(answer.status).json(answer)
    }
  )
}

export { createTask }
