import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Hogwarts from "../assets/images/stars-g7f04ce2bb_1920.jpg";
import { QuestionData } from "../assets/data/question";

export default function Question() {
  const [questionNo, setQuestionNo] = useState(0);

  const navigate = useNavigate();
  const [totalScore, setTotalScore] = useState([
    { id: "H", score: 0 },
    { id: "R", score: 0 },
    { id: "S", score: 0 },
    { id: "G", score: 0 },
  ]);
  const total = QuestionData.length - 1;

  const onClick = (point, type) => {
    const newScore = totalScore.map((item, idx) => {
      return item.id === type
        ? {
            id: item.id,
            score: item.score + point,
          }
        : item;
    });
    setTotalScore(newScore);
    setQuestionNo(questionNo + 1);
    if (questionNo < total) {
      setQuestionNo(questionNo + 1);
    } else {
      const harry = newScore.reduce((prev, value) => {
        return prev.score >= value.score ? prev : value;
      });
      //console.log(harry);
      //console.log(harry.id);
      navigate(`/result/${harry.id}`);
    }
  };
  return (
    <>
      <Progress>
        <div className="inner">
          <div className="bar" style={{ width: `${(questionNo / (total + 1)) * 100}%` }}></div>
        </div>
      </Progress>
      <Container>
        <img src={Hogwarts} alt="" />
        <div className="contents">
          <Title>
            <h2>{QuestionData[questionNo].title}</h2>
          </Title>
          <Buttons>
            <Button
              onClick={() => {
                onClick(1.5, "H");
              }}
            >
              {QuestionData[questionNo].answerA}{" "}
            </Button>
            <Button
              onClick={() => {
                onClick(1.3, "R");
              }}
            >
              {QuestionData[questionNo].answerB}
            </Button>
            <Button
              onClick={() => {
                onClick(1, "S");
              }}
            >
              {QuestionData[questionNo].answerC}
            </Button>
            <Button
              onClick={() => {
                onClick(1.2, "G");
              }}
            >
              {QuestionData[questionNo].answerD}
            </Button>
          </Buttons>
        </div>
      </Container>
    </>
  );
}
const Progress = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner {
    width: 90%;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    overflow: hidden;
    .bar {
      background-color: #000;
      height: 100%;
      transition: all 0.25s ease;
    }
  }
`;
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
    height: 60%;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
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
  margin: 50px 0;
  font-size: 20px;
  color: #fff;
  line-height: 1.5;
  h2 {
    font-size: 20px;
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
  text-align: left;
  word-break: keep-all;
  width: 100%;
  margin-bottom: 5px;
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  bottom: 50%;
  padding: 10px 20px;
  color: #000;
  font-weight: 700;
  border-radius: 10px;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.25;
`;
