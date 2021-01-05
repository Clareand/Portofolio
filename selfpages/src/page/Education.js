import React, { Component } from 'react'
import { Layout, Row, Col } from "antd";
import Cards from '../molecule/cards/cards'
const { Content, Footer } = Layout;
export default class Education extends Component {
    render() {
        return (
          <Layout className="layout">
            <Content style={{ overflow: "hidden" }}>
              <Row>
                <div className="big-bold-blue center">Education</div>
              </Row>
              <Row className="section-container">
                <Cards
                  desc="University of Information Technology"
                  note="Bachelor of Technology"
                  year="2014 - 2017"
                />
              </Row>
              <Row className="section-container">
                <Cards
                  desc="Nirvana Senior High School"
                  note="Cambrigde School"
                  year="2011 - 2014"
                />
              </Row>
            </Content>
          </Layout>
        );
    }
}
