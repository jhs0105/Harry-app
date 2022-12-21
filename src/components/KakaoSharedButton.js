import React, { useEffect } from "react";
import styled from "styled-components";
const { Kakao } = window;

export default function KakaoSharedButton({ data }) {
  const url = "https://mydormitory.netlify.app/";
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init("9f736608ad5140e2229853f3a32875f5");
    }
  }, []);

  function shareMessage() {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "나의 호그와트 기숙사는?",
        description: `${data.name}`,
        imageUrl: url + data.image,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: "나의 기숙사가 궁금하다면...",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  }

  return <Button onClick={shareMessage}>카카오톡 공유하기</Button>;
}
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
