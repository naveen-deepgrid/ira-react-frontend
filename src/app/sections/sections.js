import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import Logo1 from '../../assets/logo1.png'
import User from '../../assets/user.svg'
import Approval from '../../assets/approval.svg'
import DashboardLogo from '../../assets/dashboard.svg'
import DownArrow from '../../assets/down_arrow.svg'
import Login from "../admin/login";
import Anchors from '../../assets/anchor.svg'
import Property from '../../assets/property.svg'
import Cms from '../../assets/cms.svg'
import '../sections/sections.css'
import $, { event } from 'jquery';
import Faq from "../cms/faq";
import Connect from "../cms/Connectwithus";
import Channel from "../cms/ChannelPartners";
import WhyIra from "../cms/WhyIraStreet";
import AddFaq from "../cms/addFaq";
import FeaturedIn from "../cms/featuredin/featuredin";
import MeetOurInvestors from "../cms/meetourinvestor/meetourinvestors";
import Footer from "../cms/footer/footer";
import ImageCarouselPosts from "../cms/imagecarousel/imagecarouselposts";
import ChannelPartners from "../approvals/channelpartners";

class Sections extends React.Component {

    constructor(props){
        super(props); 

        this.state = {
            component : '',
            passChild : ''
        }

      }

      componentDidUpdate() {
         
       }

       componentDidMount(){
       }

       handleChildComponent = (child)=>{
        this.setState({component : child})
       }


