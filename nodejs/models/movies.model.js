var mongoose = require('mongoose'); // 引入的是mongoose
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema; // 利用mongoose下的Schema(架构、模型)
var ObjectId = Schema.ObjectId;
var MoviesSchema = new Schema({
    fieldname: String,
    originalname: String,
    filename: String,
    encoding: String,
    cateId: ObjectId,
    path: String,
    size: 0,
    mimetype: String,
    date: { type: Date, default: Date.now },
    destination: String
});

MoviesSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('movies', MoviesSchema);