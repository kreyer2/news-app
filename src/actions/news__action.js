import _ from 'axios'

const API_KEY = '0aa7c2d860924c11aaf84c85578c855d';
const API = 'http://newsapi.org/v2/everything?' +
            'q=Apple&' +
            'from=2020-03-14&' +
            'sortBy=popularity&';

export const getNews = () => dispatch => {

  _.get(`${API}apiKey=${API_KEY}`)
    .then(res => {
      dispatch({
        type: "GET_NEWS",
        data: res.data.articles
      })
    })
    .catch(err => isError(true));

  dispatch(isLoaded(true))
};

const isError = (bool) => dispatch => {
  dispatch({
    type: "IS_ERROR",
    bool
  })
};

const isLoaded = (bool) => dispatch => {
  dispatch({
    type: "IS_LOADED",
    bool
  })
};