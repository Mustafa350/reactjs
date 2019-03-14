import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './News';

const news = [{
 id:1,
 title:"title 1 ",
 desc: "desc1"

},{
id : 2,
title:"title 2 ",
desc: "desc2"
}];





class App extends Component {
  addNews() {
    console.log("addNews Fonksiyonu çalıştırılıyor");
  }
  button(){
    console.log("button deneme bakacaz");
  }
  css() {
    console.log("css ile yapılan buton çalışıyor");
  }
  son() {
    console.log("son buton çalışıyor");
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      <News news={news} addNews={this.addNews} button={this.button} css={this.css} son={this.son}/>






      </div>
    );
  }
}

export default App;
