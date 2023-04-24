import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, ErrorText, ForgotPassL, Form, Head, HeadText, IconInput, Input, InputDiv, Label, LogoIcon, ResetB, SubmitB} from './LoginFormStyle'
import Envelope from '../../Assets/Envelope.svg';
import Password from '../../Assets/Password.svg';
import Logo from '../../Assets/Logo.png';
import {BrowserRouter as NavLink, Link,useNavigate} from 'react-router-dom';
function LoginForm() {
  const {handleSubmit,register, formState:{errors}}=useForm({mode:'all'});
  const navigate =useNavigate();

  const onSubmit:any=(data:any)=>{
    if(data.email=='yas@gmail.com' && data.password=='yas'){
      navigate('/address-book');
    }
  }
  return (
    <Container>
      <Head>
        <LogoIcon src={Logo} />
        <HeadText>Address Book</HeadText>
      </Head>
      <Form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Login to your account</Label>
          <InputDiv>
            <IconInput src={Envelope}></IconInput>
            <Input {...register('email',{required:true,pattern: {value:/^\S+@\S+\.\S+$/,message:'Email is wrong'} })} placeholder='Email'/>
            {errors.email && errors.email.type === "required" && (<ErrorText>Email is required</ErrorText>)}
            {errors.email && errors.email.type === "pattern" && (<ErrorText>Invalid Email</ErrorText>)}
                                
          </InputDiv>
          <InputDiv>
            <IconInput src={Password}></IconInput>
            <Input {...register('password',{required:true, minLength:{value:3,message:'Minimum length'},maxLength:{value:8,message:'Minimum length'}})} type='password' placeholder='Password'/>
            {errors.password && errors.password.type === "required" && (<ErrorText>Password is required</ErrorText>)}
            {errors.password && errors.password.type === "pattern" && (<ErrorText>Invalid password</ErrorText>)}
            {errors.password && errors.password.type === "minLength" && (<ErrorText>Password minimum Length is 3</ErrorText>)}
            {errors.password && errors.password.type === "maxLength" && (<ErrorText>Password maximum Length is 8</ErrorText>)}
          </InputDiv>
          <SubmitB type="submit">SignIn</SubmitB>
          <ResetB type="reset">Reset</ResetB>
        </form>
      </Form>
      <ForgotPassL><Link to="/forgot">Forgot Password?</Link></ForgotPassL>
    </Container>
  )
}
export default LoginForm
