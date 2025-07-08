"use server"
import { redirect } from "next/navigation"
import todosModel from "./schema/todos"

export async function saveTodo(formData) {
    let title = formData.get("title")
    let status = formData.get("status")
    let newTodo = await todosModel.create({ title, status })
     redirect('/todos')
}