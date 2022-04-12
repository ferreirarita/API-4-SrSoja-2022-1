const express = require('express')
const bodyParser = require('body-parse')

const app = express()
const router = require('./routes')

const { sequelize } = require('./models')
sequelize.sync()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

/*
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})
*/

app.use('/', router)