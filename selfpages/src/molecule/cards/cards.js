import React from 'react'
import {Card,Row,Col,Image} from 'antd'
import './cards.css'
import pict from '../../assets/android.png'
export default function cards({
    title,desc,note,border,className,year,src
}) {
    return (
      <Card
        bordered={false}
        className="card"
        style={{ width: "100%" }}
        hoverable={true}
      >
        <Row>
          <Col lg={2}>
            <Image
              src={src}
              width={80}
            />
          </Col>
          <Col lg={12}>
            <h1>{desc}</h1>
            <p>{note}</p>
          </Col>
          <Col lg={8} className="centered">
            <p>{year}</p>
          </Col>
        </Row>
      </Card>
    );
}
