import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Product } from '../../Components/Models/Product'
import { Link } from 'react-router-dom'

interface Props{
    product : Product
}

export default function ProductCard(props : Props) {
  return (
    <>
       
       <Card key={props.product.id} >
        <CardHeader 
        avatar={
        <Avatar sx={{
            backgroundColor:"primary.main"
        }}>

        {props.product.name.charAt(0).toUpperCase()}
        </Avatar>}
        title={props.product.name}
        titleTypographyProps={{
            sx: {fontWeight:"bold", color:"secondary.main"}
        }}
        />

      <CardMedia
        sx={{ height: 140 , backgroundSize:"contain", backgroundColor:"grey.300"}}
        image={props.product.pictureUrl}
        title={props.product.name}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="secondary">
          {(props.product.price / 100).toFixed(2)} $
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.product.brand} / {props.product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar</Button>
        <Button component={Link} to={`${props.product.id}`} size="small">Ver</Button>
      </CardActions>
    </Card>

    </>
  )
}
