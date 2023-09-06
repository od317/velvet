import React from 'react'
import {useParams} from 'react-router-dom'
import ProductLayout from '../components/Product/ProductLayout'
import items from '../Data/items'
import {useEffect} from 'react'
function Product() {
    const {id} = useParams()
    const product = items.filter(i=>i.id === id)[0]
    useEffect(() => {
      window.scrollTo(0, 0)
       }, [])
    return (
       <ProductLayout product={product}></ProductLayout>
      )
}

export default Product
