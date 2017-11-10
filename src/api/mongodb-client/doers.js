function doers (req, res, db) {
  const answer = {}

  const Tokens = db.collection('Tokens')
  Tokens.findOne({ token: req.params.token }, (errorFindToken, resToken) => {
    if (errorFindToken) {
      answer.status = 500
      res.status(answer.status).json(answer)
    } else if (resToken) {
      const idManager = resToken.idUser
      const Users = db.collection('Users')
      const userlist = []

      Users.find({ 'manager.id': idManager })
      .each((errorListDoers, resDoer) => {
        if (errorListDoers) {
          answer.status = 500
          res.status(answer.status).json(answer)
        } else if (resDoer) {
          const user = {}
          user.idUser = resDoer._id
          user.firstName = resDoer.firstName
          user.lastName = resDoer.lastName
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
