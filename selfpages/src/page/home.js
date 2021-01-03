import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import pict from '../assets/pict-1.png'
import '../assets/css/style.css'
import Buttons from '../atom/Buttons';
import { InstagramOutlined } from '@ant-design/icons';
const { Content, Footer } = Layout;
export default class home extends Component {
    render() {
        return (
            <Layout className="layout">
                <Content style={{ overflow: "hidden" }}>
                    <Row className="section-container">
                        <Col lg={12}>
                            <div className="image-responsive">
                                <img
                                    src={pict}
                                    alt="Woman Stand"
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <Row>
                                <Col span={24}>
                                    <div className="container center">
                                        <span className="big-bold-blue">
                                            Hello, I'm Kay!
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <div className="container justify">
                                        <p className="sm-light-grey">
                                            I'm an Pellentesque elementum nunc sit amet finibus lacinia. Donec dictum bibendum ante, nec ornare dui.
                                            Nam non dui tristique, tempus arcu nec, consectetur nisi. Pellentesque ac ex dapibus, imperdiet nulla eu,
                                            finibus risus. Cras id purus ultrices nisi lobortis pulvinar vel ut justo. Duis quis neque vitae nulla
                                            posuere fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vitae ipsum
                                            interdum, facilisis nunc et, gravida enim. Proin sollicitudin nibh et ligula maximus, a posuere tellus
                                            tempor.
                                            <br />
                                            <br />
                                            find me on :
                                        </p>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="btn-container">
                                        <Buttons
                                            text="Instagram"
                                            background="#000053"
                                            href='https://www.instagram.com/wanderionproject/'
                                            className="button-link"
                                            icon={<InstagramOutlined />}
                                        />
                                        <Buttons
                                            text="LinkedIn"
                                            background="#fff"
                                            textColor="#000"
                                            marginLeft={16}
                                            href='https://www.instagram.com/wanderionproject/'
                                            border="1px solid #000053"
                                            className="button-link"
                                            icon={<InstagramOutlined />}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}
