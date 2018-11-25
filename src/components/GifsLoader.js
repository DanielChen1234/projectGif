import React, { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList'

export default class GifsLoader extends Component {
  //Material-UI was used to allow the gifs to take up three columns, a number which I believe is perfect amount for user experience.
  //This is a loading screen in the 'else' condition in case the API query takes a while to load.

  constructor(){
    super();
  }

  render() {

    const gifs = this.props.gifs

    if (gifs){
      return <GridList cols={3}>
                {gifs.map(gif => (
                  <GridTile 
                  key={gif.id}
                  title={gif.title}
                  subtitle={gif.rating}
                  >
                    <img src={gif.images.downsized_large.url} />         
                  </GridTile>
                ))}
              </GridList>
    } else {
      return <GridList cols={1}>
                <GridTile key={'RqFXe34guTAAg'}>
                  <img src={'https://media.giphy.com/media/RqFXe34guTAAg/giphy.gif'} />
                </GridTile>
            </GridList>
    }
  }
}
