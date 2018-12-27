import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class SortAndFilter extends Component {

  constructor(){
    super()
    this.state = {
      ratingErr: 'FILTER BY RATING'//state for the fourth button below.
    }
  }

  sort = (catagory, order) => {
    const updateGifs = this.props.updateGifs
    const gifs = this.props.gifs
    const sortedGifs = order === 'newest' ?
    gifs.sort((a, b) => new Date(b[catagory]) - new Date(a[catagory])) :
    gifs.sort((a, b) => new Date(a[catagory]) - new Date(b[catagory])) 
    //ternary operator used to determine whether the gif array should be newest to oldest or oldest to newest.

    return updateGifs(sortedGifs)
  }

  filter = () => {
    const updateGifs = this.props.updateGifs
    const gifs = this.props.gifs
    const MPPA = this.props.MPPA
    const filteredGifs = gifs.filter((gif) => gif.rating === MPPA)
    
    if(MPPA === ''){ //empty quotes if the user does not toggle a rating on the Search component
      this.setState({ratingErr: 'SELECT A RATING ABOVE THEN CLICK'}, () => {
        setTimeout(() => {
          this.setState({ratingErr: 'FILTER BY RATING'})
        }, 3000)
      })
    } else {
      return updateGifs(filteredGifs)
    }
  }
  
  render() {

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={() => this.sort('import_datetime', 'newest')}>
          Newest
        </Button>

        <Button variant="outlined" color="primary" onClick={() => this.sort('import_datetime')}>
          Oldest
        </Button>

        <Button variant="outlined" color="primary" onClick={() => this.sort('trending_datetime', 'newest')}>
          Trending
        </Button>

        <Button variant="outlined" color="primary" onClick={() => this.filter()}>
          {this.state.ratingErr}
        </Button>
      </div>
    )
  }
}
