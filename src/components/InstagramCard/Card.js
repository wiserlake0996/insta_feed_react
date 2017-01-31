import React, { Component } from 'react'
import './Card.css';

class InstagramCard extends Component{

  timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';
    }

    else {
        return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';
    }
}

  render(){

    var data = this.props.data;
    var caption = "no caption"
    //var $ = require('jquery');
    var convertTime = data.created_time
    var displayDate = new Date(convertTime * 1000).toDateString()

    if(data.caption != null){
      if(encodeURIComponent(data.caption.text) != null){
        var encoded = encodeURIComponent(data.caption.text)
        console.log(encodeURIComponent(data.caption.text))
        caption = decodeURIComponent(encoded)
      }
    }

    console.log(parseInt(Date.now()/1000, 10), "  ", data.created_time)

    return(

        <div className="w3-card-12 instagram-card">
          <a href={data.link}>
            <img className="instagram-card-image" src={data.images.standard_resolution.url} alt="Norway" />
            </a>
            <div className="w3-container w3-center">
              <div className="tools">
                <div className="valign-center">
                  <span>{data.likes.count}</span>
                  <i className="material-icons">thumb_up</i>
                </div>
                <div className="valign-center">
                  <span>{data.comments.count}</span>
                  <i className="material-icons">feedback</i>
                </div>
                <div className="valign-center">
                  <span>
                    {displayDate}
                  </span>
                  <i className="material-icons">schedule</i>
                </div>
              </div>
              <p>
                {caption}
              </p>
            </div>
          </div>

    )
  }
}


export default InstagramCard;
