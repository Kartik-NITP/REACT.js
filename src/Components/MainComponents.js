import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './MenuComp';
import Header from './HeaderComponents';
import Contact from './ContactComponent';
import Footer from './FooterComponents';
import Dishdetail from './Dishdetail';
import Home from './HomeComponent';
import  {Switch , Route , Redirect} from 'react-router-dom';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dishes : DISHES,
             comments : COMMENTS,
             promotions : PROMOTIONS,
             leaders : LEADERS,
             selectedDish : null
        };
    }
    onDishSelect(use_dish){
        this.setState({ selectedDish: use_dish});

    }
    
    render() {
        const HomePage = () => {return(
            <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
        );
        }
        const DishWithId = ({match}) => {
            return(
                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          }
    
        return (
            <div>
                <Header />
                
<Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path='/contactus' component={Contact} /> 
              <Redirect to="/home" />
          </Switch>   
                
                <Footer />
                
                
            </div>
        );
    }
}

export default Main;
