import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class SortAndFilter extends Component {

  sort = (catagory) => {
    const updateGifs = this.props.updateGifs
    const gifs = this.props.gifs
    const sortedGifs = gifs.sort((a, b) => new Date(b[catagory]) - new Date(a[catagory]))

    return updateGifs(sortedGifs)
  }

  filter = () => {
    const updateGifs = this.props.updateGifs
    const gifs = this.props.gifs
    const MPPA = this.props.MPPA
    const filteredGifs = gifs.filter((gif) => gif.rating === MPPA)

    console.log(filteredGifs)

    return updateGifs(filteredGifs)
  }
  
  render() {

    return (
      <div>
        <Button variant="contained" color="primary" onClick={() => this.sort('import_datetime')}>
          Newest
        </Button>

        <Button variant="contained" color="primary" onClick={() => this.sort('trending_datetime')}>
          Trending
        </Button>

        <Button variant="contained" color="primary" onClick={() => this.filter()}>
          MPPA Rating
        </Button>
      </div>
    )
  }
}
