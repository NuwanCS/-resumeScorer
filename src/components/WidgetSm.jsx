import React from 'react'
import styled from 'styled-components'
import {Visibility } from "@mui/icons-material";


const Container = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
`

const WidgetSmTitle = styled.div`
     font-size: 22px;
    font-weight: 600;
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

const NewUserFieldInput = styled.textarea.attrs({className:'px-3 align-center rounded'})`
    margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  /* color: rgb(151, 150, 150); */
`

const styling = {
    widgetSmImg : {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        objectFit: 'cover',
      },
    widgetSmIcon: {
        fontSize: '16px',
        marginRight: '5px'
    }
    }
const WidgetSm = () => {
  return (
    <Container>
      <WidgetSmTitle>Enter Job Description</WidgetSmTitle>
      <WidgetSmList>
      <NewUserField>
        <NewUserFieldLabel>Education</NewUserFieldLabel>
        <NewUserFieldInput type="textarea" placeholder="Enter Education" />
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Skills</NewUserFieldLabel>
        <NewUserFieldInput type="text" placeholder="Enter Skills" />
      </NewUserField>
      <NewUserField>
        <NewUserFieldLabel>Work Experience</NewUserFieldLabel>
        <NewUserFieldInput type="text" placeholder="Enter Experience" />
      </NewUserField>
      </WidgetSmList>
    </Container>
  )
}

export default WidgetSm