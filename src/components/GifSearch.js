import React, { Component } from 'react'

class GifSearch extends Component {

  render(){
    return(
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type="text" name="search" placeholder="Search.." value={this.props.filteredGifs}></input>
          <input type="submit" value="search"></input>
      </form>
    </div>
    )
  }
}

export default GifSearch
