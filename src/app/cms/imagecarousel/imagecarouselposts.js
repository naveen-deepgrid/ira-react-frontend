import React from "react";
// import Button from '@mui/material/Button';
// import {styled} from ''
import {RemoveRedEye} from '@mui/icons-material';
import { Icon } from '@material-ui/core';
import {DriveFileRenameOutline} from '@mui/icons-material';
import {Close} from '@mui/icons-material';
import Profile from '../../../assets/profile.svg'
import AddImageCarousel from "./addimagecarousel";


class ImageCarouselPosts extends React.Component {
    // const CMS = styled("div")({
    //     color: 'blue'
    //   });
    state = [{
        "title": "IRA-STREET",
          "description": "Marketplace for Investors & Real Estate",
          "button": "START NOW",
          icon1: <Icon><RemoveRedEye /></Icon>,
          icon2: <Icon><DriveFileRenameOutline /></Icon>,
          icon3: <Icon><Close /></Icon>,
    },
    {
        "title": "IRA-STREET",
        "description": "Marketplace for Investors & Real Estate",
        "button": "START NOW",
        icon1: <Icon><RemoveRedEye /></Icon>,
        icon2: <Icon><DriveFileRenameOutline /></Icon>,
        icon3: <Icon><Close /></Icon>, 
    },
    {
        "title": "IRA-STREET",
        "description": "Marketplace for Investors & Real Estate",
        "button": "START NOW",
        icon1: <Icon><RemoveRedEye /></Icon>,
        icon2: <Icon><DriveFileRenameOutline /></Icon>,
        icon3: <Icon><Close /></Icon>,
    },
  
]
    // state={
    //   todos:[],
    //   input:""
    // }
// state = {
//     showPopup: false,
//     popupContent: 'Hello, this is a popup!'
//   };

    constructor(props){
        super(props);
   
    // this.state = { showPopup: false };
    }
    
//   togglePopup = () => {
//     this.setState({
//       showPopup: !this.state.showPopup
//     });
//   }

//life cycles
    componentDidMount(){
        }
        // togglePopup() {
        //         this.setState({ showPopup: !this.state.showPopup });
        //       }
    render(){
// declare variables and fucntions in render    
const DisplayData=this.state.map(
    (info)=>{
        return(    
            <tr>
                <td>{info.title}</td>
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
                            }}/></Icon></td>
                        <td><Icon>
                            <Close
                            sx={{
                                width: '20.08px',
                                height: '20.08px',
                                position: 'absolute',
                                color: '#F11046',
                                backgroundColor: "#FFFFFF"
                            }}/></Icon></td>
            </tr>
        )
    }
)



// export default App

        return(
            
            <>
              <div className="row" style={{ marginTop: '2rem' }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <p>CMS/Image Caroussel</p>
                        <h1 style={{ marginTop: '-0.7rem', fontWeight: 'bold', fontSize: '28px' }}>Image Carousel</h1>
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
                    <div
                        style={{
                            margin: 'auto',
                            width: '53%',
                            marginLeft: '10px',
                            marginBottom:'10px',
                            marginTop:'30px',
                            borderRadius: '5px',
                          }}
                         />
                          <th>POSTS</th>
                </form>
                <button onClick={() => {
                      this.props.passChildComponent(<AddImageCarousel/>)
                }} style={{
        width: '115px;',
        height: '33px',
        marginTop: '28px',
        border: 'none',
        backgroundColor: '#8d4e85',
        color: 'white',
        borderRadius: '5px',
      }}>
      + Add Post
    </button>
      
                </div>
                <div>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>TITLE</th>
                                <th>DESCRIPTION</th>
                                <th>BUTTON</th>
                                <th></th>
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
            </>

        )
    }
}

export default ImageCarouselPosts;