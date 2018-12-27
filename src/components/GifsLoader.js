import React, { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList'

const GifsLoader = (props) => {
  //Material-UI was used to allow the gifs to take up three columns, a number which I believe is perfect amount for user experience.
  //This is a loading screen in the 'else' condition in case the API query takes a while to load.
  const gifs = props.gifs
  if (gifs){
    return <GridList cols={2} cellHeight={'auto'} spacing={6}>
              {gifs.map(gif => (
                <GridTile 
                key={gif.id}
                title={gif.title}
                subtitle={gif.rating}
                >
                  <img src={gif.images.downsized_large.url} alt={''} />         
                </GridTile>
              ))}
            </GridList>
  } else {
    return <GridList cols={1} cellHeight={'auto'}>
              <GridTile key={'TvLuZ00OIADoQ'}>
                <img src={'https://media.giphy.com/media/TvLuZ00OIADoQ/giphy.gif'} alt={''} />
              </GridTile>
          </GridList>
  }
}

export default GifsLoader
