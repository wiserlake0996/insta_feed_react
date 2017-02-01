import React, { Component } from 'react'
import './Card.css';

class InstagramPreviewCard extends Component{

  render(){

    var data = this.props.data;
    var caption = "no caption"
    var convertTime = data.created_time
    var displayDate = new Date(convertTime * 1000).toDateString()

    if(data.caption != null){
      if(encodeURIComponent(data.caption.text) != null){
        var encoded = encodeURIComponent(data.caption.text)
        console.log(encodeURIComponent(data.caption.text))
        caption = decodeURIComponent(encoded)
      }
    }

    return(

        <div className="w3-card-12 instagram-preview-card">
          <a href={data.link}>
            <img className="instagram-preview-card-image" src={data.images.standard_resolution.url} alt="Norway" />
            </a>
            <div className="w3-container w3-center">
              <div className="tools">
                <div className="valign-center">
                  <span className="img-likes">{data.likes.count}</span>
                  <i className="material-icons">thumb_up</i>
                </div>
                <div className="valign-center">
                  <span className="img-comments">{data.comments.count}</span>
                  <i className="material-icons">feedback</i>
                </div>
                <div className="valign-center">
                  <span className="img-date">
                    {displayDate}
                  </span>

                </div>
              </div>
              <p className="img-caption">
                {caption}
              </p>
            </div>
          </div>

    )
  }
}


export default InstagramPreviewCard;
