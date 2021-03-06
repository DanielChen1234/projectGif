import React, { Component } from 'react'
import API from '../secrets.js'
import axios from 'axios'
import GifsLoader from './GifsLoader'
import SortAndFilter from './SortAndFilter'
import TextField from 'material-ui/TextField'
import Selectfield from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {GridList, GridTile} from 'material-ui/GridList'




export default class Search extends Component {

    constructor(){
        super()
        this.state = {
            searchParamaters: '', //User inputted query for the API
            gifs: [],
            pictureAmount: 6,
            MPPA: '', //Maturity rating for the gifs
        }
    }

    componentDidMount = () => {
        axios.get(`https://api.giphy.com/v1/gifs/trending?&api_key=${API}&limit=24`) //This are the default(currently trending) gifs for the user
            .then(gifArray => this.setState({gifs: gifArray.data.data}))
            .catch(err => console.log(err))
    }



    onSearchChange = (evt) => {
        const searchParamaters = this.state.searchParamaters.replace(' ', '+').toLowerCase()//Giphy queries only accept '+' in lieu of spaces and only in lowercase. e.g. 'Ryan Gosling' -> 'ryan+gosling'.
        const pictureAmount = this.state.pictureAmount
        const MPPA = this.state.MPPA //the rating change brings everything up to and including the rating. 
        const value = evt.target.value // This is to keep track of an empty user input for conditional rendering. 
                                      //It was necessary to contain this in a variable due to issues in using evt.target.value rather than a variable.
        if (value !== ''){ 
            this.setState({[evt.target.name]: evt.target.value}, () => {
                axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchParamaters}&api_key=${API}&limit=${pictureAmount}&rating=${MPPA}`)
                    .then(gifArray => this.setState({gifs: gifArray.data.data}))
                    .catch(err => console.log(err))
            })
        } else {
            this.componentDidMount()
        }
    }

    onNumberChange = (evt, index, value) => {
        this.setState({pictureAmount: value})
    } //This leverages the 'value' parameter from Material UI's <SelectField /> instead of the usual evt.target.value. 
     //This is also the reason why I have two similar event handlers instead of having one handler and using setState({[evt.target.name]: evt.target.value}).

    onRatingChange = (evt, index, value) => {
        this.setState({MPPA: value})
    }
    
    updateGifs = (gifs) => {
        this.setState({gifs})
    }

    render() {
        return (
        <div>
            <GridList cols={3} cellHeight={'auto'}>
                <GridTile>
                    <TextField
                        name= 'searchParamaters'
                        value={this.state.searchText}
                        onChange={this.onSearchChange}
                        floatingLabelText = 'Gifs in a Jiffy'
                    />
                </GridTile>

                <GridTile>
                    <Selectfield name='MPPA-style rating' floatingLabelText='Rating' value={this.state.MPPA} onChange={this.onRatingChange}>
                        <MenuItem value={''} primaryText={''} />
                        <MenuItem value={'y'} primaryText={'y'} />
                        <MenuItem value={'g'} primaryText={'g'} />
                        <MenuItem value={'pg'} primaryText={'pg'} />
                        <MenuItem value={'pg-13'} primaryText={'pg-13'} />
                        <MenuItem value={'r'} primaryText={'r'} />
                    </Selectfield>
                </GridTile>

                <GridTile>
                    <Selectfield name='pictureAmount' floatingLabelText='How many gifs?' value={this.state.pictureAmount} onChange={this.onNumberChange}>
                        <MenuItem value={6} primaryText={'6'} />
                        <MenuItem value={9} primaryText={'9'} />
                        <MenuItem value={12} primaryText={'12'} />
                    </Selectfield>
                </GridTile>

            </GridList>

            <GridList cellHeight={'auto'}>
                <GridTile>
                    <SortAndFilter updateGifs={this.updateGifs} gifs={this.state.gifs} MPPA={this.state.MPPA} />
                </GridTile>
            </GridList>

            <GifsLoader gifs={this.state.gifs} />
        </div>
        )
    }
}