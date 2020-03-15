import React, {useEffect} from "react";
import ListElement from './ListElement'
import { connect } from "react-redux";
import {getNews} from "../../actions/news__action";
import error from '../../styles/img/error.png'

function News({getNews, news, isLoaded, isError}) {
  useEffect(() => {
    getNews()
  },[getNews]);

  const mapElements = () => {
    return news.map((elem, key) => {
      return <ListElement {...elem} key={key}/>
    })
  };

  return (
    <div className="news" id="news">
      <div className="custom-container">
        {isLoaded ?
          <ul className="news__list">
            {isError ?
              <h1 className="news__error-message">
                <img src={error} alt="error"/>
                Something wrong! Try to refresh page.
              </h1> : ''}
            {mapElements()}
          </ul>
          :
          <div className="news__loader-wrapper">
            <div className="news__loader"></div>
          </div>}
      </div>
    </div>
  )
}

const mapStateToProps = ({news}) => ({
  news: news.news,
  isLoaded: news.isLoaded,
  isError: news.isError
});
const mapDispatchToProps = dispatch => ({getNews: () => dispatch(getNews())});



export default connect(mapStateToProps, mapDispatchToProps)(News);