import React, { Component } from 'react'
import '../style/Home_page/CenterBodyHome.css'
import { Row, Col } from 'antd'

export default class BodyCenterHome extends Component {
    render() {
        return (
            <Col className="CenterBody">
                <Row className="postBox">
                    <Row className="item"> สร้างโพส </Row>
                    <Row className="item" type="flex" align="middle">
                        <Col style={{display: "flex", alignItems:"center"}}><img src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/49948478_2111075422265261_7329281039728115712_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_eui2=AeEtLIT4QsLIsuSFatZGQQ3UrH2IiavHiKisfYiJq8eIqKFfr0MPBVdbaTXumcvhlX2StbOM0cRKpl9PBeZTx5J4&_nc_ohc=BjuyT1svNncAX8rFZGh&_nc_ht=scontent.fbkk5-3.fna&oh=21e91b0ad822233a5ff262096940ecee&oe=5EB46137"/></Col>
                        <Col>
                            <Row className="inputPostBox">
                                <div>คุณกำลังคิดอะไรอยู่ พรอำนาจ</div>
                                <input placeholder="คุณกำลังคิดอะไรอยู่ พรอำนาจ"/>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="item"></Row>
                    <Row className="item">
                        <Row></Row>
                        <Row></Row>
                        <Row></Row>
                        <Row></Row>
                    </Row>

                </Row>
            </Col>
        )
    }
}
