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
  }, (errorFindToken, resToken) => {
    if (errorFindToken) {
      answer.status = 500
      res.status(answer.status).json(answer)
      return
    } else if (resToken) {
      const idUser = resToken._id
      const firstName = resToken.firstName
      const lastName = resToken.lastName
      const role = resToken.role
      const token = crypto.createHash('sha256')
      .update(`${resToken._id + req.ip + Math.random()}hash59388634`)
      .digest('hex')
      const Tokens = db.collection('Tokens')
      Tokens.insertOne({
        token: token,
        idUser: idUser,
        fullName: `${firstName} ${lastName}`,
        role: role,
      }, (errorNewToken, resNewToken) => {
        if (errorNewToken || resNewToken.insertedCount !== 1) {
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
