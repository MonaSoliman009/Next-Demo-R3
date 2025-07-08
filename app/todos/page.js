"use client"



import { useState, useEffect } from "react"

export default function page() {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_APIURL}/todos`).then((res) => res.json()).then((data) => {
            setTodos(data)
        }).catch((err) => {
            console.log(err);

        })
    }, [])



    return (
      <>
                  <div className="grid grid-cols-4 gap-3">
                {todos.map((todo) =>

                    <div key={todo._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{todo.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">{todo.status}</p>
                        </div>
                    </div>
                )}
            </div>
      </>
    )
}

// ---------------------------------------------------------------------
// import { GET } from "../api/todos/route"

// export default async function page() {
//     let res = await GET();
//     let todos = await res.json()
//     return (
//         <>
//             <div className="grid grid-cols-4 gap-3">
//                 {todos.map((todo) =>

//                     <div key={todo._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
//                         <div className="p-5">
//                             <a href="#">
//                                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{todo.title}</h5>
//                             </a>
//                             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">{todo.status}</p>
//                         </div>
//                     </div>
//                 )}
//             </div>

//         </>
//     )
// }
