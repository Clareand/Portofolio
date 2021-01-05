import React from 'react'
import { Card, Row, Col } from "antd";
const { Meta } = Card;
export default function cardImage({alt,src,title,description}) {
    return (
        <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt={alt} src={src} />}
        >
            <Meta title={title} description={description} />
        </Card>
    )
}
