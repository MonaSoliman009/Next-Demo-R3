"use client"

import { useEffect, useState } from "react"

export default function page() {

    const [todos, setTodos] = useState([])

    console.log(process.env.NEXT_PUBLIC_APIURL);
     console.log(process.env.DB_URL);
     

    useEffect(() => {
        fetch("https://686bfb3914219674dcc6d62a.mockapi.io/todo").then((res) => {
            return res.json()
        }).then((data) => {
            setTodos(data)
        })
    }, [])
    return (
        <>
            {todos.map((todo) => <h3 key={todo.id}>{todo.name}</h3>)}
        </>
    )
}
