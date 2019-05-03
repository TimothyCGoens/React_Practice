import React, { Component } from 'react'
import { connect } from 'react-redux'

class Calculator extends Component {

    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0
        }
    }

    handleNumChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddNumbers = () => {

        let result = parseInt(this.state.number1) + parseInt(this.state.number2)

        
        this.props.onAddResult(result)

        this.setState({
            number1: 0,
            number2: 0
        })
        
    }


    render() {
        return(
            <div>
                <input type='text' onChange={this.handleNumChange} name='number1' value={this.state.number1} placeholder='Enter a number'/>
                <input type='text' onChange={this.handleNumChange} name='number2' value={this.state.number2} placeholder='Enter another number'/>
                <button onClick={this.handleAddNumbers}>Add numbers</button>

                <ul>
                    {this.props.resultsAnswer.map((r) => <li>{r}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        resultsAnswer: state.result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddResult: (result) => dispatch({type: 'ADD_RESULT', value: result})
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         slut: (result) => dispatch({type: 'ADD_RESULT', value: result})
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)