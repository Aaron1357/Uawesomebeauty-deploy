import { Link } from "react-scroll";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const HeadisDesktop = styled.div`


@font-face {
  font-family: "Elice";
  font-weight: 200;
  src: url("/fonts/EliceDXNeolli-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "Elice-light";
  font-weight: 200;
  src: url("/fonts/EliceDXNeolli-Light.ttf") format("truetype");
}
body {
  margin: 0;
  padding: 0;
}

.main-head {
  display: flex;
  background-color: lavenderblush;
  width: 100%;
  height: 110px;
  position: fixed; /* 헤더를 고정시킴 */
  top: 0; /* 화면 상단에 고정 */
  z-index: 1000; /* 다른 콘텐츠 위에 표시 */
  margin-left: -7px;
}

.Logo-holder {
  padding-left: 20%;
  padding-right: 10%;
}
.Logo {
  width: 190px;
  height: 110px;
}
.menu-holder {
  display: flex;
  align-items: center;
  padding: 30px;
}
.menu {
  font-size: 18px;
  color: black;
  font-family: Elice-light;
  &:hover {
    color: red;
    opacity: 0.5;
    transition: color 0.5s;
  }
}

.mainPhoto {
  
  width: 100%;
  height: 89%;
  position: absolute;
  transition: opacity 0.5s; /* 투명도에 0.5초 동안의 트랜지션 적용 */
  margin-left: -9px;
  margin-top: 102px;
}

.howtocome {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.mapbutton {
  padding-top: 70px;
  padding-bottom: 30px;
  display: flex;
}
.mapbutton img {
  height: 40px;
  border-radius: 10px; /* 둥글게 만들기 */
  margin: 10px; /* 이미지 사이의 간격 조절 */
  &:hover {
    color: red;
    opacity: 0.5;
    transition: opacity 0.5s;
  }
}
.shopname {
  font-weight: bold;
}

.blank{
  height: 89vh;

}

.QnA-con {
  
  padding-top: 100px;
  background: mistyrose;
 
  width: 100.8%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  
}
.QnA-list{
  display: flex;
  align -items: center;
  justify-content:center;
  width: 100%;
}
.QnA-img{
   width: 50%;
   height: 30%;
   padding-left: 60px;
   padding-right: 60px;
   padding-bottom: 20px;
   
   &:hover {
    color: red;
    opacity: 0.5;
    transition: opacity 0.5s;
    transform: scale( 1.2, 1.2 ) ;
    transition: transform 0.5s ease;
  }
}
.QnA-welcome1{
   padding-top : 30px;
   padding-bottom: 20px;
   font-weight:bold;
   font-family: Elice;
   
}
.QnA-welcome2{
   padding-top : 10px;
   padding-bottom: 130px;
   font-weight:bold;
   font-family: Elice;
}
.QnA-index{
  font-family: Elice;
  padding-bottom: 60px;
}


.contact-index{
  word-break;
  display: flex;
  text-align: center;
  flex-direction: column;
  font-family: Elice-light;
}
.map-con{
  width: 100.8%;
   display: flex;
   flex-direction:column;
   align-items: center;
   justify-content: center;
   height: 89vh;
}
.shopname-index{
  font-family:Elice;
  text-align: center;
}
.designer-con {
  
  margin-left: -0.3%;
  padding-top: 140px;
  background: mistyrose;
  width: 100.8%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  
}
.designer-list {
    display: flex;
    align-items: center;
    width: 30%;
    margin-left: 35%;
}

.designer-list > * {
    margin-right: 30px; /* 요소 사이의 간격을 20px로 설정 */
}

  /* 마지막 요소의 오른쪽 마진을 없애기 위한 스타일 */
.designer-list > :last-child {
    margin-right: 0;
}

.designer-img{
   width: 100%;
   height: 20%;
   border-radius: 20%;
   
   &:hover {
    color: red;
    opacity: 0.5;
    transition: opacity 0.5s;
    
    transition: transform 0.5s ease;
  }
}
.designer-welcome1{
   padding-top : 15px;
   padding-bottom: 30px;
   
   font-family: Elice-light;


   
}
.designer-welcome2{
   padding-top : 10px;
   padding-bottom: 30px;
   font-weight:bold;
   font-family: Elice;
}
.designer-index{
  font-family: Elice;
  padding-bottom: 60px;
}
.plusdescribe{
 display: flex;
}
.describe {
  width: 40%;
  position: absolute; /* 절대 위치 설정 */
  text-align: center;
  line-height: 180%;
  font-size: 14px;
  color: dimgrey;
  font-weight: bold;
transform: translateX(-8%); 
}
.describe2{
  width: 40%;
  position: absolute; /* 절대 위치 설정 */
  text-align: center;
  line-height: 180%;
  font-size: 14px;
  color: dimgrey;
  font-weight: bold;
transform: translateX(150%); 
}



.fac-index{
  padding-top: 30px;
  font-family: Elice;
  padding-bottom: 40px;
}
.inner-fac-con {
    padding-top: 100px;
  background: white;
  width: 100%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fac-welcome1{
   padding-top : 0px;
   padding-bottom: 20px;
   font-family: Elice-light;
}
.fac-welcome2{
   padding-top : 10px;
   padding-bottom: 20px;
   font-family: Elice-light;
}

.fac-img {
  width: 14%; /* 이미지의 너비를 200px로 설정 */
  height: 14%; /* 이미지의 높이를 200px로 설정 */
  padding : 5px;
  border-radius: 10%;
  &:hover {
    transform: scale( 2.0, 2.0 ) ;
    transition: transform 0.5s ease;
  }
}

.image-table {
 margin-left: 35.5%;
  
}


/*맨 아래 설명 부분*/
  
.company-description-con{
  
  margin-bottom: -10px;
  padding-top: 30px;
  background: mistyrose;
  width: 100.8%;
  height: 13vh;
  display: flex;
  justify-content: center;
  font-size: 13px;
  line-height: 180%;
  color: dimgrey;
  font-weight: bold;
  
}

.left-description{
  margin-right: 10%;
}

.description-line{
  display: flex;
}

.line-left{
  width:100px;
  opacity: 80%;
}

`;


