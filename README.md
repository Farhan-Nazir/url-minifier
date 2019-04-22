## URL Minifier API Solution
This is simple API solution to get make the long url to short with 6 alpha numerics for example `http://localhost:5000/eAMT15`.
Last 10 generated urls will be save in session.
Latest generated url shows always top in list.

### How to Install and Run
1. Clone repository by:  `git clone https://github.com/Farhan-Nazir/url-minifier.git`

2. Run command from root directory `npm install` to install the concurrently package for running multiple commands from root folder.

3. To start the back-end and front-end servers with single command, please run `npm start`

#### Endpoint
1. With get request `/api/:longURL` to make short url from long url and receive as json object.
2. With post request `/api/:longURL` to make short url from long url and receive as json object.(Not used in this solution but it can use for databases purposes).

 #### Front-end 
 Created in Reactjs with styling library material-ui.  
