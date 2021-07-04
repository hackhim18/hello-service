import React from 'react'
import styled from 'styled-components';
import TopSectionBackgroundImg from "../../images/landing-page.jpg"

const TopSectionContainer = styled.div`
  width: 100%;
  height:600px;
  background: url(${TopSectionBackgroundImg});
  background-postion: 0px -50px;
  background-size:cover;
`;
 

export function TopSection(props) {
    return  <TopSectionContainer>
        Boom
    </TopSectionContainer>
}


