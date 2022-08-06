require('dotenv').config()

const axios = require('axios') 


module.exports = {

getResturants: (req, res) => {
    const{zip_code:zipCode, categories, price} = req.query
    let businessArray = []
    axios.get(`https://api.yelp.com/v3/businesses/search?location=${zipCode}&categories=${categories}&price=${price}`,{headers: {Authorization: "Bearer " + process.env.YELP_TOKEN}}).then(response =>{ 
        for(let i =0; i < response.data.businesses.length; i++){
            let business = response.data.businesses[i]
            businessArray.push(business)
        }
        console.log(businessArray)

        res.status(200).send(businessArray)


    //res.data.businesses.forEach(business => businessArray.push({name: business.name, image: business.image_url, rating: business.rating}))
    }).catch(error => console.log(error))
    console.log(businessArray)
    
    
}

}