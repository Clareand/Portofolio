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
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
            >
              <Menu.Item key="home">
                <Link to="/">About Me</Link>
              </Menu.Item>
              <SubMenu key="SubMenu" title="More">
                <Menu.Item key="setting:5">
                  <Link to="/about">Education</Link>
                </Menu.Item>
                <Menu.Item key="setting:1">
                  <Link to="/skill">Skills</Link>
                </Menu.Item>
                <Menu.Item key="setting:2">
                  <Link to="/experience">Experience</Link>
                </Menu.Item>
                <Menu.Item key="setting:3">
                  <Link to="/interest">Interest</Link>
                </Menu.Item>
                <Menu.Item key="setting:4">
                  <Link to="/awards">Awards</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        );
    }
}
