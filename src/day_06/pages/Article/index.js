import { Card, Form, Breadcrumb, Button, Select, DatePicker, Radio, message, Tag, Table, Popconfirm } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import img404 from '@/day_06/assets/error.png'
import { useEffect, useState } from 'react'
import { useGetChannels } from '@/day_06/Hooks/useGetChannels'
import { getArticleListAPI, delArticleAPI } from '@/day_06/apis/article'

const { RangePicker } = DatePicker

const Article = () => {
  const navigate = useNavigate()
  // 频道列表
  const channels = useGetChannels()

  // 状态枚举
  const status = {
    1: <Tag color='warning'>待审核</Tag>,
    2: <Tag color='success'>审核通过</Tag>
  }

  // 筛选状态
  const filterRadios = [
    { text: '全部', val: '' },
    { text: '待审核', val: 1 },
    { text: '审核通过', val: 2 }
  ]

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
          <Button 
            type="primary" 
            shape="circle" 
            icon={<EditOutlined />} 
            onClick={() => navigate(`/publish?id=${data.id}`)}
          />
          <Popconfirm
            title="删除文章"
            description="确认要删除当前文章吗?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDeleteArticle(data)}
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

  // 总数
  const [count, setCount] = useState(0)

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

  // 列表参数
  const [params, setParams] = useState({
    status: '',
    channel_id: '',
    begin_pubdate: '',
    end_pubdate: '',
    page: 1,
    per_page: 2
  })

  useEffect(() => {
    /**
     * 获取文章列表
     */
    async function getArticle() {
      const res = await getArticleListAPI(params)
      setTableData(res.data.results)
      setCount(res.data.total_count)
    }
    getArticle()
  }, [params])

  /**
   * 筛选
   */
  const handleFormFilter = e => {
    setParams({
      ...params,
      channel_id: e.channel_id,
      status: e.status,
      begin_pubdate: e.date[0]?.format('YYYY-MM-DD'),
      end_pubdate: e.date[1]?.format('YYYY-MM-DD')
    })
  }

  /**
   * 分页
   */
  const handlePageChange = page => {
    setParams({
      ...params,
      page
    })
  }

  /**
   * 删除文章
   */
  const handleDeleteArticle = e => {
    delArticleAPI(e.id)
      .then(() => {
        message.success('删除成功！')
        setParams({ ...params })
      })
  }

  return <>
    <Card title={<Breadcrumb items={[
      { title: <Link>首页</Link>},
      { title: '文章列表'}
    ]} /> }>
      <Form className='pt-6 pb-10' onFinish={handleFormFilter}>
        <Form.Item label="状态" name="status">
          <Radio.Group defaultValue={''}>
            {filterRadios.map(item => <Radio key={item.val} value={item.val}>{item.text}</Radio>)}
          </Radio.Group>
        </Form.Item>
        <Form.Item label="渠道" name="channel_id" className='w-60'>
          <Select
            placeholder="请选择渠道"
            options={channels}
          />
        </Form.Item>
        <Form.Item label="日期" name="date">
          <RangePicker locale={locale} />
        </Form.Item>
        <Button className='tracking-widest ml-10' type='primary' htmlType='submit'>筛选</Button>
      </Form>
    </Card>
    <Card title={`根据筛选条件共查询到${count}条结果：`} className='mt-4'>
      <Table rowKey="tableId" columns={columns} dataSource={tableData} pagination={{
        total: count,
        pageSize: params.per_page,
        onChange: handlePageChange
      }} />
    </Card>
  </>
}

export default Article