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
        <h2>호그와트에 오신것을 환영합니다!</h2>
        <p>과연 나의 기숙사는 어디일까요?!</p>
        <img src={Logo} alt="" />
      </Title>

      <Button
        onClick={() => {
          navigate("/question");
        }}
      >
        마법의 모자와의 데이트를 시작해봅니다!
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin-top: 100px;
  font-size: 20px;
  color: #fff;
  line-height: 1.5;
  img {
    width: 500px;
  }
  h2 {
    font-size: 24px;
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  background-color: #333;
  position: absolute;
  bottom: 100px;
  padding: 10px 20px;
  color: #fff;
  border-radius: 10px;
  font-family: "Hyemin";
  font-size: 18px;
`;
