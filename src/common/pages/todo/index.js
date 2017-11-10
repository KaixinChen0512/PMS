import React from 'react'
import './index.less'

export default class todo extends React.Component {
    render() {
        return (
            <div className="animated swing todo">
                <div className="animated swing discribe">目前该石油管道工程管理系统版本为v1.0，更多模块在持续开发中，<a href="https://github.com/KaixinChen0512">我的GitHub</a>！</div>
            </div>
        )
    }
}