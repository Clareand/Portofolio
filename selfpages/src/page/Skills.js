import React, { Component } from 'react'
import {Layout,Row,Col} from 'antd'
import "../assets/css/style.css"
import css from '../assets/css.png'
import html from "../assets/html.png"
import js from "../assets/java.png"
import ps from "../assets/photoshop.png"
import ai from "../assets/illustrator.png" 
import android from "../assets/android.png"
import python from '../assets/python.png'
import unity from '../assets/unity.png'
import react from "../assets/react.png";
import CardImage from '../molecule/cardImage/cardImage';
const {Content, Footer} = Layout;
const skills = [
  {
    image: css,
    title: "css3",
    description: "Advance",
  },
  {
    image: html,
    title: "HTML5",
    description: "Advance",
  },
  {
    image: js,
    title: "Javascript",
    description: "Intermediate",
  },
  {
    image: ps,
    title: "Design",
    description: "Intermediate",
  },
  {
    image: ai,
    title: "illustrator",
    description: "Intermediate",
  },
  {
    image: android,
    title: "Android Development",
    description: "Beginner",
  },
  {
    image: react,
    title: "ReactJS",
    description: "Beginner",
  },
  {
    image: python,
    title: "Python",
    description: "Beginner",
  },
  {
    image: unity,
    title: "Game Developmet",
    description: "Beginner",
  },
];
export default class Skills extends Component {
    render() {
        return (
          <Layout className="layout">
            <Content style={{ overflow: "hidden" }}>
              <Row>
                <div className="big-bold-blue center">Skills</div>
              </Row>
              <Row gutter={[16, 16]} className="section-container">
                {skills.map((data) => (
                  <Col span={6}>
                    <CardImage 
                        alt="https://www.flaticon.com/authors/alfredo-hernandez" 
                        description = {data.description}
                        title = {data.title}
                        src = {data.image}
                    />
                  </Col>
                ))}
              </Row>
            </Content>
          </Layout>
        );
    }
}
