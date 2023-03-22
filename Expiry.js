import { ref, push } from "firebase/database";
import  axios from "axios";
import cheerio from "cheerio";
import { database } from "./firebaseConfig.js";

//TODO: 
// fix 403 error

const user_agents_list = [
    'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.83 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
]

const proxy_list = [
    {
        protocol: 'http',
        host: '157.100.13.202',
        port: 999,
    },
    //...
    {
        protocol: 'http',
        host: '122.3.41.154',
        port: 8090,
    },
    {
        protocol: 'http',
        host: '103.68.185.25',
        port: 32650,
    },
    {
        protocol: 'http',
        host: '95.167.29.50',
        port: 8080,
    },
    {
        protocol: 'http',
        host: '46.219.80.142',
        port: 57401,
    }
]

const getExpiry = async () => {
	var exp_list =[];
	for (var i = 16334; i <= 18913; i++){
		try {
			let user_index = Math.floor(Math.random() * user_agents_list.length);
			let proxy_index = Math.floor(Math.random() * proxy_list.length);
			var url = 'http://stilltasty.com/fooditems/index/' + i.toString();
			console.log(url);
			const { data } = await axios.get(url, 
				{
					headers:
					{
						'User-Agent': user_agents_list[user_index],
						'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
						'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
						'Accept-Encoding': 'none',
						'Accept-Language': 'en-US,en;q=0.8',
						'Connection': 'keep-alive',
						'refere': 'https://example.com',
					}, 
					proxy: proxy_list[proxy_index],
				});
			const $ = cheerio.load(data);
	
			var item = $('h2').text();
			var days = $('div.red-image > span').text();
			days = days.trim().split('\n')[0];
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
			console.log(error.message);
			console.log(error.config);
			throw error;
		}
	}
	return exp_list;
};

getExpiry();

