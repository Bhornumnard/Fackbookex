import React, { Component } from 'react'
import '../style/log_in_page/Navbar.css'
import {Row, Col} from 'antd'
export default class Navbar extends Component {
    render() {
        return (
            <Row className="Navbar">
                <Col className="top">
                    <div>
                        <a href="#">
                        <i class="fb_logo img sp_Vgu5hh_52BR_1_5x sx_13437d"><u>Facebook</u></i> 
                        </a>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td></td>
                                <td></td>

                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>

                    </div>
                </Col>
            </Row>
        )
    }
}
