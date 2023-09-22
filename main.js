import axios from "axios";
import * as cheerio from 'cheerio';

axios.get('https://xkcd.com/').then(response=> {
    const $ = cheerio.load(response.data);
    let img = $('#comic>img');  
    console.log(img.attr('title'));
    console.log(img.attr('alt'));
    console.log(img.attr('src'));
});