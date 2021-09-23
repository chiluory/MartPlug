import React, { useState } from 'react';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
import axios from "axios";
import Logo from '../../Images/Logo/logo.png';
import SearchFeature from './Sections/SearchFeature';

function NavBar() {
  const [visible, setVisible] = useState(false)
  const [SearchTerm, setSearchTerm] = useState("")
  const [Marts, setMarts] = useState([])
  const [PostSize, setPostSize] = useState(0)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  const getMarts = (body) => {
    axios.post('/api/mart/marts', body)
        .then(response => {
            if (response.data.success) {
                if (body.loadMore) {
                    setMarts([...Marts, ...response.data.martInfo])
                } else {
                    setMarts(response.data.martInfo)
                }
                setPostSize(response.data.postSize)
            } else {
                alert(" 상품들을 가져오는데 실패 했습니다.")
            }
        })
}

  const updateSearchTerm = (newSearchTerm) => {

    let body = {
        searchTerm: newSearchTerm
    }

    setSearchTerm(newSearchTerm)
    getMarts(body)

}

  return (
    <nav className="menu" style={{ zIndex: 5, width: '100%' }}>
     
      <div className="menu__container">
     
        <span  className="menu__logo">
        <a href="/"><img src={Logo} /></a>
        </span>
        <span className="menu__right" >
         
          <RightMenu mode="horizontal" />
          
          <SearchFeature refreshFunction={updateSearchTerm}/>
          
        </span>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <RightMenu mode="inline" />
        </Drawer>
      </div>
      
    </nav>
  )
}

export default NavBar