import React, { Component } from 'react'
import Navbar from './Navbar'
import BodyLeft from './LeftBody'
import BodyRight from './RightBody'
import Footer from './Footer'

export default class LogInPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <BodyLeft />
                <BodyRight />
                <Footer />
            </div>
        )
    }
}
