import mongoose, { Schema } from 'mongoose';

interface IEmail {
  email: string;
  isArtinals: boolean;
  createdAt: Date;
}

const EmailSchema = new Schema<IEmail>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  isArtinals: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Email = mongoose.models.Email || mongoose.model<IEmail>('Email', EmailSchema);

export default Email;