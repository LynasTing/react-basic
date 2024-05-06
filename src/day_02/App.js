import { useEffect, useRef, useState } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'lodash'
import classnames from 'classnames'
import { v4 as uuidV4 } from 'uuid'
import dayjs from 'dayjs'
import axios from 'axios'

// hooks使用规则
// 1.只能在组件中或者其它自定义Hook函数中调用
// 2.只能在组件的顶层调用，不能嵌套在if、for、其它函数中

// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

// 导航 Tab 数组
const tabs = [
  { type: 'like', text: '最热' },
  { type: 'ctime', text: '最新' },
]

/**
 * 自定义获取评论列表hook
 */
const useGetComments = () => {
  const [comments, setComments] = useState([])

  useEffect( () => {
    /**
     * 获取评论列表
     */
    const getComments = async () => {
      const res = await axios.get('http://localhost:4874/list')
      setComments(res.data)
    }
    getComments()
  }, [])

  return {
    comments,
    setComments
  }
}

/**
 * 评论组件
 */
const CommentItem = ({ item, onClickDel }) => {
  const onMyselfClickDelete = (id) => {
    onClickDel(id)
  }
  return (
    <div className="reply-item" key={item.rpid}>
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img className="bili-avatar-img" src={item.user.avatar} />
        </div>
      </div>
      <div className="content-wrap">
        <div className="user-info">
          <div className="user-name">{item.user.uname}</div>
        </div>
        <div className="root-reply">
          <span className="reply-content">{item.content}</span>
          <div className="reply-info">
            <span className="reply-time">{item.ctime}</span>
            <span className="reply-time">点赞数:{item.like}</span>
            {user.uid === item.user.uid && <span className="delete-btn" onClick={() => onMyselfClickDelete(item.rpid)}>删除</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  const { comments, setComments } = useGetComments()

  /**
   * 删除
   */
  const handleClickDelete = (id) => {
    setComments(comments.filter(item => item.rpid !== id))
  }

  /**
   * tab高亮
   */
  const [type, setType] = useState('like')

  const handleClickTab = (type) => {
    setType(type)
    setComments(_.orderBy(comments, type, 'desc'))
  }

  // 评论内容
  const [content, setContent] = useState()

  // 文本域DOM
  const textareaRef = useRef(null)

  /**
   * 发表评论
   */
  const handleClickPublish = () => {
    if(!content) return
    setComments([
      ...comments,
      {
        rpid: uuidV4(),
        user: {
          uid: '13258165',
          avatar: '',
          uname: '是我哦',
        },
        content,
        ctime: dayjs(new Date()).format('MM-DD hh:mm'),
        like: 89,
      }
    ])
    setContent('')
    textareaRef.current.focus()
  }
  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {tabs.map(item => 
              <span 
                key={item.type} 
                className={classnames('nav-item', { active: type === item.type })}
                onClick={() => handleClickTab(item.type)}
              >
                {item.text}
              </span>
            )}
          </li>
        </ul>
      </div>
      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              value={content}
              ref={textareaRef}
              onChange={(e) => setContent(e.target.value)}
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={() => handleClickPublish()}>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {comments.map(item => <CommentItem item={item} key={item.id} onClickDel={handleClickDelete} />)}
        </div>
      </div>
    </div>
  )
}
export default App