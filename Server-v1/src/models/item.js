var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

ItemSchema.plugin(mongoosePaginate);

var ItemInfo = mongoose.model('Item', ItemSchema);

module.exports = ItemInfo;
