import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
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

const Item = model('Item', itemSchema);

export default Item;
