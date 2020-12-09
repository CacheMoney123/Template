import axios from 'axios'

const instance = axios.create({
    baseURL: "http://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    headers: {
       
        "content-type":"octet-stream",
        "x-rapidapi-key": "148fc31053msh754c6ca1f6e735cp1ee6e3jsn8c85dfd96bce",
        "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "useQueryString":true
    },
});

export default {
    getData: (str) => 
    instance({
       // str = str.replace(/ /g, "%C"),
        
        "method":"GET",
        "url":"/recipes/findByIngredients",
        
        
        "params": {
        "ingredients": str,
        "number":"2",
        "ranking":"1",
        "ignorePantry":"false",
        
        },
        transformResponse: [function (data) {
            // Do whatever you want to transform the data
           // console.log('Transforming data...')

           console.log(data)

           // return data;
        }],
       
    }),

}