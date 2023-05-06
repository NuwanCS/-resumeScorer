import React from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../dummyDate";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components'


const Container = styled.div`
    flex: 4;

`

const ResumeListItem = styled.div`
    display: flex;
    align-items: center;
`

const ResumeListImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

const ResumeListEdit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`

const styling = {
    ResumeListDelete:{
        color: 'red',
        cursor: 'pointer'
    }
}
const ResumeList = () => {
    const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns  = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <ResumeListItem>
            <ResumeListImg src={params.row.img} alt="" />
            {params.row.name}
          </ResumeListItem>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/resume/" + params.row.id}>
              <ResumeListEdit>Edit</ResumeListEdit>
            </Link>
          </>
        );
      },
    },
  ];

  return (
   <Container className='align-center justify-center rounded'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  )
}

export default ResumeList