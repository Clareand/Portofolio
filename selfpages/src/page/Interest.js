import React, { Component } from 'react'
import {Layout,Row,Col} from 'antd'
import "../assets/css/style.css";
import CardImage from '../molecule/cardImage/cardImage';
import mountain from '../assets/mountain.png'
import wacol from '../assets/watercolor.png'
import book from '../assets/open-book.png'
import movie from '../assets/video-player.png'
const {Content,footer} = Layout
const interested = [
  {
    src:mountain,
    title: "Hiking",
    description:
      "Lazy fox jump over the dog Interdum et malesuada fames ac ante",
  },
  {
    src:wacol,
    title: "Painting",
    description:
      "Lorem Ipsum sir dolor amet Interdum et malesuada fames ac ante",
  },
  {
    src:movie,
    title: "Watching Movies",
    description:
      "Pellentesque ac ex dapibus, imperdiet nulla eu, finibus risus",
  },
  {
    src:book,
    title: "Reading Book",
    description:
      "Pellentesque ac ex dapibus, imperdiet nulla eu, finibus risus",
  },
];
export default class Interest extends Component {
    render() {
        return (
          <Layout className="layout">
            <Content style={{ overflow: "hidden" }}>
              <Row>
                <div className="big-bold-blue center">Interest</div>
              </Row>
              <Row>
                <div className="sm-light-grey center section-container">
                  Apart from being programmer, I enjoy most of my time do some
                  activities, both indoor activities or outdoor activities. I
                  love being in a nature or in a quite places. I'm pretty fine if I
                  had to stay at home all day.
                </div>
              </Row>
              <Row gutter={[16, 16]} className="section-container">
                {interested.map((data) => (
                  <Col span={6}>
                    <CardImage
                      src={data.src}
                      alt="https://www.flaticon.com/authors/freepik"
                      description={data.description}
                      title={data.title}
                    />
                  </Col>
                ))}
              </Row>
            </Content>
          </Layout>
        );
    }
}
