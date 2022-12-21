import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Hogwarts from "../assets/images/stars-g7f04ce2bb_1920.jpg";
import Logo from "../assets/images/Hogwarts-Logo.png";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={Hogwarts} alt="" />
      <Title>
        <h2>Welcome to Hogwarts!</h2>
        <p>과연 나의 기숙사는 어디일까요?!</p>
        <img src={Logo} alt="" />
      </Title>

      <Button
        onClick={() => {
          navigate("/question");
        }}
      >
        마법의 모자와의 데이트를 시작해봅시다!
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;
  > img {
    position: absolute;
    z-index: -1;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  color: #fff;
  line-height: 1.5;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
  h2 {
    font-family: "Berk";
    font-size: 35px;
    margin-bottom: 0;
    text-shadow: 2px 2px 2px #111;
  }
  p {
    font-size: 24px;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  background-color: #333;
  padding: 10px 20px;
  color: #fff;
  border-radius: 10px;
  font-family: inherit;
  font-size: 18px;
`;
