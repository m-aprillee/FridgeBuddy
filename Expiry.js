import { ref, push } from "firebase/database";
import  axios from "axios";
import cheerio from "cheerio";
import { database } from "./firebaseConfig.js";

//TODO: 
// fix 403 error

const getExpiry = async () => {
	var exp_list =[];
	for (var i = 16334; i <= 18913; i++){
		try {
			var url = 'http://stilltasty.com/fooditems/index/' + i.toString();
			console.log(url);
			const { data } = await axios.get(url);
			const $ = cheerio.load(data);
	
			var item = $('h2').text();
			var days = $('div.red-image > span').text();
			console.log(days);
			exp_list.push([item, days]);
			push(ref(database, 'items/'), {
				name: item,
				expiry: days,
			});
		} 
		catch (error) {
			console.log('index is');
			console.log(i);
			console.log(error);
			throw error;
		}
	}
	return exp_list;
};

getExpiry();

