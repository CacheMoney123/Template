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
    getAllByUser : recipe =>{
        console.log(recipe);
        return fetch('/recipe' , {
            method: "get",
            body: JSON.stringify(recipe),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => data);
    }
}