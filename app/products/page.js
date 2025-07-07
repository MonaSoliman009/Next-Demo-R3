import  { Suspense } from 'react'
import ProductList from '../_components/productList';
import Loader from '../_components/Loader';


export const metadata = {
  title: "Products",
  description: "products page desc"
}

export default async function page() {



  return (
    <>

      <h1 className="font-bold text-center my-4">This is Our Products</h1>
      <p className=" text-center my-4">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        ipsum lorem ipsum lorem ipsum </p>

     

      <Suspense fallback={<Loader/>}>
        <ProductList/>
      </Suspense>

    </>
  )
}
