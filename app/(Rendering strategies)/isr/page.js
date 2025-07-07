async function getData() {
    const res = await fetch("https://686bfb3914219674dcc6d62a.mockapi.io/todo", {
        next:{
            revalidate:10    //every n seconds
        }
    })
    return res.json()
}

export default async function page() {

    const data = await getData()

    return (
        <>
            {data.map((todo) => <h3 key={todo.id}>{todo.name}</h3>)}

        </>
    )
}
