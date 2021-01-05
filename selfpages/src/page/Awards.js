import React, { Component } from 'react'
import {Layout,Row,Col} from 'antd'
import '../assets/css/style.css'
import Cards from '../molecule/cards/cards';
import ceh from '../assets/CEH.jpg'
import cp from '../assets/coding.png'
import ctf from '../assets/flag.png'

const {Content,Footer}=Layout;
const award=[
    {
        src:cp,
        alt:"https://www.flaticon.com/authors/kiranshastry",
        title:"Competitive Programming (CP)",
        desc:"Finalist",
        year:'2017'
    },
    {
        src:ctf,
        alt:"https://www.flaticon.com/authors/freepik",
        title:"Capture the Flag Hacking Competition",
        desc:"Runner Up",
        year:'2018'
    },
    {
        src:ceh,
        title:"CEH V10 Program by EC-Council",
        desc:"Certified Ethical Hacker",
        year:'2019'
    }
]
export default class Awards extends Component {
    render() {
        return (
         <Layout className="layout">
             <Content style={{overflow:"hidden"}}>
                 <Row>
                     <div className="big-bold-blue center">Awards and Certification</div>
                 </Row>
                 {award.map((data)=>(
                     <Row className="section-container">
                         <Cards
                             desc={data.title}
                             note={data.desc}
                             src={data.src}
                             year={data.year}
                         />
                     </Row>
                 ))}
             </Content>
         </Layout>
        )
    }
}
