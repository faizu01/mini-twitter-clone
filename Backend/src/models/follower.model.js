import mongoose from "mongoose";
import User from "./user.model";
const followerSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Follower = mongoose.model("Follower", followerSchema);

export default Follower;
