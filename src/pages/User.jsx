import React from 'react'
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@mui/icons-material";
  import { Link } from "react-router-dom";
  import styled from 'styled-components';

  const Container = styled.div`
    flex: 4;
  padding: 20px;

  `

const UserTitleContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
`

const UserTitle = styled.h1`
  
`

const UserAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`

const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`

const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`

const UserShowImg = styled.img`
   width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

const UserShowUsername = styled.span`
  font-weight: 600;
`

const UserShowUserTitle = styled.span`
  font-weight: 300;
`
const UserShowBottom = styled.button`
   margin-top: 20px;
`

const UserShowTitle = styled.span`
   font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`

const UserShowInfo = styled.div`
  display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
`

const UserShowInfoTitle = styled.span`
   margin-left: 10px;
`

const UserUpdate = styled.div`
    flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`

const UserUpdateTitle = styled.span`
   font-size: 24px;
    font-weight: 600;
`

const UserUpdateForm = styled.form`
     display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const UserUpdateLeft = styled.div`
  
`

const UserUpdateItem = styled.div`
 display: flex;
    flex-direction: column;
    margin-top: 10px;
`

const UserUpdateItemLabel = styled.label`
  margin-bottom: 5px;
    font-size: 14px;
`

const UserUpdateInput = styled.input`
   border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
`

const UserUpdateRight = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const UserUpdateUpload = styled.div`
   display: flex;
    align-items: center;
`

const UserUpdateImg = styled.img`
  width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`

const UserUpdateButton = styled.button`
   border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
`
const styling = {
  userShowIcon:{
    fontSize: '16px'
  },
  userUpdateIcon:{
    cursor: 'pointer'
  }
}
const User = () => {
  return (
    <Container>
    <UserTitleContainer>
      <UserTitle>Edit User</UserTitle>
      <Link to="/newUser">
        <UserAddButton>Create</UserAddButton>
      </Link>
    </UserTitleContainer>
    <UserContainer>
      <UserShow>
        <UserShowTop>
          <UserShowTopTitle>
            <UserShowUsername>Anna Becker</UserShowUsername>
            <UserShowUserTitle>Software Engineer</UserShowUserTitle>
          </UserShowTopTitle>
        </UserShowTop>
        <UserShowBottom>
          <UserShowTitle>Account Details</UserShowTitle>
          <UserShowInfo>
            <PermIdentity style={styling.userShowIcon} />
            <UserShowInfoTitle>annabeck99</UserShowInfoTitle>
          </UserShowInfo>
          <UserShowInfo>
            <CalendarToday style={styling.userShowIcon}  />
            <UserShowInfoTitle>10.12.1999</UserShowInfoTitle>
          </UserShowInfo>
          <UserShowTitle>Contact Details</UserShowTitle>
          <UserShowInfo>
            <PhoneAndroid style={styling.userShowIcon}  />
            <UserShowInfoTitle>+1 123 456 67</UserShowInfoTitle>
          </UserShowInfo>
          <UserShowInfo>
            <MailOutline style={styling.userShowIcon}  />
            <UserShowInfoTitle>annabeck99@gmail.com</UserShowInfoTitle>
          </UserShowInfo>
          <UserShowInfo>
            <LocationSearching style={styling.userShowIcon}  />
            <UserShowInfoTitle>New York | USA</UserShowInfoTitle>
          </UserShowInfo>
        </UserShowBottom>
      </UserShow>
      <UserUpdate>
        <UserUpdateTitle>Edit</UserUpdateTitle>
        <UserUpdateForm>
          <UserUpdateLeft>
            <UserUpdateItem>
              <UserUpdateItemLabel>Username</UserUpdateItemLabel>
              <UserUpdateInput
                type="text"
                placeholder="annabeck99"
              />
            </UserUpdateItem>
            <UserUpdateItem>
              <UserUpdateItemLabel>Full Name</UserUpdateItemLabel>
              <UserUpdateInput
                type="text"
                placeholder="Anna Becker"
              />
            </UserUpdateItem>
            <UserUpdateItem>
              <UserUpdateItemLabel>Email</UserUpdateItemLabel>
              <UserUpdateInput
                type="text"
                placeholder="annabeck99@gmail.com"
              />
            </UserUpdateItem>
            <UserUpdateItem>
              <UserUpdateItemLabel>Phone</UserUpdateItemLabel>
              <UserUpdateInput
                type="text"
                placeholder="+1 123 456 67"
              />
            </UserUpdateItem>
            <UserUpdateItem>
              <UserUpdateItemLabel>Address</UserUpdateItemLabel>
              <UserUpdateInput
                type="text"
                placeholder="New York | USA"
              />
            </UserUpdateItem>
          </UserUpdateLeft>
          <UserUpdateRight>
            <UserUpdateUpload>
              <UserUpdateImg
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="file">
                <Publish style={styling.userUpdateIcon} />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </UserUpdateUpload>
            
          </UserUpdateRight>
        </UserUpdateForm>
        <UserUpdateButton>Update</UserUpdateButton>
      </UserUpdate>
    </UserContainer>
  </Container>
  )
}

export default User