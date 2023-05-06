import React, { useEffect } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../dummyDate";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components'
import Modal from '../components/Modal';
import Api from '../api/api';

const Container = styled.div`
     flex: 4;
`

const UserListUser = styled.div`
    display: flex;
  align-items: center;
`

const UserListImg = styled.img`
     width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`

const UserListEdit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`

const UserListDelete = {
    color: 'red',
    cursor: 'pointer'
}

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

const UserList = () => {
    const [data, setData] = useState(userRows);
    const [openModal, setOpenModal] = useState(false);

    const getData = async () => {
      try {
        const res = await Api.user.getUsers();
        console.log(res);
        // setData(res)
        // toast.success('user added');
      } catch (e) {
        console.log('error---', e);
        // toast.error('User creation error');
      }
    }
    
    useEffect (() => {
      getData()
    },[])

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
    
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "user",
        headerName: "User",
        width: 200,
        renderCell: (params) => {
          return (
            <UserListUser>
              <UserListImg src={params.row.avatar} alt="" />
              {params.row.username}
            </UserListUser>
          );
        },
      },
      { field: "email", headerName: "Email", width: 200 },
      {
        field: "status",
        headerName: "Status",
        width: 120,
      },
      {
        field: "transaction",
        headerName: "Transaction Volume",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/user/" + params.row.id}>
                <UserListEdit>Edit</UserListEdit>
              </Link>
              <DeleteOutline
                style={UserListDelete}
                onClick={() => handleDelete(params.row.id)}
              />
            </>
          );
        },
      },
    ];
  
    return (
      <Container>
        <UserTitleContainer>
      <Link to="/newUser">
        <UserAddButton>Create</UserAddButton>
      </Link>
    </UserTitleContainer>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </Container>
    );
}

export default UserList