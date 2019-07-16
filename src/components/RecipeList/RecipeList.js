import React from 'react';
import './RecipeList.css';

class RecipeList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            recipies : null,
        }
    }    

    async componentDidMount(){
            const APP_ID = 'b169101d';
            const APP_KEY = 'f768f690742f7e50cd246ac265334079';
            const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
            
            const response = await fetch(url);
            const data = await response.json();

            this.setState({
                recipies : data.hits.slice(0,6)
            })
        }



    render(){
        console.log(this.state.query)
        const recipeList = this.state.recipies ? (
            this.state.recipies.map((recipe, index) => {
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
                <header>
                    <nav className="nav nav-wrapper">
                        <div className="container">
                        <span className="brand-logo center">Ravenous</span>
                        </div>
                    </nav>
                    <div className="container">
                        <form action="" className="white z-depth-1 hoverable" onSubmit={this.handleSubmit}>
                            <div className="input-field">
                                <input type="text" name="query" placeholder="Enter a recipe query (e.g. Tomatoes, Potaoes or Pizza)" />
                            </div>
                            <div className="center">
                                <button type="submit" className="btn z-depth-0">Search Recipes</button>
                            </div>
                        </form>
                    </div>
                </header>
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