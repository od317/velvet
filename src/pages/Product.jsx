import React from 'react'
import {useParams,useSearchParams} from 'react-router-dom'
import ProductLayout from '../components/Product/ProductLayout'
import {m} from '../Data/items'
import {useEffect} from 'react'
function Product() {
    const {id} = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const product = m[id]
    useEffect(() => {
      window.scrollTo(0, 0)
       }, [id])
    return (
       <ProductLayout color={searchParams.get('color') ? searchParams.get('color') : 0 } setSearchParams={setSearchParams} product={product}></ProductLayout>
      )
}

export default Product
