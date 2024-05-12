import { Card, Input, Form, Button, message } from "antd"
import logo from '@/day_06/assets/logo.png'
import { useDispatch } from "react-redux"
import { fetchToken } from '@/day_06/store/modules/user'
import { useNavigate } from "react-router-dom"

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  /**
   * 提交表单
   * @param code应为 246810
   */
  const handleSubmit = async v => {
    await dispatch(fetchToken(v))
    navigate('/')
    message.success('登录成功!')
  }
  return (
    <div className="login-page h-screen w-screen bg-contain">
      <Card className="bg-white rounded-md fixed top-1/2 left-1/2 shadow-lg -translate-x-1/2 -translate-y-1/2 pt-4 py-12">
        <img src={logo} alt="logo" className="w-52 h-16 mx-auto mb-4" />
        <Form className="w-96 pb-4" validateTrigger="onBlur" onFinish={handleSubmit}>
          <Form.Item name="mobile" rules={[
            {
              required: true,
              message: '请输入手机号'
            },
            {
              pattern: /^1[3-9]\d{9}$/,
              message: '请输入正确的手机号'
            }
          ]}>
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item name='code' rules={[
            {
              required: true,
              message: '请输入验证码'
            }
          ]}>
            <Input placeholder="请输入验证码" />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="tracking-widest w-full h-10">登录</Button>
        </Form>
      </Card>
    </div>
  )
}

export default Login