import React, { Component } from 'react'
import "./contents.css";

export default class ContentItem extends Component {
  render() {
    const { id, title, contents, date, img } = this.props;
    
    return (
      <div className='ContentItem'>
        <img src={img} alt='' />
        <div className='content__info'>
          <p>{id}</p>
          <h2>{title}</h2>
          <p>{contents}</p>
          <p>{contents}</p>
          <p>{date}</p>
        </div>
      </div>
    )
  }
}
