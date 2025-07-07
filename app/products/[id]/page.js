
async function getSingleProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json()
    return data
}

async function getAllProduct() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    return data
}

export async function generateStaticParams() {
    const products = await getAllProduct()
    const ids = products.map((prd) => { return { id: prd.id.toString() } })//
    return ids //[{id:"1",{id:"2"}},..............]
}

export default async function page({ params }) {
    const { id } = await params

    const product = await getSingleProduct(id)


    return (
        <div>
            <h2>{product.title}</h2>
        </div>
    )
}
