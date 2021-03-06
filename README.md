<h1>Project Giphy</h1>

<img src='https://cdn-images-1.medium.com/max/800/1*cHv3GloBXiaWQ1Y8TVW7Ew.png'/>

This app was developed to query Giphy's API with search parameters inputted by the user.

I decided that the project required three major components: Search.js; SortAndFilter.js; GifsLoader.js.

1) Search.js is the most complex of the components, where axios calls are made to the giphy API based on user input, number of gifs shown, and maturity ratings.

2) SortAndFilter.js uses a state update function passed down as props from Search.js. The sole purpose of this component is to handle change/click events and determine sorting patterns/filter patterns for the Giphy query.

3) GifsLoader.js utilizes the Material UI, specifically GridList & GridTile, to make a three column display, with the row amount determined by the user in Search.js. This the gifs to take up the maximum amount of space alloted on the screen.

Testing was done via Enzyme and Jest. 

This web app is deployed on https://danielchen1234.github.io/projectGif/. Please take a look!