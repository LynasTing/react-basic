import { Card, Form, Breadcrumb, Button, Select, DatePicker, Radio, message, Tag, Table, Popconfirm } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import img404 from '@/day_06/assets/error.png'
import { useState } from 'react'
import { useGetChannels } from '@/day_06/Hooks/useGetChannels'

const { RangePicker } = DatePicker

const Article = () => {
  // 频道列表
  const channels = useGetChannels()

  // 状态枚举
  const status = {
    1: <Tag color='warning'>待审核</Tag>,
    2: <Tag color='success'>审核通过</Tag>
  }

  // 表格列数据
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: cover => <img src={cover.images[0] ?? img404} width={80} height={60} alt='cover' />
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: data => status[data]
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: data => {
        return <div className='flex justify-around'>
          <Button type="primary" shape="circle" icon={<EditOutlined />} />
          <Popconfirm
            title="删除文章"
            description="确认要删除当前文章吗?"
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </div>
      }
    }
  ]

  // 表格数据
  const [tableData, setTableData] = useState([
    {
      id: 1,
      comment_count: 1,
      cover: {
        images: []
      },
      like_count: 2,
      pubdate: '2023-05-10 12:45:31',
      read_count: 50,
      status: 1,
      title: '啊哈哈哈哈哈'
    }
  ])

  return <>
    <Card title={<Breadcrumb items={[
      { title: <Link>首页</Link>},
      { title: '文章列表'}
    ]} /> }>

      <Form className='pt-6 pb-10'>
        <Form.Item label="状态">
          <Radio.Group>
            <Radio value={1}>全部</Radio>
            <Radio value={2}>草稿</Radio>
            <Radio value={3}>审核通过</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="渠道" className='w-60'>
          <Select
            placeholder="请选择渠道"
            options={channels}
          />
        </Form.Item>
        <Form.Item label="日期">
          <RangePicker locale={locale} />
        </Form.Item>
        <Button className='tracking-widest ml-10' type='primary' htmlType='submit'>筛选</Button>
      </Form>
    </Card>
    <Card title={`根据筛选条件共查询到0条结果：`}>
      <Table rowKey="tableId" columns={columns} dataSource={tableData} />
    </Card>
  </>
}

export default Article