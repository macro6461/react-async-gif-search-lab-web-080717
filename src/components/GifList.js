import React, { Component } from 'react'


class GifList extends Component {
  render(){
    return (
      <div>
        <div>
          <img src={this.props.gif.images.downsized_large.url}/>
        </div>
      </div>
    )
  }
}

export default GifList
