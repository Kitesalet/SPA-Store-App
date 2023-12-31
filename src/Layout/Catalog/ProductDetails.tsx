import { Badge, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Product } from '../../Components/Models/Product';

function ProductDetails() {

    const { id = '' } = useParams<{ id: string }>();

    const [product,setProduct] = useState<Product | null>(null)
    const [loading,setLoading] = useState(true)

    useEffect(() =>{
        axios.get(`http://localhost:5095/api/Products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.log(error.response))
        .finally(() => setLoading(false))
    },[id])

    if(loading){
        return(
            <h3>Loading...</h3>
        )
    }

    if(!product){
        return(
            <h3>Product not found</h3>
        )
    }

  return (
    <>
    
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={product.pictureUrl} alt="" style={{width:"100%"}} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>{product.name}</Typography>
                <Divider sx={{mb:2}}/>
                <Typography variant='h4' color="secondary">{(product.price / 100).toFixed(2)}$</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        
        </Grid>

    </>
  )
}

export default ProductDetails       