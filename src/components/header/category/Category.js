import React, { Component } from 'react'
import CategoryItem from './CategoryItem'

export default class Category extends Component {
  render() {
    return (
      <div className='Category'>
        <CategoryItem name='예매순'/>
        <CategoryItem name='현재상영작'/>
        <CategoryItem name='개봉예정작'/>
        <CategoryItem name='평점순'/> 
      </div>
    )
  }
}
