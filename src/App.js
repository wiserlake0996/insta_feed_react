import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import InstagramCard from './components/InstagramCard/Card'


class App extends Component {

  state = {
    instaData:null
  }



  requestInstaData (){
    var $ = require('jquery');

    var URL = "https://api.instagram.com/v1/users/self/media/recent/?"
    var token = "27953104.1677ed0.eda7f0f438e643d48e36015737dc0da8"
    var urlForSearch = URL + "access_token=" + token + "&count=10&callback=?"



    $.getJSON(
            urlForSearch,
            function(data) {
                console.log(data.data);
                this.setState({
                  instaData: data.data
                })
                console.log(data)
            }.bind(this)
        );
  }

  componentDidMount(){
    this.requestInstaData();
  }
  render() {


    var displaydata = (<div> Nothing to show</div>)

    if(this.state.instaData){
      displaydata = this.state.instaData.map(function(thed){
        return (<InstagramCard key={thed.id} data={thed}/>);
      })
    }

    return (

      <div className="main">
        <header> <h3>List of instagram posts by user</h3></header>

        <div className="instagram-cards-container container">
          {displaydata}
        </div>
      </div>

    );
  }
}

export default App;
