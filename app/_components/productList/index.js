import Image from "next/image"
import Link from "next/link"

export default async function ProductList() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return (
        <>
            <div className="grid grid-cols-4 gap-3">

                {data.map((prd) =>

                    <div key={prd.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <Image className="rounded-t-lg" src={prd.image} alt="" width={300} height={300}/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prd.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">{prd.description}</p>
                            <Link href={`/products/${prd.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Details
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
