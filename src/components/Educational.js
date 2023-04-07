import React, { useState, useEffect } from "react";
import "../components/Menu/boxes.css";


const Educational = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=education&apiKey=0f644b97cbf143ccb6926d5e4d112ad4&page=1&pagesize=20&language=en"
      );
      const data = await response.json();
      setArticles(data.articles);
    };
    fetchArticles();
  }, []);
  return (
    <div className="container">
     <div className=" row row-cols-auto  my-3">
      {articles.map((article, index) => (
          <div className=" card_ border-0 mx-4 my-4 " key={index}>
          <img className="header h-75" src={article.urlToImage} alt=" "></img>
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
}

export default Educational