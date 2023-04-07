import React, { Component } from "react";
import "./boxes.css";

export default class Boxes extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        {/* <div
          className="card m-4 border-0 overflow-hidden"
          style={{ width: "18rem", height: "22.375rem" }}
        >
          <img
            src={imageUrl}
            className="card-img-top "
            alt=""
            style={{ height: "150px" ,  }}
          />
          <div className="card-body">
            <h5 className="card-title fw-bold text-start fs-5">{title}...</h5>
            <p className="card-text text-start fs-6 overflow-auto ">
              {description}...
            </p>
            <a
              href={newsUrl}
              // target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div> */}
        <div className="card">
          <div className="header"></div>
          <div className="info">
            <p className="title">{article.title}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi.{" "}
            </p>
          </div>
          <div className="footer">
            <p className="tag">#HTML #CSS </p>
            <button type="button" className="action">
              Get started{" "}
            </button>
          </div>
        </div>
      </>
    );
  }
}
