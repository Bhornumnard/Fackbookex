import React, { Component } from 'react'
import {Row, Col} from 'antd'
import NavHome from './NavHome'
import Left from './BodyLeftHome'
import Center from './BodyCenterHome'
import Right from './BodyRightHome'
import '../style/Home_page/Homepage.css'

export default class Homepage extends Component {
    render() {
        return (
           <Col className="fullBody">
                <Row span={24} className="navHome"><NavHome /></Row>
                <Row span={24} className="bodyHome">
                    <Col><Left /></Col>
                    <Col><Center /></Col>
                    <Col><Right /></Col>
                </Row>
           </Col>
        )
    }
}
