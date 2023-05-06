import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

const Container = styled.div`
     flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`

const WidgetLgTitle = styled.h3`
    font-size: 22px;
  font-weight: 600;
`

const WidgetLgTable = styled.table`
    width: 100%;
  border-spacing: 20px;
`

const WidgetLgTr = styled.tr`
    
`

const WidgetLgTh = styled.th`
    text-align: left;
`

const WidgetLgUser = styled.td`
    display: flex;
  align-items: center;
  font-weight: 600;
`

const WidgetLgImg = styled.img`
    width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`

const WidgetSmList = styled.form`
    margin: 0;
    padding: 0;
    list-style: none;

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

const styling = {
    widgetLgImg : {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '10px',
      }
    }
const WidgetLg = () => {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };


  return (
    <Container>
      <WidgetLgTitle>Extracted Features</WidgetLgTitle>
      <WidgetSmList>
      <NewUserField>
        <NewUserFieldLabel>Name</NewUserFieldLabel>
        <NewUserFieldInput type="text" placeholder="abc@gmail.com" />
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Email</NewUserFieldLabel>
        <NewUserFieldInput type="text" placeholder="abc@gmail.com" />
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Education</NewUserFieldLabel>
        <NewUserFieldInput type="text" placeholder="abc@gmail.com" />
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Skills</NewUserFieldLabel>
        <NewUserFieldInput type="text" placeholder="abc@gmail.com" />
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Work Experience</NewUserFieldLabel>
        <NewUserFieldInput type="text" placeholder="abc@gmail.com" />
      </NewUserField>
      </WidgetSmList>
    </Container>
  )
}

export default WidgetLg