const HeadisTablet = styled.div`
@font-face {
  font-family: "Elice";
  font-weight: 200;
  src: url("/fonts/EliceDXNeolli-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "Elice-light";
  font-weight: 200;
  src: url("/fonts/EliceDXNeolli-Light.ttf") format("truetype");
}
body {
  margin: 0;
  padding: 0;
}

.main-head {
  margin-left: -7px;
  display: flex;
  background-color: lavenderblush;
  width: 100%;
  height: 110px;
  position: fixed; /* 헤더를 고정시킴 */
  top: 0; /* 화면 상단에 고정 */
  z-index: 1000; /* 다른 콘텐츠 위에 표시 */
}

.Logo-holder {
  padding-left: 0%;
  padding-right: 10%;
}
.Logo {
  width: 190px;
  height: 110px;
}
.menu-holder {
  
  display: flex;
  align-items: center;
  padding: 30px;
}
.menu {
  
  font-size: 16px;
  color: black;
  font-family: Elice-light;
  &:hover {
    color: red;
    opacity: 0.5;
    transition: color 0.5s;
  }
}



.mainPhoto {
  
  width: 100%;
  height: 55%;
  position: absolute;
  transition: opacity 0.5s; /* 투명도에 0.5초 동안의 트랜지션 적용 */
  margin-left: -9px;
  margin-top: 102px;
}

.howtocome {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.mapbutton {
  padding-top: 70px;
  padding-bottom: 30px;
  display: flex;
}
.mapbutton img {
  height: 40px;
  border-radius: 10px; /* 둥글게 만들기 */
  margin: 10px; /* 이미지 사이의 간격 조절 */
  &:hover {
    color: red;
    opacity: 0.5;
    transition: opacity 0.5s;
  }
}
.shopname {
  font-weight: bold;
}

.blank{
  height: 66vh;

}

.QnA-con {
  
  padding-top: 200px;
  background: mistyrose;
 
  width: 100.8%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  
}
.QnA-list{
  display: flex;
  align -items: center;
  justify-content:center;
  width: 100%;
}
.QnA-img{
   width: 50%;
   height: 40%;
   padding-left: 60px;
   padding-right: 60px;
   padding-bottom: 20px;
   
   &:hover {
    color: red;
    opacity: 0.5;
    transition: opacity 0.5s;
    transform: scale( 1.2, 1.2 ) ;
    transition: transform 0.5s ease;
  }
}
.QnA-welcome1{
   padding-top : 30px;
   padding-bottom: 20px;
   font-weight:bold;
   font-family: Elice;
   
}
.QnA-welcome2{
   padding-top : 10px;
   padding-bottom: 130px;
   font-weight:bold;
   font-family: Elice;
}
.QnA-index{
  font-family: Elice;
  padding-bottom: 60px;
}
.contact-index{
  word-break;
  display: flex;
  text-align: center;
  flex-direction: column;
  font-family: Elice-light;
}
.map-con{
  width: 100.8%;
   display: flex;
   flex-direction:column;
   align-items: center;
   justify-content: center;
   height: 89vh;
}
.shopname-index{
  font-family:Elice;
  text-align: center;
}
.designer-con {
  
  margin-left: -0.3%;
  padding-top: 140px;
  background: mistyrose;
  width: 100.8%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  
}
.designer-list {
    display: flex;
    align-items: center;
    width: 30%;
    margin-left: 35%;
}

.designer-list > * {
    margin-right: 30px; /* 요소 사이의 간격을 20px로 설정 */
}

  /* 마지막 요소의 오른쪽 마진을 없애기 위한 스타일 */
.designer-list > :last-child {
    margin-right: 0;
}

.designer-img{
   width: 100%;
   height: 20%;
   border-radius: 20%;
   
   &:hover {
    color: red;
    opacity: 0.5;
    transition: opacity 0.5s;
    
    transition: transform 0.5s ease;
  }
}
.designer-welcome1{
   padding-top : 15px;
   padding-bottom: 60px;
   
   font-family: Elice;


   
}
.designer-welcome2{
   padding-top : 10px;
   padding-bottom: 50px;
   font-weight:bold;
   font-family: Elice;
}
.designer-index{
  font-family: Elice;
  padding-bottom: 60px;
}
.plusdescribe{
 display: flex;
}
.describe {
  width: 40%;
  position: absolute; /* 절대 위치 설정 */
  text-align: center;
  line-height: 180%;
  font-size: 14px;
  color: dimgrey;
  font-weight: bold;
transform: translateX(-8%); 
}
.describe2{
  width: 40%;
  position: absolute; /* 절대 위치 설정 */
  text-align: center;
  line-height: 180%;
  font-size: 14px;
  color: dimgrey;
  font-weight: bold;
transform: translateX(150%); 
}



.fac-index{
  padding-top: 30px;
  font-family: Elice;
  padding-bottom: 60px;
}
.inner-fac-con {
  padding-top: 100px;
  background: white;
  width: 100%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fac-welcome1{
   padding-top : 0px;
   padding-bottom: 20px;
   font-family: Elice-light;
}
.fac-welcome2{
   padding-top : 10px;
   padding-bottom: 35px;
   font-family: Elice-light;
}


.fac-img {
  width: 20%; /* 이미지의 너비를 200px로 설정 */
  height: 20%; /* 이미지의 높이를 200px로 설정 */
  padding : 5px;
  border-radius: 10%;
  &:hover {
    transform: scale( 2.0, 2.0 ) ;
    transition: transform 0.5s ease;
  }
}

.image-table {
 margin-left: 26%;
  
}


/*맨 아래 설명 부분*/
  
.company-description-con{
  
  margin-bottom: -10px;
  padding-top: 30px;
  background: mistyrose;
  width: 100.8%;
  height: 13vh;
  display: flex;
  justify-content: center;
  font-size: 12px;
  line-height: 180%;
  color: dimgrey;
  font-weight: bold;
  
}

.left-description{
  margin-right: 6%;
}

.description-line{
  display: flex;
}

.line-left{
  width:100px;
  opacity: 80%;
}

`;

