import React, { Component } from 'react'
import Navbar from './Navbar'
import BodyLeft from './LeftBody'
import BodyRight from './RightBody'
import Footer from './Footer'
import '../style/log_in_page/loginPage.css'
export default class LogInPage extends Component {
    render() {
        return (
            <div className="fullBody">
                <Navbar />
                <div className="mainBody">
                    <BodyLeft />
                    <BodyRight />
                </div>
                <div className="footerLogin">
                  <Footer />  
                </div>
                
            </div>
        )
    }
}
