const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');
const { ObjectId } = mongoose.Schema;
const userSchema = new mongoose.Schema(
    {
        name: String,
        email: {
          type: String,
          required: true,
          index: true,
        },
        role: {
          type: String,
          default: "subscriber",
        },
        cart: {
          type: Array,
          default: [],
        },
        address: String,
        wishlist: [{ type: ObjectId, ref: "Product" }],
      },
      { timestamps: true }
    );

module.exports = mongoose.model('User', userSchema);
