import { dbConnection } from "@/app/_lib/dbConnection";
import todosModel from "@/app/_lib/schema/todos";

dbConnection()

export async function GET() {

    try {
        const todos = await todosModel.find()
        return new Response(JSON.stringify(todos), { status: 200 })
    } catch (err) {
        console.log(err);

        return new Response(err.message, { status: 500 })
    }

}



// export async function POST(req) {

//     try{
//    let todo = await req.json()
//    //zod 
//     let newTodo = await todosModel.create(todo)
//     return new Response(JSON.stringify({data:newTodo}),{status:201})
//     }catch(err){
//        return new Response(err.mcxessage,{status:500})        
//     }
// }


// export function DELETE(){

// }