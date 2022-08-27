/*
 * @Autor: mofish
 * @Date: 2022-08-18 17:16:03
 * @LastEditors: mofish
 * @LastEditTime: 2022-08-19 14:04:55
 * @Description: 页头布局组件  更加符合apusic-ui规范
 */
import React, { CSSProperties } from 'react'

import './style.less'

export interface APageHeaderProps {
  /** 标题 */
  title: React.ReactNode
  /** 标题右侧组件 */
  extra?: React.ReactNode
  /** 标题下方的操作区域 */
  children?: React.ReactNode
  /** style样式 */
  style?: CSSProperties
}

const APageHeader = function (props: APageHeaderProps) {
  const { title, extra, children, style } = props
  return (
    <div className="apusic-page-common-header-box" style={style}>
      <div className="apusic-page-name">
        <div className="left">{title}</div>
        {extra && <div className="right">{extra}</div>}
      </div>
      {children && <div className="apusic-page-content">{children}</div>}
    </div>
  )
}

export default APageHeader
