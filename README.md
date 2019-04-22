## URL Minifier API Solution
This is simple API solution to get make the long url to short with 6 alpha numerics for example `http://localhost:5000/eAMT15`.
<br>
Last 10 generated urls will be save in session.


### How to Install and Run
1. Clone repository by:  `git clone https://github.com/Farhan-Nazir/url-minifier.git`

2. Run command from root directory `npm install` to install the concurrently package for running multiple commands from root folder.

3. Run command from root directory `npm run install-all` to install all dependencies for back-end & front-end.

4. To start the back-end and front-end servers with single command from root directory, please run `npm start`

#### Endpoint
1. With post request `/api/:longURL(*)` to make short url from long url and receive as json object.
I used postman for making requests from backend.

 #### Front-end 
 Created in Reactjs with styling library material-ui and some own style css.  
