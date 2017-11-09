function doers (req, res, db) {
  const answer = {}

  const Tokens = db.collection('Tokens')
  Tokens.findOne({
    token: req.params.token,
  }, (err, r) => {
    if (err) {
      answer.status = 500
      res.status(answer.status).json(answer)
    } else if (r) {
      const idManager = r.idUser
      const Users = db.collection('Users')
      const userlist = []

      Users.find({
        'manager.id': idManager,
      }).each((err, r) => {
        if (err) {
          answer.status = 500
          res.status(answer.status).json(answer)
        } else if (r) {
          const user = {}
          user.idUser = r._id
          user.firstName = r.firstName
          user.lastName = r.lastName
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

export { doers }
