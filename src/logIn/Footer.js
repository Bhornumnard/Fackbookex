import React, { Component } from 'react'
import '../style/log_in_page/Footer.css'
import {Col, Row} from 'antd'

export default class Footer extends Component {
    state={ 
        country: ["ภาษาไทย",
            "English (UK)",
             "日本語",
            "中文(简体)",
            "Tiếng Việt",
            "Français (France)",
            "Deutsch",
            "Русский",
            "Español",
            "Português (Brasil)",
            "Italiano"
            ]
            ,
            topic:["สมัคร",
            "เข้าสู่ระบบ", 
            "Messenger",
            "Facebook Lite", 
            "Watch",
            "ผู้คน",
            "เพจ" ,
            "หมวดหมู่เพจ",
             "สถานที่",
             "เกม",
             "ตำแหน่ง",
             "ที่ตั้ง",
             "Marketplace",
             "กลุ่ม",
             "Instagram",
             "ในพื้นที่",
             "โครงการระดมทุน",
             "บริการ",
             "เกี่ยวกับ",
             "สร้างโฆษณา",
             "สร้างเพจ",
             "ผู้พัฒนา",
             "ร่วมงานกับ Facebook",
             "ความเป็นส่วนตัว",
             "คุกกี้",
             "ตัวเลือกโฆษณา",
             "เงื่อนไข",
             "ความช่วยเหลือ"]
    }
    render() {
        return (
            <Row className="footerHeader" type="flex" justify="center">
            <Col span={20} className="footerBlock">
            <ul className="footerBlock">
                {this.state.country.map(item=> <ul className="country"> <a href="#">{item} </a> </ul>)}  
                <ul className="country"><button><i class="img sp_RB8QeRomjAg sx_d73b90"></i></button></ul>
            </ul>
            </Col>
            <Col span={20}><div id="contentCurve"></div></Col>
            <Col span={20}>
            <ul className="footerBlock">
                {this.state.topic.map(item=> <ul className="topic"> <a href="#">{item} </a> </ul>)}
            </ul>
            </Col>

        </Row>
        )
    }
}
