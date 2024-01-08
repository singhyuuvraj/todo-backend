const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/todo', async(req, res) =>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:"You send the wrong inputs"
        })
        return;
    }
    //put in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        msg: "Todo Created"
    })
})

app.get('/todos', async (req, res) =>{
    const todos = await todo.find({});

    res.json({
       todos,
    })

})

app.put('/completed', async (req, res) =>{
 const updatePayload = req.body;
 const parsedPayload = updateTodo.safeParse(updatePayload);
 if(!parsedPayload.success) {
    res.status(411).json({
    msg:"You send the wrong inputs"
   })
   return;
}
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true,
    })
    res.json({
        msg: " todo marked as completed"
    })
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})