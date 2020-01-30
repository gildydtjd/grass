import React, { Component } from 'react'
import Header from './Header';

export default class ContentsHeader extends Component {
  render() {
    const { title } = this.props;
    return (
      <div style={{
        borderLeft: '5px solid #EAEAEA',
        padding: '3px',
        margin: '8px 4px',
      }}>
        {title}
      </div>
    )
  }
}
