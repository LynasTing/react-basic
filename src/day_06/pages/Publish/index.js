import { Card, Form, Input, Button, Breadcrumb, Select, Radio, Upload, message } from "antd"
import { Link, useSearchParams } from "react-router-dom"
import { PlusOutlined } from '@ant-design/icons'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from "react"
import { addArticleAPI, echoArticleAPI } from "@/day_06/apis/article"
import { useGetChannels } from '@/day_06/Hooks/useGetChannels'

const Publish = () => {
  // 频道列表
  const channels = useGetChannels()

  /**
   * 提交表单
   */
  const handleSubmit = async (v) => {
    if(imageType !== imageList.length) return message.warning('请上传与类型相符的图片数量')
    const { title, content, channel_id } = v

    const res = await addArticleAPI({
      title,
      content,
      cover: {
        type: imageType,
        images: imageList.map(item => item.response.data.url)
      },
      channel_id
    })
    if(res.message === 'OK') {
      message.success('上传成功')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }
  }

  // 封面类型
  const [imageType, setImageType] = useState(0)

  const [imageList, setImageList] = useState([])

  /**
   * 上传图片
   */
  const handleUploadChange = e => {
    setImageList(e.fileList)
  }

  const [searchParams] = useSearchParams()

  // 文章id
  const articleId = searchParams.get('id')

  // form实例
  const [articleForm] = Form.useForm()

  useEffect(() => {
    /**
     * 文章数据回显
     */
    const echoArticle = async () => {
      const res = await echoArticleAPI(articleId)
      const { data } = res
      const { cover } = data
      articleForm.setFieldsValue({
        ...data,
        type: cover.type
      })
      setImageType(cover.type)
      if(cover.images?.length) {
        setImageList(cover.images.map(url => {
          return { url }
        }))
      }
    }
    if(articleId) echoArticle()
  }, [articleId, articleForm])
  return <>
    <Card title={<Breadcrumb items={[
      { title: <Link to="/">首页</ Link>},
      { title: `${articleId ? '编辑' : '发布'}文章`}
    ]} />}>
      <Form className="pl-20 py-6" onFinish={handleSubmit} initialValues={1} form={articleForm}>
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
        <Form.Item label="封面" name="type">
          <Radio.Group onChange={(e) => setImageType(e.target.value)}>
            <Radio value={1}>单图</Radio>
            <Radio value={3}>三图</Radio>
            <Radio value={0}>无图</Radio>
          </Radio.Group>
        </Form.Item>
        {imageType > 0 && <div className="ml-11 mb-6">
          <Upload 
            listType="picture-card"
            showUploadList
            maxCount={imageType}
            action='http://geek.itheima.net/v1_0/upload'
            name="image"
            fileList={imageList}
            onChange={handleUploadChange}
          >
            <div className="my-2">
              <PlusOutlined />
            </div>
          </Upload>
        </div>}
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