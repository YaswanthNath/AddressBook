import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../Assets/Logo.png';
import Envelope from '../../Assets/Envelope.svg';
import {BrowserRouter as NavLink, Link} from 'react-router-dom';
import {Container, ErrorText, ForpText, Form, Head, HeadText, IconInput, Input, InputDiv, Label1, Label2, LogoIcon, SendB} from './ForgotFormStyle';
function ForgotForm() {
  const {register, handleSubmit, formState:{errors}}=useForm({mode:'all'});
  const onSubmit:any =(data:any)=>{
    console.log('email send successfully');
  }
  return (
    <Container>
      <Head>
        <LogoIcon src={Logo} />
        <HeadText>Address Book</HeadText>
      </Head>
      <Form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ForpText>Forgot Password?</ForpText>
          <Label1>Enter your email address or username associated to your account.</Label1>
          <Label2>We will email you a link to reset your password</Label2>
          <InputDiv>
            <IconInput src={Envelope}></IconInput>
            <Input {...register('Email',{required:true,pattern: /^\S+@\S+\.\S+$/})}placeholder='Email'/>
            {errors.Email && errors.Email.type === "required" && (<ErrorText>Email is required</ErrorText>)}
            {errors.Email && errors.Email.type === "pattern" && (<ErrorText>Invalid Email</ErrorText>)}
          </InputDiv>
          <SendB type='submit'>Send</SendB>
        </form>
      </Form>
    </Container>
  )
}
export default ForgotForm;
