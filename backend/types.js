const z = require('zod');
/*
{
    type: string,
    description: string,
}
{
    id: string,
}
*/ 
// trying to write a zod schema for this
const createTodo = z.object({
 title: z.string(),
 description: z.string()
});
 
const updateTodo = z.object({
    id : z.string(),
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}