import React from "react";
import Profile from '../../assets/profile.svg'

// import Button from '@mui/material/Button';
// import {styled} from ''

// const DisplayData=state.map(
//     (info)=>{
//         return(
          
//             <tr>
//                 <td>{info.name}</td>
//                 <td>{info.email}</td>
//                 <td>{info.password}</td>
//                 <td>{info.balance}</td>
                
//             </tr>
//         )
//     }
// )

class AnchorList extends React.Component {
    // const CMS = styled("div")({
    //     color: 'blue'
    //   });
    state = [{
        "companyname": "lorem epsum",
          "primarycontact": "abc",
          "phoneno": "+91996785646",
          "Email":"deepgrid@gmail.com",
          "status":'Active',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "def ",
          "phoneno": "+91945634533",
          "Email":"deepgrid@gmail.com",
          "status":'Inactive',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "hig ",
          "phoneno": "+919312434524",
          "Email":"deepgrid@gmail.com",
          "status":'Active',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "lmn ",
          "phoneno": "+919345673453",
          "Email":"deepgrid@gmail.com",
          "status":'Inactive',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "opq ",
          "phoneno": "+9193435645335",
          "Email":"deepgrid@gmail.com",
          "status":'Active',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "lmn ",
          "phoneno": "+919345673453",
          "Email":"deepgrid@gmail.com",
          "status":'Inactive',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "opq ",
          "phoneno": "+9193435645335",
          "Email":"deepgrid@gmail.com",
          "status":'Active',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "lmn ",
          "phoneno": "+919345673453",
          "Email":"deepgrid@gmail.com",
          "status":'Inactive',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "opq ",
          "phoneno": "+9193435645335",
          "Email":"deepgrid@gmail.com",
          "status":'Active',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "lmn ",
          "phoneno": "+919345673453",
          "Email":"deepgrid@gmail.com",
          "status":'Inactive',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "opq ",
          "phoneno": "+9193435645335",
          "Email":"deepgrid@gmail.com",
          "status":'Active',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "lmn ",
          "phoneno": "+919345673453",
          "Email":"deepgrid@gmail.com",
          "status":'Inactive',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "opq ",
          "phoneno": "+9193435645335",
          "Email":"deepgrid@gmail.com",
          "status":'Active',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "lmn ",
          "phoneno": "+919345673453",
          "Email":"deepgrid@gmail.com",
          "status":'Inactive',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "opq ",
          "phoneno": "+9193435645335",
          "Email":"deepgrid@gmail.com",
          "status":'Active',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "lmn ",
          "phoneno": "+919345673453",
          "Email":"deepgrid@gmail.com",
          "status":'Inactive',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "opq ",
          "phoneno": "+9193435645335",
          "Email":"deepgrid@gmail.com",
          "status":'Active',

    },
    {
        "companyname": "lorem epsum",
          "primarycontact": "lmn ",
          "phoneno": "+919345673453",
          "Email":"deepgrid@gmail.com",
          "status":'Inactive',

    },
]

// key = Object.keys(this.state)[0];
    // constructor(props){
    //     super(props);
    //     // handleLogout = () => {

    //     // }
      

    // }
//life cycles
    componentDidMount(){
        // this.setState(this.state);
    }


    render(){
// declare variables and fucntions in render 
const DisplayData=this.state.map(
    (info)=>{
        return(    
            <tr>
                <td> <input type="checkbox" /></td>
                <td>{info.companyname}</td>
                <td>{info.primarycontact}</td>
                <td>{info.phoneno}</td>
                <td>{info.Email}</td>
                <td>{info.status}</td>
                
            </tr>
        )
    }
)


        return(
            
            //write html code in return 
            <>
                {/* <CMS>CMS/Footer</CMS>
                <div>FOOTER </div> */}
                    <div className="row" style={{ marginTop: '2rem' }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <p>ANCHORS/Listing/Anchors</p>
                        <h1 style={{ marginTop: '-0.7rem', fontWeight: 'bold', fontSize: '28px' }}>ANCHORS</h1>
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
                
                <div style={{padding:'20px',borderRadius: '4px',backgroundColor: 'white',margin:'30px',}}>
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
                            marginBottom:'10px',
                            marginTop:'30px',
                            borderRadius: '4px',
                          }}
                         />
                </form>
                <button onClick={() => alert('Add anchor button clicked!')} style={{
        width: '115px;',
        height: '33px',
        marginTop: '28px',
        border: 'none',
        backgroundColor: '#8d4e85',
        color: 'white',
        borderRadius: '4px',
      }}>
      + Add anchor
    </button>
                </div>
                <div>
                    <table class="table ">
                        <thead>
                            <tr>
                                <th> <input
                                    type="checkbox" />
                                </th>
                                <th>Company Name</th>
                                <th>Primary Contact</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Status</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        
                        {/* {Object.keys(this.state).map(key => (
                                <p key={key}>{key}: {this.state[key]}</p>
                                 )
               )
    } 
     
        {/* {this.state} */} 
            {DisplayData}
     

                       </tbody>
                
                    </table>
                 
             
                </div>
                </div>
            </>

        )
    }
}

export default AnchorList;