import React, { useEffect, useState } from 'react'
import { Card, Input, Button, Spin, message } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import '../static/css/Login.css'
import axios from 'axios'
import servicePath from '../config/apiUrl'

// const openIdContext = createContext()

const Login = (props) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

  }, [])

  const checkLogin = () => {
    setIsLoading(true)
    if (!userName) {
      message.error('用户名不能为空!')
      return false
    } else if (!password) {
      message.error('密码不能为空!')
      return false
    }
    let dataProps = { 'userName': userName, 'password': password }
    axios({
      method: 'post',
      url: servicePath.checkLogin,
      data: dataProps,
      withCredentials: true
    }).then(
      res => {
        setIsLoading(false)
        if (res.data.data == '登录成功') { //eslint-disable-line
          console.log(res.data.openId)
          localStorage.setItem('openId', res.data.openId)
          props.history.push('/index')
        } else {
          message.error('用户名密码错误')
        }
      }
    )
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card title="React博客后台系统" bordered={true} style={{ width: 400 }} >
          <Input
            id="userName"
            size="large"
            placeholder="输入用户名"
            prefix={<UserOutlined />}
            onChange={e => setUserName(e.target.value)}
          />
          <br /><br />
          <Input.Password
            id="password"
            size="large"
            placeholder="输入密码"
            prefix={<KeyOutlined />}
            onChange={e => setPassword(e.target.value)}
          />
          <br /><br />
          <Button type="primary" size="large" block onClick={checkLogin}>登录</Button>
        </Card>
      </Spin>
    </div>
  )
}

export default Login