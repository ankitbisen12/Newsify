const data = {
    "author": "Associated Press",
    "title": "Moniak has 3 hits, Anderson goes 5-plus strong innings in Angels' 8-6 victory over Giants",
    "description": "Mickey Moniak had three hits, Tyler Anderson limited San Francisco to a run in five-plus innings and the Los Angeles Angels held off the Giants 8-6 on Friday night. The Angels scored a run in the third, three in the third and four in the fourth. The Giants had a five-run eighth.",
    "url": "https://ca.sports.yahoo.com/news/moniak-3-hits-anderson-goes-052759347.html",
    "source": "sports",
    "image": null,
    "category": "general",
    "language": "en",
    "country": "us",
    "published_at": "2024-06-15T05:27:59+00:00"
};

const obj = Object.entries(data).map(([key, value]) => `${key}=${value}`).join("#@");

// console.log(obj);
const paramsArray = obj.split("#@");

console.log(paramsArray);
const news = paramsArray.reduce((acc, param) => {
    const [key, value] = param.split('=');
    if (key in acc) {
        acc[key] = value;
    }
    return acc;
}, {});

console.log("Parsed SearchParams:", news);
