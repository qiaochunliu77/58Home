import React, { Component } from 'react';
import './main.css'
import SearchInput from '../../components/SearchInput/SearchInput';
class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='main'>
                <SearchInput/>
            </div>
         );
    }
}
 
export default Main;