import React, { Profiler, useContext, useState } from "react";
import { MyContext } from "../Context/MyContext";
import { Container, borderRadius, width } from "@mui/system";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
} from "@mui/material";
import { CheckboxContainer, FiltersContainer, Form } from "../Styled/Styles";

function Filters() {
  const [products, setProducts, originalProducts] = useContext(MyContext);
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState({
    startingValue: 0,
  });
  const [filterCategories, setFilterCategories] = useState([]);

  const onFilter = (category) => {
    setDisabled(false);
    filterCategories.push(category);
    const filteredProducts = [];
    originalProducts.filter((product) => {
      return filterCategories.length > 0
        ? filterCategories.filter((filterCategory) => {
            if (product.category.name === filterCategory) {
              filteredProducts.push(product);
            }
          })
        : console.error();
    });
    setProducts(filteredProducts);
  };

  const reset = () => {
    setProducts(originalProducts);
    var uncheck = document.getElementsByTagName("input");
    for (let i = 0; i < uncheck.length; i++) {
      uncheck[i].checked = false;
    }
    setFilterCategories([])
  };

  // const priceFilter = () => {
  //   const pricedProducts = products.filter(product => {
  //     if(product.price >= minPrice && product.price <= maxPrice){
  //        return(product)
  //     }
  //   })
  //   setProducts(pricedProducts)
  // }

  const handleChange = (price) => {
    setValue({ ...value, endingValue: price });
    const pricedFilter = [];
    originalProducts.filter((product) => {
      if (
        product.price >= value.startingValue &&
        product.price <= value.endingValue
      ) {
        pricedFilter.push(product);
      }
    });
    setProducts(pricedFilter);
  };

  return (
    <FiltersContainer>
      <Form>
          <CheckboxContainer
            onClick={(e) => onFilter(e.target.value)}
          >
            <input
              type="checkbox"
              id="Clothes"
              name="Clothes"
              value="Clothes"
            />
            <label for="Clothes">Clothes</label>
          </CheckboxContainer>
          <CheckboxContainer
            style={{ display: "flex", gap: "20px" }}
            onClick={(e) => onFilter(e.target.value)}
          >
            <input
              type="checkbox"
              id="Electronics"
              name="Electronics"
              value="Electronics"
            />
            <label for="Electronics">Electronics</label>
          </CheckboxContainer>
          <CheckboxContainer
            style={{ display: "flex", gap: "20px" }}
            onClick={(e) => onFilter(e.target.value)}
          >
            <input
              type="checkbox"
              id="Furniture"
              name="Furniture"
              value="Furniture"
            />
            <label for="Furniture">Furniture</label>
          </CheckboxContainer>
          <CheckboxContainer
            style={{ display: "flex", gap: "20px" }}
            onClick={(e) => onFilter(e.target.value)}
          >
            <input type="checkbox" id="Shoes" name="Shoes" value="Shoes" />
            <label for="Shoes">Shoes</label>
          </CheckboxContainer>
          <CheckboxContainer
            style={{ display: "flex", gap: "20px" }}
            onClick={(e) => onFilter(e.target.value)}
          >
            <input type="checkbox" id="nuevo" name="nuevo" value="nuevo" />
            <label for="nuevo">Nuevo</label>
          </CheckboxContainer>
          <CheckboxContainer
            style={{ display: "flex", gap: "20px" }}
            onClick={(e) => onFilter(e.target.value)}
          >
            <input type="checkbox" id="Others" name="Others" value="Others" />
            <label for="Others">Others</label>
          </CheckboxContainer>
          <Button sx={{width: 50}} variant="contained" disabled={disabled} onClick={reset}>
          RESET
          </Button>
        </Form>



        {/* Price Filter */}

        
      <p>
        Price Range: ${value.startingValue} to $
        {value.endingValue ? value.endingValue : value.startingValue}
      </p>
      <Slider
        sx={{width: 200}}
        min={value.startingValue}
        max={1000}
        onChange={(e) => handleChange(e.target.value)}
        valueLabelDisplay="auto"
      />
      <p>
        <strong>
          {products.length} products found out of {originalProducts.length}
        </strong>
      </p>

      {filterCategories.length > 0 && <p>Filters applied:</p>}

      {filterCategories.length > 0 && filterCategories.map(filter => {
        return <Button disabled variant="outlined" sx={{width: 120, borderRadius: 30}}>{filter}</Button>
      })}
    </FiltersContainer>
  );
}

export default Filters;
