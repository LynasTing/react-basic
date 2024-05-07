import classNames from 'classnames'
import Count from '../Count'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount, clearCarList } from '../../store/modules/takewayStore'
import { useState } from 'react'

const Cart = () => {
  // 控制购物车列表的显示
  const [visible, setVisible] = useState(false)

  /**
   * 点击显示购物车列表
   */
  const showVisible = () => {
    if(!carList.length) return
    setVisible(true)
  }

  /**
   * 点击清空购物车
   */
  const handleClickClearCar = () => {
    dispatch(clearCarList())
    setVisible(false)
  }

  const { carList } = useSelector(state => state.foods)
  // 总价
  const totalPrice = carList.reduce((a, c) => a + c.price * (c.count || 1), 0)

  const dispatch = useDispatch()
  return (
    <div className="cartContainer">
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div
        className={classNames('cartOverlay', visible && 'visible')}
        onClick={() => setVisible(false)}
      />
      <div className="cart" onClick={showVisible}>
        {/* fill 添加fill类名可以切换购物车状态*/}
        {/* 购物车数量 */}
        <div className={classNames('icon', carList.length && 'fill')}>
          {carList.length > 0 && <div className="cartCornerMark">{carList.length}</div>}
        </div>
        {/* 购物车价格 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {totalPrice.toFixed(2)}
            </span>
          </div>
          <span className="text">预估另需配送费 ¥5</span>
        </div>
        {/* 结算 or 起送 */}
        {false ? (
          <div className="goToPreview">去结算</div>
        ) : (
          <div className="minFee">¥20起送</div>
        )}
      </div>
      {/* 添加visible类名 div会显示出来 */}
      <div className={classNames('cartPanel', visible && 'visible')}>
        <div className="header">
          <span className="text">购物车</span>
          <span className="clearCart" onClick={() => handleClickClearCar()}>清空购物车</span>
        </div>

        {/* 购物车列表 */}
        <div className="scrollArea">
          {carList.map(item => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  <Count
                    count={item.count}
                    onMinus={() => dispatch(decrementCount({ id: item.id }))}
                    onPlus={() => dispatch(incrementCount({ id: item.id }))}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
