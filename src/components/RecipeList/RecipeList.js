import React from 'react';
import './RecipeList.css';

class RecipeList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }    

    render(){
        console.log(this.props.recipes)
        const recipeList = this.props.recipes ? (
            this.props.recipes.map((recipe, index) => {
                return(
                        <div key={index} className="col m4 s12">
                            <div className="card-panel z-depth-0">
                                <div className="">
                                    <img className="responsive-img" src={recipe.recipe.image} height="200"  alt={recipe.recipe.label} />
                                </div>
                                <h5>{recipe.recipe.label}</h5>
                                <div className="card-action">
                                    <p><b style={{color: "#cc8e35"}}>Calories:</b> {recipe.recipe.calories.toString().slice(0,6)} cals</p>
                                </div>
                
                            </div>
                        </div>
                    )
            })
        ) : ( <p className="center-align">Loading recipes...</p> ) 

        return(
            <div>
                <div className="container">
                    <h3 className="center-align"><b>Recipes...</b></h3>
                    <div className="row">
                        {recipeList}
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeList