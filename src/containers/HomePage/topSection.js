import React from 'react'
import styled from 'styled-components';
import TopSectionBackgroundImg from "../../images/landing-page.jpg"
import bestimg from "../../images/Work only with the best.png";
import { BrandLogo } from '../../components/brandLogo';
import { Marginer } from "../../components/marginer";

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
 

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 40x;
   
    font-size: 40px;
  
`;
 
const LogoContainer = styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
`;

 
 
export function TopSection(props){
return  ( <TopSectionContainer>
  <BackgroundFilter>
    <TopSectionInnerContainer> 
      <LogoContainer>
          <BrandLogo logoSize={65} textSize={55}/>
          <Marginer direction="vertical" margin={15} />
          <SloganText>Find the right person </SloganText>
          <SloganText>For your job!</SloganText>

      </LogoContainer>
    <StandoutImage>
       <img src={bestimg}  alt="best in the field"/>
   </StandoutImage>
   </TopSectionInnerContainer>  
  </BackgroundFilter>
</TopSectionContainer>
);
}
