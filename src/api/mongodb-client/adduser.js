import { ObjectID } from 'mongodb'
import crypto from 'crypto'

function addUser (req, res, db) {
  const answer = {}

  const Tokens = db.collection('Tokens')
  Tokens.findOne({
    token: req.params.token,
    role: 'Admin',
  }, (errorFindToken, resToken) => {
    if (errorFindToken) {
      answer.status = 500
      res.status(answer.status).json(answer)
    } else if (resToken) {
      if (
        !('firstName' in req.body)
          || !('lastName' in req.body)
          || !('eMail' in req.body)
          || !('idManager' in req.body)
          || !('role' in req.body)
          || !('password' in req.body)
      ) {
        answer.status = 400
        res.status(answer.status).json(answer)
        return
      }

      // FIXME validation.
      // Especially idManager as 24 length and [0-9a-f] symbols

      const pass = crypto.createHash('sha256')
      .update(req.body.password)
      .digest('hex')
      const doc = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        manager: {
          id: req.body.idManager,
          fullName: '',
        },
        eMail: req.body.eMail,
        role: req.body.role,
        password: pass,
      }
      const Users = db.collection('Users')
      if (req.body.idManager === '0') {
        doc.manager.fullName = 'None'
        insertUser(res, Users, doc)
      } else {
        doc.manager.id = new ObjectID(doc.manager.id)
        Users.findOne(
          { _id: doc.manager.id },
          (errorFindManager, resManager) => {
            if (errorFindManager) {
              answer.status = 500
              res.status(answer.status).json(answer)
            } else if (resManager) {
              doc.manager.fullName = `${resManager.firstName
              } ${resManager.lastName}`
              insertUser(res, Users, doc)
            } else {
              answer.status = 422
              res.status(answer.status).json(answer)
            }
          }
        )
      }
    } else {
      answer.status = 403
      res.status(answer.status).json(answer)
    }
  })
}

function insertUser (res, Users, doc) {
  const answer = {}
  Users.findOne({ eMail: doc.eMail }, (errorFindByMail, resByMail) => {
    if (errorFindByMail) {
      answer.status = 500
      res.status(answer.status).json(answer)
    } else if (resByMail) {
      answer.status = 409
      res.status(answer.status).json(answer)
    } else {
      Users.insertOne(doc, (errorNewUser, resNewUser) => {
        if (errorNewUser || resNewUser.insertedCount !== 1) {
          answer.status = 500
        } else {
          answer.status = 200
          answer.idUser = resNewUser.insertedId
        }
        res.status(answer.status).json(answer)
      })
    }
  })
}

export { addUser }
