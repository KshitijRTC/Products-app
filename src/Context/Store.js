import React, { useState, useEffect } from 'react'
import { MyContext } from './MyContext'
import axios from 'axios'
function Store({ children }) {
  const [products, setProducts] = useState([])
  const [originalProducts, setOriginalProducts] = useState([])


  useEffect(() => {
    const getData = async () => await axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((res) => {
        setProducts(res.data)
        setOriginalProducts(res.data)
      })
      .catch((error) => {
        console.log(error)
        })
      getData()
  }, []);
  
  return (
    <MyContext.Provider value={[products, setProducts, originalProducts]}>
      {children}
    </MyContext.Provider>
  )
}
export default Store