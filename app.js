const fs = require('fs')
const os = require('os')
const _ = require('lodash')

const notes = require('./notes')

const user = os.userInfo()

// console.log(user)

// fs.appendFileSync('greetings.txt', `-Hello ${user.username}\r\n`)

console.log(notes.add(2,3))