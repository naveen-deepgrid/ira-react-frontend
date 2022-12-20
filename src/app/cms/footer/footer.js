import React from "react";
import Profile from '../../../assets/profile.svg'
import Cross from '../../../assets/cross.svg'

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            picture: false,
            src: false,
            hover1: false,
            hover2: false,
            hover3: false,
            hover4: false,
            hover5: false,
            forms1: [{ id: 1 }],
            forms2: [{ id: 1 }],
            forms3: [{ id: 1 }],
            forms4: [{ id: 1 }],
            forms5: [{ id: 1 }]

        }

    }
    handleAdd1 = (e) => {
        e.preventDefault()
        const newForms1 = [...this.state.forms1, { id: this.state.forms1.length + 1 }];
        this.setState({ forms1: newForms1 });
    }
    handleAdd2 = (e) => {
        e.preventDefault()
        const newForms2 = [...this.state.forms2, { id: this.state.forms2.length + 1 }];
        this.setState({ forms2: newForms2 });
    }
    handleAdd3 = (e) => {
        e.preventDefault()
        const newForms3 = [...this.state.forms3, { id: this.state.forms3.length + 1 }];
        this.setState({ forms3: newForms3 });
    }
    handleAdd4 = (e) => {
        e.preventDefault()
        const newForms4 = [...this.state.forms4, { id: this.state.forms4.length + 1 }];
        this.setState({ forms4: newForms4 });
    }
    handleAdd5 = (e) => {
        e.preventDefault()
        const newForms5 = [...this.state.forms5, { id: this.state.forms5.length + 1 }];
        this.setState({ forms5: newForms5 });
    }
    handleMouseEnter1 = () => {
        this.setState({ hover1: true });
    };
    handleMouseLeave1 = () => {
        this.setState({ hover1: false });
    };
    handleMouseEnter2 = () => {
        this.setState({ hover2: true });
    };
    handleMouseLeave2 = () => {
        this.setState({ hover2: false });
    };
    handleMouseEnter3 = () => {
        this.setState({ hover3: true });
    };
    handleMouseLeave3 = () => {
        this.setState({ hover3: false });
    };
    handleMouseEnter4 = () => {
        this.setState({ hover4: true });
    };
    handleMouseLeave4 = () => {
        this.setState({ hover4: false });
    };
    handleMouseEnter5 = () => {
        this.setState({ hover5: true });
    };
    handleMouseLeave5 = () => {
        this.setState({ hover5: false });
    };
    //life cycles
    componentDidMount() {

    }
    handlePictureSelected(event) {
        var picture = event.target.files[0];
        var src = URL.createObjectURL(picture);
        // console.log(src)
        //    console.log(picture.name)
        this.setState({
            picture: picture.name,
            src: src
        });

    }

    renderPreview() {

        if (this.state.src) {
            return (
                <img src={this.state.src} className="profileImg-S" style={{ width: '217px', height: '163px', background: 'none', borderRadius: '0.3rem', marginTop: '11px' }} />
            );
        } else {
            return (
                <div>
                    <img className="profileImg-S" style={{ width: '217px', height: '163px', background: 'none', borderRadius: '0.3rem', background: 'gray', marginTop: '11px' }} />
                </div>

            );
        }
    }
    render() {
        // declare variables and fucntions in render 

        const { hover1, hover2, hover3, hover4, hover5, } = this.state;



        return (
            //write html code in return 
            <>
                <div className="row" style={{ marginTop: '2rem' }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <p>CMS/Footer</p>
                        <h1 style={{ marginTop: '-0.7rem', fontWeight: 'bold', fontSize: '28px' }}>FOOTER</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <button style={{ background: 'white', border: '1px solid gray', borderRadius: '10px', width: '10rem', height: '4rem', float: 'right', color: '#753d6a' }}>
                            <div className="row" style={{ padding: '0.5rem' }}>
                                <img src={Profile} style={{ width: '65px' }}></img>
                                <p style={{ fontWeight: 'bold', width: '3rem', margin: '0.5rem -0.9rem' }}>LOGOUT</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div style={{ margin: '20px' }}>
                    <div><b>LOGO & DESCRIPTION</b></div>
                    <form style={{ marginTop: '20px' }}>

                        <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'lightgray', margin: '10px' }}>

                            <div style={{ display: 'flex', }}>
                                <label style={{ marginRight: '5%', fontSize: 12 }} >
                                    Logo*<br></br>
                                    <label for="file-input">
                                        {this.renderPreview()}
                                    </label>
                                    <input type="file" id="file-input" onChange={this.handlePictureSelected.bind(this)} style={{ display: 'none' }} />

                                </label >
                                <br />
                                <label style={{ fontSize: 12 }}>
                                    Description*<br></br>
                                    <textarea placeholder="Description" style={{
                                        width: '503px',
                                        height: '164px',
                                        borderRadius: '4px',
                                        border: '1px solid lightgray',
                                        marginTop: '10px',

                                    }} type="text" name="PAN" />
                                </label>
                            </div>



                        </div>
                    </form>
                    <div style={{ display: 'flex', marginTop: '40px' }}><b><div>SOCIAL MEDIA LINKS </div></b><div style={{
                        fontSize: 12, marginTop: '6px', marginLeft: '6px'
                    }}>(You can add upto 4 Social Media Links)</div></div>    <form style={{ marginTop: '20px' }}>
                        {this.state.forms1.map(form => (
                            <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'lightgray', margin: '5px', marginBottom: '20px' }}>

                                <div style={{ display: 'flex', }}>
                                    <label style={{ marginRight: '5%', fontSize: 12 }} >
                                        Logo*<br></br>
                                        <label for="file-input">
                                            {this.renderPreview()}
                                        </label>
                                        <input type="file" id="file-input" onChange={this.handlePictureSelected.bind(this)} style={{ display: 'none' }} />

                                    </label >
                                    <br />
                                    <label style={{ fontSize: 12 }}>
                                        Description*<br></br>
                                        <textarea placeholder="Description" style={{
                                            width: '503px',
                                            height: '100px',
                                            borderRadius: '4px',
                                            border: '1px solid lightgray',
                                            marginTop: '10px',

                                        }} type="text" name="PAN" />
                                    </label>
                                </div>
                            </div>
                        ))}
                        <button onMouseEnter={this.handleMouseEnter1}
                            onMouseLeave={this.handleMouseLeave1} onClick={this.handleAdd1} style={{
                                width: '115px;',
                                height: '33px',
                                marginTop: '28px',
                                border: '1px solid #8d4e85',

                                backgroundColor: hover1 ? '#8d4e85' : 'white',
                                color: hover1 ? 'white' : '#8d4e85',
                                borderRadius: '5px',
                                float: 'right'
                            }}>
                            + Add More
                        </button>
                    </form>

                    <div style={{ display: 'flex', marginTop: '120px' }}><b><div>Footer Navigation </div></b><div style={{
                        fontSize: 12, marginTop: '6px', marginLeft: '6px'
                    }}>(You can add upto 8 navigations under each header)</div></div>
                    <div style={{ marginTop: '30px' }}>IRA-Street</div>
                    <form style={{ marginTop: '20px' }}>
                        {this.state.forms2.map(form => (
                            <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'lightgray', margin: '10px' }}>
                    <img src={Cross} style={{ position: 'absolute',width: '20px',height:'20px',marginLeft:'1120px' }}></img>
                                <div style={{ display: 'flex', }}>
                                    <label style={{ marginRight: '5%', fontSize: 12 }} >
                                        Navigation Title*<br></br>
                                        <input placeholder="Enter title" style={{
                                            width: '214px',
                                            height: '35px',
                                            borderRadius: '4px',
                                            border: '1px solid lightgray',
                                            marginTop: '10px',
                                            textAlign: 'left',
                                            paddingLeft: '12px',
                                            backgroundImage: 'url("upload.png")',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                        }} type="text" name="Incorporation certificate" />

                                    </label >
                                    <br />
                                    <label style={{ fontSize: 12 }}>
                                        URL*<br></br>
                                        <textarea placeholder="Enter URL" style={{
                                            width: '503px',
                                            height: '35px',
                                            borderRadius: '4px',
                                            border: '1px solid lightgray',
                                            marginTop: '10px',
                                            textAlign: 'left',
                                            paddingLeft: '12px',

                                        }} type="text" name="PAN" />
                                    </label>
                                </div>



                            </div>
                        ))}
                        <button onMouseEnter={this.handleMouseEnter2}
                            onMouseLeave={this.handleMouseLeave2} onClick={this.handleAdd2} style={{
                                width: '115px;',
                                height: '33px',
                                marginTop: '28px',
                                border: '1px solid #8d4e85',
                                backgroundColor: hover2 ? '#8d4e85' : 'white',
                                color: hover2 ? 'white' : '#8d4e85',
                                borderRadius: '5px',
                                float: 'right'
                            }}>
                            + Add More
                        </button>
                    </form>


                    <div style={{ marginTop: '80px' }}>FOR INVESTORS</div>
                    <form style={{ marginTop: '20px' }}>
                        {this.state.forms3.map(form => (
                            <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'lightgray', margin: '10px' }}>

                                <div style={{ display: 'flex', }}>
                                    <label style={{ marginRight: '5%', fontSize: 12 }} >
                                        Navigation Title*<br></br>
                                        <input placeholder="Enter title" style={{
                                            width: '214px',
                                            height: '35px',
                                            borderRadius: '4px',
                                            border: '1px solid lightgray',
                                            marginTop: '10px',
                                            textAlign: 'left',
                                            paddingLeft: '12px',
                                            backgroundImage: 'url("upload.png")',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                        }} type="text" name="Incorporation certificate" />

                                    </label >
                                    <br />
                                    <label style={{ fontSize: 12 }}>
                                        URL*<br></br>
                                        <textarea placeholder="Enter URL" style={{
                                            width: '503px',
                                            height: '35px',
                                            borderRadius: '4px',
                                            border: '1px solid lightgray',
                                            marginTop: '10px',
                                            textAlign: 'left',
                                            paddingLeft: '12px',

                                        }} type="text" name="PAN" />
                                    </label>
                                </div>



                            </div>
                        ))}
                        <button onMouseEnter={this.handleMouseEnter3}
                            onMouseLeave={this.handleMouseLeave3} onClick={this.handleAdd3} style={{
                                width: '115px;',
                                height: '33px',
                                marginTop: '28px',
                                border: '1px solid #8d4e85',
                                backgroundColor: hover3 ? '#8d4e85' : 'white',
                                color: hover3 ? 'white' : '#8d4e85',
                                borderRadius: '5px',
                                float: 'right'
                            }}>
                            + Add More
                        </button>
                    </form>

                    <div style={{ marginTop: '80px' }}>FOR ANCHORS</div>
                    <form style={{ marginTop: '20px' }}>
                        {this.state.forms4.map(form => (
                            <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'lightgray', margin: '10px' }}>

                                <div style={{ display: 'flex', }}>
                                    <label style={{ marginRight: '5%', fontSize: 12 }} >
                                        Navigation Title*<br></br>
                                        <input placeholder="Enter title" style={{
                                            width: '214px',
                                            height: '35px',
                                            borderRadius: '4px',
                                            border: '1px solid lightgray',
                                            marginTop: '10px',
                                            textAlign: 'left',
                                            paddingLeft: '12px',
                                            backgroundImage: 'url("upload.png")',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                        }} type="text" name="Incorporation certificate" />

                                    </label >
                                    <br />
                                    <label style={{ fontSize: 12 }}>
                                        URL*<br></br>
                                        <textarea placeholder="Enter URL" style={{
                                            width: '503px',
                                            height: '35px',
                                            borderRadius: '4px',
                                            border: '1px solid lightgray',
                                            marginTop: '10px',
                                            textAlign: 'left',
                                            paddingLeft: '12px',

                                        }} type="text" name="PAN" />
                                    </label>
                                </div>



                            </div>
                        ))}
                        <button onMouseEnter={this.handleMouseEnter4}
                            onMouseLeave={this.handleMouseLeave4} onClick={this.handleAdd4} style={{
                                width: '115px;',
                                height: '33px',
                                marginTop: '28px',
                                border: '1px solid #8d4e85',
                                backgroundColor: hover4 ? '#8d4e85' : 'white',
                                color: hover4 ? 'white' : '#8d4e85',
                                borderRadius: '5px',
                                float: 'right'
                            }}>
                            + Add More
                        </button>
                    </form>
                    <div style={{ marginTop: '80px' }}>FINANCIAL MODELS</div>
                    <form style={{ marginTop: '20px' }}>
                        {this.state.forms5.map(form => (
                            <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'lightgray', margin: '10px' }}>

                                <div style={{ display: 'flex', }}>
                                    <label style={{ marginRight: '5%', fontSize: 12 }} >
                                        Navigation Title*<br></br>
                                        <input placeholder="Enter title" style={{
                                            width: '214px',
                                            height: '35px',
                                            borderRadius: '4px',
                                            border: '1px solid lightgray',
                                            marginTop: '10px',
                                            textAlign: 'left',
                                            paddingLeft: '12px',
                                            backgroundImage: 'url("upload.png")',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                        }} type="text" name="Incorporation certificate" />

                                    </label >
                                    <br />
                                    <label style={{ fontSize: 12 }}>
                                        URL*<br></br>
                                        <textarea placeholder="Enter URL" style={{
                                            width: '503px',
                                            height: '35px',
                                            borderRadius: '4px',
                                            border: '1px solid lightgray',
                                            marginTop: '10px',
                                            textAlign: 'left',
                                            paddingLeft: '12px',

                                        }} type="text" name="PAN" />
                                    </label>
                                </div>



                            </div>
                        ))}
                        <button onMouseEnter={this.handleMouseEnter5}
                            onMouseLeave={this.handleMouseLeave5} onClick={this.handleAdd5} style={{
                                width: '115px;',
                                height: '33px',
                                marginTop: '28px',
                                border: '1px solid #8d4e85',
                                backgroundColor: hover5 ? '#8d4e85' : 'white',
                                color: hover5 ? 'white' : '#8d4e85',
                                borderRadius: '5px',
                                float: 'right'
                            }}>
                            + Add More
                        </button>
                    </form>
                </div>
            </>
        )
    }
}

export default Footer;