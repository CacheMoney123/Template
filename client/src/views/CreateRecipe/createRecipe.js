import React, {Component} from 'react';
import './createRecipe.css';
import NavBar from "../../components/Header/NavBar";



class postRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs:['input-0']
        };
    }

    appendInput() {
        var newInput = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({inputs : prevState.inputs.concat([newInput])}));
    }


    render() {
        const renderIngredientsField = () => {
            return (
                <div>
                    <div className="input-group">
                        <div id="dynamicInput">
                            {this.state.inputs.map(input => <input type="text" className="form-control"
                                                                   placeholder="Ingredients" key={input}/>)}
                        </div>
                    </div>

                    <div className="input-group-append">
                        <button className="btn  btn-success" onClick={() => this.appendInput()}><h7>Add more</h7></button>
                    </div></div>

            );
        }

        return (
            <div className="whoa">
                <NavBar/>
                <div className="base">
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
                            <div class="container-md" style={{minWidth: '85%', minHeight: '95%' }}>
                                <h4>Name your creation!</h4>
                                <div className="input-group">
                                    <input type="text" className="form-control"
                                    placeholder="Name"/>
                                </div>
                                <h4>About this recipe: </h4>
                                <div className="input-group">
                                    <textarea className="form-control"  placeholder="Some instructions may help too..."></textarea>
                                </div>
                                <h4>Ingredients: </h4>
                                {renderIngredientsField()}
                            </div>
                        </div>
                        <div className="input-group">
                            <button className="btn btn-success " style={{width: '50%'}}><h4>Post</h4></button>
                            <h3>Thank you for your contribution to our community!</h3>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}


export default postRecipe;