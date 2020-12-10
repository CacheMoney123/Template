import React, {useState, useEffect, useContext} from 'react';
import './createRecipe.css';
import NavBar from "../../components/Header/NavBar";
import {AuthContext} from "../../context/authcontext";
import postService from "../../services/postService";


const CreateRecipe = props => {
    const authContext = useContext(AuthContext);
    const [inputs , setInputs] = useState(['input-0'])
    const [recipe , setRecipe] = useState({recipeName: "", recipeDescription: "", recipeCreatorID: "", recipeIngredients: [""]});
    const [ingredients, setIngredients] = useState([""])
    const id = authContext.user.username;
    useEffect( () => {setRecipe({...recipe, recipeCreatorID: id})} , []);

    const onSubmit = e => {
        e.preventDefault();
        console.log(recipe.recipeCreatorID);
        postService.post(recipe).then(data=> {
                console.log(data);
                props.history.push('/landing');
            });

    }

    const onChangeIngredients = e => {
        var _tempIn = [...ingredients];
        _tempIn[e.target.dataset.id] = e.target.value;
        setIngredients(_tempIn)
        setRecipe({...recipe,recipeIngredients: ingredients})
    }

    const onChange = e => {
        setRecipe({...recipe,[e.target.name] : e.target.value})
    }


    const renderIngredientsField = () => {
            const appendInput = () => {
                var newInput = `input-${inputs.length}`;
                setInputs(inputs.concat([newInput]));
            }

            return (
                <div>
                    <div className="input-group">
                        <div id="dynamicInput">
                            {inputs.map(input => <input type="text" data-id ={inputs.length - 1} name="ingredientsList" onChange={onChangeIngredients} className="form-control"
                                                                   placeholder="Ingredients" key={input}/>)}
                        </div>
                    </div>

                    <div className="input-group-append">
                        <button className="btn btn-success" type="button" onClick={() => appendInput()}>
                            <h7>Add more</h7>
                        </button>
                    </div>
                </div>

            );
        }



        return (
            <div className="whoa">
                <NavBar/>
                <div className="base">
                    <form onSubmit={onSubmit}>
                        <div style={{
                            minWidth: "750px",
                            margin: "50 px auto",
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: "50px auto",

                            }}>
                                <div class="container-md" style={{minWidth: '85%', minHeight: '95%'}}>

                                    <h4>Name your creation!</h4>
                                    <div className="input-group">
                                        <input type="text" name="recipeName" className="form-control"
                                               onChange={onChange}
                                               placeholder="Name"/>
                                    </div>
                                    <h4>About this recipe: </h4>
                                    <div className="input-group">
                                        <textarea name="recipeDescription" className="form-control" onChange={onChange}
                                                  placeholder="Some instructions may help too..."></textarea>
                                    </div>
                                    <h4>Ingredients: </h4>
                                    {renderIngredientsField()}
                                </div>
                            </div>
                            <div className="input-group">
                                <button className="btn btn-success" type="submit"  onSubmit={onSubmit} style={{width: '50%'}}><h4>Post</h4>
                                </button>
                                <h3>Thank you for your contribution to our community!</h3>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

        );


}

export default CreateRecipe;

