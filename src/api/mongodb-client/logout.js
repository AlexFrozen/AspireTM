function logout (req, res, db) {
  const answer = {}
  const Tokens = db.collection('Tokens')
  Tokens.findOneAndDelete(
    {
      token: req.params.token
    }, (err, r) => {
      if (err) {
        answer.status = 500
      }else if (r.value) {
        answer.status = 200
      }else{
        answer.status = 404
      }
      res.status(answer.status).json(answer)
    }
  )
}

export { logout }
