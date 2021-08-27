const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');

const postsRoute = require('./routes/posts');

const app = express();

dotenv.config(); 
app.use(express.json()); 
app.use("/images", express.static(path.join(__dirname,'/images')))


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(console.log('connected to  MongoDB'))
.catch(error => console.log(error)); 

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'images')
    },filename:(req, file, cb) =>{
        cb(null, req.body.name);
    },
});

const upload = multer({storage: storage});
app.post('/server/upload', upload.single('file'), (req, res) =>{
    res.status(200).json('file uploaded ! ')
});

app.use('/server/posts', postsRoute);

app.use('/',(req, res) => {
    console.log('hey this is main url')
});

app.listen('5000', () => {
    console.log('server running.'); 
});