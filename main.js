import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'fs';

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
} 
    await delay(1000);

let url = 'https://tahvel.edu.ee/hois_back/timetableevents/timetableByGroup/14';
let res = await axios.get(url, {
    params: {
        from: '2023-10-02T00:00:00Z',
        studentGroups: 7225,
        thru: '2023-10-08T00:00:00Z'
    }
});

console.log(res.data);
