import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 4;
`

const NewUserTitle= styled.div`
 
`

const NewUserForm = styled.form`
       display: flex;
  flex-wrap: wrap;
`

const NewUserField = styled.div`
    width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`

const NewUserFieldLabel = styled.label`
    margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`

const NewUserFieldInput = styled.input`
    margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`

const NewUserGender = styled.div`

`

const NewUserGenderInput = styled.input`
    margin-top: 15px;
`

const NewUserGenderLabel = styled.label`
    margin: 10px;
    font-size: 18px;
    color: #555;
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
  return (
    <Container>
    <NewUserTitle>New User</NewUserTitle>
    <NewUserForm>
      <NewUserField>
        <NewUserFieldLabel>Username</NewUserFieldLabel>
        <NewUserFieldInput type="text" placeholder="name" />
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Full Name</NewUserFieldLabel>
        <NewUserFieldInput type="text" placeholder="first last" />
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Email</NewUserFieldLabel>
        <NewUserFieldInput type="email" placeholder="abc@gmail.com" />
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Password</NewUserFieldLabel>
        <NewUserFieldInput type="password" placeholder="password" />
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Phone</NewUserFieldLabel>
        <NewUserFieldInput type="text" placeholder="+1 0123 456 78" />
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Address</NewUserFieldLabel>
        <NewUserFieldInput type="text" placeholder="California | USA" />
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Gender</NewUserFieldLabel>
        <NewUserGender>
          <NewUserGenderInput type="radio" name="gender" id="male" value="male" />
          <NewUserGenderLabel htmlFor ="male">Male</NewUserGenderLabel>
          <NewUserGenderInput type="radio" name="gender" id="female" value="female" />
          <NewUserGenderLabel htmlFor ="female">Female</NewUserGenderLabel>
          <NewUserGenderInput type="radio" name="gender" id="other" value="other" />
          <NewUserGenderLabel htmlFor ="other">Other</NewUserGenderLabel>
        </NewUserGender>
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Active</NewUserFieldLabel>
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