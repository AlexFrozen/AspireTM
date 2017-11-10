/* eslint no-console: "off" */
import { MongoClient } from 'mongodb'
import assert from 'assert'
import crypto from 'crypto'

const login = 'admin@no.mail'
const pwd = 'admin'
const pass = crypto
.createHash('sha256')
.update(pwd)
.digest('hex')

MongoClient.connect(
  'mongodb://localhost:27017/aspire-tm',
  (errorConnection, db) => {
    assert.equal(null, errorConnection)
    console.log('Connected successfully to MongoDB server')

    const col = db.collection('Users')
    col.findOneAndUpdate(
      { eMail: 'admin@no.mail' },
      { $set: { password: pass } },
      (errorFindAdmin, resAdminFound) => {
        if (resAdminFound.value == null) {
          console.log('Default user is not found, trying to create...')
          col.insertOne({
            firstName: 'Aspire',
            lastName: 'Administrator',
            manager: {
              id: 0,
              fullName: 'None',
            },
            eMail: login,
            role: 'Admin',
            password: pass,
          }, (errorCreateAdmin, createdAdmin) => {
            if (createdAdmin.insertedCount !== 1) {
              console.log("Couldn't create default user. Sorry...")
            } else {
              console.log(`Created default user ${login} with pass ${pwd}.`)
              console.log("Don't forget to change!")
            }
          })
        } else {
          console.log(`Password for default user ${login} reset to ${pwd}`)
        }
        db.close()
      }
    )
  }
)
