import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const productSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  als: {
    type: String
  },
  src: {
    type: String
  },
  startingBid: {
    type: Number,
    required: true
  },
  currentBid: {
    type: Number,
    default: 0
  },
  bids: [{
    bidder: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    bidAmount: {
      type: Number,
      required: true
    }
  }],
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Sold'],
    default: 'Active'
  }
}, { timestamps: true });

const Products = model('ProductSchema', productSchema);

export default Products;
