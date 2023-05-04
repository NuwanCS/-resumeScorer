import React from 'react'
import { Link } from "react-router-dom";
// import Chart from "../../components/chart/Chart"
// import {ResumeData} from "../../dummyData"
import { Publish } from "@mui/icons-material";
import styled from 'styled-components'


const Container = styled.div`
    flex: 4;
  padding: 20px;
`

const TitleContainer = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h1`
    
`

const ResumeAdd = styled.button`
    width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`

const TopContainer = styled.div`
    display: flex;
`

const TopLeftContainer = styled.div`
    flex: 1;

`

const TopRightContainer = styled.div`
    flex: 1;
    padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const TopInfoContainer = styled.div`
    display: flex;
  align-items: center;
`

const TopInfoImg = styled.img`
    width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`

const ResumeName = styled.span`
    font-weight: 600;
`

const ResumeInfoBottom = styled.div`
   margin-top: 10px; 
`

const ResumeInfoItem = styled.div`
    width: 150px;
  display: flex;
  justify-content: space-between;
`

const ResumeInfoKey = styled.span`
    
`

const ResumeInfoValue = styled.span`
    font-weight: 300;
`

const ResumeBottom = styled.div`
      padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    

`

const ResumeForm = styled.form`
    display: flex;
  justify-content: space-between; 
`

const ResumeFormLeft = styled.div`
    display: flex;
  flex-direction: column;
`

const ResumeFormLeftLabel = styled.label`
    margin-bottom: 10px;
  color: gray;
`

const ResumeFormLeftInput = styled.input`
    margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`

const ResumeFormLeftSelect = styled.select`
    margin-bottom: 10px;
`

const ResumeFormRight = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ResumeUpload = styled.div`
    
    display: flex;
  align-items: center;
`

const ResumeUploadImg = styled.img`
    width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`

const ResumeButton = styled.button`
    border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color:white;
  font-weight: 600;
  cursor: pointer;
`
const Resume = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Resume</Title>
        <Link to="/newResume">
          <ResumeAdd>Create</ResumeAdd>
        </Link>
      </TitleContainer>
      <TopContainer>
          <TopLeftContainer>
              {/* <Chart data={ResumeData} dataKey="Sales" title="Sales Performance"/> */}
          </TopLeftContainer>
          <TopRightContainer>
              <TopInfoContainer>
                  <TopInfoImg src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  />
                  <ResumeName>Apple Airpods</ResumeName>
              </TopInfoContainer>
              <ResumeInfoBottom>
                  <ResumeInfoItem>
                      <ResumeInfoKey>id:</ResumeInfoKey>
                      <ResumeInfoValue>123</ResumeInfoValue>
                  </ResumeInfoItem>
                  <ResumeInfoItem>
                      <ResumeInfoKey>sales:</ResumeInfoKey>
                      <ResumeInfoValue>5123</ResumeInfoValue>
                  </ResumeInfoItem>
                  <ResumeInfoItem>
                      <ResumeInfoKey>active:</ResumeInfoKey>
                      <ResumeInfoValue>yes</ResumeInfoValue>
                  </ResumeInfoItem>
                  <ResumeInfoItem>
                      <ResumeInfoKey>in stock:</ResumeInfoKey>
                      <ResumeInfoValue>no</ResumeInfoValue>
                  </ResumeInfoItem>
              </ResumeInfoBottom>
          </TopRightContainer>
      </TopContainer>
      <ResumeBottom>
          <ResumeForm>
              <ResumeFormLeft>
                  <ResumeFormLeftLabel>Resume Name</ResumeFormLeftLabel>
                  <ResumeFormLeftInput type="text" placeholder="Apple AirPod" />
                  <ResumeFormLeftLabel>In Stock</ResumeFormLeftLabel>
                  <ResumeFormLeftSelect name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </ResumeFormLeftSelect>
                  <ResumeFormLeftLabel>Active</ResumeFormLeftLabel>
                  <ResumeFormLeftSelect name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </ResumeFormLeftSelect>
              </ResumeFormLeft>
              <ResumeFormRight>
                  <ResumeUpload>
                      <ResumeUploadImg src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </ResumeUpload>
                  <ResumeButton>Update</ResumeButton>
              </ResumeFormRight>
          </ResumeForm>
      </ResumeBottom>
    </Container>
  );
}

export default Resume