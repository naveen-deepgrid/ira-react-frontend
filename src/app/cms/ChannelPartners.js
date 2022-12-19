import React, { Component } from "react";


import Profile from '../../assets/profile.svg';
import Close from '../../assets/close.svg';
class Channel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            picture : false,
            src : false,
            picture1:false,
            src1:false
        }
    }

    handlePictureSelected(event) {
        var picture = event.target.files[0];
        var src   = URL.createObjectURL(picture);
        this.setState({
          picture: picture.name,
          src: src
        });

      }

      handlePicture1Selected(event) {
        var picture = event.target.files[0];
        var src   = URL.createObjectURL(picture);
        this.setState({
          picture1: picture.name,
          src1: src
        });

      }

      renderPreview() {
        
            if(this.state.src) {
                return (
                    <div>
                    <img src={this.state.src} className="profileImg-S" style={{width:'400px',height:'250px',background:'none',borderRadius:'0.3rem'}}/>
                    <button  onClick={this.handleclosebutton} style={{background:'none',border:'none',position:'absolute',marginLeft:'-1.5rem',marginTop:'-0.8rem'}}>
                        <img src={Close} alt='remove' style={{width:'30px',height:'27px'}}></img>
                        </button>
                </div>
                        
                  );
            } else {
              return (
                <div>
                     <img  className="profileImg-S" style={{width:'400px',height:'250px',background:'none',borderRadius:'0.3rem',background:'gray'}}/>
                </div>
                
              );
            }
         }
         renderPreview1() {
            if(this.state.src1) {
              return (
                   
                    <div>
                        <img src={this.state.src1} className="profileImg-S" style={{width:'400px',height:'250px',background:'none',borderRadius:'0.3rem'}}/>
                        <button  onClick={this.handleclosebutton1} style={{background:'none',border:'none',position:'absolute',marginLeft:'-1.5rem',marginTop:'-0.8rem'}}>
                            <img src={Close} style={{width:'30px',height:'27px'}}></img>
                            </button>
                    </div>
              );
            } else {
              return (
                <div>
                     <img  className="profileImg-S" style={{width:'400px',height:'250px',background:'none',borderRadius:'0.3rem',background:'gray'}}/>
                </div>
                
              );
            }
         }

         handleclosebutton = (e)=>{
            e.preventDefault();
            this.setState({
                src: false
            }

            );
        }
        handleclosebutton1 = (e)=>{
            e.preventDefault();
             this.setState({
                 src1: false
                }
    
                );

        }

    render(){
        return(
            <div className="container-fluid">
                <div className="row" style={{marginTop:'2rem'}}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <p>CMS/Channel Partner</p>
                        <h1 style={{marginTop:'-0.7rem',fontWeight:'bold',fontSize:'28px'}}>CHANNEL PARTNERS</h1>
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
                    <input type="text" placeholder="Channel Partners" className="form-control" style={{height:'4rem',fontSize:'17px'}}></input>
                    </div>
                    {/* <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                             <p style={{marginTop:'1rem',marginBottom:'0.5rem'}}>Button 1 Text*</p>
                             <input type="text" placeholder="SCHEDULE A CALL" className="form-control" style={{height:'4rem',fontSize:'17px'}}></input>
                         </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                             <p style={{marginTop:'1rem',marginBottom:'0.5rem'}}>Button 2 Text*</p>
                             <input type="text" placeholder="SEND A MESSAGE" className="form-control" style={{height:'4rem',fontSize:'17px'}}></input>
                         </div>
                        </div>

                    </div> */}
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" style={{margin:'3rem 0'}}>
                    <p style={{marginTop:'1rem',marginBottom:'0.5rem'}}>Description*</p>
                    <textarea rows="4" placeholder="Our dedicated Investor Relations Team is standing by to help simplify your real estate investing process" className="form-control">

                    </textarea>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                            <p>Image 1*</p>
                            <label for="file-input">
                                 {this.renderPreview()}
                               </label>
                               <input type="file" id="file-input" onChange={this.handlePictureSelected.bind(this)} style={{display:'none'}}/>

                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3" style={{margin:"0 8rem"}}>
                        <p>Image 2*</p>
                            <label for="file-input1">
                                 {this.renderPreview1()}
                               </label>
                               <input type="file" id="file-input1" onChange={this.handlePicture1Selected.bind(this)} style={{display:'none'}}/>

                        </div>

                        <div className="Save-Button">
                        <button style={{background:'#753d6a',border:'1px solid gray',borderRadius:'10px',width:'8rem',height:'3rem',float:'right',color:'white'}}>
                            <div className="row" style={{padding:'0.5rem'}}>
                                <p style={{fontWeight:'bold',width:'3rem',margin:'0.2rem 0rem 0rem 1.7rem'}}>SAVE</p>
                            </div>
                        </button>

                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Channel;