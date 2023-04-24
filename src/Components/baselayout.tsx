import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LogoIcon=styled.img`
    
    margin-top:15px;
    height:38px;
    width:44px;
    padding:6px;
    @media (max-width: 400px) {
        margin-top:6px;
    }
    &:hover{
        cursor:pointer
    }
`;
export const UserIcon=styled.img`
    margin-top:25px;
    height:30px;
    width:35px;
    float right;
    margin-left:auto;
    margin-right:0px;

`;

export const HeadText1=styled.p`
    font-size:40px;
    font-weight:700;
    margin-top:10px;
    margin-right:auto;
    float:left;
    @media (max-width: 400px) {
        font-size:22px;
        margin-top:10px;
    }
`;

export const HeadText2=styled.p`
    font-size:17px;
    font-weight:400;
    margin:33px 10px 10px auto;
    float right;
`;
export const Head=styled.div`
    width:99.5%;    
    display:flex;
    border:1px solid black;
    position:fixed;
    background-color:white;
   z-index:1;
`;
export const HeadDiv1=styled.div`
    display:flex;
    height:80px;
    margin:10px auto 10px 0px;
`;

export const HeadDiv2=styled.div`
    display:flex;
    height:80px;  
    margin-right:0px;
    margin-left:auto;
    margin-right:0px;
    @media (max-width: 400px) {
        display:none;
    }
  
`;
export const SidebarCon=styled.section`
    width:10%;
    height:100vh;
    border:1px solid black;
    margin-top:0px;
    top:101px;
    position:fixed;
    
    @media (max-width: 768px) {
        width:11%;
        position:fixed;
    }
    @media (max-width: 400px) {
        width:99.5%;
        top:99px;
        height:7vh;
        border:1px solid black;
        background-color:white;
        z-index:2;
    }
`;
export const SidebarDiv=styled.div`
    margin-top:40px;    
    width:100%;
    display:flex;
    flex-direction:column;
    @media (max-width: 400px) {
        flex-direction:row;
        margin-top:5px;
    }
`;
export const SidebarEl=styled(NavLink)`
    cursor:pointer;
    background:none;
    border-style:none;
    color:blue;
    margin-left:0px;
    margin-right:2px;
    padding:5px 8px 5px 17px;
    text-decoration-line: underline;
    font-size:18px;
    text-align:left;
    &.active {
        color: black;
    }
`;

export const SectionDiv=styled.div`
    display:flex;
    width:100%;
`;