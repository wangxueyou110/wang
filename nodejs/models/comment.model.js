var mongoose = require('mongoose'); // 引入的是mongoose
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema; // 利用mongoose下的Schema(架构、模型)
var ObjectId = Schema.ObjectId;

var CommentSchema = new Schema({
    logId: ObjectId,
    name: String,
    commenttitle: String,
    commenttype: String,
    commenttitleId: ObjectId,
    commentId: ObjectId,
    date:String,
    desc: String
});
CommentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Comment', CommentSchema);