function logout (req, res, db) {
  const answer = {}
  const Tokens = db.collection('Tokens')
  Tokens.findOneAndDelete(
    { token: req.params.token },
    (errorDelToken, resDelToken) => {
      if (errorDelToken) {
        answer.status = 500
      } else if (resDelToken.value) {
        answer.status = 200
      } else {
        answer.status = 404
      }
      res.status(answer.status).json(answer)
    }
  )
}

export { logout }
