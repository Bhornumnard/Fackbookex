import React, { Component } from 'react'
import { Row, Col } from 'antd'
import '../style/log_in_page/Left.css'
export default class LeftBody extends Component {
    render() {
        return (
            <Col className="leftBody">

                <Row className="rowInLeft">การเข้าสู่ระบบล่าสุด</Row>
                    
            
                <Row className="rowInLeft">คลิกรูปภาพหรือเพิ่มบัญชี</Row>

                
                <Row className="rowInLeft">
                    <img src="https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-1/p480x480/49948478_2111075422265261_7329281039728115712_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_ohc=b_rpwgTtKiQAX-5Kwma&_nc_ht=scontent.fbkk8-3.fna&_nc_tp=6&oh=d6c3a864365587bb8085c1bc50124345&oe=5EB07EF9" />
                    <div className="text">พรอำนาจ</div>        
                </Row>
            </Col>
        )
    }
}
