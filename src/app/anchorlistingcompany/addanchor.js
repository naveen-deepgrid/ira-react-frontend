import React from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
const states = [
    'Select state',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
];

class AddAnchor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }

    }
    //life cycles
    componentDidMount() {

    }


    render() {
        // declare variables and fucntions in render 
        return (
            //write html code in return 
            <>

                <form>

                    <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'lightgray', margin: '10px' }}>
                        <div style={{ color: '#753d6a', marginLeft: '2px', marginBottom: '30px', fontSize: '24px', }} ><b>BASIC DETAILS</b></div>
                        <div style={{ display: 'flex', }}>
                            <label style={{ marginRight: '15%' }} >
                                Company name*<br></br>
                                <input placeholder="Enter company name" style={{
                                    width: '342px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    border: '1px solid lightgray',
                                    marginTop: '10px',
                                    textAlign: 'center',

                                }} type="text" name="companyName" />
                            </label >
                            <br />
                            <label>
                                Primary contact*<br></br>
                                <input placeholder="Enter primary contact" style={{
                                    width: '342px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    border: '1px solid lightgray',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                }} type="text" name="primaryContact" />
                            </label>
                        </div>

                        <div style={{ display: 'flex', marginTop: '10px' }}>
                            <label style={{ marginRight: '15%' }}>
                                Phone number*<br></br>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={this.state.value}
                                    onChange={value => this.setState({ value })}
                                    defaultCountry="IN"
                                    countries={['IN']}
                                    showCountrySelect={false}
                                    autoFormat
                                    style={{
                                        width: '342px',
                                        height: '40px',
                                        borderRadius: '12px',
                                        border: '1px solid lightgray',
                                        marginTop: '10px',
                                        textAlign: 'center',
                                        PhoneInput:{border:"none"},
                                    }} type="text" name="primaryContact" />
                            </label>
                            <br />
                            <label >
                                Secondary contact*<br></br>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={this.state.value}
                                    onChange={value => this.setState({ value })}
                                    defaultCountry="IN"
                                    countries={['IN']}
                                    showCountrySelect={false}
                                    autoFormat
                                    style={{
                                        width: '342px',
                                        height: '40px',
                                        borderRadius: '12px',
                                        border: 'white',
                                        marginTop: '10px',
                                        textAlign: 'center',
                                        PhoneInput: { border: "none" },
                                    }} type="text" name="primaryContact" />
                            </label>
                        </div>
                        <div style={{ display: 'flex', marginTop: '10px' }}>
                            <label style={{ marginRight: '15%' }}>
                                Alternate Phone number*<br></br>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={this.state.value}
                                    onChange={value => this.setState({ value })}
                                    defaultCountry="IN"
                                    countries={['IN']}
                                    showCountrySelect={false}
                                    autoFormat
                                    style={{
                                        width: '342px',
                                        height: '40px',
                                        borderRadius: '12px',
                                        border: '1px solid lightgray',
                                        marginTop: '10px',
                                        textAlign: 'center',
                                        PhoneInput: { border: "none" },
                                    }} type="text" name="primaryContact" />
                            </label>
                            <br />
                            <label>
                                Email ID*<br></br>
                                <input placeholder="Enter email id" style={{
                                    width: '342px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    border: '1px solid lightgray',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                }} type="text" name="emailid" />
                            </label>
                        </div>
                        <div style={{ display: 'flex', marginTop: '10px' }}>
                            <label style={{ marginRight: '15%' }}>
                                Website*<br></br>
                                <input placeholder="Enter company's website" style={{
                                    width: '342px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    border: '1px solid lightgray',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                }} type="url" name="companywebsite" />
                            </label>
                            <br />

                        </div>
                    </div>
                </form>
                <form style={{ marginTop: '50px' }}>

                    <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'lightgray', margin: '10px' }}>
                        <div style={{ color: '#753d6a', marginLeft: '2px', marginBottom: '30px', fontSize: '24px', }} ><b>RESIDENTIAL DETAILS</b></div>
                        <div style={{ display: 'flex', }}>
                            <label style={{ marginRight: '15%' }} >
                                Building name*<br></br>
                                <input placeholder="Enter building name" style={{
                                    width: '342px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    border: '1px solid lightgray',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                }} type="text" name="buildingName" />
                            </label >
                            <br />
                            <label>
                                Street name*<br></br>
                                <input placeholder="Enter street name" style={{
                                    width: '342px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    border: '1px solid lightgray',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                }} type="text" name="streetname" />
                            </label>
                        </div>

                        <div style={{ display: 'flex', marginTop: '10px' }}>
                            <label style={{ marginRight: '15%' }}>
                                State*<br></br>
                                <select className="form-control" placeholder="Select state" style={{ fontSize: '15px', width: '342px', borderRadius: '10px', marginTop: '11px', textAlign: 'center', color: '#807F7F' }}
                                    value={this.state.value} onChange={event => this.setState({ value: event.target.value })}>
                                    {states.map(state => (
                                        <option value={state}>{state}</option>
                                    ))}
                                </select>
                            </label>
                            <br />
                            <label>
                                City*<br></br>
                                <input placeholder="Enter city" style={{
                                    width: '342px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    border: '1px solid lightgray',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                }} type="text" name="city" />
                            </label>
                        </div>
                        <div style={{ display: 'flex', marginTop: '10px' }}>
                            <label style={{ marginRight: '15%' }}>
                                Market*<br></br>
                                <input placeholder="Enter market name" style={{
                                    width: '342px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    border: '1px solid lightgray',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                }} type="text" name="market" />
                            </label>
                            <br />
                            <label>
                                Pincode*<br></br>
                                <input placeholder="Enter pincode" style={{
                                    width: '342px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    border: '1px solid lightgray',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                }} type="text" name="pincode" />
                            </label>
                        </div>

                    </div>
                </form>
                <form style={{ marginTop: '50px' }}>

                    <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'lightgray', margin: '10px' }}>
                        <div style={{ color: '#753d6a', marginLeft: '2px', marginBottom: '30px', fontSize: '24px', }} ><b>KYC DETAILS</b></div>
                        <div style={{ display: 'flex', }}>
                            <label style={{ marginRight: '15%' }} >
                                Incorporation certificate*<br></br>
                                <input placeholder="Enter Incorporation certificate" style={{
                                    width: '342px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    border: '1px solid lightgray',
                                    marginTop: '10px',
                                    textAlign: 'center',

                                }} type="text" name="Incorporation certificate" />
                            </label >
                            <br />
                            <label>
                                PAN*<br></br>
                                <input placeholder="Enter PAN" style={{
                                    width: '342px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    border: '1px solid lightgray',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                }} type="text" name="PAN" />
                            </label>
                        </div>

                        <div style={{ display: 'flex', marginTop: '10px' }}>
                            <label style={{ marginRight: '15%' }}>
                                TAN*<br></br>
                                <input placeholder="Enter TAN" style={{
                                    width: '342px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    border: '1px solid lightgray',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                }} type="text" name="TAN" />
                            </label>
                            <br />
                            <label>
                                GST number*<br></br>
                                <input placeholder="Enter GST number" style={{
                                    width: '342px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    border: '1px solid lightgray',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                }} type="text" name="GSTnumber" />
                            </label>
                        </div>

                    </div>
                </form>
            </>
        )
    }
}

export default AddAnchor;