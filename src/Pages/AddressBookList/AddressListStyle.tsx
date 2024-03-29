import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainDiv = styled.section`
    width:98%;
    margin-left:0px;
    @media (max-width: 400px) {
        width:100%;
    }
`;
export const Table = styled.table`
    width:100%;
    border-collapse:collapse;
    border:1px solid black;
    margin-left:15px;
    margin-bottom:0px;
    @media (max-width: 400px) {
        width:95%;
        margin-left:0px;
        padding:0px;
        margin-left:10px
    }
`;
export const TableDitems = styled.td`
        font-size:17px;
        padding:6px 10px;
        overflow:auto;
        text-align:center;
    border:1px solid black;

    @media (max-width: 400px) {
        white-space: normal;
        font-size:12px;
        padding:6px 0px;
        text-align:center;
        border:1px solid black;
       
    }
`;
export const TableH = styled.thead`
    background:#A9A9A9;
`;
export const TableBody = styled.tbody`
    &:nth-child(odd) {
        background:#DCDCDC;
    }
`;
export const Container = styled.section`
    width:100%;
    margin:10px;
    padding:0px;
    
`;
export const ListCon = styled.div`
    margin:0;
    padding:0;
    width:100%;
    border:none;
`;
export const NoDataDiv = styled.div`
    font-size:18px;
    font-weight:400;
    @media (max-width: 400px) {
        margin-left:0px;
    }
`;
export const NoDataText = styled.div`
    font-size:16px;
    width:99.8%;
    border:1px solid black;
    margin-top:0px;
    text-align:center;
    border-top:none;
    margin-left:15px;
    margin-right:0px;
    @media (max-width: 400px) {
        margin-left:10px;
        width:94.5%;
        font-size:12px;
    }
`;
export const HeaderHome = styled.div`
    width:100%  ;
    background:lightgrey;
    margin:10px;
    margin-left:0px;
    padding:5px;
    margin-left:15px;  
    box-sizing:border-box;
    @media (max-width: 400px) {
        width:95%;
        margin-left:10px;
        padding:0px;
    }
`;

export const Nav = styled.nav`

`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 1rem;
`;

export const NavItemLink = styled(NavLink)`
    font-size:18px;
    display:none;
    text-decoration: none;
    color: black;
    &.active {
        display:inline;
        color: blue;
        padding: 0.5rem;
    };
    @media (max-width: 400px) {
        font-size:15px;
    };
`;

export const AddressLink = styled.link`
    float:left;
    margin-right:auto;
`;
export const SearchHeader = styled.div`
    width:80%;
    margin:10px 10px 10px 15px;
    @media (max-width: 400px) {
        margin:10px;
       
    }
`;
export const SearchBar = styled.input`
    width:50%;
    padding:10px auto 10px 10px;
    padding-left:15px;
    margin:5px 0px 5px 0px;
    font-size:18px;
    outline:none;
`;
export const ViewAddressButton = styled.button`
    border:none;
    cursor:pointer;
    background:none;
    &:hover {
    background-color: lightblue;
    width:70px;
    height:30px;
    border-radius:10px;
    color:white;
  }
`;
export const Buttons = styled.button`
    font-size:12px;
    padding:2px;
    margin:2px;
    cursor:pointer;
`;
export const NoSearchItem = styled.div`
    width:99.8%;
    border:1px solid black;
    margin-top:0px;
    text-align:center;
    border-top:none;
    margin-left:15px;
    margin-right:0px;
    font-size:16px;
    @media (max-width: 400px) {
        width:94.5%;
        margin-left:10px;
        font-size:12px;
    }
`;


