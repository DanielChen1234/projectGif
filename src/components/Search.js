import React, { Component } from 'react'
import API from '../secrets.js'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import Selectfield from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {GridList, GridTile} from 'material-ui/GridList'

import GifsLoader from './GifsLoader'


export default class Search extends Component {

    constructor(){
        super()
        this.state = {
            searchParamaters: '', //User inputted query for the API
            gifs: [],
            pictureAmount: 12,
            MPPA: 'g' //Maturity rating for the gifs
        }
    }

    componentDidMount = () => {
        const {data} = axios.get(`http://api.giphy.com/v1/gifs/search?q='hello'&api_key=${API}&limit=12&rating=g`) //This are the default gifs for the user
            .then(gifArray => this.setState({gifs: gifArray.data.data}))
            .catch(err => console.log(err))

        this.setState({gifs: data})
    }



    onSearchChange = (evt) => {
        const searchParamaters = this.state.searchParamaters.replace(' ', '+').toLowerCase()//Giphy queries only accept '+' in lieu of spaces and only in lowercase. e.g. 'Ryan Gosling' -> 'ryan+gosling'.
        const pictureAmount = this.state.pictureAmount
        const MPPA = this.state.MPPA
        const value = evt.target.value// This is to keep track of an empty user input for conditional rendering. It was necessary to contain this in a variable due to issues in using evt.target.value rather than a variable. 

        if (value !== ''){
            this.setState({[evt.target.name]: evt.target.value}, () => {
                axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchParamaters}&api_key=${API}&limit=${pictureAmount}&rating=${MPPA}`)
                    .then(gifArray => this.setState({gifs: gifArray.data.data}))
                    .catch(err => console.log(err))
            })
        } else {
            this.componentDidMount()
        }
    }

    onNumberChange = (evt, index, value) => {
        this.setState({pictureAmount: value})
    } //This leverages the 'value' parameter from Material UI's <SelectField /> instead of the usual evt.target.value

    onRatingChange = (evt, index, value) => {
        this.setState({MPPA: value})
    } //This leverages the 'value' parameter from Material UI's <SelectField /> instead of the usual evt.target.value

    render() {

        return (
        <div>
            <TextField
                name= 'searchParamaters'
                value={this.state.searchText}
                onChange={this.onSearchChange}
                fullWidth = {true}
                floatingLabelText = 'Gifs in a Jiffy'
            />
            <br/>

            <GridList>
                <GridTile>
                    <Selectfield name='pictureAmount' floatingLabelText='Pick a number, any number' value={this.state.pictureAmount} onChange={this.onNumberChange}>
                        <MenuItem value={12} primaryText={'12'} />
                        <MenuItem value={18} primaryText={'18'} />
                        <MenuItem value={24} primaryText={'24'} />
                    </Selectfield>
                </GridTile>

                <GridTile>
                    <Selectfield name='MPPA-style rating' floatingLabelText='from Young -> Restricted' value={this.state.MPPA} onChange={this.onRatingChange}>
                        <MenuItem value={'y'} primaryText={'y'} />
                        <MenuItem value={'g'} primaryText={'g'} />
                        <MenuItem value={'pg'} primaryText={'pg'} />
                        <MenuItem value={'pg-13'} primaryText={'pg-13'} />
                        <MenuItem value={'r'} primaryText={'r'} />
                    </Selectfield>
                </GridTile>
            </GridList>

            <GifsLoader gifs={this.state.gifs} />
        </div>
        )
    }
}