const HeadisMobile = styled.div`
@font-face {
  font-family: "Elice";
  font-weight: 200;
  src: url("/fonts/EliceDXNeolli-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "Elice-light";
  font-weight: 200;
  src: url("/fonts/EliceDXNeolli-Light.ttf") format("truetype");
}
body {
  margin: 0;
  padding: 0;
}

.main-head {
  display: flex;
  flex-direction: column;
  background-color: lavenderblush;
  width: 100%;
  height: 150px;
  position: fixed; /* 헤더를 고정시킴 */
  top: 0; /* 화면 상단에 고정 */
  z-index: 1000; /* 다른 콘텐츠 위에 표시 */
  align-items: center;
  margin-left: -7px;
  
}

.Logo-holder {
  display: flex;
  align-items: center;
  
}
.Logo {
  width: 180px;
  height: 100px;
}
.menu-holder {
  display: flex;
  align-items: center;
  padding: 10px;
}
.menu {
  font-size: 13px;
  color: black;
  font-family: Elice-light;
  &:hover {
    color: red;
    opacity: 0.5;
    transition: color 0.5s;
  }
}
.menu-2 {

  display: flex;
  width: 100%
  justify-content: space-around;

}


.mainPhoto {
  
  width: 100%;
  height: 37%;
  position: absolute;
  transition: opacity 0.5s; /* 투명도에 0.5초 동안의 트랜지션 적용 */
  margin-left: -9px;
  margin-top: 140px;
}


.howtocome {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.mapbutton {
  padding-top: 10%;
  padding-bottom: 6%;
  
  display: flex;
  flex-direction: column;
}

.mapbutton img {
  height: 40px;
  border-radius: 10px; /* 둥글게 만들기 */
  margin: 10px; /* 이미지 사이의 간격 조절 */
  &:hover {
    color: red;
    opacity: 0.5;
    transition: opacity 0.5s;
  }
}
.shopname {
  font-weight: bold;
}
.shoplocation{
  font-size: 14px;
}

.blank{
  height: 51vh;

}

.QnA-con {
  
  padding-top: 120px;
  background: mistyrose;
  width: 103.2%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.QnA-list{
  display: flex;
  align -items: center;
  justify-content:center;
  width: 100%;
}

.QnA-img{
   width: 50%;
   height: 30%;
   padding-left: 25%;
   padding-top: 20px;
   padding-bottom: 4%;
   
   &:hover {
    color: red;
    opacity: 0.5;
    transition: opacity 0.5s;
    transform: scale( 1.2, 1.2 ) ;
    transition: transform 0.5s ease;
  }
}

.QnA-img2{
  width: 50%;
  height: 30%;
  padding-left: 25%;
  padding-top: 20px;
  padding-bottom: 4%;
  
  &:hover {
   color: red;
   opacity: 0.5;
   transition: opacity 0.5s;
   transform: scale( 1.2, 1.2 ) ;
   transition: transform 0.5s ease;
 }
}

.QnA-welcome1{
   padding-top : 10px;
   padding-bottom: 10px;
   font-weight:bold;
   font-family: Elice;
   
}
.QnA-welcome2{
   padding-top : 10px;
   padding-bottom: 20px;
   font-weight:bold;
   font-family: Elice;
}
.QnA-index{
  font-family: Elice;
  padding-bottom: 20px;
  padding-top : 40px;
  font-size: 16px;
}
.map-index{
  font-family: Elice;
  padding-bottom: 20px;
  padding-top : 0px;
  margin-top : -40px;
  font-size: 16px;
}
.QnA-divide1{
width: 90%;
}
.QnA-divide2{
  width: 90%;
}

.contact-index{
 
  display: flex;
  text-align: center;
  flex-direction: column;
  font-family: Elice-light;
  font-size: 12px;
  
}


.map-con{
  width: 100.8%;
   display: flex;
   flex-direction:column;
   align-items: center;
   justify-content: center;
   height: 89vh;
}
.shopname-index{
  font-family:Elice;
  text-align: center;
}



.designer-con {
  
  margin-top: 0px;
  margin-left: -0.3%;
  padding-top: 35px;
  background: mistyrose;
  width: 103.2%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  
}
.designer-list {
    display: flex;
    align-items: center;
    width: 50%;
    margin-left: 25%;
}

.designer-list > * {
    margin-right: 30px; /* 요소 사이의 간격을 20px로 설정 */
}

  /* 마지막 요소의 오른쪽 마진을 없애기 위한 스타일 */
.designer-list > :last-child {
    margin-right: 0;
}

.designer-img{
   width: 100%;
   height: 30%;
   border-radius: 20%;
   
   &:hover {
    color: red;
    opacity: 0.5;
    transition: opacity 0.5s;
    
    transition: transform 0.5s ease;
  }
}
.designer-welcome1{
   padding-top : 15px;
   padding-bottom: 40px;
   font-size: 12px;
   font-family: Elice;
   
}

.designer-welcome2{
   padding-top : 0px;
   padding-bottom: 30px;
   font-weight:bold;
   
   font-family: Elice;
}
.designer-index{
  padding-top: 30px;
  font-family: Elice;
  padding-bottom: 30px;
  font-size: 16px;
}

.plusdescribe{
 display: flex;
}

.describe {
  width: 90%;
  position: absolute; /* 절대 위치 설정 */
  text-align: center;
  margin-top: 35%;
  margin-left: 3%;
  line-height: 185%;
  font-size: 12px;
  color: dimgrey;
  font-weight: bold;
transform: translateX(0%); 
}
.describe2{
  width: 90%;
  position: absolute; /* 절대 위치 설정 */
  text-align: center;
  margin-top: 35%;
  margin-left: 3%;
  line-height: 185%;
  font-size: 12px;
  color: dimgrey;
  font-weight: bold;
transform: translateX(0%); 
}



.fac-index{
  padding-top: 60px;
  font-family: Elice;
  padding-bottom: 60px;
  font-size: 16px;
  
}
.inner-fac-con {
  padding-top: 100px;
  background: white;
  width: 100%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
}
.fac-welcome1{
   padding-top : 0px;
   padding-bottom: 20px;
   font-family: Elice-light;
}
.fac-welcome2{
   padding-top : 10px;
   padding-bottom: 35px;
   font-family: Elice-light;
}
.fac-img {
  width: 23%; /* 이미지의 너비를 200px로 설정 */
  height: 23%; /* 이미지의 높이를 200px로 설정 */
  padding : 5px;
  border-radius: 10%;
  &:hover {
    transform: scale( 2.0, 2.0 ) ;
    transition: transform 0.5s ease;
  }
}

.image-table {
 margin-left: 18%;
  
}

/*맨 아래 설명 부분*/
  
.company-description-con{

  margin-bottom: -10px;
  padding-top: 3%;
  background: mistyrose;
  width: 103.2%;
  height: 12vh;
  display: flex;
  justify-content: center;
  font-size: 8px;
  line-height: 180%;
  color: dimgrey;
  font-weight: bold;
}

.left-description{
  margin-right: 3%;
}

.description-line{
  display: flex;
}

.line-left{
  width: 60px;
  opacity: 80%;
}




`;




