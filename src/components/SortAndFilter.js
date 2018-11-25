import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class SortAndFilter extends Component {

  constructor(){
    super()
    this.state = {
      ratingErr: 'FILTER BY RATING'
    }
  }

  sort = (catagory, order) => {
    const updateGifs = this.props.updateGifs
    const gifs = this.props.gifs
    const sortedGifs = order === 'newest' ?
    gifs.sort((a, b) => new Date(b[catagory]) - new Date(a[catagory])) :
    gifs.sort((a, b) => new Date(a[catagory]) - new Date(b[catagory]))

    return updateGifs(sortedGifs)
  }

  filter = () => {
    const updateGifs = this.props.updateGifs
    const gifs = this.props.gifs
    const MPPA = this.props.MPPA
    const filteredGifs = gifs.filter((gif) => gif.rating === MPPA)
    
    if(MPPA === ''){
      this.setState({ratingErr: 'Select a rating above then click this'})
    } else {
      return updateGifs(filteredGifs)
    }
  }
  
  render() {

    return (
      <div>
        <Button variant="contained" color="primary" onClick={() => this.sort('import_datetime', 'newest')}>
          Newest
        </Button>

        <Button variant="contained" color="primary" onClick={() => this.sort('import_datetime', 'oldest')}>
          Oldest
        </Button>

        <Button variant="contained" color="primary" onClick={() => this.sort('trending_datetime', 'newest')}>
          Trending
        </Button>

        <Button variant="contained" color="primary" onClick={() => this.filter()}>
          {this.state.ratingErr}
        </Button>
      </div>
    )
  }
}
