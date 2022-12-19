import React from "react";
import Profile from '../../assets/profile.svg'


class Faq extends React.Component {

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="container-fluid">
            <div className="row" style={{marginTop:'2rem'}}>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <p>CMS/FAQs</p>
                    <h1 style={{marginTop:'-0.7rem',fontWeight:'bold',fontSize:'28px'}}>FAQS</h1>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <button style={{background:'white',border:'1px solid gray',borderRadius:'10px',width:'10rem',height:'4rem',float:'right',color:'#753d6a'}}>
                        <div className="row" style={{padding:'0.5rem'}}>
                            <img src={Profile} style={{width:'65px'}}></img>
                            <p style={{fontWeight:'bold',width:'3rem',margin:'0.5rem -0.9rem'}}>LOGOUT</p>
                        </div>
                    </button>
                </div>
            </div>
            <div>
                   <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" style={{margin:'3rem 0'}}>
                   <p style={{marginTop:'1rem',marginBottom:'0.5rem'}}>Title*</p>
                   <input type="text" placeholder="FAQs" className="form-control" style={{height:'4rem',fontSize:'17px'}}></input>
                   </div>
                   <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <p style={{fontWeight:'bold',fontSize:'20px'}}>FAQs</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">

                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <button style={{background:'white',border:'1px solid #753d6a',borderRadius:'10px',width:'10rem',height:'3rem',float:'right',color:'white',background:'#753d6a'}}>
                        <div className="row" style={{margin:'1rem 0'}}>
                            <i class="fa-regular fa-plus" style={{width:'20px'}}></i>
                            <p style={{fontWeight:'bold',fontSize:'14px',width:'7rem',marginLeft:'-0.8rem'}}>Add FAQs</p>
                        </div>
                        </button>
    
                        <button style={{background:'white',border:'1px solid #753d6a',borderRadius:'10px',width:'10rem',height:'3rem',float:'right',color:'#753d6a',marginRight:'0.5rem'}}>
                        <div className="row" style={{padding:'0.5rem'}}>
                            <img src={Profile} style={{width:'65px'}}></img>
                            <p style={{fontWeight:'bold',width:'4rem',margin:'0.5rem -0.9rem',fontSize:'14px'}}>Investors</p>
                        </div>
                        </button>

                    </div>
                   </div>
            </div>


        </div>
        )
    }

}
export default Faq;