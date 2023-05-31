import React, { Component } from 'react'

export class NewsItem extends Component {
  // constructor(){
  //     super();
  //     console.log("Constructer was made");
  // }
  static propTypes = {}

  render() {
    let { title, description, url, newsUrl, author, date,source } = this.props;
    let dates = new Date(date).toGMTString();
    return (
      <div className="card my-2" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{zIndex: "1",left: "85%"}}>
            {source}

          </span>
        <img src={url ? url : "https://static.toiimg.com/thumb/msid-73504984,imgsize-293941,width-400,resizemode-4/73504984.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {author ? author : "Sarthak"} on {dates ? dates : "30/05/2023"}</small></p>
          <a href={newsUrl ? newsUrl : "http://localhost:3000"} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem