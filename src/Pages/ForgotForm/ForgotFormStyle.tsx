import styled from 'styled-components';

export const Container=styled.div`
    width:380px; 
    margin:10px auto;
    padding:15px;
    @media (max-width: 375px) {
        width:90%;
    }
`;
export const Head=styled.div`
    margin-top:25px;
    margin-bottom:5px;
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
    align-items: Left;
    padding:5px;
`;

export const Label1=styled.span`
    text-align:left;
    padding-left:25px;
    display:block;
    margin:5px;
    font-weight:400;
    font-size:15px;
`;
export const Label2=styled.span`
    text-align:left;
    padding-left:25px;
    padding-top:20px;
    padding-bottom:10px;
    display:block;
    margin:5px;
    font-weight:400;
    font-size:15px;
`;
export const ForpText=styled.span`:
    padding-left:32px;
    font-size:25px;
    font-weight:700;
    display:flex;
    padding:15px 10px 15px 30px;
    margin:5px;
`;
export const InputDiv=styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-right:10px;
`;
export const IconInput=styled.img`
    height:30px;
    width:35px;
    padding:6px;
    border:1px solid grey;
    position:absolute;
    z-index:2;
    margin-top:9px;
    margin-left:30px;
    border-radius:5px;
    background:#DCDCDC;
    border-radius:5px 0px 0px 5px;
`;
export const Input=styled.input`
    line-height:24px;
    width:85%;
    font-size:18px;
    margin:9px 10px 15px 30px;
    padding-top:9px;
    padding-bottom:9px;
    padding-left:60px;
    display:block;
    border:1px solid grey;
    border-radius:5px;
    outline:none;
`;
export const SendB=styled.button`
    color:white;
    background:DodgerBlue;
    border:1px solid grey;
    padding:8px 38px;
    font-size:18px;
    font-weight:500;
    margin:15px 120px 15px 120px;
    border-radius:5px;
    cursor:pointer;
`;
export const ErrorText=styled.p`
    font-size:16px;
    color:red;
    margin:0px auto 15px 30px;
`;