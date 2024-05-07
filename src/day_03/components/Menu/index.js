import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { setActiveIndex } from '../../store/modules/takewayStore' 

const Menu = () => {
  const { foodsList, activeIndex } = useSelector(state => state.foods)
  const dispatch = useDispatch()
  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))

  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, i) => {
        return (
          <div
            onClick={() => dispatch(setActiveIndex(i))}
            key={item.tag}
            className={classNames(
              'list-menu-item',
              activeIndex === i && 'active'
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
