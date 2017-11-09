function users (req, res, db) {
  const answer = {}
  const Tokens = db.collection('Tokens')
  Tokens.findOne({
    token: req.params.token,
    role: 'Admin',
  }, (err, r) => {
    if (err) {
      answer.status = 500
      res.status(answer.status).json(answer)
    } else if (r) {
      const Users = db.collection('Users')
      const userlist = []

      Users.find({}).each((err, r) => {
        if (err) {
          answer.status = 500
          res.status(answer.status).json(answer)
        } else if (r) {
          const user = {}
          user.idUser = r._id
          user.firstName = r.firstName
          user.lastName = r.lastName
          user.eMail = r.eMail
          user.manager = r.manager.fullName
          user.role = r.role
          userlist.push(user)
        } else {
          answer.status = 200
          answer.users = userlist
          res.status(answer.status).json(answer)
        }
      })

    } else {
      answer.status = 403
      res.status(answer.status).json(answer)
    }
  })
}

export { users }
