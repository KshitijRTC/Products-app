import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 0;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 30px;
`

export const ProductsContainer = styled.div`
    display: flex;
    border-radius: 4px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    font-family: 'Agdasima', sans-serif;
`

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid rgb(238,238,238);
    border-radius: 4px;
    padding: 20px
`

export const Form = styled.form`
    display: flex;
    font-size: 18px;
    gap: 20px;
    flex-direction: column;
`

export const CheckboxContainer = styled.div`
    display: flex;
    gap: 20px; 
`