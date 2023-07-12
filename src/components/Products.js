import React, { useEffect, useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MyContext } from '../Context/MyContext';
import { CircularProgress } from '@mui/material';
import { ProductsContainer } from '../Styled/Styles';

function Products() {
    const [products , setProducts, reset] = useContext(MyContext);
    
  return (
    <ProductsContainer>
        {products?.map((product) => {
            return <Card key={product.id} sx={{ width: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${product.images[0]}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography>${product.price}</Typography>
        <Button variant='contained' sx={{padding: '2px'}}>{product?.category?.name}</Button>
      </CardContent>
    </Card>
        })}
    </ProductsContainer>
  )
}

export default Products