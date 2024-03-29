const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

//Design Product MongoDB Schema
const productSchema = mongoose.Schema({
  
    writer: {
        type:Schema.Types.ObjectId,
        ref: 'User'
    },

    title: {
        type:String,
        maxlength:50
    },
    description: {
        type:String
    },
    price: {
        type:Number,
        default:0
    },
    images: {
        type:Array,
        default:[]
    },
    sold: {
        type:Number,
        maxlength:100,
        default:0
    },
    views: {
        type:Number,
        default:0
    },
    foodtype: {
        type:Number,
        default:1
    },
    recommandation: {
        type:Boolean,
        default: false
    }
},{timestamps:true});

//Contorl search results
productSchema.index({
    title:'text',
    description:'text'
}, { // Give a weight to more focus on title
    weights: {
        title: 5,
        description: 1
    }
});


const Product = mongoose.model('Product', productSchema);

module.exports = { Product };