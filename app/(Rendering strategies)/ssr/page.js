async function getData() {
    const res = await fetch("https://686bfb3914219674dcc6d62a.mockapi.io/todo", {
        cache: "no-store"//on demand
    })
    return res.json()
}

export default async function page() {

    const data = await getData()
    console.log(process.env.NEXT_PUBLIC_APIURL);

    return (
        <>
            {data.map((todo) => <h3 key={todo.id}>{todo.name}</h3>)}

        </>
    )
}