function App() {

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };


  const isDesktop = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const images = ["/place1.png", "/place2.png"]; // 이미지 파일 경로 배열

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [showDescription, setShowDescription] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);

  const handleDescriptionToggle = () => {
    setShowDescription(!showDescription);
    setShowDescription2(false); // 오른쪽 설명 섹션을 닫습니다.
   
   
  };

  const handleDescriptionToggle2 = () => {
    setShowDescription2(!showDescription2);
    setShowDescription(false); // 오른쪽 설명 섹션을 닫습니다.
  };


  useEffect(() => {
    //이미지관련
    // 이미지를 4초마다 변경하는 타이머를 설정
    const interval = setInterval(() => {
      setNextImageIndex((prevIndex) => (prevIndex + 1) % 2);
      // 현재 이미지를 페이드아웃하고 다음 이미지를 페이드인
      document.querySelector(".mainPhoto").style.opacity = 0;
      // 이미지가 페이드아웃되면서 뒤의 이미지가 보이도록 z-index 조절
      document.querySelector(".mainPhoto").style.zIndex = 1;
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        document.querySelector(".mainPhoto").style.opacity = 1;
        // 이미지가 페이드인하면서 현재 이미지를 보이도록 z-index 조절
        document.querySelector(".mainPhoto").style.zIndex = 2;
      }, 500); // 투명도를 복원하기 전 0.5초 대기
    }, 4000);

    return () => {
      //이미지관련
      // 컴포넌트 언마운트 시 타이머를 정리
      clearInterval(interval);
    };
  }, [nextImageIndex]);

  const handleContactImageClick1 = () => {
    window.open("https://open.kakao.com/o/sXWLm5Pf", "_blank"); // 문의 링크 관련 코드
  };

  const handleContactImageClick2 = () => {
    window.open(
      "https://instagram.com/uawesomebeauty?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
      "_blank"
    ); // 문의 링크 관련 코드
  };

  const handleContactImageClick3 = () => {
    window.open(
      "https://talk.naver.com/ct/w4022r?frm=mnmb&frm=nmb_lpn#nafullscreen",
      "_blank"
    ); // 문의 링크 관련 코드
  };

  const handleContactImageClick4 = () => {
    window.open("https://kko.to/HuOyG6LutS", "_blank"); // 카카오맵 링크 관련 코드
  };
  const handleContactImageClick5 = () => {
    window.open("https://naver.me/5Y1I47Yk", "_blank"); // 네이버지도 링크 관련 코드
  };

   

  //  kko.to/5FGA0BbCLs
  useEffect(() => {
    // 카카오 스크립트
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=b8a7199c97ab09d827a105e52849c736&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(37.7344, 127.0818),
          level: 4,
        };
        var map = new window.kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다
        var markerPosition = new window.kakao.maps.LatLng(37.7344, 127.0818);

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        var infowindow = new window.kakao.maps.InfoWindow({
          content:
            '<div style="width:80px; text-align:center;padding:5px 34px; font-size: 13px;font-weight: bold; cursor: pointer;">유어썸뷰티</div>',
        });

        // 마커 클릭 이벤트 처리
        window.kakao.maps.event.addListener(marker, "click", function () {
          // 유어썸뷰티 링크 열기
          window.open("https://kko.to/HuOyG6LutS", "_blank");
        });

        infowindow.open(map, marker);

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        window.addEventListener('resize', handleResize);

      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, [width]);



  return (
    <>
      {isDesktop && (<HeadisDesktop>
        <div className="App">
      <div className="main-head">
        <div className="Logo-holder">
        <Link
            to="home" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-8} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
          <img src="/Logo.png" className="Logo" alt="img" /> {/*로고 이미지 */}
        </Link>
        </div>
        
        <div className="menu-holder">
          <Link
            to="us-con" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-8} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> About us </div>
          </Link>
          {/* <div className="menu"> About us </div> 메뉴 1 */}
        </div>
        <div className="menu-holder">
          <Link
            to="inner-sec" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-10} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> Gallary </div>
          </Link>
          {/* <div className="menu"> Gallary </div> 메뉴 2 */}
        </div>
        <div className="menu-holder">
          <Link
            to="QnA-con" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-20} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> Reservation </div>
          </Link>
          {/* <div className="menu"> Reservation  </div> 메뉴 3 */}
        </div>
        <div className="menu-holder">
          <Link
            to="map-sec" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-110} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> Location </div>
          </Link>
          {/* <div className="menu"> Location </div> 메뉴 4 */}
        </div>
      </div>
    </div>

    <div>
        <div id="home">
          <img className="mainPhoto"  alt="img" src={images[currentImageIndex]} />
          <img className="mainPhoto"  alt="img" src={images[nextImageIndex]} />
        </div>
        <div className="howtocome">
        <div className="blank"></div>
         

          <div className="designer-con" id="us-con">
        <h1 className="designer-index">| About us |</h1>
        
        <div className="designer-welcome2">
          {" "}
          🌷1 : 1 맞춤 디자인시술 100% 예약제🌷{" "}
        </div>
        <div className="designer-welcome2"> open 10:00 close 20:00 </div>

        <div className="designer-welcome1">
          {" "}
          사진을 클릭하면 간단한 프로필을 확인할 수 있습니다.{" "}
        </div>
        <div className="plusdescribe">
          {showDescription && (
            <div className="describe">
              -종합미용면허증 취득 <br />
              -뷰티케어학과 학사 졸업 <br />
              -네일아트국가자격증 취득 <br />
              -영국TTS두피정보관리사 1급, 2급 자격 취득 <br />
              -한국메디뷰티 반영구 교육과장 수료 <br />
              -KSPPRO 풋레게 교육 이수 <br />
              -독일 할라쉐카 왁싱 마스터 교육 수료 <br />
              -K뷰티전문가연합회(FKBP) 정회원 <br />
              -국제바디아트콘테스트 그랑프리 마스터즈 수상 <br />
              -국제바디아트콘테스트 대회 수석 심사위원 <br />
            </div>
          )}
          <div className="designer-list">
            <div className="contact-index">
              <img
                className="designer-img" alt="img"
                src="/logo_name.jpg"
                onClick={handleDescriptionToggle}
              />
              <h3>원장 이순미</h3>
            </div>

            <div className="contact-index">
              <img
                className="designer-img" alt="img"
                src="/logo_name.jpg"
                onClick={handleDescriptionToggle2}
              />
              <h3>실장 최서현</h3>
            </div>
          </div>
          {showDescription2 && (
            <div className="describe2">
              -피부미용면허증 취득 <br />
              -퍼스널컬러 전문가 교육 이수 <br />
              -노글루펌 전문과정 수료 <br />
              -KSPPRO 협회 정회원 <br />
              -한국스킨플래닝프로 협회 임원 <br />
              -한국스킨플래닝프로 스킨플래닝 기술 강사 <br />
              -KSPPRO 에듀케이터 교육과정 수료 <br />
              -스킨플래닝 교육/원데이 전문인증기관 <br />
              -IBSC 베트남 국제대회 더마플래닝 심사위원 <br />
              -IBSC 국제 신기술 시연 강사
            </div>
          )}
        </div>
      </div>

      <div className="inner-fac-con" id="inner-sec">
        <h1 className="fac-index">| Gallary |</h1>
        <div className="fac-welcome1">
          {" "}
          1:1 맞춤 디자인 작업으로 고객님들의 스타일을 찾아드립니다.{" "}
        </div>
        <div className="fac-welcome2">
          {" "}
          원하는 사진 위에 마우스를 올리면 사진이 확대됩니다.{" "}
        </div>
        <div className="image-table">
              
          <div className="image-table-row">
                <img className="fac-img" src="/1.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/2.jpg" alt="이미지 1" />
            
                <img className="fac-img" src="/3.jpg" alt="이미지 1" />
             
          </div>
          <div className="image-table-row">
           
                <img className="fac-img" src="/4.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/5.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/6.jpg" alt="이미지 1" />
             
          </div> 
          <div className="image-table-row">
                <img className="fac-img" src="/7.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/8.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/9.jpg" alt="이미지 1" />
            
          </div>
        </div>
      </div>

          <div className="QnA-con">
            <h1 className="QnA-index">| Reservation |</h1>
            
            <div className="QnA-welcome1">
              {" "}
              궁금하신 모든 사항은 편하게 문의주세요!{" "}
            </div>
            <div className="QnA-welcome2">
              {" "}
              아래의 여러가지 문의 방법을 소개 드립니다.{" "}
            </div>

            <div className="QnA-list">
              <div className="contact-index">
                <img className="QnA-img"  alt="img" src="/how-to-contact--1.png" />
                <h3>0507-1318-5745</h3>
              </div>

              <div className="contact-index">
                <img
                  className="QnA-img" alt="img"
                  src="/how-to-contact-2.png"
                  onClick={handleContactImageClick1}
                />
                <h3>카카오톡 오픈채팅 문의 </h3>
              </div>

              <div className="contact-index">
                <img
                  className="QnA-img" alt="img"
                  src="/how-to-contact-3.png"
                  onClick={handleContactImageClick2}
                />
                <h3>인스타그램 DM 문의 </h3>
              </div>

              <div className="contact-index">
                <img
                  className="QnA-img" alt="img"
                  src="/how-to-contact-4.png"
                  onClick={handleContactImageClick3}
                />
                <h3> 네이버 톡톡 문의 </h3>
              </div>
            </div>
          </div>
          <div className="map-con" id="map-sec">
            <h1 className="QnA-index">| Location |</h1>
            {/* <div> </div> */}
            <div className="root">
              <div>
                <div id="map" style={{ width: "400px", height: "300px" }}></div>
              </div>
              <div>
                <div className="mapbutton">
                  <img  alt="img" src="카카오맵.png" onClick={handleContactImageClick4} />
                  <img  alt="img"
                    src="네이버지도.png"
                    onClick={handleContactImageClick5}
                  />
                </div>
                <div className="shopname-index">
                  <div className="shopname">유어썸뷰티</div> <br></br>
                  <div>경기 의정부시 용민로 10 탑석자이정문상가 205-2호</div>
                </div>
              </div>
            </div>
          </div>


          <div className="company-description-con">
            <div className="left-description">
              <div className="description-line">
                <div className="line-left">상호명</div>
                <div>유어썸뷰티 {'('}대표자:이순미{')'}</div>
              </div>
              <div className="description-line">
                <div className="line-left">사업자 번호</div>
                <div>xxx-xx-xxxxx</div>
              </div>
              <div className="description-line">
                <div className="line-left">대표연락</div>
                <div>0507-1318-5745</div>
              </div>
              <div className="description-line">
                <div className="line-left">주소</div>
                <div>경기 의정부시 용민로 10 탑석자이정문상가 205-2호</div>
              </div>
            </div>
            <div className="right-description">
              <div className="description-line">
                <div className="line-left">상호명</div>
                <div>유어썸뷰티 대표자:이순미</div>
              </div>
              <div className="description-line">
                <div className="line-left">사업자 번호</div>
                <div>xxx-xx-xxxxx</div>
              </div>
              <div className="description-line">
                <div className="line-left">대표연락</div>
                <div>0507-1318-5745</div>
              </div>
              <div className="description-line">
                <div className="line-left">주소</div>
                <div>경기 의정부시 용민로 10 탑석자이정문상가 205-2호</div>
              </div>
            </div>
          </div>


        </div>
      </div>
      

     

    </HeadisDesktop>)}



    {isTablet && (<HeadisTablet>
      <div className="App">
      <div className="main-head">
        <div className="Logo-holder">
        <Link
            to="home" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-8} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
          <img src="/Logo.png" className="Logo" alt="img" /> {/*로고 이미지 */}
        </Link>
        
        </div>
        
        <div className="menu-holder">
          <Link
            to="us-con" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-8} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> About us </div>
          </Link>
          {/* <div className="menu"> About us </div> 메뉴 1 */}
        </div>
        <div className="menu-holder">
          <Link
            to="inner-sec" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-10} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> Gallary </div>
          </Link>
          {/* <div className="menu"> Gallary </div> 메뉴 2 */}
        </div>
        <div className="menu-holder">
          <Link
            to="QnA-con" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-50} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> Reservation </div>
          </Link>
          {/* <div className="menu"> Reservation  </div> 메뉴 3 */}
        </div>
        <div className="menu-holder">
          <Link
            to="map-sec" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-90} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> Location </div>
          </Link>
          {/* <div className="menu"> Location </div> 메뉴 4 */}
        </div>
      </div>
    </div>

    <div>
        <div id="home">
          <img className="mainPhoto"  alt="img" src={images[currentImageIndex]} />
          <img className="mainPhoto"  alt="img" src={images[nextImageIndex]} />
        </div>
        <div className="howtocome">
        <div className="blank"></div>
         

          <div className="designer-con" id="us-con">
        <h1 className="designer-index">| About us |</h1>
        
        <div className="designer-welcome2">
          {" "}
          🌷1 : 1 맞춤 디자인시술 100% 예약제🌷{" "}
        </div>
        <div className="designer-welcome2"> open 10:00 close 20:00 </div>

        <div className="designer-welcome1">
          {" "}
          사진을 클릭하면 간단한 프로필을 확인할 수 있습니다.{" "}
        </div>
        <div className="plusdescribe">
          {showDescription && (
            <div className="describe">
              -종합미용면허증 취득 <br />
              -뷰티케어학과 학사 졸업 <br />
              -네일아트국가자격증 취득 <br />
              -영국TTS두피정보관리사 1급, 2급 자격 취득 <br />
              -한국메디뷰티 반영구 교육과장 수료 <br />
              -KSPPRO 풋레게 교육 이수 <br />
              -독일 할라쉐카 왁싱 마스터 교육 수료 <br />
              -K뷰티전문가연합회(FKBP) 정회원 <br />
              -국제바디아트콘테스트 그랑프리 마스터즈 수상 <br />
              -국제바디아트콘테스트 대회 수석 심사위원 <br />
            </div>
          )}
          <div className="designer-list">
            <div className="contact-index">
              <img
                className="designer-img" alt="img"
                src="/logo_name.jpg"
                onClick={handleDescriptionToggle}
              />
              <h3>원장 이순미</h3>
            </div>

            <div className="contact-index">
              <img
                className="designer-img" alt="img"
                src="/logo_name.jpg"
                onClick={handleDescriptionToggle2}
              />
              <h3>실장 최서현</h3>
            </div>
          </div>
          {showDescription2 && (
            <div className="describe2">
              -피부미용면허증 취득 <br />
              -퍼스널컬러 전문가 교육 이수 <br />
              -노글루펌 전문과정 수료 <br />
              -KSPPRO 협회 정회원 <br />
              -한국스킨플래닝프로 협회 임원 <br />
              -한국스킨플래닝프로 스킨플래닝 기술 강사 <br />
              -KSPPRO 에듀케이터 교육과정 수료 <br />
              -스킨플래닝 교육/원데이 전문인증기관 <br />
              -IBSC 베트남 국제대회 더마플래닝 심사위원 <br />
              -IBSC 국제 신기술 시연 강사
            </div>
          )}
        </div>
      </div>

      <div className="inner-fac-con" id="inner-sec">
        <h1 className="fac-index">| Gallary |</h1>
        <div className="fac-welcome1">
          {" "}
          1:1 맞춤 디자인 작업으로 고객님들의 스타일을 찾아드립니다.{" "}
        </div>
        <div className="fac-welcome2">
          {" "}
          원하는 사진 위에 마우스를 올리면 사진이 확대됩니다.{" "}
        </div>
        <div className="image-table">
              
          <div className="image-table-row">
                <img className="fac-img" src="/1.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/2.jpg" alt="이미지 1" />
            
                <img className="fac-img" src="/3.jpg" alt="이미지 1" />
             
          </div>
          <div className="image-table-row">
           
                <img className="fac-img" src="/4.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/5.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/6.jpg" alt="이미지 1" />
             
          </div> 
          <div className="image-table-row">
                <img className="fac-img" src="/7.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/8.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/9.jpg" alt="이미지 1" />
            
          </div>
        </div>
      </div>

          <div className="QnA-con">
            <h1 className="QnA-index">| Reservation |</h1>
            
            <div className="QnA-welcome1">
              {" "}
              궁금하신 모든 사항은 편하게 문의주세요!{" "}
            </div>
            <div className="QnA-welcome2">
              {" "}
              아래의 여러가지 문의 방법을 소개 드립니다.{" "}
            </div>

            <div className="QnA-list">
              <div className="contact-index">
                <img className="QnA-img"  alt="img" src="/how-to-contact--1.png" />
                <h3>0507-1318-5745</h3>
              </div>

              <div className="contact-index">
                <img
                  className="QnA-img" alt="img"
                  src="/how-to-contact-2.png"
                  onClick={handleContactImageClick1}
                />
                <h3>카카오톡 오픈채팅 문의 </h3>
              </div>

              <div className="contact-index">
                <img
                  className="QnA-img" alt="img"
                  src="/how-to-contact-3.png"
                  onClick={handleContactImageClick2}
                />
                <h3>인스타그램 DM 문의 </h3>
              </div>

              <div className="contact-index">
                <img
                  className="QnA-img" alt="img"
                  src="/how-to-contact-4.png"
                  onClick={handleContactImageClick3}
                />
                <h3> 네이버 톡톡 문의 </h3>
              </div>
            </div>
          </div>
          <div className="map-con" id="map-sec">
            <h1 className="QnA-index">| Location |</h1>
            {/* <div> </div> */}
            <div className="root">
              <div>
                <div id="map" style={{ width: "400px", height: "300px" }}></div>
              </div>
              <div>
                <div className="mapbutton">
                  <img  alt="img" src="카카오맵.png" onClick={handleContactImageClick4} />
                  <img  alt="img"
                    src="네이버지도.png"
                    onClick={handleContactImageClick5}
                  />
                </div>
                <div className="shopname-index">
                  <div className="shopname">유어썸뷰티</div> <br></br>
                  <div>경기 의정부시 용민로 10 탑석자이정문상가 205-2호</div>
                </div>
              </div>
            </div>
          </div>
          <div className="company-description-con">
            <div className="left-description">
              <div className="description-line">
                <div className="line-left">상호명</div>
                <div>유엄썸뷰티 {'('}대표자:이순미{')'}</div>
              </div>
              <div className="description-line">
                <div className="line-left">사업자 번호</div>
                <div>xxx-xx-xxxxx</div>
              </div>
              <div className="description-line">
                <div className="line-left">대표연락</div>
                <div>0507-1318-5745</div>
              </div>
              <div className="description-line">
                <div className="line-left">주소</div>
                <div>경기 의정부시 용민로 10 탑석자이정문상가 205-2호</div>
              </div>
            </div>
            <div className="right-description">
              <div className="description-line">
                <div className="line-left">상호명</div>
                <div>유엄썸뷰티 대표자:이순미</div>
              </div>
              <div className="description-line">
                <div className="line-left">사업자 번호</div>
                <div>xxx-xx-xxxxx</div>
              </div>
              <div className="description-line">
                <div className="line-left">대표연락</div>
                <div>0507-1318-5745</div>
              </div>
              <div className="description-line">
                <div className="line-left">주소</div>
                <div>경기 의정부시 용민로 10 탑석자이정문상가 205-2호</div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </HeadisTablet>)}



    {isMobile && (<HeadisMobile>
        <div className="App">
      <div className="main-head">
        <div className="Logo-holder">
        <Link
            to="home" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-8} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
          <img src="/Logo.png" className="Logo" alt="img" /> {/*로고 이미지 */}
        </Link>
         
        </div>
        <div className="menu-2">
        <div className="menu-holder">
          <Link
            to="us-con" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-100} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> About us </div>
          </Link>
          {/* <div className="menu"> About us </div> 메뉴 1 */}
        </div>
        <div className="menu-holder">
          <Link
            to="inner-sec" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-20} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> Gallary </div>
          </Link>
          {/* <div className="menu"> Gallary </div> 메뉴 2 */}
        </div>
        <div className="menu-holder">
          <Link
            to="QnA-con" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-20} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> Reservation </div>
          </Link>
          {/* <div className="menu"> Reservation  </div> 메뉴 3 */}
        </div>
        <div className="menu-holder">
          <Link
            to="map-sec" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-125} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> Location </div>
          </Link>
          {/* <div className="menu"> Location </div> 메뉴 4 */}
        </div>
      </div>
      </div>
    </div>


    <div>
        <div id="home">
          <img className="mainPhoto"  alt="img" src={images[currentImageIndex]} />
          <img className="mainPhoto"  alt="img" src={images[nextImageIndex]} />
        </div>
        <div className="howtocome">
        <div className="blank"></div>
         

          <div className="designer-con" id="us-con">
        <h3 className="designer-index">| About us |</h3>
        
        <div className="designer-welcome2">
          {" "}
          🌷1 : 1 맞춤 디자인시술 100% 예약제🌷{" "}
        </div>
        <div className="designer-welcome2"> open 10:00 close 20:00 </div>

        <div className="designer-welcome1">
          {" "}
          사진을 클릭하면 간단한 프로필을 확인할 수 있습니다.{" "}
        </div>
        <div className="plusdescribe">
          {showDescription && (
            <div className="describe">
              -종합미용면허증 취득 <br />
              -뷰티케어학과 학사 졸업 <br />
              -네일아트국가자격증 취득 <br />
              -영국TTS두피정보관리사 1급, 2급 자격 취득 <br />
              -한국메디뷰티 반영구 교육과장 수료 <br />
              -KSPPRO 풋레게 교육 이수 <br />
              -독일 할라쉐카 왁싱 마스터 교육 수료 <br />
              -K뷰티전문가연합회(FKBP) 정회원 <br />
              -국제바디아트콘테스트 그랑프리 마스터즈 수상 <br />
              -국제바디아트콘테스트 대회 수석 심사위원 <br />
            </div>
          )}
          <div className="designer-list">
            <div className="contact-index">
              <img
                className="designer-img" alt="img"
                src="/logo_name.jpg"
                onClick={handleDescriptionToggle}
              />
              <h3>원장 이순미</h3>
            </div>

            <div className="contact-index">
              <img
                className="designer-img" alt="img"
                src="/logo_name.jpg"
                onClick={handleDescriptionToggle2}
              />
              <h3>실장 최서현</h3>
            </div>
          </div>
          {showDescription2 && (
            <div className="describe2">
              -피부미용면허증 취득 <br />
              -퍼스널컬러 전문가 교육 이수 <br />
              -노글루펌 전문과정 수료 <br />
              -KSPPRO 협회 정회원 <br />
              -한국스킨플래닝프로 협회 임원 <br />
              -한국스킨플래닝프로 스킨플래닝 기술 강사 <br />
              -KSPPRO 에듀케이터 교육과정 수료 <br />
              -스킨플래닝 교육/원데이 전문인증기관 <br />
              -IBSC 베트남 국제대회 더마플래닝 심사위원 <br />
              -IBSC 국제 신기술 시연 강사
            </div>
          )}
        </div>
      </div>

      <div className="inner-fac-con" id="inner-sec">
        <h3 className="fac-index">| Gallary |</h3>
        <div className="fac-welcome1">
          {" "}
          1:1 맞춤 디자인 작업으로 고객님들의 스타일을 찾아드립니다.{" "}
        </div>
        <div className="fac-welcome2">
          {" "}
          원하는 사진 위에 마우스를 올리면 사진이 확대됩니다.{" "}
        </div>
        <div className="image-table">
              
          <div className="image-table-row">
                <img className="fac-img" src="/1.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/2.jpg" alt="이미지 1" />
            
                <img className="fac-img" src="/3.jpg" alt="이미지 1" />
             
          </div>
          <div className="image-table-row">
           
                <img className="fac-img" src="/4.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/5.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/6.jpg" alt="이미지 1" />
             
          </div> 
          <div className="image-table-row">
                <img className="fac-img" src="/7.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/8.jpg" alt="이미지 1" />
             
                <img className="fac-img" src="/9.jpg" alt="이미지 1" />
            
          </div>
        </div>
      </div>

          <div className="QnA-con">
            <h2 className="QnA-index">| Reservation |</h2>
            
            <div className="QnA-welcome1">
              {" "}
              궁금하신 모든 사항은 편하게 문의주세요!{" "}
            </div>
            <div className="QnA-welcome2">
              {" "}
              아래의 여러가지 문의 방법을 소개 드립니다.{" "}
            </div>

            <div className="QnA-list">
              <div className="QnA-divide1">
                <div className="contact-index">
                  <img className="QnA-img"  alt="img" src="/how-to-contact--1.png" />
                  <h4>0507-1318-5745</h4>
                </div>
                <div className="contact-index">
                  <img
                  className="QnA-img" alt="img"
                  src="/how-to-contact-2.png"
                  onClick={handleContactImageClick1}
                />
                <h4>카카오톡 오픈채팅 문의 </h4>
                </div>
              </div>
              <div className="QnA-divide2">
                <div className="contact-index">
                <img
                  className="QnA-img2" alt="img"
                  src="/how-to-contact-3.png"
                  onClick={handleContactImageClick2}
                />
                <h4>인스타그램 DM 문의 </h4>
                </div>
                <div className="contact-index">
                <img
                  className="QnA-img2" alt="img"
                  src="/how-to-contact-4.png"
                  onClick={handleContactImageClick3}
                />
                <h4> 네이버 톡톡 문의 </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="map-con" id="map-sec">
            <h2 className="map-index">| Location |</h2>
            {/* <div> </div> */}
            <div className="root">
              <div>
                <div id="map" style={{ width: "200px", height: "200px" }}></div>
              </div>
              <div>
                <div className="mapbutton">
                  <div><img alt="img" src="카카오맵.png" onClick={handleContactImageClick4} /></div>
                  <div><img alt="img" src="네이버지도.png" onClick={handleContactImageClick5} /></div>                            
                   </div>
                <div className="shopname-index">
                  <div className="shopname">유어썸뷰티</div> <br></br>
                  <div className="shoplocation">경기 의정부시 용민로 10 탑석자이정문상가 205-2호</div>
                </div>
              </div>
            </div>
          </div>
          

          <div className="company-description-con">
            <div className="left-description">
              <div className="description-line">
                <div className="line-left">상호명</div>
                <div>유엄썸뷰티 {'('}대표자:이순미{')'}</div>
              </div>
              <div className="description-line">
                <div className="line-left">사업자 번호</div>
                <div>xxx-xx-xxxxx</div>
              </div>
              <div className="description-line">
                <div className="line-left">대표연락</div>
                <div>0507-1318-5745</div>
              </div>
              <div className="description-line">
                <div className="line-left">주소</div>
                <div>경기 의정부시 용민로 10 탑석자이정문상가 205-2호</div>
              </div>
            </div>
            <div className="right-description">
              <div className="description-line">
                <div className="line-left">상호명</div>
                <div>유엄썸뷰티 대표자:이순미</div>
              </div>
              <div className="description-line">
                <div className="line-left">사업자 번호</div>
                <div>xxx-xx-xxxxx</div>
              </div>
              <div className="description-line">
                <div className="line-left">대표연락</div>
                <div>0507-1318-5745</div>
              </div>
              <div className="description-line">
                <div className="line-left">주소</div>
                <div>경기 의정부시 용민로 10 탑석자이정문상가 205-2호</div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </HeadisMobile>)}
            
    
    </>
  );
}

export default App;
