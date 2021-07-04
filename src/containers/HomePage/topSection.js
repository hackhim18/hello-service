import React from 'react'
import styled from 'styled-components';
import TopSectionBackgroundImg from "../../images/landing-page.jpg"
import bestimg from "../../images/Work only with the best.png";


const TopSectionContainer = styled.div`
  width: 100%;
  height:700px;
  background: url(${TopSectionBackgroundImg});
  background-postion: 0px -80px;
  background-size:cover;
`;
  
const BackgroundFilter = styled.div`
width:100%;
height:100%;
background-color: rgba(38, 70, 83, 0.9);
display: flex;
flex-direction: column;
`;
const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const StandoutImage = styled.div`
  width: 44em;
  height: 34em;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h2`
margin:0;
font-size:24px;
color:#fff;
line-height:1.7;
`;
 



export function TopSection(props) {
    return  <TopSectionContainer>
        <BackgroundFilter>
            <Title>
                Hello-Service
            </Title>
         <StandoutImage>
             <img src={bestimg}  alt="best in the field"/>
         </StandoutImage>
        </BackgroundFilter>
    </TopSectionContainer>
}


