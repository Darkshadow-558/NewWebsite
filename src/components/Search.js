import React, { useState, useEffect } from "react";

// import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);

  const handleSearch = async (searchTerm) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&sources=bbc-news&apiKey=0f644b97cbf143ccb6926d5e4d112ad4`
    );
    const data = await response.json();
    
    setArticles(data.articles);
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  console.log(articles);
  return (
    <div className="container">
      <form className="d-flex justify-content-center" role="search">
        <input
          className="form-control me-2 w-25 shadow-none border-0"
          type="search"
          aria-label="tate"
          value={searchTerm}
          
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-outline-dark" type="submit">
          Search
        </button>
      </form>

      <div className="row row-cols-auto">
        {articles.map((article,index) => (
          
          <div className=" card_ border-0 mx-4 my-4 " key={index}>
          <img className="header h-75 " src={article.urlToImage} alt=" "></img>
            <div className="info">
              <p className="title">{article.title.slice(0,60)}</p>
              <p>{article.description.slice(0,60)}....</p>
            </div>
            <div className="footer d-flex justify-content-center ">
              <a type="button" className="action text-decoration-none" href={article.url} >
                Get started
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