       render(){
        var count = 0
        var count_md = 0
        
        return(
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 main_col_left" >
                    <Link to="" className="register-button">
                        <img src={Logo1} style={{margin: '2rem 4rem',background:'none'}}></img>
                    </Link>

                    <ul style={{margin:'2rem 0',padding:'0'}}>
                        <li>
                            <button style={{background:'none',border:'none'}} onClick={ ()=>{
                                this.setState({component : <Login />})
                            }}>
                                <div className="row">
                                    <img src={DashboardLogo} style={{width:'45px'}}></img>
                                    <div style={{color:'white',width:'6.5rem',textAlign:'left',margin:'1rem -1rem',fontSize:'16px'}}>Dashboard</div>
                                    <img src={DownArrow} style={{width:'40px'}}></img>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button style={{background:'none',border:'none'}} onClick={ ()=>{
                                this.setState({component : <Login />})
                            }}>
                                <div className="row">
                                    <img src={User} style={{width:'45px'}}></img>
                                    <div style={{color:'white',width:'10rem',textAlign:'left',margin:'1rem -1rem',fontSize:'16px'}}>User Management</div>
                                    <img src={DownArrow} style={{width:'40px'}}></img>
                                </div>
                            </button>
                        </li>
                        <li className="main_div_approvals">
                            <button style={{background:'none',border:'none'}} onClick={ ()=>{
                                if(count < 1){
                                    $(".navbar-dropdown-approvals").css('display', 'block','background','#732F64','border-radius','10px')
                                    $(".main_div_approvals").css('background','#732F64')
                                    $('.downarrow_approvals').css('rotate','180deg')
                                    // $('.main_col_left').css('height','auto')
                                    count = count + 1
                                }else{
                                    $(".navbar-dropdown-approvals").css('display', 'none')
                                    $(".main_div_approvals").css('background','none')
                                    $('.downarrow_approvals').css('rotate','')
                                    $('.main_col_left').css('height','100vh')
                                    count = 0
                                }
                            }}>
                                <div className="row">
                                    <img src={Approval} style={{width:'45px'}}></img>
                                    <div style={{color:'white',width:'6.5rem',textAlign:'left',margin:'1rem -1rem',fontSize:'16px'}}>Approvals</div>
                                    <img src={DownArrow} className="downarrow_approvals"></img>
                                </div>
                            </button>
                            <ul className="navbar-dropdown-approvals">
                                <li  style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}} >
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} onClick={ ()=>{
                                this.setState({component : <ChannelPartners />})
                            }}>Channel Partner</button>
                                </li>
                            </ul>    
                        </li>
                        <li className="main_div_anchors">
                            <button style={{background:'none',border:'none'}} onClick={ ()=>{
                                if(count < 1){
                                    $(".navbar-dropdown-anchors").css('display', 'block','background','#732F64','border-radius','10px')
                                    $(".main_div_anchors").css('background','#732F64')
                                    $('.downarrow_anchors').css('rotate','180deg')
                                    // $('.main_col_left').css('height','auto')
                                    count = count + 1
                                }else{
                                    $(".navbar-dropdown-anchors").css('display', 'none')
                                    $(".main_div_anchors").css('background','none')
                                    $('.downarrow_anchors').css('rotate','')
                                    $('.main_col_left').css('height','100vh')
                                    count = 0
                                }
                            }}>
                                <div className="row">
                                    <img src={Anchors} style={{width:'45px'}}></img>
                                    <div style={{color:'white',width:'9.5rem',textAlign:'left',margin:'1rem -1rem',fontSize:'16px'}}>Anchors-Listing Company</div>
                                    <img src={DownArrow} className="downarrow_anchors"></img>
                                </div>
                            </button>
                            <ul className="navbar-dropdown-anchors">
                                <li  style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}} >
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} >Anchors</button>
                                </li>
                            </ul> 
                        </li>
                        <li>
                            <button style={{background:'none',border:'none'}} onClick={ ()=>{
                                this.setState({component : <Login />})
                            }}>
                                <div className="row">
                                    <img src={Property} style={{width:'45px'}}></img>
                                    <div style={{color:'white',width:'12rem',textAlign:'left',margin:'1rem -1rem',fontSize:'16px'}}>Property Management</div>
                                    <img src={DownArrow} style={{width:'40px'}}></img>
                                </div>
                            </button>
                        </li>
                        <li className="main_div">
                            <button style={{background:'none',border:'none'}} onClick={ ()=>{
                                if(count < 1){
                                    $(".navbar-dropdown-cms").css('display', 'block','background','#732F64','border-radius','10px')
                                    $(".main_div").css('background','#732F64')
                                    $('.downarrow').css('rotate','180deg')
                                    $('.main_col_left').css('height','auto')
                                    count = count + 1
                                }else{
                                    $(".navbar-dropdown-cms").css('display', 'none')
                                    $(".main_div").css('background','none')
                                    $('.downarrow').css('rotate','')
                                    $('.main_col_left').css('height','100vh')
                                    count = 0
                                }
                               
                            }}>
                                <div className="row">
                                    <img src={Cms} style={{width:'45px'}}></img>
                                    <div style={{color:'white',width:'4rem',textAlign:'left',margin:'1rem -1rem',fontSize:'16px'}}>CMS</div>
                                    <img src={DownArrow} className="downarrow"></img>
                                </div>
                            </button>
                            <ul className="navbar-dropdown-cms">
                                <li  style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}} >
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} onClick={ ()=>{
                                         return this.state.component === '' ?  this.setState({component : <ImageCarouselPosts passChildComponent={this.handleChildComponent} />}) : this.state.component 
                                    }}>Image Carousel</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}} >
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} onClick={ ()=>{
                                          this.setState({component :<WhyIra /> })
                                    }} >Why IRA-Street</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} >How IRA-Street Works</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} >Explore IRA-Street</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} onClick={ ()=>{
                                        return this.state.component === '' ?  this.setState({component : <FeaturedIn passChildComponent={this.handleChildComponent} />}) : this.state.component  
                                    }} >Featured In</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}}  onClick={ ()=>{
                                       return this.state.component === '' ?  this.setState({component : <MeetOurInvestors passChildComponent={this.handleChildComponent} />}) : this.state.component  
                                    }}>Meet our Investors</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} onClick={ ()=>{
                                          this.setState({component :<Connect /> })
                                    }}>Connect with Us</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} onClick={ ()=>{
                                          this.setState({component :<Channel /> })
                                    }} >Channel Partner</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} >Anchors</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}}  onClick={ ()=>{
                                         return this.state.component === '' ?  this.setState({component : <Faq passChildComponent={this.handleChildComponent} />}) : this.state.component                  
                                    }}>FAQ's</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} onClick={ ()=>{
                                          this.setState({component :<Footer/> })
                                    }}>Footer</button>
                                </li>
                            </ul>
                        </li>
                        {
                            console.log(this.state.component,"check once update")
                        }
                        <li className="main_div_md">
                            <button style={{background:'none',border:'none'}} onClick={ ()=>{

                                if(count < 1){
                                    $(".navbar-dropdown-md").css('display', 'block','background','#732F64','border-radius','10px')
                                    $(".main_div_md").css('background','#732F64')
                                    $('.downarrow_md').css('rotate','180deg')
                                    $('.main_col_left').css('height','auto')
                                    count = count + 1
                                }else{
                                    $(".navbar-dropdown-md").css('display', 'none')
                                    $(".main_div_md").css('background','none')
                                    $('.downarrow_md').css('rotate','')
                                    $('.main_col_left').css('height','100vh')
                                    count = 0
                                }
                            }}>
                                <div className="row">
                                    <img src={DashboardLogo} style={{width:'45px'}}></img>
                                    <div style={{color:'white',width:'7.5rem',textAlign:'left',margin:'1rem -1rem',fontSize:'16px'}}>Master Data</div>
                                    <img src={DownArrow} className="downarrow_md"></img>
                                </div>
                            </button>
                            <ul className="navbar-dropdown-md">
                                <li  style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}} >
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} >Asset Category</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}} >
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} >Project Type</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} >Financial Model</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} >States</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} >City</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} >Attributes</button>
                                </li>
                                <li style={{borderLeft:'2px solid white',listStylePosition:'inside',margin: '0 -1rem'}}>
                                    <button style={{background:'none',border:'none',color:'white',marginBottom:'1.5rem'}} >Attribute Set</button>
                                </li>
                            </ul>
                        </li>
                    </ul>


                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10" >
                        {this.state.component}
                    </div>

                </div>
            </div>
        )
       }

}
export default Sections;