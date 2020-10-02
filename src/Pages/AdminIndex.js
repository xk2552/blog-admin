import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  BarChartOutlined,
  DesktopOutlined,
  UserOutlined,
  FileAddOutlined,
  FileWordOutlined,
  MessageOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import '../static/css/AdminIndex.css'
import { Route } from "react-router-dom";
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const AdminIndex = (props) => {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = () => {
    setCollapsed(collapsed)
  }

  const handleClickHandle = (e) => {
    console.log(e.item.props)
    if (e.key === 'addArticle') { 
      props.history.push('/index/add')
    } else {
      props.history.push('/index/list')
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" >玲玲</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DesktopOutlined />}>
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item key="2" icon={<BarChartOutlined />}>
            <span>添加文章</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<UserOutlined />}
            onClick={handleClickHandle}
            title={
              <span>文章管理</span>
            }
          >
            <Menu.Item key="addArticle" icon={<FileAddOutlined />}>添加文章</Menu.Item>
            <Menu.Item key="articleList" icon={<FileWordOutlined />}>文章列表</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<MessageOutlined />}>
            <span>留言管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <div>
              <Route path="/index/" exact  component={AddArticle} />
              <Route path="/index/add/" exact   component={AddArticle} />
              <Route path="/index/add/:id"  exact   component={AddArticle} />
              <Route path="/index/list/"   component={ArticleList} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>xk.com</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminIndex