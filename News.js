import React from 'react';
import NewsItem from './NewsItem';
import Newsform from './Newsform';




class News extends React.Component{
	render(){
		return(


			<div>
     <NewsItem/>
		 <Newsform addNews={this.props.addNews} button={this.props.button} css={this.props.css} son={this.props.son}/>
			</div>
		)
	}
}

export default News;
