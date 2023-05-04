import React from 'react'
import styled from 'styled-components'


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
      <WidgetLgTitle>Latest transactions</WidgetLgTitle>
      <WidgetLgTable>
        <WidgetLgTr>
          <WidgetLgTh>Customer</WidgetLgTh>
          <WidgetLgTh>Date</WidgetLgTh>
          <WidgetLgTh>Amount</WidgetLgTh>
          <WidgetLgTh>Status</WidgetLgTh>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              style={styling.widgetLgImg}
            />
            <span className="widgetLgName">Susan Carol</span>
          </WidgetLgUser>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              style={styling.widgetLgImg}
            />
            <span className="widgetLgName">Susan Carol</span>
          </WidgetLgUser>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              style={styling.widgetLgImg}
            />
            <span className="widgetLgName">Susan Carol</span>
          </WidgetLgUser>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              style={styling.widgetLgImg}
            />
            <span className="widgetLgName">Susan Carol</span>
          </WidgetLgUser>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </WidgetLgTr>
      </WidgetLgTable>
    </Container>
  )
}

export default WidgetLg