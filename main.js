import axios from "axios";

axios.get('https://api.chucknorris.io/jokes/random').then(response=> {
    console.log(response.data);
});