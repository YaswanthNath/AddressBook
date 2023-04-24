import React from 'react';
import { HeadingTag,SubHeadTag,SubDetails } from './ViewAddressStyle';
function Viewaddress({ state,onFormChange }: any) {
    const GoBack=()=>{
        onFormChange(false)
    }
    return (
        <>
            <div>
                <h1>
                    {state.firstname} {state.lastname}
                </h1>
                <div>
                    <HeadingTag>Addresses</HeadingTag><hr></hr>
                    <div>
                        {state.address.map((addressitem: any, addressindex: number) => (
                            <SubDetails key={addressindex}>Line1:{addressitem.line1}<br/>Line2:{addressitem.line2}<br/>City:{addressitem.city}<br/>State:{addressitem.state}<br/>Country:{addressitem.country}<br/>Zipcode:{addressitem.zipcode}<br/>Type Address:{addressitem.typeaddress}</SubDetails>
                        ))}
                    </div>
                    <HeadingTag>Phone Numbers</HeadingTag><hr></hr>
                    {state.phone.map((phoneitem: any, phoneindex: number) => (
                        <div key={phoneindex}>
                            <SubDetails>{phoneitem.phonenumber}</SubDetails>
                            <SubDetails>Type Phone:{phoneitem.typephone}</SubDetails>
                        </div>
                    ))}
                </div>
                <HeadingTag>Email Addresses</HeadingTag><hr></hr>
                <div>
                    {state.email.map((emailitem: any, emailindex: number) => (
                        <div key={emailindex}>
                            <SubDetails>{emailitem.email}</SubDetails>
                            <SubDetails>Type Email:{emailitem.typeemail}</SubDetails>
                        </div>
                    ))}
                </div>
                <button onClick={GoBack}>OK</button>
            </div>
        </>
    )
}
export default Viewaddress;
