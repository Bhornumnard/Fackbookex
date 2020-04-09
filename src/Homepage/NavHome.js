import React, { Component } from 'react'
import '../style/Home_page/NavHome.css'
import { Row, Col } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

export default class NavHome extends Component {
    render() {
        return (
            <Row className="navHomeBody">
                <Col className="fackbookIcon">
                    <Row >
                        <a className="_19eb " data-gt="{&quot;chrome_nav_item&quot;:&quot;logo_chrome&quot;}" href="https://web.facebook.com/?ref=logo" title="ไปที่หน้าหลักของ Facebook">
                            <span class="_2md">Facebook</span>
                        </a>
                    </Row>
                </Col>
                <Col className="HeadNavHomeBlock">
                    <Row className="inputNavHomeBlock">
                        <form>
                            <input className="inputSearch" type="text" placeholder="ค้นหา" />
                            <button value="1" class=" _4jy0  .searchButton" type="submit"><i class="_585_ .searchIcon"></i></button>
                        </form>
                    </Row>
                </Col>
                <Row className="RightIconBlock">
                    <Col className="IconRightNav">
                        <a>
                            <img src="https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-1/cp0/p48x48/49948478_2111075422265261_7329281039728115712_n.jpg?_nc_cat=111&amp;_nc_sid=dbb9e7&amp;_nc_eui2=AeEtLIT4QsLIsuSFatZGQQ3UrH2IiavHiKisfYiJq8eIqKFfr0MPBVdbaTXumcvhlX2StbOM0cRKpl9PBeZTx5J4&amp;_nc_ohc=BjuyT1svNncAX8Fzfa6&amp;_nc_ht=scontent.fbkk8-3.fna&amp;oh=55ff6526e48df2c244d3253c1c313fe7&amp;oe=5EB415A1" alt="" id="profile_pic_header_100000884719936" />
                            <span class="_1vp5">พรอำนาจ</span>
                            <div className="line1"></div>
                        </a>

                    </Col>
                    <Col className="IconRightNav">
                        <a>
                            <span class="_1vp5">หน้าหลัก</span>
                            <div className="line"></div>
                        </a>

                    </Col>
                    <Col className="IconRightNav">
                        <a>
                            <span class="_1vp5">สร้าง</span>
                            <div className="line"></div>
                        </a>

                    </Col>

                </Row>
                <Col className="rightIconNoti">

                    <div class="uiToggle _4962 _3nzl _24xk" >
                        <a class="jewelButton _3eoa">
                            <div class="_2n_9"></div>
                        </a>
                    </div>


                    <div class="uiToggle _4962 _1z4y _330i _4kgv" >
                        <a class="jewelButton" >
                            <div class="_2n_9 icon"></div>
                        </a>
                    </div>


                    <div class="uiToggle _4962 _4xi2 _5orl hasNew" >
                        <a class="jewelButton _3eo9" >
                            <div class="_2n_9 icon"></div>
                        </a>
                    </div>
                    <div className="line"></div>
                </Col>
                <Col>
                    <div class="_4kny">
                        <div class="uiToggle _8-a _1kj2 _4d1i _-57 _5-sk" id="u_0_h">
                            <a class="_59fc" >
                                <div class="_59fb _tmz"></div></a>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="_4kny">
                        <div class="_5lxr">
                            <div class="_6a _6b uiPopover _1io_ _5v-0" id="logoutMenu" data-nocookies="1">
                                <a aria-haspopup="true" aria-labelledby="userNavigationLabel" class="_5lxs _3qct _p" data-gt="{&quot;ref&quot;:&quot;async_menu&quot;,&quot;logout_menu_click&quot;:&quot;async_menu&quot;}" href="https://www.facebook.com/settings?ref=mb&amp;drop" id="pageLoginAnchor" rel="toggle" role="button" aria-expanded="false">
                                    <div class="_6qfu _5lxt" id="userNavigationLabel">
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>




            </Row>
        )
    }
}
