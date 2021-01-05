import React, { Component } from 'react'
import {Layout,Row,Col} from 'antd'
import Cards from '../molecule/cards/cards'
const {Content,footer} = Layout;
const experiences = [
  {
    desc: "Data Scientist",
    note: "Intern as junior data scientist YBS company",
    year: "2019 (May - Nov) ",
  },
  {
    desc: "UI/UX Designer",
    note: "Internship as UI/UX designer for Has Company",
    year: "2018 (March - June)",
  },
  {
    desc: "Android Developer",
    note: "Intern as junior developer for His Company",
    year: "2016 - 2017",
  },
];
export default class Experience extends Component {

    render() {
        return (
          <Layout className="layout">
            <Content style={{ overflow: "hidden" }}>
              <Row>
                <div className="big-bold-blue center">Experience</div>
              </Row>
              {experiences.map((data) => (
                <Row className="section-container">
                  <Cards desc={data.desc} note={data.note} year={data.year} />
                </Row>
              ))}
            </Content>
          </Layout>
        );
    }
}
