import React from 'react'

const NewsItem = (props) =>{
 
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex: 1}}>
            {source}</span>
          <img src={!imageUrl ? "https://www.reuters.com/resizer/dUEYsP1Yx-AidkVAQX2WUXZTlTI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/C42PVMLGHNIOZERFSSQU4VUHF4.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? 'Unknown' :author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>

      </div>
    )
  
}

export default NewsItem
