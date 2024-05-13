import { Card, Form, Input, Button, Breadcrumb, Select } from "antd"
import { Link } from "react-router-dom"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from "react"
import { addArticleAPI, getChannelAPI } from "@/day_06/apis/article"

const Publish = () => {
  // 频道列表
  const [channels, setChannels] = useState([])

  useEffect(() => {
    const getChannels = async () => {
      const res = await getChannelAPI()
      const newRes = res?.data?.channels.map(item => {
        return {
          label: item.name,
          value: item.id
        }
      })
      setChannels(newRes)
    }
    getChannels()
  }, [])

  /**
   * 提交表单
   */
  const handleSubmit = async (v) => {
    console.log(`v + ::>>`, v)
    const { title, content, channel_id } = v

    const res = addArticleAPI({
      title,
      content,
      cover: {
        type: 0,
        images: []
      },
      channel_id
    })
    console.log(`res + ::>>`, res)
  }

  return <>
    <Card title={<Breadcrumb items={[
      { title: <Link to="/">首页</ Link>},
      { title: "发布文章"}
    ]} />}>
      <Form className="pl-20 py-6" onFinish={handleSubmit}>
        <Form.Item label="标题" name="title" rules={[{ required: false, message: '请输入文章标题'}]}>
          <Input placeholder="请输入文章标题" className="w-96" />
        </Form.Item>
        <Form.Item label="频道" name="channel_id" rules={[{ required: false, message: '请输入文章频道'}]}>
          <Select 
            placeholder="请选择频道" 
            className="max-w-96" 
            options={channels}
            title="name"
          > 
          </Select>
        </Form.Item>
        <Form.Item label="内容" name="content" rules={[{ required: false, message: '请输入文章频道'}]}>
          <ReactQuill 
            theme="snow" 
            placeholder="请输入文章内容"
            className="publish-quill"
          />
        </Form.Item>
        <Button className="ml-11" type="primary" htmlType="submit" >发布文章</Button>
      </Form>
    </Card>
  </>
  
}

export default Publish