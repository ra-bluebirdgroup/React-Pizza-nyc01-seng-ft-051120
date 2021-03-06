import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {
  state = {
    pizzas: [],
  }
  componentDidMount(){
    this.fetchPizzas()
  }

  componentDidUpdate(prevProps) {
   if (this.props.pizza !== prevProps.pizza) {
    this.fetchPizzas()
   }
  }

fetchPizzas(){
  fetch("http://localhost:3000/pizzas")
  .then(res => res.json())
  .then(data => {
    this.setState({pizzas: data})
  })
 }

  render() {

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
           this.state.pizzas.map((pizza,  index) =>
             <Pizza key={index} pizza={pizza} editPizza={this.props.editPizza}/>
         )}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
