import { auth } from './auth.js'
import { logout } from './logout.js'
import { users } from './users.js'
import { addUser } from './adduser.js'

const dbapi = {
  auth: auth,
  logout: logout,
  users: users,
  addUser: addUser
}

export { dbapi }
