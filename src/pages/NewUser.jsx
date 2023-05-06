import React, { useState } from 'react'
import styled from 'styled-components'
import Api from '../api/api'

const Container = styled.div`
    flex: 4;
`

const NewUserTitle= styled.div`
 
`

const NewUserForm = styled.form`
       /* display: flex; */
  flex-wrap: wrap;
`

const NewUserField = styled.div.attrs({className:'p-3 shadow-md align-center'})`
    width: 400px;
  display: flex;
  /* flex-direction: column; */
  margin-top: 10px;
  margin-right: 20px;
`

const NewUserFieldLabel = styled.label.attrs({className:'px-3 align-center rounded'})`
    margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  /* color: rgb(151, 150, 150); */
`

const NewUserFieldInput = styled.input.attrs({className:'px-3 align-center rounded'})`
    margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  /* color: rgb(151, 150, 150); */
`

const NewUserGender = styled.div`

`

const NewUserGenderInput = styled.input`
    margin-top: 15px;
`

const NewUserGenderLabel = styled.label`
    margin: 10px;
    font-size: 18px;
    /* color: #555; */
`

const NewUserSelect = styled.select`
    height: 40px;
    border-radius: 5px;
`

const SubmitButton = styled.button`
    width: 200px;
    border: none;
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;

`

const NewUser = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (v) => {
    v.preventDefault()
    const payload = {email, password}

    try {
      await Api.user.addUser(payload);
      // toast.success('user added');
    } catch (e) {
      console.log('error---', e);
      // toast.error('User creation error');
    }

   
  }
  return (
    <Container>
    <NewUserTitle className='py-5 px-3'>New User</NewUserTitle>
    <NewUserForm onSubmit={handleSubmit} className='w-100 h-100 flex flex-col justify-center items-center'>
      <NewUserField>
        <NewUserFieldLabel>Email</NewUserFieldLabel>
        <NewUserFieldInput type="email" placeholder="abc@gmail.com"  onChange={(e) => setEmail(e.target.value)}/>
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Password</NewUserFieldLabel>
        <NewUserFieldInput type="password" placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Admin Privilages</NewUserFieldLabel>
        <NewUserSelect name="active" id="active">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </NewUserSelect>
      </NewUserField>
      <SubmitButton>Create</SubmitButton>
    </NewUserForm>
  </Container>
  )
}

export default NewUser