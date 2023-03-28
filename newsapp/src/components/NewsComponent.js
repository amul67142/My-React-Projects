import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponent extends Component {
  render() {
    return (
      <div className='container my-3' >
        <h2>News Fox - Top Headlines</h2>
        
        <div class="row">
       
                    <div class="col-md-4">
                    <NewsItem title="my title" description="my desc"/>
                    </div>
                    <div class="col-md-4">
                    <NewsItem title="my title" description="my desc"/>
                    </div>
                    <div class="col-md-4">
                    <NewsItem title="my title" description="my desc"/>
                    </div>

        
        </div>
        
        



      </div>
    )
  }
}

export default NewsComponent
