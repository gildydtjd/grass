import React, { Component } from 'react'
import './header.css';

export default class HeaderSearch extends Component {
  render() {
    return (
      <div className='HeaderSearch'>
        <input type="text" className="search__input"></input>
        <button className="search__button">검색</button>
      </div>
    )
  }
}
