When downloading this project's repository make sure to run npm install, to install the dependencies that were used. This application was created for my capstone project and is called Let’s Eat. Let’s Eat is an application that helps you decide what and where to eat when you're not so sure. In order to gain access to the main page, the user will first have to create an account, then log in. Once successfully logged in, there will be a form on the page that lets users enter a zip code, a category of the type of food they want to eat, and a filter for a price range. Once users hit submit the page will populate with a variety of restaurants based on the criteria they entered. The users can change the location, category, and price if they change their mind, and the page will update with different restaurants. Once done the user can simply log out. 

I used HTML, CSS, JS, axios, express, Bcrypt, and Node.js for my tech stack in order to build this application. For the login page, I used an Axios post request in order to register and log in users. Bcrypt was used to encrypt users' passwords for security. I used Express to build out my server with node, and Axios to handle a get request to the Yelp API, in order to return an asynchronous response once the submit button is hit on the main page. In order to use the Yelp API, I had to first register my app and get an API key which I included in my request headers, otherwise any request made against the Yelp API gets throttled. In the URL I used the location, categories, and price to query for the data I wanted to be returned.  After my get request was sent to the Yelp API, I received an array of objects, containing many different key-value pairs. I only wanted to display the image, the name, and the rating of each restaurant that was returned, so I wrote a JS function to display these values for each restaurant and appended it to the page. Each time the user changes any of the criteria and hits the submit button, another get request is sent to the Yelp API, and the information on the page gets updated with new restaurants that meet the criteria that were entered. 