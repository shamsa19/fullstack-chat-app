import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlenght: 6,
  },
  profilePic: {
    type: String,
    default: "", //not required to upload a profile picture
  },
},
{
    timestamps: true,}); //createdAt and updatedAt fields will be automatically added to the document
const user = mongoose.model("User", userSchema);
export default user;