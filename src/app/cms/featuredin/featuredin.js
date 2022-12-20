import React from "react";
import Profile from '../../../assets/profile.svg'
import { Icon } from '@material-ui/core';
import { DriveFileRenameOutline } from '@mui/icons-material';
import { Close } from '@mui/icons-material';
import Cnn from '../../../assets/cnn.svg';
import Newyork from '../../../assets/newyork.svg';
import AddLink from "./addlink";


class FeaturedIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                "logo": <img src={Cnn} alt="image"/>,
                "url": "https://edition.cnn.com/",
                icon1: <Icon><DriveFileRenameOutline /></Icon>,
                icon2: <Icon><Close /></Icon>,
            },
            {
                "logo": <img src={Newyork} alt="image"/>,
                "url": "https://edition.cnn.com/",
                icon1: <Icon><DriveFileRenameOutline /></Icon>,
                icon2: <Icon><Close /></Icon>,
            },
            {
                "logo": <img src={Cnn} alt="image"/>,
                "url": "https://edition.cnn.com/",
                icon1: <Icon><DriveFileRenameOutline /></Icon>,
                icon2: <Icon><Close /></Icon>,
            }]
        }
    }

    renderPreview() {

        if (this.state.src) {
            return (
                <div>
                    <img src={this.state.src} className="profileImg-S" style={{ width: '400px', height: '250px', background: 'none', borderRadius: '0.3rem' }} />
                    <button onClick={this.handleclosebutton} style={{ background: 'none', border: 'none', position: 'absolute', marginLeft: '-1.5rem', marginTop: '-0.8rem' }}>
                        <img src={Close} alt='remove' style={{ width: '30px', height: '27px' }}></img>
                    </button>
                </div>

            );
        } else {
            return (
                <div>
                    <img className="profileImg-S" style={{ width: '400px', height: '250px', background: 'none', borderRadius: '0.3rem', background: 'gray' }} />
                </div>

            );
        }
    }

    renderPreview1() {
        if (this.state.src1) {
            return (

                <div>
                    <img src={this.state.src1} className="profileImg-S" style={{ width: '400px', height: '250px', background: 'none', borderRadius: '0.3rem' }} />
                    <button onClick={this.handleclosebutton1} style={{ background: 'none', border: 'none', position: 'absolute', marginLeft: '-1.5rem', marginTop: '-0.8rem' }}>
                        <img src={Close} style={{ width: '30px', height: '27px' }}></img>
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <img className="profileImg-S" style={{ width: '400px', height: '250px', background: 'none', borderRadius: '0.3rem', background: 'gray' }} />
                </div>

            );
        }
    }


    render() {
        const DisplayData = this.state.data.map(
            (info) => {
                return (
                    <tr style={{marginRight: '10px'}}>
                        <td><div style={{
                            border: '1px solid lightgrey',
                            // width: '110px',
                            position: 'relative',
                            left: '-1.73%',
                            right: '69.42%',
                            padding: '12px',
                            borderRadius: '6px',
                            alignItems: 'center'
                        }}>{info.logo}</div></td>
                        <td>{info.url}</td>
                        <td><Icon>
                            <DriveFileRenameOutline
                                sx={{
                                    width: '20.08px',
                                    height: '20.08px',
                                    position: 'absolute',
                                    color: '#00C899',
                                    backgroundColor: "#FFFFFF"
                                }} /></Icon></td>
                        <td><Icon>
                            <Close
                                sx={{
                                    width: '20.08px',
                                    height: '20.08px',
                                    position: 'absolute',
                                    color: '#F11046',
                                    backgroundColor: "#FFFFFF"
                                }} /></Icon></td>
                    </tr>
                )
            }
        )
        return (
            <div className="container-fluid">
                <div className="row" style={{ marginTop: '2rem' }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <p>CMS/Featured in</p>
                        <h1 style={{ marginTop: '-0.7rem', fontWeight: 'bold', fontSize: '28px' }}>FEATURED IN</h1>
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

                <div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" style={{ margin: '3rem 0' }}>
                        <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Title*</p>
                        <textarea style={{ height: '44px' }} rows="4" placeholder="Enter Title" className="form-control">

                        </textarea>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" style={{ margin: '3rem 0' }}>
                        <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Description*</p>
                        <textarea rows="4" placeholder="Enter Description" className="form-control">

                        </textarea>
                    </div>
                    <div className="Save-Button">
                        <button style={{ background: '#753d6a', border: '1px solid gray', borderRadius: '10px', width: '8rem', height: '3rem', float: 'right', color: 'white' }}>
                            <div className="row" style={{ padding: '0.5rem' }}>
                                <p style={{ fontWeight: 'bold', width: '3rem', margin: '0.2rem 0rem 0rem 1.7rem' }}>SAVE</p>
                            </div>
                        </button>

                    </div>
                </div>
                <div style={{ padding: '20px', borderRadius: '4px', backgroundColor: 'white', margin: '30px', marginTop: '150px' }}>
                    <div style={{
                        display: 'flex',
                    }}>
                        <form style={{
                            width: '83%',
                            marginRight: '2%',
                        }}>
                            <div
                                style={{
                                    margin: 'auto',
                                    width: '53%',
                                    marginLeft: '10px',
                                    marginBottom: '10px',
                                    marginTop: '30px',
                                    borderRadius: '5px',
                                }}
                            />
                            <th>LINKS</th>
                        </form>
                        <button onClick={() => {
                              this.props.passChildComponent(<AddLink />)
                        }} style={{
                            width: '115px;',
                            height: '33px',
                            marginTop: '28px',
                            border: 'none',
                            backgroundColor: '#8d4e85',
                            color: 'white',
                            borderRadius: '5px',
                            float: 'right'
                        }}>
                            + Add a link
                        </button>

                    </div>
                    <div>
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th style={{width: '10%'}}>LOGO</th>
                                    <th style={{paddingLeft: '10px'}}>URL</th>
                                    <th></th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>

                                {DisplayData}
                                {/* <IconButton>
                            <RemoveRedEyeIcon></RemoveRedEyeIcon>
                            </IconButton> */}
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>

        )
    }

}

export default FeaturedIn;