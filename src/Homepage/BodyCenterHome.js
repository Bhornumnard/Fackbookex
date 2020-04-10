import React, { Component } from 'react'
import '../style/Home_page/CenterBodyHome.css'
import { Row, Col } from 'antd'

export default class BodyCenterHome extends Component {
    state = {
       post : [
            {
              id: 1,
              author: {
                name: "Nuttachai Kulthammanit",
                pic: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/c0.0.24.24a/p24x24/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_oc=AQlLEzSt2ysLGxaBJ27i9_wKJe4xw4p1nN3uZZa5bLkBfO1CTt_LIUeILv_o_d7fDqQ&_nc_ht=scontent.fbkk22-3.fna&oh=c0125b6725de188bb0f9e5ff94ce72f8&oe=5E4A5531"
              },
              message: "สวัสดีครับพี่น้องค้าบ ถึงแม้ผมจะฉลาดแต่ผมก็นิสัยดีนะค้าบ",
              imgSrc: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/73246481_2435477546715547_5247929318172000256_n.jpg?_nc_cat=111&_nc_oc=AQlFl6roOYPcuycI02WeHzC7xdXsvrqHB3baMb3gyXqrv5_mMLhTMeUxA6cGGbKmY3E&_nc_ht=scontent.fbkk22-3.fna&oh=f88eadb873e0211e94a2ba31f32e69f3&oe=5E53FD9C",
              date: "15 ชมที่แล้ว",
              commentList:
                [
                  {
                    id: 1,
                    author: "Nuttachai Kulthammanit",
                    avatar: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/c0.0.24.24a/p24x24/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_oc=AQlLEzSt2ysLGxaBJ27i9_wKJe4xw4p1nN3uZZa5bLkBfO1CTt_LIUeILv_o_d7fDqQ&_nc_ht=scontent.fbkk22-3.fna&oh=c0125b6725de188bb0f9e5ff94ce72f8&oe=5E4A5531",
                    content: "I met the singer at the Brayan Star Tour and he was so nice and cuter in person! :)",
                    datetime: "2 Days ago",
                  },
                  {
                    id: 2,
                    author: "Kittinun Postinun",
                    avatar: "https://frontlinecloud.zendesk.com/system/photos/3600/0268/6511/shiro.jpg",
                    content: "Your Frontline workspace features a Mock Phone which you can use to test the functionality in your workspace without needing to connect and send real SMS messages.",
                    datetime: "2 Days ago",
                  },
                  {
                    id: 3,
                    author: "London English",
                    avatar: "https://1.bp.blogspot.com/-ecxQPOn9U8s/XPaNhsTr2ZI/AAAAAAAABcc/O6H9aHK4ImYoSxJq7Gc-nCu5lLufFIC-QCLcBGAs/s1600/Hidden-Face-Girl-Profile-Pictures-for-Whatsapp.jpg",
                    content: "No real SMS messages are actually created, however, which means you do not need to spend money on SMS",
                    datetime: "1 Days ago",
                  }
                ],
              owner: {
                name: "Nuttachai Kulthammanit",
                profilePic: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/c0.0.24.24a/p24x24/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_oc=AQlLEzSt2ysLGxaBJ27i9_wKJe4xw4p1nN3uZZa5bLkBfO1CTt_LIUeILv_o_d7fDqQ&_nc_ht=scontent.fbkk22-3.fna&oh=c0125b6725de188bb0f9e5ff94ce72f8&oe=5E4A5531"
              },
            },
            {
              id: 2,
              author: {
                name: "Apiwut Kittiparkun",
                pic: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/72331485_3500832969926684_3328255275332272128_n.jpg?_nc_cat=102&_nc_eui2=AeGPg3waOA9Kh0BJOAJ_CLfuY37V7K59m3avbKM5eyx9eFDYJxJDFYhuR1Lbq6kmxSdO3_rgYk0dBJfxKiW1KRQ3lUUnqi3VP_M0_TqdSOib-Q&_nc_oc=AQkD1hjKc-w9eeWYDLGq8Si6esQlwzS_l-XB76MDvdGtyFzHA0kVA6DMQFOIDbwKbVI&_nc_ht=scontent.fbkk22-3.fna&oh=2786b485e2e7f634b96ec9ac451acbee&oe=5E4228CB"
              },
              message: "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
              imgSrc: "",
              date: "15 ชมที่แล้ว",
              commentList:
                [
                  {
                    id: 4,
                    author: "Nuttachai Kulthammanit",
                    avatar: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/c0.0.24.24a/p24x24/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_oc=AQlLEzSt2ysLGxaBJ27i9_wKJe4xw4p1nN3uZZa5bLkBfO1CTt_LIUeILv_o_d7fDqQ&_nc_ht=scontent.fbkk22-3.fna&oh=c0125b6725de188bb0f9e5ff94ce72f8&oe=5E4A5531",
                    content: "I met the singer at the Brayan Star Tour and he was so nice and cuter in person! :)",
                    datetime: "2 Days ago",
                  },
                  {
                    id: 5,
                    author: "Nuttachai Kulthammanit",
                    avatar: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/c0.0.24.24a/p24x24/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_oc=AQlLEzSt2ysLGxaBJ27i9_wKJe4xw4p1nN3uZZa5bLkBfO1CTt_LIUeILv_o_d7fDqQ&_nc_ht=scontent.fbkk22-3.fna&oh=c0125b6725de188bb0f9e5ff94ce72f8&oe=5E4A5531",
                    content: "Hold on just a little while longer.",
                    datetime: "1 Days ago",
                  },
                  {
                    id: 6,
                    author: "Nuttachai Kulthammanit",
                    avatar: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/c0.0.24.24a/p24x24/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_oc=AQlLEzSt2ysLGxaBJ27i9_wKJe4xw4p1nN3uZZa5bLkBfO1CTt_LIUeILv_o_d7fDqQ&_nc_ht=scontent.fbkk22-3.fna&oh=c0125b6725de188bb0f9e5ff94ce72f8&oe=5E4A5531",
                    content: "อาหารทำให้เรามาชีวิต แต่ความฝันจะทำให้เราอยากมีชีวิต",
                    datetime: "15 Hours ago",
                  }
                ],
              owner: {
                name: "Nuttachai Kulthammanit",
                profilePic: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/c0.0.24.24a/p24x24/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_oc=AQlLEzSt2ysLGxaBJ27i9_wKJe4xw4p1nN3uZZa5bLkBfO1CTt_LIUeILv_o_d7fDqQ&_nc_ht=scontent.fbkk22-3.fna&oh=c0125b6725de188bb0f9e5ff94ce72f8&oe=5E4A5531"
              },
            }
          ]
          ,
          value : ''
    }

