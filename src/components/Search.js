import React, { Component } from 'react'
import API from '../secrets.js'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import Selectfield from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import Gifs from './Gifs'


export default class Search extends Component {

    constructor(){
        super()
        this.state = {
            searchParamaters: '',
            gifs: [],
            pictureAmount: 6
        }
    }

    componentDidMount = () => {
        const {data} = axios.get(`http://api.giphy.com/v1/gifs/search?q='type something'&api_key=${API}&limit=6`)
        .then(gifArray => this.setState({gifs: gifArray.data.data}))
        .catch(err => console.log(err))

        this.setState({gifs: data})
    }



    onSearchChange = (evt) => {
        const searchParamaters = this.state.searchParamaters
        const pictureAmount = this.state.pictureAmount

        this.setState({[evt.target.name]: evt.target.value}, () => {
            axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchParamaters}&api_key=${API}&limit=${pictureAmount}`)
                .then(gifArray => this.setState({gifs: gifArray.data.data}))
                .catch(err => console.log(err))
        })
    }

    onNumberChange = (evt, index, value) => {
        this.setState({pictureAmount: value})
    }

    render() {
        console.log(this.state.gifs)
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
            <Selectfield name='pictureAmount' floatingLabelText='Pick a number, any number' value={this.state.pictureAmount} onChange={this.onNumberChange}>
                <MenuItem value={6} primaryText={'6'} />
                <MenuItem value={12} primaryText={'12'} />
                <MenuItem value={18} primaryText={'18'} />
                <MenuItem value={24} primaryText={'24'} />
                <MenuItem value={30} primaryText={'30'} />
                <MenuItem value={36} primaryText={'36'} />
            </Selectfield>
            <br />
        </div>
        )
    }
}
