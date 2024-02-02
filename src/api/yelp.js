import axios from 'axios';
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer q7UoZWbyBhyfZfoveRRS-Tosv5E6kjyPBrqUwZIjHEwOW6-JTTVBc2N3jgBg-bAhkhoaBlyYnGAFMoOcvaGlZAGkZEd_yu1KjnPquIgXbCzilOQkfBGn8adqkt6wYXYx'
    }
});