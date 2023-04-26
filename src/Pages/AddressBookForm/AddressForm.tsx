import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Plus from '../../Assets/plus.svg'
import { ButtonD, CancelB, Container, DiscardButton1, DiscardButton2, DiscardButton3, ErrrorTextDiscard, ErrrorTextPlus,ErrorText, FeildDiv, Form, FormPart, Input, InputDiscardDiv, InputDiv, InputDiv1, InputDiv2, InputDiv3, Label, LabIcDiv, PlusIcon, SaveB, Select } from '../../Pages/AddressBookForm/AddressFormStyle';
import CountryData from '../../Data/CountryData.json'
import wrong from '../../Assets/wrong.svg';
export interface AddressBook {
    firstname: string,
    lastname: string,
    address: Newaddress[],
    email: Newemail[],
    phone: Newphone[]
}
export interface Newaddress {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    zipcode: number;
    typeaddress: string;
}
export interface Newemail {
    email: string;
    typeemail: string;
}
export interface Newphone {
    phonenumber: string;
    typephone: string;
}
const data = {
    firstname: "",
    lastname: "",
    address: [{
        line1: "",
        line2: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
        typeaddress: ""
    }],
    email: [{
        email: "",
        typeemail: ""
    }],
    phone: [{
        phonenumber: "",
        typephone: ""
    }]
};
function AddressFormPage({ onFormChange, addressToEdit }: any) {
    const { register, handleSubmit, setError, formState: { errors } ,clearErrors} = useForm({ mode: 'all' });
    const [formData, setFormData] = useState<AddressBook | any>(data);
    const [isSubmitted, setSubmit] = useState(false);
    const [indexOfAddress, setIndexAddress] = useState(0);
    const [indexOfEmail, setIndexEmail] = useState(0);
    const [indexOfPhone, setIndexPhone] = useState(0);
    const [cancel,setCancel]=useState(false);
    const text= (addressToEdit ? "Update" : 'Submit');
    const formRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (formRef.current !== null) {
            formRef.current.scrollIntoView({ block: "start" });
        }
    }, []);
    useEffect(() => {
        if (!addressToEdit) {
            setFormData(Initialdata);
        }
        else {
            setFormData(addressToEdit);
        }
    }, []);
    const Initialdata = {
        firstname: "",
        lastname: "",
        address: [{
            line1: "",
            line2: "",
            city: "",
            state: "",
            country: "",
            zipcode: "",
            typeaddress: ""
        }],
        email: [{
            email: "",
            typeemail: ""
        }],
        phone: [{
            phonenumber: "",
            typephone: ""
        }]
    };
    const onSubmit = (dataa: any, event: any) => {
        event.preventDefault();
        setSubmit(true);
        onFormChange(formData);
    };
    const handleInput = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setFormData({ ...formData, [name]: value })
    };
    const handleAddFieldsAddress = (e: any) => {
        let req = Object.entries(formData.address[formData.address.length - 1]);
        const value: any = req[0][1];
        if (value) {
            const address = [...formData.address];
            address.push({
                line1: "",
                line2: "",
                city: "",
                state: "",
                country: "",
                zipcode: "",
                typeaddress: ""
            })
            setFormData({ ...formData, address });
            
        }
        else{
            setError("plusButton", {
                type: "manual",
                message: "Atleast 1 Address Needed",
            })}
    };
    const handleAddFieldsEmail = (e: any) => {
        const email = [...formData.email];
        email.push({
            email: "",
            typeemail: ""
        });
        setFormData({ ...formData, email });
    }
    const handleChangeInput = (event: any, index: number, type: string) => {
        const { name, value } = event.target;
        const formDataCopy = { ...formData };

        let req = Object.entries(formData.address[0]);
        const linevalue: any = req[0][1];
        if(value){
            clearErrors("plusButton")
        }
        formDataCopy[type][index][name.slice(0, -1)] = value;
        setFormData(formDataCopy);
    };
    const handleAddFieldsPhone = (e: any) => {
        const phone = [...formData.phone];
        phone.push({
            phonenumber: "",
            typephone: ""
        });
        setFormData({ ...formData, phone });
    };
    const handleDiscardAddress = (indexToRemove: number, event: any) => {
        event.preventDefault();
        const address: any = [...formData.address];
        if (address.length > 1) {
            address.splice(indexToRemove, 1);
            setFormData({ ...formData, address });
            setIndexAddress(indexOfAddress - 1);
        } else {
            setError("discardButton", {
                type: "manual",
                message: "Atleast 1 Address Needed",
            })
        }
    };
    const handleDiscardEmail = (indexToRemove: number, event: any) => {
        event.preventDefault();
        const email: any = [...formData.email];
        if (email.length > 1) {
            email.splice(indexToRemove, 1);
            setFormData({ ...formData, email });
            setIndexEmail(indexOfEmail - 1);
        }
    };
    const handleDiscardPhone = (indexToRemove: number, event: any) => {
        event.preventDefault();
        const phone: any = [...formData.phone];
        if (phone.length > 1) {
            phone.splice(indexToRemove, 1);
            setFormData({ ...formData, phone });
            setIndexPhone(indexOfPhone - 1);
        }
    };
    return (
        <Container >
            {!isSubmitted &&
                <Form ref={formRef}>
                    <form onSubmit={handleSubmit(onSubmit)}  >
                        <FormPart>
                            <InputDiv>
                                <FeildDiv>
                                    <Input {...register('firstname', { required: true, pattern: { value: /^[a-zA-Z '.-]*$/, message: "First Name should be valid" } })} placeholder='First Name' value={formData.firstname} onChange={(e) => handleInput(e)} className={errors['firstname'] ? "error" : ""}/>
                                    {errors.firstname && errors.firstname.type === "required" && (<ErrorText>First name is required</ErrorText>)}
                                    {errors.firstname && errors.firstname.type === "pattern" && (<ErrorText>Invalid First Name</ErrorText>)}
                                </FeildDiv>
                                <FeildDiv>
                                    <Input {...register('lastname', { required: true, pattern: { value: /^[a-zA-Z '.-]*$/, message: "Last Name should be valid" } })} placeholder='Last Name' value={formData.lastname} onChange={(e) => handleInput(e)} className={errors['lastname'] ? "error" : ""}/>
                                    {errors.lastname && errors.lastname.type === "required" && (<ErrorText>Last name is required</ErrorText>)}
                                    {errors.lastname && errors.lastname.type === "pattern" && (<ErrorText>Invalid Last Name</ErrorText>)}
                                </FeildDiv>
                            </InputDiv>
                        </FormPart>
                        <FormPart>
                            <LabIcDiv>
                                <Label>Address</Label>
                                <PlusIcon {...register('plusButton')} onClick={(e) => handleAddFieldsAddress(e)} src={Plus} />
                            </LabIcDiv>
                            {errors.plusButton ?.type=='manual' && <ErrrorTextPlus>Atleast 1 Address is Needed</ErrrorTextPlus>}
                            {formData.address.map((add: any, index: number) => (
                                <InputDiscardDiv key={index}>
                                    <InputDiv1  >
                                        <FeildDiv>
                                            <Input {...register(`line1${index}`, { required: true, pattern: { value: /^[a-zA-Z '.-]*$/, message: 'Line1 is required' } })} placeholder='Line 1' value={add.line1} onChange={(event) => handleChangeInput(event, index, 'address')} className={errors[`line1${index}`] ? "error" : ""}/>      
                                             {errors['line1' + index]?.type === "required" && (<ErrorText>Line1 is required</ErrorText>)}
                                            {errors['line1' + index]?.type === "pattern" && (<ErrorText>Invalid Line1</ErrorText>)}

                                        </FeildDiv>

                                        <FeildDiv>
                                            <Input {...register(`line2${index}`, { required: true, pattern: { value: /^[a-zA-Z '.-]*$/, message: 'Line1 is required' } })} placeholder='Line 2' value={add.line2} onChange={(event) => handleChangeInput(event, index, 'address')} className={errors[`line2${index}`] ? "error" : ""}/>                                         
                                             {errors['line2' + index]?.type === "required" && (<ErrorText>Line2 is required</ErrorText>)}
                                            {errors['line2' + index]?.type === "pattern" && (<ErrorText>Invalid Line2</ErrorText>)}
                                        </FeildDiv>
                                        <FeildDiv>
                                            <Input {...register(`city${index}`, { required: true, pattern: { value: /^[a-zA-Z '.-]*$/, message: 'Line1 is required' } })} placeholder='City' value={add.city} onChange={(event) => handleChangeInput(event, index, 'address')} className={errors[`city${index}`] ? "error" : ""}/>
                                            {errors['city' + index]?.type === "required" && (<ErrorText>City is required</ErrorText>)}
                                            {errors['city' + index]?.type === "pattern" && (<ErrorText>Invalid City</ErrorText>)}
                                        </FeildDiv>
                                        <FeildDiv>
                                            <Input {...register(`state${index}`, { required: true, pattern: { value: /^[a-zA-Z '.-]*$/, message: 'Line1 is required' } })} placeholder='State' value={add.state} onChange={(event) => handleChangeInput(event, index, 'address')} className={errors[`state${index}`] ? "error" : ""}/>
                                            {errors['state' + index]?.type === "required" && (<ErrorText>State is required</ErrorText>)}
                                            {errors['state' + index]?.type === "pattern" && (<ErrorText>Invalid State</ErrorText>)}
                                        </FeildDiv>
                                        <FeildDiv>
                                            <Select {...register(`country${index}`, { required: true })} value={add.country}
                                                onChange={(event) => handleChangeInput(event, index, 'address')} className={errors[`country${index}`] ? "error" : ""} autoFocus>
                                                <option>Country</option>
                                                {CountryData.map((getCountry, index) => (<option value={getCountry.country_name} key={index}>{getCountry.country_name}</option>))}
                                            </Select>
                                            {errors['country' + index]?.type === "required" && (<ErrorText>country is required</ErrorText>)}
                                        </FeildDiv>
                                        <FeildDiv>
                                            <Input {...register(`zipcode${index}`, { required: true, valueAsNumber: true })} placeholder='Zip code' value={add.zipcode} onChange={(event) => handleChangeInput(event, index, 'address')} className={errors[`zipcode${index}`] ? "error" : ""}/>
                                            {errors['zipcode' + index]?.type === "required" && (<ErrorText>Zipcode is required</ErrorText>)}
                                            {errors['zipcode' + index]?.type === "valueAsNumber" && (<ErrorText>Invalid Zipcode</ErrorText>)}
                                        </FeildDiv>
                                        <FeildDiv>
                                            <Select {...register(`typeaddress${index}`, { required: true })} value={add.typeaddress}
                                                onChange={(event) => handleChangeInput(event, index, 'address')} placeholder='Select' className={errors[`typeaddress${index}`] ? "error" : ""} autoFocus >
                                                <option>Type</option>
                                                <option value="Personal">Personal</option>
                                                <option value="Work"> Work</option>
                                            </Select>
                                            {errors['typeaddress' + index]?.type === "required" && (<ErrorText>Line1 is required</ErrorText>)}
                                        </FeildDiv>
                                    </InputDiv1>
                                    <DiscardButton1 {...register('discardButton',)} onClick={(e) => handleDiscardAddress(index, e)} src={wrong} style={{ display: (formData.address.length>1) ? 'block' : 'none' }} />
                                    {errors.discardButton?.type === "manual" && <ErrrorTextDiscard>Atleast 1 Address is Needed</ErrrorTextDiscard>}
                                </InputDiscardDiv>

                            ))}
                        </FormPart>
                        <FormPart>
                            <LabIcDiv>
                                <Label>Email Address</Label>
                                <PlusIcon onClick={(e) => handleAddFieldsEmail(e)} src={Plus} />
                            </LabIcDiv>
                            {formData.email.map((email: any, index: number) => (
                                <InputDiscardDiv key={index}>
                                    <InputDiv2>
                                        <FeildDiv>
                                            <Input {...register(`email${index}`, { required: true, pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email is wrong' } })} placeholder='Email' value={email.email}
                                                onChange={(event) => handleChangeInput(event, index, 'email')} className={errors[`email${index}`] ? "error" : ""}/>
                                            {errors['email' + index]?.type === "required" && (<ErrorText>Email is required</ErrorText>)}
                                            {errors['email' + index]?.type === "pattern" && (<ErrorText>Invalid Email</ErrorText>)}
                                        </FeildDiv>
                                        <FeildDiv>
                                            <Select {...register(`typeemail${index}`, { required: true })} value={email.typeemail}
                                                onChange={(event) => handleChangeInput(event, index, 'email')} className={errors[`typeemail${index}`] ? "error" : ""} autoFocus>
                                                <option>Type</option>
                                                <option selected value='Personal'>Personal</option>
                                                <option value='Work'>Work</option>
                                            </Select>
                                            {errors['typeemail' + index]?.type === "required" && (<ErrorText>Type Email is required</ErrorText>)}
                                        </FeildDiv>
                                    </InputDiv2>
                                    <DiscardButton2 {...register('discardButton')} onClick={(e) => handleDiscardEmail(index, e)} src={wrong} style={{ display: (formData.address.length>1) ? 'block' : 'none' }} />
                                </InputDiscardDiv>
                            ))}
                        </FormPart>
                        <FormPart>
                            <LabIcDiv>
                                <Label>Phone Number</Label>
                                <PlusIcon src={Plus} onClick={(e) => handleAddFieldsPhone(e)} />
                            </LabIcDiv>
                            {formData.phone.map((phone: any, index: number) => (
                                <InputDiscardDiv key={index}>
                                    <InputDiv3 key={index}>
                                        <FeildDiv>
                                            <Input {...register(`phonenumber${index}`, { required: true })} value={phone.phonenumber} placeholder='Phone Number'
                                                onChange={(event) => handleChangeInput(event, index, 'phone')} className={errors[`phonenumber${index}`] ? "error" : ""}/>
                                            {errors['phonenumber' + index]?.type === "required" && (<ErrorText>Phone Number is required</ErrorText>)}
                                            {errors['phonenumber' + index]?.type === "pattern" && (<ErrorText>Invalid Phone Number</ErrorText>)}
                                        </FeildDiv>
                                        <FeildDiv>
                                            <Select {...register(`typephone${index}`, { required: true })} value={phone.typephone}
                                                onChange={(event) => handleChangeInput(event, index, 'phone')} className={errors[`typephone${index}`] ? "error" : ""} autoFocus>
                                                <option>Type</option>
                                                <option selected value='Personal'>Personal</option>
                                                <option value='Work'>Work</option>
                                            </Select>
                                            {errors['typephone' + index]?.type === "required" && <ErrorText>Enter Type Phone</ErrorText>}
                                        </FeildDiv>
                                    </InputDiv3>
                                    <DiscardButton3 {...register('discardButton')} onClick={(e) => handleDiscardPhone(index, e)} src={wrong} style={{ display: (formData.address.length>1) ? 'block' : 'none' }} />
                                </InputDiscardDiv>
                            ))}
                        </FormPart>
                        <ButtonD>
                            <SaveB type='submit' >{text}</SaveB>
                            <CancelB>Cancel</CancelB>
                        </ButtonD>
                    </form>
                </Form>
            }
        </Container>
    )
}
export default AddressFormPage;
