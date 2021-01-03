import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link, BrowserRouter } from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
export default class menu extends Component {
    state = {
        current: 'mail',
    };
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };
    render() {
        const { current } = this.state;
        return (
            <div>
                <BrowserRouter>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="home" >
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="About Me">
                        <Link to="/about">About Me</Link>
                    </Menu.Item>
                    <SubMenu key="SubMenu" title="More">
                        <Menu.Item key="setting:1">Skills</Menu.Item>
                        <Menu.Item key="setting:2">Experience</Menu.Item>
                        <Menu.Item key="setting:2">Interest</Menu.Item>
                        <Menu.Item key="setting:2">Awards</Menu.Item>
                    </SubMenu>
                </Menu>
                </BrowserRouter>
            </div>
        )
    }
}
