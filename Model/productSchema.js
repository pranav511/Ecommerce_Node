const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://pranavkewate7820:jiCogXf0kE3tPGTF@ecommercedb.nt2pq1k.mongodb.net/?retryWrites=true&w=majority&appName=EcommerceDB', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));
// mongoose
//   .connect('mongodb+srv://kewatepranav05:pass@1234@cluster0.mcmkxgx.mongodb.net/', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('DB connection successful!'));

  

const Schema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    }, 
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

//Model
const repo = mongoose.model('Product', Schema);





module.exports = repo;
