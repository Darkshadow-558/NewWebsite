import React, { Component } from 'react'
import Sresult from './Sresult';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/everything?q=techcrunch&from=2023-02-28&sortBy=publishedAt&apiKey=1ed3bcb965ee4c41b111430e84b5b370&language=en&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parasData = await data.json();
    this.setState({
      articles: parasData.articles,
      totalArticles: parasData.totalResults,
    });
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=techcrunch&from=2023-02-28&sortBy=publishedAt&apiKey=1ed3bcb965ee4c41b111430e84b5b370&language=en&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parasData = await data.json();
    this.setState({ articles: parasData.articles });
    this.setState({
      page: this.state.page - 1,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/everything?q=techcrunch&from=2023-02-28&sortBy=publishedAt&apiKey=1ed3bcb965ee4c41b111430e84b5b370&language=en&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parasData = await data.json();
      this.setState({ articles: parasData.articles });
      this.setState({
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className="container text-center p-3 ">
        <div className="container row  row-cols-auto m-4 ">
          {this.state.articles.map((element) => {
            return (
              <div className="col h-25" key={element.url}>
                <Sresult
                  title={element.title ? element.title.slice(0, 50) : " "}
                  description={
                    element.description ? element.description.slice(0, 95) : " "
                  }
                  newsUrl={element.url ? element.url : " "}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
