import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './MenuComp';
import Header from './HeaderComponents';
import Footer from './FooterComponents';
import Dishdetail from './Dishdetail';
import {DISHES} from '../shared/dishes';

class MainComponents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dishes : DISHES,
             selectedDish : null
        };
    }
    onDishSelect(use_dish){
        this.setState({ selectedDish: use_dish});

    }
    
    render() {
        return (
            <div>
               <Header />
                <Menu dishes={this.state.dishes} onClick = {(use_dish) => this.onDishSelect(use_dish)} />
                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
                
            </div>
        );
    }
}

export default MainComponents
