import React, { Component } from 'react'
import {Row, Col} from "antd"
import '../style/Home_page/LeftBodyHome.css'
export default class BodyLeftHome extends Component {
    state = {
        first: [
            { text: "ฟีดข่าว", class: "img sp_SZK6JSuantY sx_9ccd4c" },
            { text: "Messenger", class: "img sp_SZK6JSuantY sx_7ceacd" },
            { text: "Watch", class: "img sp_SZK6JSuantY sx_1cb3fa" },
            { text: "Marketplace", class: "img sp_aP-6mjouz3R sx_4538c6" },],

        second: [{ text: "JavaScript 21 Day Challenge", class: "img sp_SZK6JSuantY sx_9d2a95" },
        { text: "คนรักหนูแฮมเตอร์", class: "img sp_KeOz0bXhwRm sx_f3a83f" },
        { text: "ชุมชนแฮมเตอร์แลนด์", class: "img sp_KeOz0bXhwRm sx_f3a83f" },
        { text: "ชมรมคนรักหนูแฮมเตอร์", class: "img sp_SZK6JSuantY sx_9d2a95" },
        { text: "สมาคมโปรแกรมเมอร์ไทย", class: "img sp_KeOz0bXhwRm sx_dda235" },

        ]
    }
    Show = () => {
        return
    }
    render() {
        return (
            <Col className="Left">
                <Row className="unit" span={24}>

                    <a href="#">
                        <span><img alt="" src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/49948478_2111075422265261_7329281039728115712_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_eui2=AeEtLIT4QsLIsuSFatZGQQ3UrH2IiavHiKisfYiJq8eIqKFfr0MPBVdbaTXumcvhlX2StbOM0cRKpl9PBeZTx5J4&_nc_ohc=b_rpwgTtKiQAX-F0EzD&_nc_ht=scontent.fbkk5-3.fna&oh=21d5345e34aec4615f7efc2b535c87df&oe=5EAEB593" /></span>
                            พรอำนาจ วนาศรีสันต์
                            </a>
                    <i class="fas fa-ellipsis-h" onClick={() => alert("click already")}></i>
                </Row>
                <Row span={24}>
                    <ul className="first">

                        {this.state.first.map(item => (

                            <li>
                                <a href="#">
                                    <i className={item.class}>
                                    </i>
                                    {item.text}
                                </a>
                                <i className="fas fa-ellipsis-h" onClick={() => alert("click already")}></i>
                            </li>
                        ))}


                    </ul>
                </Row>
                <Row span={24}>
                    <ul className="first"> 
                    <div className="topicLeftIcon"> ทางลัด</div>
                        {this.state.second.map(item => (
                            <li>
                                <a href="#">
                                    <i className={item.class}>
                                    </i>
                                    {item.text.length > 18 ? item.text.substring(0,17) +"...": item.text}
                                </a>
                                <i className="fas fa-ellipsis-h" onClick={() => alert("click already")}></i>
                            </li>
                        ))}
                    </ul>

                </Row>
                <Row className="unit"></Row>
            </Col>
        )
    }
}
