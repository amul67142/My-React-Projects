import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class NewsComponent extends Component {

  static defaultProps={
    country:'in',
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
      country : PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
  }
   
   constructor(){
    super();
    this.state={
     articles: [],
     loading: false,
     page: 1
    }
    
   }

   async updateNews() {
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d361aa7a91a48c2826f70d7f910fc8f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})

    let data = await fetch(url);
    let parsedData=await data.json()
   
    this.setState({
      articles: parsedData.articles ,
       totalArticles: parsedData.totalResults,
      loading: false
    })
   }

   async componentDidMount(){
          this.updateNews();
    
   }

  handleprev =async()=>{
        this.setState({page: this.state.page -1});
        this.updateNews();

      }

  handlenext =async()=>{
        this.setState({page: this.state.page +1});
        this.updateNews();
        
      }






  render() {
    return (
      <div className='container' >
        <h1 className='text-center' style={{margin: '35px 0px'}}>News Fox - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        
        <div className="row my-4">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            


          })}
       
        
        </div>

    
        <div className="container d-flex justify-content-between">
          
        <button  disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handleprev}> &larr; Previous</button>
        <button  disabled={this.state.page+1 > Math.ceil(this.state.totalArticles/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>


        </div>
        
        
        



      </div>
    )
  }
}

export default NewsComponent
