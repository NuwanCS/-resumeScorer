import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import NewUser from '../pages/NewUser';

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


const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <NewUser/>
      </div>
    </div>
  );
};

export default Modal;