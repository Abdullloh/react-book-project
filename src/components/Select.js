import React from 'react'
import { Link,useHistory } from 'react-router-dom';
import { SelectStyle } from './SelectStyle';
import { useSelector, useDispatch } from "react-redux";
import {clearUserAction} from '../store/actions/userActions';
import { Menu, Dropdown,Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Img from '../assets/images/userImage.svg'


export default function Select() {
    const dispatch = useDispatch();
    const history = useHistory();
    const logoutHandler = () => {
        dispatch(clearUserAction());
        history.replace("/sign-in");
      };
      const menu = (
        <Menu>
          <Menu.Item>
            <Link rel="noopener noreferrer" to="/my-account">
              My Account
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link  rel="noopener noreferrer" to="/add-book">
              Kitob +
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link  rel="noopener noreferrer" to="/add-author">
              Yozuvchi +
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link  rel="noopener noreferrer" onClick={logoutHandler}>
              Log Out
            </Link>
          </Menu.Item>
        </Menu>
      );
    return (<>
      <>
    <Dropdown overlay={menu} placement="bottomLeft" >
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      <img src={Img} alt="" /> <DownOutlined />
    </a>
    </Dropdown>,
    {/* <Dropdown overlay={menu} placement="bottomCenter" arrow>
      <Button>bottomCenter</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottomRight" arrow>
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown overlay={menu} placement="topLeft" arrow>
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="topCenter" arrow>
      <Button>topCenter</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="topRight" arrow>
      <Button>topRight</Button>
    </Dropdown> */}
  </>
    </>)
}
