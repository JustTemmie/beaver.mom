import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #333;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const Footer = styled.footer`
  margin-top: 50px;
  font-size: 0.8rem;
`;

// Define a functional component for the homepage
const HomePage: React.FC = () => {
  
  return (
    <Wrapper>
      <Title>hiiiiiiiiii</Title>
      <Description>welcome to beaver.mom</Description>
      <Content className="content">
        {/* Your content here */}
        <p>this is real content</p>
        <p>anything you've seen before is simply fake; it wasn't real</p>
      </Content>
      <Footer>
        <p>Thanks for visiting!</p>
        <p>&copy; 2023 Beaver.mom</p>
      </Footer>
    </Wrapper>
  );
};

export default HomePage;
