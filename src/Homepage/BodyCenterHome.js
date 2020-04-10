import React, { Component } from 'react'
import '../style/Home_page/CenterBodyHome.css'
import { Row, Col } from 'antd'

export default class BodyCenterHome extends Component {
    render() {
        return (
            <Col className="CenterBody">
                <Row className="postBox">
                    <Row className="item"> สร้างโพสต์ </Row>
                    <Row className="item" type="flex" align="middle">
                        <Col style={{ display: "flex", alignItems: "center" }}><img src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/49948478_2111075422265261_7329281039728115712_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_eui2=AeEtLIT4QsLIsuSFatZGQQ3UrH2IiavHiKisfYiJq8eIqKFfr0MPBVdbaTXumcvhlX2StbOM0cRKpl9PBeZTx5J4&_nc_ohc=BjuyT1svNncAX8rFZGh&_nc_ht=scontent.fbkk5-3.fna&oh=21e91b0ad822233a5ff262096940ecee&oe=5EB46137" /></Col>
                        <Col>
                            <Row className="inputPostBox">
                                <div>คุณกำลังคิดอะไรอยู่ พรอำนาจ</div>
                                <input placeholder="คุณกำลังคิดอะไรอยู่ พรอำนาจ" />
                            </Row>
                        </Col>
                    </Row>
                    <Row className="item">
                        <ul>
                            <li><i class="_4a0a img sp_dXAVgcGQCLS_1_5x sx_944b0f" alt=""></i><span>รูปภาพ/วิดีโอ</span></li>
                            <li><i class="_4a0a img sp_dXAVgcGQCLS_1_5x sx_dad813" alt=""></i><span>แท็กเพื่อน</span></li>
                            <li><i class="_4a0a img sp_dXAVgcGQCLS_1_5x sx_b1441e" alt=""></i><span>ความรู้สึก/กิจกรรม</span></li>
                            <li><i class="_4a0a img sp_dXAVgcGQCLS_1_5x sx_f36408" alt=""></i></li>
                        </ul>
                    </Row>
                    <Row className="item">
                        <ol>
                            <li>
                                <div className="listIcon">
                                    <div><div class="_1se_"></div></div>
                                    <div><div class="_3-w4 _3-w6"></div></div>
                                    <span>ฟีตข่าว</span>
                                </div>
                                <span><i class="_21or img sp_dXAVgcGQCLS_1_5x sx_74aa69"></i> สาธารณะ <i class="img sp_CFhzeuTBkdE_1_5x sx_556b7c"></i></span>
                            </li>
                            <li>
                                <div className="listIcon">
                                    <div><div class="_1se_"></div></div>
                                    <div><img height="51.2999986410141" src="https://graph.facebook.com/100000884719936/picture?width=51.2999986410141&amp;height=51.2999986410141" width="51.2999986410141" class="_3-w4 img _8o _8r img" alt="" /></div>
                                    <span>สตอรี่่ของคุณ</span>
                                </div>
                                <span> <i alt="" class="img sp_lFyHfGZLCT0_1_5x sx_e9445d"></i> กำหนดเอง <i class="img sp_CFhzeuTBkdE_1_5x sx_556b7c"></i></span>
                            </li>
                        </ol>
                    </Row>
                    <Row className="item">
                        <button>โพสต์</button>
                    </Row>

                </Row>

            </Col>
        )
    }
}
