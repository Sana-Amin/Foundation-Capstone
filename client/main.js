const form = document.querySelector('form')
const zipInput = document.querySelector('#zip')
const categoryInput = document.querySelector('#category')
const priceInput = document.querySelector('#price')
const businessContainer = document.querySelector('#business-container')

const getResturants = (e) => {
    e.preventDefault()
    axios.get(`/api/search?zip_code=${zipInput.value}&categories=${categoryInput.value}&price=${priceInput.value}`)
        .then(res => {
            const data = res.data;
            console.log(res)
            resturantCard(data);
    }).catch(err =>{
        console.log(err)
    });
    
    function resturantCard(businesses) {
        console.log(businesses)
        //clears for every new search 
        businessContainer.innerHTML= ''
        businesses.forEach((business)=>{
            const resturantCard = document.createElement('div')
            resturantCard.classList.add('business-card')
        
            resturantCard.innerHTML = `<div class="each-res">
            <img alt='resturant cover' src=${business.image_url} class="resturant-cover"/>
            <p class="resturant-title">${business.name}</p>
            <p class="resturant-rating">Rating: ${business.rating}<p> 
            </div>    
            `
            businessContainer.appendChild(resturantCard)
        }
        
        )
        
    }
    
// //parse the response json object
// const CleanData = data.map(selectFewItems)

// //function to select desired elements from the response body
// function selectFewItems(item)
// {
//     return [businesses.name,businesses.businesses,businesses.businesses]
// }


//     function RenderData(Array)
//     {
//         let dataTable = document.getElementById('myTable')
//         for(leti=0;i<Array.lenth;i++)
//         {
//             let row = `<tr>
//                             <td>${Array[i].bus'name']}</td>
//                             <td>${Array[i].businesses['price']}</td>
//                             <td>${Array[i].image}</td>
//                       </tr>`


//         }
//     }
 };

form.addEventListener('submit', getResturants)