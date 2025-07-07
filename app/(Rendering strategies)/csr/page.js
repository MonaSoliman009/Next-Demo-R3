"use client"

import { useEffect, useState } from "react"

export default function page() {

    const [todos, setTodos] = useState([])

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
