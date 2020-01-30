import React, { Component } from 'react'
import './contents.css';
import ContentItem from './ContentItem';
import ContentsHeader from '../header/ContentsHeader';
import axios from 'axios';

export default class Contents extends Component {
  state = {
    movie: []
  }
  
  test1() {
    axios.get('/MovieList').then(res=>{
      const movie =res.data;
      this.setState({ movie });
    });
}
  componentDidMount() {
    this.test1();
  }
  render() {
    return (
      <div className="Contents">
        <ContentsHeader title='영화리스트'/>
        {
          this.state.movie.map(movie => {
            return (
              <ContentItem 
                id={movie.id}
                title={movie.title}
                contents={movie.contents} 
                date={movie.date} 
                img={movie.img} 
              />
            )
          })
        }
      </div>
    )
  }
}
