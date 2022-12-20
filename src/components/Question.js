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
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  .contents {
    width: 90vw;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #ccc;
    opacity: 0.5;
    border-radius: 10px;
  }
`;

const Title = styled.div`
  margin: 50px 0 20px;
  font-size: 20px;
  color: #000;
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
  font-family: "Hyemin";
  font-size: 15px;
`;
