"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"

export default  function page() {
    //    const {id}= await params

    const { id } = useParams()


    const [product, setProduct] = useState({})
    const getProduct = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        console.log(data);
        setProduct(data)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div>
            <h2>{product.title}</h2>
        </div>
    )
}
