import React, { Component } from 'react';
class Info extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='infomation'>
                <div className="header">
                    我的消息
                    <span>帮助中心</span>
                </div>
                <div className="content">
                    <div className="content-item">
                        <div className="item-img">图片</div>
                        <div className="item-info">
                            <div className="item-top">
                                <p className="title">生活号</p>
                                <p className="time">昨天 13:07</p>
                            </div>
                            <div className="item-msg">一定要少吃，你知道是哪三种吗？点击查看>></div>
                        </div>
                    </div>
                </div>
            </div> 
         );
    }
}
 
export default Info;