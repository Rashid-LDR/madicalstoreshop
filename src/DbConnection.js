const mongoose=require('mongoose');
// start connect code here
mongoose.connect('mongodb://127.0.0.1:27017/madicalstoreshop')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err));
// end connection code 