import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Hogwarts from "../assets/images/stars-g7f04ce2bb_1920.jpg";
import { ResultData } from "../assets/data/result";
import KakaoSharedButton from "./KakaoSharedButton";

export default function Result() {
  const navigate = useNavigate();
  const dormitoryId = useParams().id;
  const [result, setResult] = useState({});
  console.log(dormitoryId);
  useEffect(() => {
    const Domitory = ResultData.find((item, idx) => {
      return item.id === dormitoryId;
    });
    setResult(Domitory);
  }, [dormitoryId]);

  return (
    <Container>
      <img src={Hogwarts} alt="" />
      <div className="contents">
        <Title>
          <img src={result.image} alt="" />
          <h2>{result.name}</h2>
          <p>{result.desc}</p>
        </Title>
        <Buttons>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            처음으로 돌아가기
          </Button>
          <KakaoSharedButton data={result}></KakaoSharedButton>
        </Buttons>
      </div>
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
  position: relative;
  .contents {
    width: 90%;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  > img {
    position: absolute;
    z-index: -1;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  margin: 20px 0 0px;
  font-size: 20px;
  color: #000;
  line-height: 1.5;
  word-break: keep-all;
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 18px;
  }
  img {
    width: 250px;
    border: 5px solid #ccc;
    border-radius: 100%;
    object-fit: cover;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;
const Button = styled.button`
  word-break: keep-all;
  width: 100%;
  margin-bottom: 5px;
  outline: none;
  border: none;
  background-color: #333;
  bottom: 50%;
  padding: 10px 20px;
  color: #fff;
  border-radius: 10px;
  font-family: inherit;
  font-size: 18px;
`;
