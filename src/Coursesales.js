import React, { Component } from 'react';
import Courses from './Courses';

class Coursesales extends Component {
    constructor(props){
        super(props);

        this.state = {
            total: 0
        }
        this.sumPrice = this.sumPrice.bind(this);
    }

    sumPrice(price) {
        this.setState({total: this.state.total + price});
    }
    
    render() {
        console.log(this.props.items);
        var courses = this.props.items.map((item, i) => {
            return <Courses name={item.name} price={item.price} sumPrice={this.sumPrice} key={i}/>
        });
        return (
        <div id ="courses">
            <h1>Hi, This is Course sales Assistant. Here are the courses available:</h1>
            {courses}
            <p id="total">Total <b>${this.state.total}</b></p>
        </div>
        )
    }
}

export default Coursesales;
