import React from "react";
// import Button from '@mui/material/Button';
// import {styled} from ''
import { RemoveRedEye } from '@mui/icons-material';
import { Icon } from '@material-ui/core';
import { DriveFileRenameOutline } from '@mui/icons-material';
import { Close } from '@mui/icons-material';
import { Popup } from 'react-leaflet';
import Profile from '../../../assets/profile.svg'

class MeetOurInvestors extends React.Component {

    state = [{
        "name": "Maya Desai",
        "description": "It's an incredible oppurtunity",
        "button": "LEARN MORE",
        icon1: <Icon><RemoveRedEye /></Icon>,
        icon2: <Icon><DriveFileRenameOutline /></Icon>,
        icon3: <Icon><Close /></Icon>,
    },
    {
        "name": "Jatin Joshi",
        "description": "It's an incredible oppurtunity",
        "button": "LEARN MORE",
        icon1: <Icon><RemoveRedEye /></Icon>,
        icon2: <Icon><DriveFileRenameOutline /></Icon>,
        icon3: <Icon><Close /></Icon>,
    },
    {
        "name": "Mehta Family",
        "description": "It's an incredible oppurtunity",
        "button": "LEARN MORE",
        icon1: <Icon><RemoveRedEye /></Icon>,
        icon2: <Icon><DriveFileRenameOutline /></Icon>,
        icon3: <Icon><Close /></Icon>,
    },
    {
        "name": "Sanjay Accha",
        "description": "It's an incredible oppurtunity",
        "button": "LEARN MORE",
        icon1: <Icon><RemoveRedEye /></Icon>,
        icon2: <Icon><DriveFileRenameOutline /></Icon>,
        icon3: <Icon><Close /></Icon>,
    },
    {
        "name": "Shiva Baru",
        "description": "It's an incredible oppurtunity",
        "button": "LEARN MORE",
        icon1: <Icon><RemoveRedEye /></Icon>,
        icon2: <Icon><DriveFileRenameOutline /></Icon>,
        icon3: <Icon><Close /></Icon>,
    },
    ]

    constructor(props) {
        super(props);

    }

    //life cycles
    componentDidMount() {
    }

    render() {
        // declare variables and fucntions in render    
        const DisplayData = this.state.map(
            (info) => {
                return (
                    <tr>
                        <td>{info.name}</td>
                        <td>{info.description}</td>
                        <td>{info.button}</td>
                        <td><Icon><RemoveRedEye
                            sx={{
                                color: "#D569C1",
                                backgroundColor: "#FFFFFF",
                                position: 'absolute',
                                width: '20.08px',
                                height: '20.08px'
                            }} /></Icon></td>
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

            <>
                <div className="row" style={{ marginTop: '2rem' }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <p>CMS/MEET OUR INVESTORS</p>
                        <h1 style={{ marginTop: '-0.7rem', fontWeight: 'bold', fontSize: '28px' }}>MEET OUR INVESTORS</h1>
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
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" style={{ margin: '3rem 0', paddingLeft: '45px', paddingRight: '50px' }}>
                        <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Title*</p>
                        <textarea style={{ height: '44px' }} rows="4" placeholder="Enter Title" className="form-control">

                        </textarea>
                    </div>
                </div>

                <div style={{ padding: '20px', borderRadius: '4px', backgroundColor: 'white', margin: '30px', }}>
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
                            <th>Investors</th>
                        </form>
                        <button onClick={() => alert('Add anchor button clicked!')} style={{
                            width: '115px;',
                            height: '33px',
                            marginTop: '28px',
                            border: 'none',
                            backgroundColor: '#8d4e85',
                            color: 'white',
                            borderRadius: '5px',
                        }}>
                            + Add Investors
                        </button>


                        {/* <Icon>
        <div>
        <button onClick={this.togglePopup}>
          My Icon
        </button>
        {this.state.showPopup && (
          <Popup
            content={this.state.popupContent}
            onClose={this.togglePopup}
          />
        )}
      </div>
        </Icon> */}
                    </div>
                    <div>
                        <table class="table ">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Button</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {DisplayData}

                            </tbody>

                        </table>

                    </div>
                </div>
            </>

        )
    }
}

export default MeetOurInvestors;