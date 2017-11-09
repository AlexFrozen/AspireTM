import assert from 'assert'
import { MongoClient } from 'mongodb'
import express from 'express'
import bodyParser from 'body-parser'
import { dbapi } from './api/mongodb-client/index.js'

const server = express()

MongoClient.connect('mongodb://localhost:27017/aspire-tm', (err, db) => {
  assert.equal(null, err)

  server.use('/static', express.static('static'))

  server.use(bodyParser.json())

  server.post('/api_v1.0/auth', (req, res) => {
    dbapi.auth(req, res, db)
  })

  server.get('/api_v1.0/:token/logout', (req, res) => {
    dbapi.logout(req, res, db)
  })

  server.post('/api_v1.0/:token/newtask', (req, res) => {
    dbapi.newtask(req, res, db)
  })

  server.get('/api_v1.0/:token/tasks', (req, res) => {
    dbapi.tasks(req, res, db)
  })

  server.get('/api_v1.0/:token/users', (req, res) => {
    dbapi.users(req, res, db)
  })

  server.get('/api_v1.0/:token/doers', (req, res) => {
    dbapi.doers(req, res, db)
  })

  server.post('/api_v1.0/:token/newuser', (req, res) => {
    dbapi.addUser(req, res, db)
  })

  server.listen(3000)
})

