import React, { Component } from "react";
import { Link } from "react-router-dom";
export class IndiRecipe extends Component {
  constructor() {
    super();
    this.state = {
      activeRecipe: [],
      // image: "",
      // inredients: [],
      // title: "",
      // publisher: "",
      // publisherUrl: "",
      // SocialRank: "",
    };
  }
  componentDidMount = async () => {
    const id = this.props.location.state.recipe;
    const required = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );

    const response = await required.json();
    // console.log(response);
    this.setState({
      activeRecipe: response.recipe,
      // image: response.recipe.image_url,
      // publisher: response.recipe.publisher,
      // inredients: response.recipe.ingredients,
      // title: response.recipe.title,
      // publisherUrl: response.recipe.publisherUrl,
      // SocialRank: response.recipe.social_rank,
    });
    // fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
    //   .then((data) => data.json())
    //   .then((resp) => this.setState({ recipes: resp.recipes }))
    //   .catch((err) => this.setState({ recipes: err }));
    //   console.log(id)
    //   console.log(resp)
    console.log(this.state);
  };
  // renderList = {}
  // componentDidMount() {
  //   const id = this.props.location.state.recipe;
  //   fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
  //     .then(function (data) {
  //       return data.json();
  //     })
  //     .then((resp) => this.setState({ activeRecipe: resp }))
  //     .catch((err) =>
  //       this.setState({
  //         activeRecipe: err,
  //       })
  //     );
  // console.log(this.state);
  // }

  render() {
    // console.log(this.state);
    // console.log(this.props);
    // return <div>{this.props.location.state.recipe}</div>;

    // console.log(getRecipe);

    // return (
    //   <>
    //     <div className="container">
    //       <div className="active-recipe">
    //         <img
    //           className="active-recipe__img"
    //           src={this.state.image}
    //           alt={this.state.title}
    //         />
    //         <h3
    //           className="active-recipe__title"
    //           style={{ textAlign: "center" }}
    //         >
    //           Recipe Info -- {this.state.title}
    //         </h3>
    //         <h4 className="active-recipe__publisher">
    //           Publisher: <span>{this.state.publisher}</span>
    //         </h4>
    //         <p>
    //           Website :
    //           <span>
    //             <a href={this.state.publisherUrl}></a>
    //             {this.state.publisherUrl}
    //           </span>
    //         </p>
    //         <button className="active-recipe__button">
    //           Return To Home Page
    //         </button>
    //       </div>
    //     </div>
    //   </>
    // );
    const getName = this.state.activeRecipe;
    return (
      <div className="container-fluid">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={this.state.activeRecipe.image_url}
              alt={this.state.activeRecipe.title}
            />
            <h3 className="active-recipe__title">{getName.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher:
              <span>{getName.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:
              <span>
                <a href={getName.publisher_url}>{getName.publisher_url}</a>
              </span>
            </p>
            <h5 className="active-recipe__ingred">
              <span
                style={{
                  textAlign: "center",
                  display: "block",
                  textTransform: "uppercase",
                  fontSize: "2rem",
                }}
              >
                Ingredients
              </span>
              <ul>
                {this.state.activeRecipe.ingredients.map(function (ing, index) {
                  return (
                    <li key={index} style={{ paddingLeft: "1.5rem" }}>
                      {ing}
                    </li>
                  );
                })}
              </ul>
            </h5>
            <button
              style={{ marginBottom: "3rem" }}
              className="active-recipe__button"
            >
              <Link to="/">Return To Home Page</Link>
            </button>
          </div>
        )}
        {/* <h1>{this.state.activeRecipe.title}</h1>
        <img src={this.state.activeRecipe.image_url} alt="" /> */}
      </div>
    );
  }
}

export default IndiRecipe;

// image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"
// ingredients: (6) ["4 1/2 cups (20.25 ounces) unbleached high-gluten, bread, or all-purpose flour, chilled", "1 3/4 (.44 ounce) teaspoons salt", "1 teaspoon (.11 ounce) instant yeast", "1/4 cup (2 ounces) olive oil (optional)", "1 3/4 cups (14 ounces) water, ice cold (40F)", "Semolina flour OR cornmeal for dusting"]
// publisher: "101 Cookbooks"
// publisher_url: "http://www.101cookbooks.com"
// recipe_id: "47746"
// social_rank: 100
// source_url: "http://www.101cookbooks.com/archives/001199.html"
// title: "Best Pizza Dough Ever"
