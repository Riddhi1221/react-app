import React from 'react'

const card1 = (props) => {
  return (
    <div className="card1 flex">
              <div className="img">
                <img src={props.img} alt="" />
              </div>
              <div className="text1">
                <h1>{props.title}</h1>
                <div className="icon flex align-item">
                <span className="status_icon"></span>
                <span >{props.subtitle}</span>
                </div>
                <div className="section">
                  <span>{props.head}</span>
                  <h3><a href="">{props.hedtitle}</a></h3>
                </div>
                <div className="section">
                  <span>{props.head1}</span>
                  <h3><a href="">{props.hedtitle1}</a></h3>
                </div>
              </div>
            </div>
  )
}

export default card1