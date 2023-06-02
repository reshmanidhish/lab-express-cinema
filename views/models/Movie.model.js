const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
      },
    director: {
      type: String,
      required: true,
    },
    stars:{
        type: [String],
        
        required: true,
    },
    image:{
       type:String,
       default:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
       required: true,
    },
    description:{
        type: String,
        required: true,
    },
    showtimes:{
        type: [String],
        required: true,

    },
  },
  {timestamps: true});

  const Movie = mongoose.model('Movie', MovieSchema);

  module.exports = Movie;