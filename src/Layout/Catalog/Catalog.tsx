import {useEffect, useState} from 'react'
import { Button } from '@mui/material'
import { Product } from '../../Components/Models/Product'
import ProductList from './ProductList'
import axios from 'axios'


function Catalog() {

  const [products,setProducts] = useState<Product[]>([])

  

  const getProducts = () =>{
    axios.get('http://localhost:5095/api/Products')
          .then((response) => setProducts(response.data))
          .catch((error) => console.log(error.response))
  }

  useEffect(() =>{
    getProducts()
  },[])

  return (
    <>

        <ProductList products={products}></ProductList>


    </>
  )
}

export default Catalog 

