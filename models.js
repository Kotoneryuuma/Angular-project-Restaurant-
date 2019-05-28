////MODULARIZATION WITH MODELS:
    ////the models file will contain all of the mongoose connection and schema definitions
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/BeltRetake');

    var ReviewSchema = new mongoose.Schema({
        customer: {
            type: String, 
            min: 3, 
            required : [true, "User name require atleast 3 character"]},
        stars: { type: Number, required: [true], default: 0},
        review : {
            type: String,
            min: 3, 
            required : [true, "Descriotion  require atleast 3 character"]},
    }, {timestamps: true });


    

    var RestaurantSchema = new mongoose.Schema({
        name: { 
            type: String, 
            min: 3, 
            required : [true, "Restaurant name require atleast 3 character"]},
        type: { 
            type: String,
            min: 3, 
            required : [true, "Restaurant type require atleast 3 character"]},
        reviews: [ReviewSchema],
        
    },{
        timestamps : true
    });


    mongoose.model('Restaurant', RestaurantSchema); 
    var Restaurant = mongoose.model('Restaurant');

    module.exports = Restaurant;