import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
} from "@mui/material";
import { Product } from "../../Components/Models/Product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

function ProductList(props: Props) {
  return (
    <>
      <Grid container spacing={4}>
        {props.products.map((product: Product, index: number) => (
            <Grid item xs={3}>         
                 <ProductCard product={product} key={product.id}></ProductCard>
            </Grid>
        ))
        }
      </Grid>
    </>
  );
}

export default ProductList;
