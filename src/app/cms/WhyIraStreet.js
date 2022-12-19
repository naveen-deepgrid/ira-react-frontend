import React from "react";


import Profile from '../../assets/profile.svg';
import Close from '../../assets/close.svg';
import '../../app/cms/WhyIraStreet.css';
class WhyIra extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            picture : false,
            src : false,
            picture1: false,
            src1: false
        }
    }
    handlePictureSelected(event) {  
        console.log("i am image 1")
      var picture = event.target.files[0];
      var src   = URL.createObjectURL(picture);
      // console.log(src)
  //    console.log(picture.name)
      this.setState({
        picture: picture.name,
        src: src
      });

    }

    handlePicture1Selected(event) {
      console.log("i am image 2")
      var picture = event.target.files[0];
      var src   = URL.createObjectURL(picture);
      // console.log(src)
  //    console.log(picture.name)
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

    handleAdd(){

    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row" style={{marginTop:'2rem'}}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <p>Why IRA-Street</p>
                        <h1 style={{marginTop:'-0.7rem',fontWeight:'bold',fontSize:'28px'}}>WHY IRA-STREET</h1>
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
                    <input type="text" placeholder="Why IRA-Street" className="form-control" style={{height:'4rem',fontSize:'17px'}}></input>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                            <p>Image*</p>
                            <label for="file-input">
                           
                                 {this.renderPreview()}
                               </label>
                               <input type="file" id="file-input" onChange={this.handlePictureSelected.bind(this)} style={{display:'none'}}/>

                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3" style={{margin:"0 8rem"}}>
                        <p>Image*</p>
                            <label for="file-input1">
                            
                                 {this.renderPreview1()}
                               </label>
                               <input type="file" id="file-input1" onChange={this.handlePicture1Selected.bind(this)} style={{display:'none'}}/>

                        </div>
 
                     

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" style={{margin:'3rem 0'}}>
                    <p style={{marginTop:'1rem',marginBottom:'0.5rem'}}>Description*</p>
                    <textarea auto-focus='false'rows="4" className="custom-scroll-bar form-control" id="scroll-bar-style" placeholder="Investing in the Real Estate market is everyone's dream, but it requires large amounts of capital, and not everyone can afford to
invest in this beautiful dream. Mainly young people who have just started their careers cannot amass such significant wealth till
they are late into their 30s.

Current alternative investment avenues are the stock market and the new age market place that help the common investor to
start investing in real estate with as little as 5lakhs, and companies distribute the appreciation across investors.
" >

                    </textarea>
                    </div>
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4"></div>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4"></div>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div style={{marginLeft:'-0.8rem',width:'26rem'}}>
                        <button onClick={this.handleAdd} style={{background:'white',border:'1px solid #753d6a',borderRadius:'10px',width:'10rem',height:'3rem',color:'#753d6a',marginLeft:'6.8rem'}}>  
                            <div className="row" style={{padding:'0.5rem'}}>
                            <i class="fa-regular fa-plus" style={{width:'20px'}}></i>
                            <p style={{fontWeight:'bold',width:'8rem',margin:'-1rem 1.5rem',fontSize:'14px'}}>ADD SECTION</p>
                            </div>
                        </button>
                        <button style={{background:'#753d6a',border:'1px solid gray',borderRadius:'10px',width:'8rem',height:'3rem',color:'white',marginBottom:'1rem',float:"right"}}>
                                <p style={{fontWeight:'bold',width:'3rem',margin:'0.2rem 0rem 0rem 1.7rem'}}>SAVE</p>
                        </button>

                        </div>
                        


                      </div>
                      

                      

                      {/* <div className="Add-section" style={{background: 'red',width:'5rem'}}>
                      <button onClick={this.handleAdd} style={{background:'white',border:'1px solid gray',borderRadius:'10px',width:'10rem',height:'4rem',float:'right',color:'#753d6a'}}>
                            <div className="row" style={{padding:'0.5rem'}}>
  
                            <p style={{fontWeight:'bold',width:'3rem',margin:'0.5rem -0.9rem'}}>ADD SECTION</p>
                            </div>
                        </button>


                      </div> */}
                      {/* <div className="Save-Button" style={{background: 'pink',width:'6rem'}}>
                        <button style={{background:'#753d6a',border:'1px solid gray',borderRadius:'10px',width:'8rem',height:'3rem',float:'right',color:'white',marginBottom:'1rem'}}>
                            <div className="row" style={{padding:'0.5rem'}}>
                                <p style={{fontWeight:'bold',width:'3rem',margin:'0.2rem 0rem 0rem 1.7rem'}}>SAVE</p>
                            </div>
                        </button>

                      </div> */}
                    </div>



                    </div>
                </div>
            </div>
        )
}
}
export default WhyIra;