import React, { Component } from 'react'
import './nav.css';
import NavItem from './NavItem';

export default class Nav extends Component {
  render() {
    const sample = [
      { name: '영화홈'},
      { name: '상영장/예정작'},
      { name: '영화랭킹'},
      { name: '예매'},
      { name: '평점/리뷰'},
      { name: '다운로드'},
    ]

    return (
      <div className="Nav">
        <h1> Dragon Movie </h1>
        {
          sample.map(item => {
            return (
              <NavItem name={item.name} onclick={this.test01}/>
            )
          })
        }
        
      </div>
    )
  }
}
