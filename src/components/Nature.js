import React, { useState, useEffect } from "react";
import "../components/Menu/boxes.css";


const Nature = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=nature&apiKey=0f644b97cbf143ccb6926d5e4d112ad4&page=1&pagesize=20language=en"
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
        // <div className="container" key={index}>
        //   <div className="align-middle container w-75 bg_glass my-4 px-3 py-3"style={{height:"100%"}} >
        //       <div className="fs-5 fw-bold my-2">{article.title}</div>
        //       <p className="fw-light my-2">{article.description.slice(0,150)}....</p>
        //       <a className="text-decoration-none  btn btn-dark btn-sm my-2 " href={article.url}>Read More</a>
        //   </div>
        // </div>
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

export default Nature