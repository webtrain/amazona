import mongoose from 'mongoose';

const conection_link =
  'mongodb+srv://laszloh:laszloh@nodejs-crud.xr2rl.mongodb.net/amazona?retryWrites=true&w=majority';

const connectToDB = mongoose.connect(conection_link, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

if (connectToDB) {
  console.log('connected to MongoDB');
} else {
  console.log('Unable to connect');
}

export default connectToDB;
