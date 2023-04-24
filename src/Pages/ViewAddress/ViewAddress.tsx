import React from 'react';
import { HeadingTag, SubHeadTag, SubDetails,Container } from './ViewAddressStyle';
function Viewaddress({ state, onFormChange }: any) {
    const GoBack = () => {
        onFormChange(false)
    }
    return (
        <>
            <Container>
                <h1>
                    {state.firstname} {state.lastname}
                </h1>
                <div>
                    <HeadingTag>Addresses</HeadingTag>
                    <div>
                        {state.address.map((addressitem: any, addressindex: number) => (
                            <>
                                <SubHeadTag>Address {addressindex+1} </SubHeadTag>
                                <SubDetails key={addressindex}>Line1:{addressitem.line1}<br />Line2:{addressitem.line2}<br />City:{addressitem.city}<br />State:{addressitem.state}<br />Country:{addressitem.country}<br />Zipcode:{addressitem.zipcode}<br />Type:{addressitem.typeaddress}</SubDetails>
                            </>
                        ))}
                    </div>
                    <HeadingTag>Phone Numbers</HeadingTag>
                    {state.phone.map((phoneitem: any, phoneindex: number) => (
                        <div key={phoneindex}>
                            <SubHeadTag>{phoneitem.typephone}-<SubDetails>{phoneitem.phonenumber}</SubDetails></SubHeadTag>
                        </div>
                    ))}
                </div>
                <HeadingTag>Email Addresses</HeadingTag>
                <div>
                    {state.email.map((emailitem: any, emailindex: number) => (
                        <div key={emailindex}>
                            <SubHeadTag>{emailitem.typeemail}-<SubDetails>{emailitem.email}</SubDetails></SubHeadTag>
                            
                        </div>
                    ))}
                </div>
                <button onClick={GoBack}>OK</button>
            </Container>
        </>
    )
}
export default Viewaddress;
