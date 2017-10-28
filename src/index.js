import assert from 'assert'
import { MongoClient } from 'mongodb'
import express from 'express'
import bodyParser from 'body-parser'
import crypto from 'crypto'
import { dbapi } from './api/mongodb-client/index.js'

const server = express()

console.log('Connecting to MongoDB server...')

MongoClient.connect('mongodb://localhost:27017/aspire-tm', (err, db) => {
  assert.equal(null, err);
  console.log('Connected successfully to MongoDB server');

  server.use('/static', express.static('static'))

  server.use(bodyParser.json());

  server.post('/api_v1.0/auth', (req, res) => {
    dbapi.auth(req, res, db)
  })

  server.get('/api_v1.0/:token/logout', (req, res) => {
    dbapi.logout(req, res, db)
  })

  server.get('/api_v1.0/:token/users', (req, res) => {
    dbapi.users(req, res, db)
  })

  server.post('/api_v1.0/newuser', (req, res) => {
    dbapi.addUser(req, res, db)
  })

  console.log('Starting web server on 3000...')
  server.listen(3000)
  console.log('Listening on 3000')
})

