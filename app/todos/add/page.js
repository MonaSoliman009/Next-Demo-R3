// "use client"
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'


// export default function page() {


//     const router = useRouter()

//     const [todo, setTodo] = useState({
//         title: "",
//         status: ""
//     })


//     const handleChange = (e) => {

//         setTodo({ ...todo, [e.target.name]: e.target.value })//{status:"",title:"mona"}
//     }

//     const handleSubmit = async (evt) => {
//         evt.preventDefault()
//         //validation

//         try {
//             let res = await fetch("http://localhost:3000/api/todos", {
//                 method: "POST", 
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(todo)

//             })

//             router.push('/todos')

//         }catch(err){

//             console.log(err);

//         }


//     }

//     return (
//         <>

//             <form className="max-w-sm mx-auto" onSubmit={(e) => { handleSubmit(e) }} >
//                 <div className="mb-5">
//                     <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
//                     <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="Please Enter Todo Title" required
//                         value={todo.title}
//                         onChange={(e) => { handleChange(e) }}
//                         name="title"
//                     />
//                 </div>
//                 <div className="mb-5">
//                     <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
//                     <input type="text" id="status"
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
//                         value={todo.status}
//                         onChange={(e) => { handleChange(e) }}
//                         name="status"
//                     />
//                 </div>

//                 <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//             </form>

//         </>
//     )
// }

// ------------------------------------------------------------------------------------
import { saveTodo } from "@/app/_lib/actions";

export default function page() {

    return (
        <>
            <form className="max-w-sm mx-auto" action={saveTodo}>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Please Enter Todo Title" required
                        name="title"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                    <input type="text" id="status"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                        name="status"
                    />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </>
    )
}
