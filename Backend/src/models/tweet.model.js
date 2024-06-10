import mongoose from "mongoose";
import User from "./user.model";
const tweetSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    retweets: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    replies: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    hashtags: {
      type: Array,
    },
    mentions: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;
