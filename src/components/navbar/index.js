 import React from 'react'
import styled from 'styled-components'
 import { BrandLogo } from '../brandLogo'
 
 const NavbarContainer = styled.div`
 width: 100%;
 height: 85px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 `;

const AccessiblityContainer = styled.div`
display: flex;
`;

const AnchorLink = styled.a`
 font-size: 14px;
 color: #fff;
 cursor: pointer;
 text-decoration: none;
 outline: none;
 font-weight: bold;
 transition: all 200ms ease-in-out;

 &:hover{
   filter:contrast(0.6);
 }
`;



 export function Navbar(props) {
   return (
      <NavbarContainer>
        <BrandLogo />
        <AccessiblityContainer>
<AnchorLink>Specialist Portal</AnchorLink>
 
 <AnchorLink>Specialist Portal</AnchorLink>

      </AccessiblityContainer>
      </NavbarContainer>
   )
 }
 
 
 