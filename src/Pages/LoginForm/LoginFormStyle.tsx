import styled from 'styled-components'
import Envelope from '../Assests/Envelope.svg'

export const Container=styled.div`
    width:320px; 
    margin:10px auto;
`;
export const Head=styled.div`
    margin-top:20px;
    margin-bottom:0px;
    display:flex;
    flex-wrap:wrap;
`;

export const HeadText=styled.p`
    font-size:40px;
    font-weight:700;
`;
export const LogoIcon=styled.img`
    margin-top:45px;
    height:38px;
    width:44px;
    padding:6px;
`;
export const Form=styled.div`
    border:1.5px solid black;
    justify-content: center;
    align-items: center;
    margin-bottom:20px;
`;
export const Label=styled.span`
    text-align:left;
    padding-left:32px;
    display:flex;
    margin-top:25px;
    margin-bottom:10px;
    font-weight:500;
    font-size:18px;
`;
export const InputDiv=styled.div`
    display:flex;
    flex-wrap:wrap;
`;
export const Input=styled.input`
    position:relative;
    z-index:1;
    line-height:25px;
    width:70%;
    font-size:18px;
    margin:10px auto 13px 10px;
    padding-left:55px;
    padding-top:7px;
    padding-bottom:9px;
    display:inline;
    border:1px solid grey;
    border-radius:5px;
    outline:none;
`;


export const IconInput=styled.img`
    height:29px;
    width:35px;
    padding:6px;
    border:1px solid grey;
    position:absolute;
    z-index:2;
    margin-top:10px;
    margin-left:10px;
    border-radius:5px 0px 0px 5px;
    background:#DCDCDC;
`;
export const SubmitB=styled.button`
    color:white;
    background:DodgerBlue;
    border:1px solid grey;
    padding:8px 38px;
    font-size:18px;
    font-weight:500;
    margin:15px 12px 15px 18px;
    border-radius:5px;
    cursor:pointer;
`;
export const ResetB=styled.button`
    cursor:pointer;
    color:white;
    background:DarkGoldenRod;
    border:1px solid grey;
    padding:8px 38px;
    font-size:18px;
    font-weight:500;
    margin:15px 12px 15px 15px;
    border-radius:5px;
`;
export const ForgotPassL=styled.a`
    margin-left:195px;
`;
export const ErrorText=styled.p`
    font-size:15px;
    color:red;
    margin:-5px auto 15px 15px;
`;