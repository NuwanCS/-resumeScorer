import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
     flex: 4;
`

const AddProductTitle = styled.h1`

`

const AddProductForm = styled.form`
    margin-top: 10px;
`

const AddProductItem = styled.div`
     width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const AddProductItemLabel = styled.label`
     color: gray;
  font-weight: 600;
  margin-bottom: 10px;
`

const AddProductItemInput = styled.input`
     padding: 10px;
`

const AddProductButton  = styled.button`
     margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const NewProduct = () => {
  return (
    <Container>
      <AddProductTitle>New Product</AddProductTitle>
      <AddProductForm>
        <AddProductItem>
          <AddProductItemLabel>Image</AddProductItemLabel>
          <AddProductItemInput type="file" id="file" />
        </AddProductItem>
        <AddProductItem>
          <AddProductItemLabel>Name</AddProductItemLabel>
          <AddProductItemInput type="text" placeholder="Enter Item Name" />
        </AddProductItem>
        <AddProductItem>
          <AddProductItemLabel>Stock</AddProductItemLabel>
          <AddProductItemInput type="text" placeholder="Enter stock in numbers only" />
        </AddProductItem>
        <AddProductItem>
          <AddProductItemLabel>Active</AddProductItemLabel>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </AddProductItem>
        <AddProductButton>Create</AddProductButton>
      </AddProductForm>
    </Container>
  )
}

export default NewProduct