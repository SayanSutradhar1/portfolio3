import mongoose, { Document, Schema } from "mongoose";

export interface IContactMessage extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactMessageSchema = new Schema<IContactMessage>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const ContactMessage =
  (mongoose.models.ContactMessage as mongoose.Model<IContactMessage>) ||
  mongoose.model("ContactMessage", contactMessageSchema);

export { ContactMessage };
