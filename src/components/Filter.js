import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class Filter extends Component {

  sort = (catagory) => {
    const updateGifs = this.props.updateGifs
    const gifs = this.props.gifs
    const sortedGifs = gifs.sort((a, b) => new Date(b[catagory]) - new Date(a[catagory]))
    return updateGifs(sortedGifs)
  }

  filter = () => {

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

        <Button variant="contained" color="primary" /*onClick={() => logState()}*/>
          MPPA Rating
        </Button>
      </div>
    )
  }
}
