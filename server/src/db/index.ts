import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://loluvulol:VanNuys1@users.5z2tcau.mongodb.net/?retryWrites=true&w=majority");
const db = mongoose.connection;

db.on('error', (error) => {
  console.error(error);
});

db.once('open', () => {
  console.log('Database connection is open!');
});

export default db;