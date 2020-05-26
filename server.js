const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const CaseRoute = require('./routes/case');

const app = express();

mongoose.connect('mongodb+srv://CovidCase:case@aotech-smafp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('connected to mongo'))
.catch(
    err => console.log(err)
)

const port = process.env.PORT || 2000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', CaseRoute)

app.listen(port, () => console.log('server listening on port 2000'))