  collectText = e => {
            this.setState({value: e.target.value})
        }
        
        postText = e => {
            // let time= new date();
            //     currentDate = getTe
            let postText = [...this.state.post,
                {id : this.state.post.length, 
                    author : {name: "พรอำนาจ วนาศรีสันต์", pic:"https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/49948478_2111075422265261_7329281039728115712_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_eui2=AeEtLIT4QsLIsuSFatZGQQ3UrH2IiavHiKisfYiJq8eIqKFfr0MPBVdbaTXumcvhlX2StbOM0cRKpl9PBeZTx5J4&_nc_ohc=BjuyT1svNncAX8rFZGh&_nc_ht=scontent.fbkk5-3.fna&oh=21e91b0ad822233a5ff262096940ecee&oe=5EB46137 "}, 
                    message: this.state.value, 
                    date : "2 นาทีที่แล้ว",
                commentList: []} ]
        this.setState({post : postText, value: ""})
        
            }
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
                                <input placeholder="คุณกำลังคิดอะไรอยู่ พรอำนาจ" value={this.state.value} onChange={this.collectText} />
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
                        <button onClick={this.postText}>โพสต์</button>
                    </Row>

                </Row>
                <Row className="postShow">
                    <Row className="post">
                        <Col>
                            <Row className="headPost">
                                <Col className="box"> <img src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/49948478_2111075422265261_7329281039728115712_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_eui2=AeEtLIT4QsLIsuSFatZGQQ3UrH2IiavHiKisfYiJq8eIqKFfr0MPBVdbaTXumcvhlX2StbOM0cRKpl9PBeZTx5J4&_nc_ohc=BjuyT1svNncAX8rFZGh&_nc_ht=scontent.fbkk5-3.fna&oh=21e91b0ad822233a5ff262096940ecee&oe=5EB46137" /></Col>
                                <Col className='box'>
                                    <Row className="headline"> <a> Name</a> <div>
                                        <i data-hover="tooltip" data-tooltip-content="คุณเลือกที่จะเห็น VR KEMISTRY เป็นอันดับแรก" data-tooltip-alignh="right" class="_zwz img sp_429ISGWluey sx_62959b" id="js_1vq">
                                        </i> 
                                        <i class="_4a0a img sp_dXAVgcGQCLS sx_4de338"></i></div></Row>
                                    <Row><span className="time">2 ชม.</span><i class="lock img sp_d-JS2-MUMjq sx_b8bac0"></i></Row>
                                </Col>
                            </Row>
                            <Row className='comment'>
                                taonseuthnsutauenupd.p
                            </Row>
                            <Row>
                                <Col className="IconPackage"> 
                                    <ul>
                                        <li><a aria-pressed="false" class=" _6a-y _3l2t  _18vj" href="#" role="button" tabindex="0"><i alt="" class="_6rk2 img sp_HaMHyjpGtt8 sx_bbcf2c"></i>ถูกใจ</a></li>
                                        <li><a class=" _666h  _18vj _18vk _42ft" role="button" tabindex="0" title="แสดงความคิดเห็น" href="#">แสดงความคิดเห็น</a></li>
                                        <li><a class="_2nj7 _18vj _18vk _p" data-ft="{ &quot;tn&quot;: &quot;J&quot;, &quot;type&quot;: 25 }" href="#" role="button" tabindex="0" title="ส่งลิงก์นี้ให้เพื่อนหรือโพสต์ลงในไทม์ไลน์ของคุณ" id="js_3zz" aria-controls="u_4j_0">แชร์</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>

