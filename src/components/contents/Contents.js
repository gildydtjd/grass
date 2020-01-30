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
    const sample = [
      {id: '겨울왕국2', title: '안녕', contents: '안녕하세요', date: '2019/01/01 13:19', img: 'https://storage.cloud.google.com/gildydtjd/%EA%B2%A8%EC%9A%B8%EC%99%95%EA%B5%AD2.jfif?hl=ko'},
      {id: '극한직업', title: '안녕1', contents: '안녕하세요', date: '2019/01/02 13:19', img: 'https://storage.cloud.google.com/gildydtjd/%EA%B7%B9%ED%95%9C%EC%A7%81%EC%97%85.jfif?hl=ko'},
      {id: '백두산', title: '안녕2', contents: '안녕하세요', date: '2019/01/03 13:19', img: 'https://storage.cloud.google.com/gildydtjd/%EB%B0%B1%EB%91%90%EC%82%B0.jfif?hl=ko'},
      {id: '알라딘', title: '안녕3', contents: '안녕하세요', date: '2019/01/04 13:19', img: 'https://storage.cloud.google.com/gildydtjd/%EC%95%8C%EB%9D%BC%EB%94%98.jfif?hl=ko'},
      {id: '어벤져스', title: '안녕4', contents: '안녕하세요', date: '2019/01/05 13:19', img: 'https://storage.cloud.google.com/gildydtjd/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4.jfif?hl=ko'},
    ]
    return (
      <div className="Contents">
        <ContentsHeader title='영화리스트'/>
        {
          // this.state.movie.map(movie => {
          //   return (
          //     <ContentItem 
          //       id={movie.id}
          //       title={movie.title}
          //       contents={movie.contents} 
          //       date={movie.date} 
          //       img={"https://storage.cloud.google.com/gildydtjd/" + movie.movieThumbnailName} 
          //     />

              sample.map(movie => {
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
