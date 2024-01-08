const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://singhyuvraj:qwerty1234@cluster0.8wicnur.mongodb.net/');

const todoSchema = mongoose.Schema(
    {
        title: String,
        description: String,
        completed: Boolean,
    }
);

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo
}
// const user = mongoose.model('User',
//     {
//         type: string,
//         description: string,
//         completed: boolean,
//     }
// );