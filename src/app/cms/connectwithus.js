import React from "react";
import Profile from '../../assets/profile.svg'

class Connect extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            picture : false,
            src : false
        }
    }

    handlePictureSelected(event) {
        var picture = event.target.files[0];
        var src   = URL.createObjectURL(picture);
        // console.log(src)
    //    console.log(picture.name)
        this.setState({
          picture: picture.name,
          src: src
        });

      }

      renderPreview() {
        
            if(this.state.src) {
              return (
                    <img src={this.state.src} className="profileImg-S" style={{width:'400px',height:'250px',background:'none',borderRadius:'0.3rem'}}/>
              );
            } else {
              return (
                <div>
                     <img  className="profileImg-S" style={{width:'400px',height:'250px',background:'none',borderRadius:'0.3rem',background:'gray'}}/>
                </div>
                
              );
            }
         }

    render(){
        return(
            <div className="container-fluid">
                <div className="row" style={{marginTop:'2rem'}}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <p>CMS/Connect with Us</p>
                        <h1 style={{marginTop:'-0.7rem',fontWeight:'bold',fontSize:'28px'}}>CONNECT WITH US</h1>
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
                    <input type="text" placeholder="Connect with Us" className="form-control" style={{height:'4rem',fontSize:'17px'}}></input>
                    </div>
                    <div className="row">
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

                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" style={{margin:'3rem 0'}}>
                    <p style={{marginTop:'1rem',marginBottom:'0.5rem'}}>Description*</p>
                    <textarea rows="4" placeholder="Description" className="form-control">

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
                            <label for="file-input">
                                 {this.renderPreview()}
                               </label>
                               <input type="file" id="file-input" onChange={this.handlePictureSelected.bind(this)} style={{display:'none'}}/>

                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">

                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Connect;