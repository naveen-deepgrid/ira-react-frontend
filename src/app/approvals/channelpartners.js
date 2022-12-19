import React from "react";
import Profile from '../../assets/profile.svg'


class ChannelPartners extends React.Component {


    // key = Object.keys(this.state)[0];
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                "name": "lorem epsum",
                "phone": "+91996785646",
                "Email": "deepgrid@gmail.com",
                "decision": 'Active',

            },
            {
                "name": "lorem epsum",
                "phone": "+91996785646",
                "Email": "deepgrid@gmail.com",
                "decision": 'Active',
            },
            {
                "name": "lorem epsum",
                "phone": "+91996785646",
                "Email": "deepgrid@gmail.com",
                "decision": 'Active',
            },
            {
                "name": "lorem epsum",
                "phone": "+91996785646",
                "Email": "deepgrid@gmail.com",
                "decision": 'Active',

            },
            ],

            showDropdown: false
        }

    }
    //life cycles
    componentDidMount() {
        // this.setState(this.state);
    }
    handleCheckboxChange = (e) => {
        this.setState({ showDropdown: e.target.checked });
    }

    render() {
        // declare variables and fucntions in render 
        const DisplayData = this.state.data.map(
            (info) => {

                return (
                    <tr>
                        <td> <input
                            type="checkbox"
                        /></td>
                        <td>{info.name}</td>
                        <td>{info.phone}</td>
                        <td>{info.Email}</td>
                        <td>{info.decision}</td>

                    </tr>
                )
            }

        )
        // const handleChange = this.setState({
        //     return(
        //         showDropdown: !this.state.showDropdown
        //     )
        // }
        //     )

        return (
            //write html code in return 
            <>
                <div className="row" style={{ marginTop: '2rem' }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <p>CMS/CHANNEL PARTNER</p>
                        <h1 style={{ marginTop: '-0.7rem', fontWeight: 'bold', fontSize: '28px' }}>CHANNEL PARTNER</h1>
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
                {/* <CMS>CMS/Footer</CMS>
                <div>FOOTER </div> */}

                <div style={{ padding: '20px', borderRadius: '4px', backgroundColor: 'white', margin: '30px', }}>
                    <div style={{
                        display: 'flex',
                    }}>
                        <form style={{
                            width: '83%',
                            marginRight: '2%',
                        }}>
                            <input
                                type="text"
                                placeholder="Search..."
                                style={{
                                    marginRight: '28%',
                                    width: '53%',
                                    marginLeft: '8px',
                                    marginBottom: '10px',
                                    marginTop: '30px',
                                    borderRadius: '4px',
                                }}
                            />
                        </form>
                        <button onClick={() => alert('Add anchor button clicked!')} style={{
                            width: '115px',
                            height: '33px',
                            marginTop: '28px',
                            marginRight: '28px',
                            border: '1px solid #8d4e85',
                            backgroundColor: 'white',
                            color: '#8d4e85',
                            borderRadius: '4px',
                        }}>
                            Filter
                        </button>
                        {this.state.showDropdown && (
                            <ul className="dropdown-menu">
                                <button style={{
                                    width: '125px;',
                                    height: '33px',
                                    marginTop: '28px',
                                    border: '1px solid #8d4e85',
                                    backgroundColor: 'white',
                                    color: '#8d4e85',
                                    borderRadius: '4px',
                                }}>
                                    ChangeStatus
                                </button>
                                <select>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </ul>
                        )}
                    </div>
                    <div>
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th> <input
                                        type="checkbox"
                                        onChange={this.handleCheckboxChange} />

                                    </th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Decision</th>
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

export default ChannelPartners;