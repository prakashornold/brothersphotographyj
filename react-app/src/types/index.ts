export interface BlogPost {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  images: string[];
}

export interface FeaturedItem {
  id: number;
  alter: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  country_phone: string;
  hear_from: string;
  see_work: string;
  see_work_other?: string;
  event_location: string;
  event_type: string;
}

export interface SlideImage {
  id: number;
  image: string;
  alt: string;
  top_bottom: number;
}
