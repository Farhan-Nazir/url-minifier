const express = require('express');
const bodyParser = require('body-parser');
let routes = require('./route/routes');



let app = express();
app.use(bodyParser.json());

app.use('/', routes)


app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Server is started at PORT ${server.address().port}`);
});
