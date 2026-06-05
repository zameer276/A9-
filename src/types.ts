export interface FaqItem {
  question: string;
  answer: string;
  id: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Treatment {
  id: string;
  title: string;
  category: 'Skin' | 'Hair' | 'Laser' | 'Advanced';
  shortDescription: string;
  description: string;
  benefits: Benefit[];
  procedure: string[];
  recoveryTime: string;
  faqs: FaqItem[];
  imageUrl: string;
  seoKeywords: string[];
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  time: string;
  text: string;
  treatmentTag?: string;
  authorInitials: string;
}

export interface ExpertSpecialist {
  name: string;
  role: string;
  education: string;
  experience: string;
  specialties: string[];
  imageUrl: string;
}

export interface BeforeAfterResult {
  id: string;
  title: string;
  treatment: string;
  beforeImg: string;
  afterImg: string;
  duration: string;
  clinicalNote: string;
}

export interface BookingSubmission {
  id: string;
  name: string;
  phone: string;
  treatment: string;
  preferredDate: string;
  preferredTimeSlot: string;
  message?: string;
  createdAt: string;
  status: 'Pending' | 'Confirmed';
}
