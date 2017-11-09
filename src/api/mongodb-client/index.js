import { auth } from './auth.js'
import { logout } from './logout.js'
import { users } from './users.js'
import { addUser } from './adduser.js'
import { doers } from './doers.js'
import { createTask } from './addtask.js'
import { listTasks } from './tasks.js'

const dbapi = {
  auth: auth,
  logout: logout,
  newtask: createTask,
  tasks: listTasks,
  users: users,
  addUser: addUser,
  doers: doers,
}

export { dbapi }
