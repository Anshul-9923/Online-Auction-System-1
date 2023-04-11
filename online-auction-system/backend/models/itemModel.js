import mongoose from 'mongoose';

const itemSchema = Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // },
    // text: {
    //     type: String,
    //     required: [true, 'Please add a text value']
    // }
    highestBid: {
        type: Number,
    }
}, 
{
    timestamps: true
});

export default model('Goal', goalSchema);