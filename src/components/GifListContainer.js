import React, { Component } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'


class GifListContainer extends Component {
  constructor(){
    super()
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.state = {
      gifs: [],
      filteredGifs: []
    }
  }


  componentDidMount() {
    console.log("App did mounting")
    fetch('http://api.giphy.com/v1/gifs/search?q=all&api_key=4W9awpXV3vAB9ffCNg3LKkMSUDvTSOqz&limit=100')
      .then((res) => res.json())
      .then((json) => {
        const gifs = json.data

        this.setState({
          gifs: gifs
        })
      })
    }

    handleOnSubmit(event) {
      event.preventDefault()
      const filteredGifs = this.state.gifs.filter((gif) => {
        return gif.slug.split("-").includes(event.target.firstChild.value)
      })
      this.setState({
        filteredGifs: filteredGifs
      })
      console.log(filteredGifs)
    }



  render() {
    const gifItems = this.state.gifs.map((gif, index) => {
      return <GifList key={index} gif={gif} />
    })
    const filteredGifItems = this.state.filteredGifs.map((filteredGif, index) => {
      return <GifList key={index} gif={filteredGif} />
    })
    return(
      <div>
        <GifSearch onSubmit={this.handleOnSubmit}/>
        {
          (filteredGifItems.length > 0)
          ? <div>{filteredGifItems}</div>
          : <div>{gifItems}</div>
        }
      </div>
    )
  }

}

export default GifListContainer
