import React from 'react'
import {useParams,useSearchParams} from 'react-router-dom'
import ProductLayout from '../components/Product/ProductLayout'
import {m} from '../Data/items'
import {useEffect} from 'react'
import {Helmet} from "react-helmet"
function Product() {
    const {id} = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const product = m[id]
    let color = searchParams.get('color') ? searchParams.get('color') : 0 
    if(color>= product.img.length){
       color = 0
    }
    useEffect(() => {
      window.scrollTo(0, 0)
       }, [id])
    return (
       <>
      <Helmet>
            <title>NordeStrom Product</title>
      </Helmet>
       <ProductLayout color={color} setSearchParams={setSearchParams} product={product}></ProductLayout>
       </>
      )
}

export default Product
