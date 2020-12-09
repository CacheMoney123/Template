import axios from "axios";
export default {
    post : recipe =>{
        console.log(recipe);
        return fetch('/recipe/add',{
            method : "post",
            body : JSON.stringify(recipe),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
            .then(data => data);
    },
    getAllByUser: user => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"recipeCreatorID":"Hahaha123"});

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch("/recipe", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    // getAllByUser : user =>{
    //     console.log(user);
    //     return fetch('/recipe/' , {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     }).then(res => res.json())
    //         .then(data => data);
    // }
}