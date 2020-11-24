import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, 'The title must be less than 100 characters'],
    minlength: [1, 'The title must have more than one character'],
  },
  slug: String,
  ratingAverage: {
    type: Number,
    default: 0,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  Category: {
    type: String,
    required: [true, 'A media must have a category'],
    enum: [
      'Development',
      'Business',
      'Finance & Accounting',
      'IT & Software',
      'Office Productivity',
      'Personal Development',
      'Design',
      'Marketing',
      'Health & Fitness',
      'Music',
    ],
  },
  mediaType: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: String,
  images: [String],
});

const Media = mongoose.model('Media', mediaSchema);

export default Media;
