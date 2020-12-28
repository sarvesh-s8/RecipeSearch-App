import React from "react";
import { Link } from "react-router-dom";

function Recipes({ recipeInfo }) {
  // console.log(recipeInfo, "Recipe Info");
  return (
    <div className="container">
      <div className="row">
        {recipeInfo === undefined ? (
          <h1>ERROR TO FETCH DATA</h1>
        ) : (
          recipeInfo.map(function (recipe, index) {
            return (
              <div
                className="col-md-4"
                style={{ marginBottom: "2rem" }}
                key={recipe.recipe_id}
              >
                <div className="recipes__box">
                  <img
                    className="recipe__box-img"
                    src={recipe.image_url}
                    alt={recipe.title}
                  />
                  <div className="recipe__text">
                    <h5 className="recipes__title">
                      {recipe.title.length < 20
                        ? `${recipe.title}`
                        : `${recipe.title.substring(0, 25)}...`}
                    </h5>
                    <p className="recipe__subtitle">
                      Publisher:
                      <span>{recipe.publisher}</span>
                    </p>
                    <button className="recipe__buttons">
                      <Link
                        to={{
                          pathname: `/recipe/${recipe.recipe_id}`,
                          state: { recipe: recipe.recipe_id },
                        }}
                      >
                        View Recipe
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Recipes;

// import React from "react";

// function Recipes({ recipeInfo }) {
//   // console.log(recipeInfo, "Recipe Info");
//   return (
//     <div className="container">
//       <div className="row">
//         {recipeInfo === undefined ? (
//           <h1>ERROR TO FETCH DATA</h1>
//         ) : (
//           recipeInfo.map(function (recipe, index) {
//             return (
//               <div className="col-md-4 my-4" key={recipe.recipe_id}>
//                 <div className="card" style={{ width: "100%" }}>
//                   <img
//                     className="recipe__box-img"
//                     src={recipe.image_url}
//                     alt={recipe.title}
//                   />
//                   <div className="card-body">
//                     <div className="recipe__box">
//                       <div className="recipe__text">
//                         <h5>{recipe.title}</h5>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// }

// export default Recipes;
