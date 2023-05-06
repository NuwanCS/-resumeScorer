import React from 'react'
import styled from 'styled-components'
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";


const Featured =  styled.div.attrs({className: 'bg-purple-100 text-white'})`
    width: 100%;
  display: flex;
  justify-content: space-between;
`

const FeaturedItem =  styled.div`
    flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const FeaturedTitle =  styled.span`
    font-size: 20px;
`

const FeaturedMoneyContainer =  styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`

const FeaturedMoney =  styled.span`
     font-size: 30px;
    font-weight: 600;
`

const FeaturedMoneyRate =  styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`

const FeaturedIcon =  styled.span`
    font-size: 14px;
    margin-left: 5px;
    color: green;
`

// .featuredIcon.negative{
//     color: red;
// }

const FeaturedSub =  styled.span`
   font-size: 15px;
    color: gray;
`
const FeaturedInfo = () => {
  return (
    <Featured>
      <FeaturedItem>
        {/* <FeaturedTitle className='bg-red-400 py-2 shadow-md px-4 rounded-xl text-white text-2xl font-semibold'>Revanue</FeaturedTitle> */}
        {/* <FeaturedMoneyContainer>
          <FeaturedMoney>$2,415</FeaturedMoney>
          <FeaturedMoneyRate>
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$4,415</FeaturedMoney>
          <FeaturedMoneyRate>
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,225</FeaturedMoney>
          <FeaturedMoneyRate>
            +2.4 <ArrowUpward className="featuredIcon"/>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub> */}
      </FeaturedItem>
    </Featured>
  )
}

export default FeaturedInfo