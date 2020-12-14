const mongoose = require('mongoose')
const validator = require('validator')

// url/databasename
const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }

    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// const me = new User({
//    name: '  Rohit   ',
//    email: 'MYEMAIL@G.com  ',
//    password: 'phone098!'
// })

// me.save().then(() => {
//     console.log(me);
// }).catch(error => {
//     console.log('error', error);
// })

//mongoose model take collection name and make it lowercase and pluralize it
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: '  Buy a new bike',
    completed: true,
    trim: true
})

task.save().then(() => {
    console.log(task);
}).catch(error => {
    console.log('error', error);
})

