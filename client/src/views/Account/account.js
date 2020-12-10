import React from 'react';
import './account.css';
import NavBar from "../../components/Header/NavBar";

function Account() {
    const cardInfo = [{title: "Food" , text : "food" , ingredients: ["water" , "salt" , "other" , "long name ingreedient"]},
        {title: "Rice" , text : "classic" , ingredients: ["water"]},
        {title: "wow" , text : "wow", ingredients: ["water"]},
        {title: "nuggets" , text: "mcdonald" , ingredients: ["water"]},
        {title: "nuggets2" , text: "mcdonald" , ingredients: ["water"]},
        {title: "Rice" , text : "classic" , ingredients: ["water"]},
        {title: "wow" , text : "wowwwwwwwwwwwwwwwwwwwwwwwwwwwww this is amazing this is my secret recipe from the long lost generation of families, excuse my english i am not from your priviliged country you peasent why are you here reading recipes when you have uber eat", ingredients: ["money" , "phone" , "uber ate app(excuse my bad english)"]}];


    const renderCard = (card, index) => {
        return  (<div className="card mb-4" style={{width: '18rem', minWidth: '18rem'}}>
                <div className="card-body">
                    <h4 className="card-title">{card.title}</h4>
                    <p className="card-text"><h5>About this recipe:</h5> {card.text}</p>
                </div>
                <ul className="list-group list-group-flush">
                    {card.ingredients.map(renderCardIngredientsList)}
                </ul>
        </div>)
    }

    const renderCardIngredientsList = (ingredient, index) => {
        return (
            <li className= "list-group-item"> {ingredient}</li>
        )
    }


    return (
        <div className="whoa" >
            <NavBar />
            <div className="base">
                <div style={{minWidth:"750px" ,margin:"50 px auto", justifyContent: "center", alignItems: 'center'}}>
                    <div style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems: 'center',
                        margin:"50px 150px auto",
                        marginLeft: "50 px" ,
                        borderBottom:"1px solid grey"
                    }}>
                        <div>
                            <h4>{"Johnny Appleseed "}</h4>
                            <div style={{display:"flex",justifyContent:"center", alignItems: 'center',width:"108%"}}>
                                <h5>{cardInfo.length} recipes</h5>
                            </div>
                        </div>
                    </div>
                    <div className="container" >
                        <div className="row">
                            <div className="card-deck">
                                {cardInfo.map(renderCard)}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>

    );
}

export default Account;