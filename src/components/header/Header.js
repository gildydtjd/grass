import React, { Component } from 'react'
import './header.css';
import HeaderSearch from './HeaderSearch';
import Category from './category/Category';


export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img className='logo' src='/img/logo.png' alt='' />
                <HeaderSearch />
                <Category />
            </div>
        )
    }
}
