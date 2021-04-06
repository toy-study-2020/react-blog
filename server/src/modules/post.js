import mongoose from 'mongoose';

const {Schema} = mongoose;

// title, body, user, date
const PostSchema = new Schema({
  title        : String,
  body         : String,
  publishedDate: {
    type   : Date,
    default: Date.now
  },
  user         : {
    _id     : mongoose.Types.ObjectId,
    username: String
  }
});

const Post = mongoose.model('Post', PostSchema);

export default Post;