import React, { Component } from 'react'
import '../style/Home_page/NavHome.css'
import { Row, Col } from 'antd'

export default class NavHome extends Component {
    render() {
        return (
            <Row className="navHomeBody">
                <Row>
                    <Col className="fackbookIcon">
                        <Row >
                            <a className="_19eb " data-gt="{&quot;chrome_nav_item&quot;:&quot;logo_chrome&quot;}" href="https://web.facebook.com/?ref=logo" title="ไปที่หน้าหลักของ Facebook">
                                <span class="_2md">Facebook</span>
                            </a>
                        </Row>
                    </Col>
                    <Col style={{height:"42px", display:"flex", alignItems:"center"}} >
                        <Row className="inputNavHomeBlock">
                            <form>
                                <input className="inputSearch" type="text" placeholder="ค้นหา"/>
                                <button value="1" class=" _4jy0  .searchButton" type="submit"><i class="_585_ .searchIcon"></i></button>
                            </form>    
                        </Row>
                    </Col>
                </Row>
                <Col>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                </Col>
            </Row>
        )
    }
}
