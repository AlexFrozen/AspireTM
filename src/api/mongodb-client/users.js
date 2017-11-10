function users (req, res, db) {
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
      const Users = db.collection('Users')
      const userlist = []

      Users.find({}).each((errorUsers, resUser) => {
        if (errorUsers) {
          answer.status = 500
          res.status(answer.status).json(answer)
        } else if (resUser) {
          const user = {}
          user.idUser = resUser._id
          user.firstName = resUser.firstName
          user.lastName = resUser.lastName
          user.eMail = resUser.eMail
          user.manager = resUser.manager.fullName
          user.role = resUser.role
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
