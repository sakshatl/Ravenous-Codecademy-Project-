import React from 'react';
import './RecipeList.css';

class RecipeList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            recipies : null
        }
    }    

    async componentDidMount(){
        const APP_ID = 'b169101d';
        const APP_KEY = 'f768f690742f7e50cd246ac265334079';
        const url = `https://api.edamam.com/search?q=tomatoes&app_id=${APP_ID}&app_key=${APP_KEY}`;
        
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        this.setState({
            recipies : data.hits.slice(0,6)
        })
    }



    render(){

        const recipeList = this.state.recipies ? (
            this.state.recipies.map(recipe => {
                return(
                        <div className="col m4 s12">
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
        ) : (
            <p className="center-align">no recipies found...</p>
        ) 

        return(
            <div className="container">
                <h3 className="center-align"><b>Recipes...</b></h3>
                <div className="row">
                    {recipeList}
                </div>
            </div>
        )
    }
}

export default RecipeList