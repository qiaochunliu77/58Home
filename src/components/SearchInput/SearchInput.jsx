import React, { Component } from 'react';
import './SearchInput.css'
import imgJiahao from '../../assets/images/加号.png'
import imgPlace from '../../assets/images/定位.png'
import imgSearch from '../../assets/images/搜索.png'
class SearchInput extends Component {
    state = {}
    render() {
        return (
            <div className="search">
                <div className="search-input">
                    <div className="search-place">
                        <img src={imgPlace}></img>
                        <p className="place">南昌</p> 
                        <p className="search-img">
                            <img className='search-img' src={imgSearch}></img>
                        </p>
                        <input type="text" placeholder='擦玻璃' />
                    </div>
                </div>
                <img className="search-jiahao" src={imgJiahao}></img>
            </div>
            // 35.075px
        );
    }
}


export default SearchInput;