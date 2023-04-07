import React, {useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent = (props)=> {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalArticles, settotalArticles] = useState(0)
  

 const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  
  // document.title = `${capitalize(
  //   capitalize(props.category)
  // )} -  NewsFox`;

  

  const updateNews= async()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5d361aa7a91a48c2826f70d7f910fc8f&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
   

    let data = await fetch(url);
    let parsedData = await data.json();

    setarticles(parsedData.articles)
    settotalArticles(parsedData.totalResults)
    setloading(false)
   
  }

  useEffect(() => {
   updateNews();
   
  }, []);



 
  const fetchMoreData = async() => {
    setpage(page + 1)
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5d361aa7a91a48c2826f70d7f910fc8f&page=${page+1}&pageSize=${props.pageSize}`;
    

    let data = await fetch(url);
    let parsedData = await data.json();

    setarticles(articles.concat(parsedData.articles))
    settotalArticles( parsedData.totalResults)

   
  };

  
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          News Fox - Top {capitalize(capitalize(props.category))}{" "}
          Headlines
        </h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalArticles}
          loader={<Spinner/>}
        >
         
          
       
         <div className="container">
          <div className="row my-4">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>

     
      </>
    );
  }


NewsComponent.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

NewsComponent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default NewsComponent;
