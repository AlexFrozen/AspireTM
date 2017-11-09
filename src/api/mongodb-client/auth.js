import crypto from 'crypto'

function auth (req, res, db) {
  const answer = {}
  if (!('login' in req.body) || !('password' in req.body)) {
    answer.status = 400
    res.status(answer.status).json(answer)
    return
  }
  const pass = crypto.createHash('sha256')
    .update(req.body.password)
    .digest('hex')

  const Users = db.collection('Users')
  Users.findOne({
    eMail: req.body.login,
    password: pass,
  }, (err, r) => {
    if (err) {
      answer.status = 500
      res.status(answer.status).json(answer)
      return
    } else if (r) {
      const idUser = r._id
      const firstName = r.firstName
      const lastName = r.lastName
      const role = r.role
      const token = crypto.createHash('sha256')
        .update(r._id+req.ip+Math.random()+'hash59388634')
        .digest('hex')
      const Tokens = db.collection('Tokens')
      Tokens.insertOne({
        token: token,
        idUser: idUser,
        fullName: firstName+' '+lastName,
        role: role,
      }, (err, r) => {
        if (err || r.insertedCount != 1) {
          answer.status = 500
        } else {
          answer.status = 200
          answer.idUser = idUser
          answer.role = role
          answer.firstName = firstName
          answer.lastName = lastName
          answer.token = token
        }
        res.status(answer.status).json(answer)
      })
    } else {
      answer.status = 403
      res.status(answer.status).json(answer)
    }
  })
}

export { auth }
