import React from 'react'
import styled from 'styled-components'
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import FeaturedInfo from '../components/FeaturedInfo';
import Chart from '../components/Chart';
import {userData} from '../dummyDate'
import WidgetSm from '../components/WidgetSm';
import WidgetLg from '../components/WidgetLg';
import FileUploader from '../components/FileUploader';

const Container = styled.div`
    flex: 4;
    width: '50%';
`

const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`


const Home = () => {
  return (
    <Container className='w-50 h-50'>
      <FeaturedInfo />
      {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
      <HomeWidgets>
        <div>

      <FileUploader className='px-2'/>
        
        </div>
        <WidgetLg className='px-2'/>
      </HomeWidgets>
    </Container>
  )
}

export default Home