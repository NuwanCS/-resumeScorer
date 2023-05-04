import React, { useState } from 'react'
import styled, { keyframes, createGlobalStyle } from "styled-components";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
    font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const NewUserField = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-right: 20px;
`

const NewUserFieldLabel = styled.label`
    margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`

const NewUserFieldInput = styled.input`
    margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
  display; flex;
`

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;



const Login = () => {
    const [dados, setDados] = useState({
        email: "",
        password: ""
      });
      const handleSubmit = e => {
        e.preventDefault();
        console.log(dados);
      };
    
      const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        setDados(Object.assign(dados, { [name]: value }));
      };
    
  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <Form onSubmit={handleSubmit}>
      <NewUserField>
        <NewUserFieldLabel>Username</NewUserFieldLabel>

        <Input
          type="email"
          name="email"
          value={dados.email}
          onChange={handleChange}
        />
      </NewUserField>
        <Input
          type="password"
          name="password"
          value={dados.password}
          onChange={handleChange}
        />
        <Button>Login</Button>
      </Form>
    </Wrapper>
  </>
  )
}

export default Login