import React from 'react'
import { Link } from "react-router-dom";

const ChatList = () => {
    return (
        <div className="chatList">
            <button className='btn'>
                <i className='fa fa-plus'></i>
                <span>New Converstion</span>
            </button>
        <div className="chatList_heading">
            <h2>Chat</h2>
            <button className='btn-nobg'>
                <i className='fa fa-ellipsis-h'></i>
            </button>
            </div>
        <div className="chatList_search">
            <div className="search_wrap">
                <input type="text" placeholder='Search Here' required />
                <button className="search-btn">
                <i className='fa fa-search'></i>
                </button>
           
            </div>
            </div>

        </div>
    )
}

export default ChatList
