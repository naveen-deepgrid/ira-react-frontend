import React from "react";
import '../admin/login.css'
import { Link } from 'react-router-dom';

class Login extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : '',
            redirect : ''
        }  

      }


    //   Successnotify = ()=>{
    //     toast.success("Login Sucessfully",{
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //     })
    // }

    componentDidUpdate() {
     return (this.state.redirect)
    }

    // Wrongnotify = (response)=>{
    //     toast.error(response,{
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //     })
    // }

      handleSubmit = event => {
          event.preventDefault()
          let loginObj = {
              email : this.state.email,
              password : this.state.password
          }

        //   var LiveURL = "https://p1883.deepgrid.in/api/verifyLogin"
        //   var localURL = "http://localhost:1883/api/verifyLogin"

        //   if(this.state.email != '' && this.state.password != ''){
        //       axios.post(localURL,loginObj).then((response)=>{

        //         localStorage.setItem('loginSuccess', response.data.result)
        //         localStorage.setItem('username', response.data.username)
        //         localStorage.setItem('personID', response.data.id)
        //         localStorage.setItem('Name',response.data.Name)
        //         // localStorage.setItem('image_url',converted_url)
   
        //         // console.log(response.data)

        //           if(response.data.result === true){
        //             this.Successnotify()
        //             this.setState({redirect : response.data.result})
                    
        //           }else if(response.data.result === false){
        //             this.Wrongnotify("Password is Incorrect")
        //           }
        //           else{
        //               this.Wrongnotify("Something went wrong")
        //           }
        //       })

        //   }else if(this.state.email === '' && this.state.password != ''){
        //     this.Wrongnotify("Email Shouldn't be Empty")
        //   }else if(this.state.email != '' && this.state.password === ''){
        //     this.Wrongnotify("Password Shouldn't be Empty")
        //   }else{
        //     this.Wrongnotify("Email & Password Shouldn't be Empty")
        //   }


      }


      render(){
          return(
        <div className="container-fluid main-screen">
                  <div className="sub-screen">
                      <form onSubmit={this.handleSubmit}>
                      <div className="row">
                          <p className="p-head">ADMIN LOGIN</p>
                          <input className="email-input" type="text" value={this.state.email} onChange={(e)=>{return this.setState({email : e.target.value}) }} placeholder="EMAIL" />
                          <input className="password-input" type="password" value={this.state.password} onChange={(e)=>{return this.setState({password : e.target.value}) }} placeholder="PASSWORD"/>
                          <button className="login-button" type="submit" >Login</button>
                          <div className="row">
                          <p className="account-p">IF YOU DON'T HAVE ACCOUNT?</p>
                          <Link to="/register" className="register-button">REGISTER</Link>
                          </div>
                      </div>
                      </form>  
                  </div>
              </div>)
      }

}

export default Login;