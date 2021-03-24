const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ResumeWebSiteDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require('./data');