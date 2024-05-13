import mongoose, { Schema, Document } from "mongoose";

export interface InquiryForm extends Document {
  email: string;
  phoneNumber: number;
  inquiryMessage: string;
}

const InquirySchema: Schema<InquiryForm> = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: [true, "Phone number is required."],
    },
    inquiryMessage: {
      type: String,
      required: [true, "Inquiry message is required."],
    },
  },
  {
    timestamps: true,
  }
);

const InquiryModel =
  mongoose.models.InquiryForm ||
  mongoose.model<InquiryForm>("InquiryForm", InquirySchema);

export default InquiryModel;
