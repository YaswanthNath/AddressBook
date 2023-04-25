import styled from 'styled-components';


export const PlusIcon = styled.img`
    widht:32px;
    height:25px;
    margin-top:20px;
    cursor:pointer;
`;
export const Container = styled.div`
    width:100%; 
    margin:20px auto 20px 5px;
    border:1px solid black;
    @media (max-width: 400px) {
        margin:20px 5px;
        margin-left:0px;
        width:95%; 
    }
    
`;
export const Form = styled.div`
    margin:25px;
    width:95%; 
    @media (max-width: 400px) {
        margin:5px;
    }
    
`;
export const Label = styled.span`
    text-align:left;
    display:block;
    margin-top:20px;
    margin-left:0px;
    font-weight:500;
    font-size:18px;
`;
export const LabIcDiv = styled.div`
    display:flex;
`;
export const FeildDiv = styled.div`
    width:45%;
    @media only screen and (max-width: 400px) {
        width:85%;
    }
`;
export const Input = styled.input`
    line-height:30px;
    width:90%;
    font-size:18px;
    margin:10px 0px 2px 0px;
    display:inline;
    border:1px solid grey;
    border-radius:5px;
    padding-left:15px;
    @media only screen and (max-width: 600px) {
        font-size:15px;
    }
    outline:none;
    &.error {
    border-color: red;
    }
    
`;
export const Select = styled.select`
    line-height:30px;
    width:95%;
    font-size:18px;
    margin:6px auto;
    display:inline;
    border:1px solid grey;
    border-radius:5px;
    padding:7px;
    padding-left:10px;
    
    @media (max-width: 400px) {
        height:35px;
        width:98%;
        font-size:15px;
    }
    outline:none;
`;
export const OptionElement=styled.option`
    width:100px;
    height:100px;
`;
export const InputDiv = styled.section`
    width:90%;
    margin-bottom:20px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 400px) {
        display:flex;
        flex-wrap: no-wrap; 
        justify-content:center;
    }
`;
export const InputDiv1 = styled(InputDiv)`
margin-top:10px`;
export const InputDiv2 = styled(InputDiv)`
width:90%;
`;
export const InputDiv3 = styled(InputDiv)``;

export const InputDiscardDiv = styled.div`
    display:flex;
`;

export const DiscardButton1 = styled.img.attrs(props => ({
    type: 'img',
}))`
    width:30px;
    height:35px;
    margin:50px 30px;
    cursor:pointer;
    @media (max-width: 400px) {
        width:20px;
        height:25px;
        margin:50px 15px;
        margin-left:25px;
    }
    
`;
export const DiscardButton2 = styled(DiscardButton1)`
     margin:10px 30px;
     @media (max-width: 375px) {
        width:20px;
        height:25px;
        margin:10px 15px;
    }
`;
export const DiscardButton3 = styled(DiscardButton1)`
    margin:10px 30px;
    @media (max-width: 375px) {
        width:20px;
        height:25px;
        margin:10px 15px;
    }
`;

export const AddB = styled.button`
    cursor:pointer;
    color:white;
    background:DodgerBlue;
    border:1px solid grey;
    padding:8px 38px;
    font-size:18px;
    font-weight:500;
    margin-left:0px;
    border-radius:5px;
    display:block;
    margin-bottom:20px;
`;
export const SaveB = styled.button`
    cursor:pointer;
    color:white;
    background:DodgerBlue;
    border:1px solid grey;
    padding:8px 38px;
    font-size:18px;
    font-weight:500;
    border-radius:5px;
    display:inline;
    margin:20px;
`;
export const CancelB = styled.button`
    cursor:pointer;
    color:white;
    background:DarkGoldenRod;
    border:1px solid grey;
    padding:8px 38px;
    font-size:18px;
    font-weight:500;
    border-radius:5px;
    display:inline;
    margin:20px;
`;
export const ButtonD = styled.div`
    margin:10px auto;
    display:flex;
    justify-content:center;

`;
export const FormPart = styled.div`
    border-bottom:2px solid black;
`;
export const ErrorText = styled.span`
    font-size:15px;
    color:red;
    margin:-15px auto 15px 15px;
`;
export const ErrrorTextDiscard = styled(ErrorText)`
    margin:40px auto;
    fonst-size:13px;
`;
export const ErrrorTextPlus = styled(ErrorText)` 
    margin-top:0px;
    margin-left:5px;
    fonst-size:12px;
`;
export const NavepageDiv = styled.div`
        overflow: auto;
        width:86%;
        margin:5px;
        margin-left:7px;
        position:absolute;
        top:110px;
        left:125px;
        height: 80%;
    
    
    @media (max-width: 768px) {
        width:86%;
        height: 80%;
        margin:5px;
        margin-left:5px;
        position:absolute;
        top:105px;
        left:90px;
    }
    @media (max-width: 400px) {
        height: 80%;
        margin:0px;
        margin-left:0px;
        position:absolute;
        top:150px;
        left:0px;
        width:98%;
        overflow-x:hidden;
    }
`;