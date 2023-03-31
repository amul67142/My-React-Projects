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

  capitalize=(s)=>{
    return s.charAt(0).toUpperCase() + s.slice(1);
};

   
   constructor(props){
    super(props);
    this.state={

     articles: [],
     loading: false,
     page: 1

    }

    document.title=`${this.capitalize(this.capitalize(this.props.category))} -  NewsFox`;
    
   }

   async updateNews() {
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ed608f16b8c4ed683ca23c0beaa09ca&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})

    let data = await fetch(url);
    let parsedData=await data.json()
   
    this.setState({
       articles: parsedData.articles ,
       totalArticles:parsedData.totalResults,
       loading: false
    })
   }

   async componentDidMount(){
          this.updateNews();
    
   }

  handleprev =async()=>{
       await this.setState({page: this.state.page -1});
        this.updateNews();

      }

  handlenext =async()=>{
        await this.setState({page: this.state.page +1});
        this.updateNews();
        
      }






  render() {
    return (
      <div className='container' >
        <h1 className='text-center' style={{margin: '35px 0px'}}>News Fox - Top {this.capitalize(this.capitalize(this.props.category))} Headlines</h1>
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
