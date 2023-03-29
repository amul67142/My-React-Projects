import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponent extends Component {
   
   constructor(){
    super();
    this.state={
     articles: [],
     loading: false,
     page:1
    }
    
   }

   async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=5d361aa7a91a48c2826f70d7f910fc8f&page=1pageSize=20";

    let data = await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles , totalArticles: parsedData.totalResults})
   }

  handleprev =async()=>{

        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=5d361aa7a91a48c2826f70d7f910fc8f&page=${this.state.page -1}&pageSize=20`;

        let data = await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
       
        
        console.log("Next")
        this.setState({
          page: this.state.page -1,
          articles: parsedData.articles
        })
        console.log("previous")
      }

  handlenext =async()=>{

    if(this.state.page+1 > Math.ceil(this.state.totalArticles/20)){

    }
    else{
        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=5d361aa7a91a48c2826f70d7f910fc8f&page=${this.state.page +1}&pageSize=20`;
        

        let data = await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
       
        
        this.setState({
          page: this.state.page+ 1,
          articles: parsedData.articles
        })
        
      }}






  render() {
    return (
      <div className='container my-5' >
        <h1>News Fox - Top Headlines</h1>
        
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
            


          })}
       
        
        </div>

    
        <div className="container d-flex justify-content-between">
          
        <button  disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handleprev}> &larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>


        </div>
        
        
        



      </div>
    )
  }
}

export default NewsComponent
