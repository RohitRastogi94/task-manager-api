const express = require('express')
// to only run that file only require will work
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

// it should be above all app.use() //it is express middleware
// app.use((req, res, next) => {
//     if (req.method == 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

//Maintance express middleware 
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

//file uploads
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         // if (!file.originalname.endsWith('.pdf')) {
//         //    return cb(new Error('Please upload a PDF')) 
//         // }

//         if(!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word document')) 
//         }

//         cb(undefined, true)
//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From My Middleware')
// }
// app.post('/upload', errorMiddleware, (req, res) => {
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })


// to parse incoming json
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// app.listen(port, () => {
//     console.log('Server is up on port '+port);
// })

module.exports = app

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)
// }

// myFunction()

// const jwt = require('jsonwebtoken')

// const jwtFunction = async () => {
//     const token =  jwt.sign({ _id: 'abc123' }, 'jwtsecretvalue', { expiresIn: '7 days' })
//     console.log(token);

//     const data = jwt.verify(token, 'jwtsecretvalue')
//     console.log(data);
    
// }

// jwtFunction()

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function () {
//     console.log(this);
//     // return this
//     return {}
    
// }

// console.log(JSON.stringify(pet));

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5fd50a4fbbebd8058aa68292')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner);

//     const user = await User.findById('5fd5096fefeaaa0585bffb95')
//     await user.populate('tasks').execPopulate()
    
//     console.log(user.tasks);
    

// }

// main()