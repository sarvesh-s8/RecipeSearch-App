import "./App.css";
import Form from "./Components/Form";
import React, { Component } from "react";
import Recipes from "./Components/Recipes";

class App extends Component {
  state = {
    recipes: [],
  };
  // getRecipe = async (e) => {
  //   const recipeName = e.target.elements.recipeName.value;
  //   e.preventDefault();
  //   const apiCall = await fetch(
  //     `https://forkify-api.herokuapp.com/api/search?q=${recipeName}`
  //   );
  //   const data = await apiCall.json();

  //   // console.log(
  //   // data.recipes
  //   // data.recipes.filter(function (a, index) {
  //   //   return index < 5;
  //   // }
  //   // )
  //   // );
  //   this.setState({
  //     recipes: data.recipes,
  //   });
  // };
  getMeRecipe = (eve) => {
    const recipeName = eve.target.elements.recipeName.value;
    eve.preventDefault();
    fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipeName}`)
      .then((data) => data.json())
      .then((resp) => this.setState({ recipes: resp.recipes }))
      .catch((err) => this.setState({ recipes: err }));
  };
  componentDidUpdate = () => {
    const recipesLocalStorage = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipeToStore", recipesLocalStorage);
  };
  componentDidMount() {
    const jsons = localStorage.getItem("recipeToStore");
    const recipeDisplayAfterBack = JSON.parse(jsons);
    this.setState({ recipes: recipeDisplayAfterBack });
  }
  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getMeRecipe} />
        <Recipes recipeInfo={this.state.recipes} />
      </div>
    );
  }
}

export default App;