                    </Row>

                    {this.state.post.map((post) => (
                        <Row className="post">
                        <Col>
                            <Row className="headPost">
                                <Col className="box"> <img src={post.author.pic} /></Col>
                                <Col className='box'>
                    <Row className="headline"> <a> {post.author.name}</a> <div>
                                        <i data-hover="tooltip" data-tooltip-content="คุณเลือกที่จะเห็น VR KEMISTRY เป็นอันดับแรก" data-tooltip-alignh="right" class="_zwz img sp_429ISGWluey sx_62959b" id="js_1vq">
                                        </i> 
                                        <i class="_4a0a img sp_dXAVgcGQCLS sx_4de338"></i></div></Row>
                    <Row><span className="time">{post.date}</span><i class="lock img sp_d-JS2-MUMjq sx_b8bac0"></i></Row>
                                </Col>
                            </Row>
                            <Row className='comment'>
                               {post.message}
                            </Row>
                            <Row>
                                <Col className="IconPackage"> 
                                    <ul>
                                        <li><a aria-pressed="false" class=" _6a-y _3l2t  _18vj" href="#" role="button" tabindex="0"><i alt="" class="_6rk2 img sp_HaMHyjpGtt8 sx_bbcf2c"></i>ถูกใจ</a></li>
                                        <li><a class=" _666h  _18vj _18vk _42ft" role="button" tabindex="0" title="แสดงความคิดเห็น" href="#">แสดงความคิดเห็น</a></li>
                                        <li><a class="_2nj7 _18vj _18vk _p" data-ft="{ &quot;tn&quot;: &quot;J&quot;, &quot;type&quot;: 25 }" href="#" role="button" tabindex="0" title="ส่งลิงก์นี้ให้เพื่อนหรือโพสต์ลงในไทม์ไลน์ของคุณ" id="js_3zz" aria-controls="u_4j_0">แชร์</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    ))}
                    

                </Row>

            </Col>
        )
    }
}
