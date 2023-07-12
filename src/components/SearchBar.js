import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { MyContext } from '../Context/MyContext';
import { FormControl, Input } from '@mui/material';
import { Container } from '../Styled/Styles';

function SearchBar() {
    const [search, setSearch] = useState("");
    const [products, setProducts, originalProducts] = useContext(MyContext)

    const handleChange = (e) => {
      setSearch(e.target.value)
      if(search.length > 1){
        const searchedProducts =  originalProducts.filter(product => {
          if(product.title.match(new RegExp(e.target.value, "i"))){
            return product
          }
        });
        setProducts(searchedProducts)
      }
    }
    const onSearch = (title) => {
       const filteredProducts =  products.filter(product => {
          if(product.title.match(new RegExp(title, "i"))){
            return product
          }
        });
        console.log(filteredProducts)
        setProducts(filteredProducts)
        setSearch("");
    }
  return (
    <>
        <Container onSubmit={(e) => {e.preventDefault()}}>
            <Input autoFocus placeholder='Search your product' value={search} onChange={handleChange} />
            <SearchIcon onClick={() => onSearch(search)} style={{fontSize: '24px'}} />
        </Container>
    </>
  )
}

export default SearchBar