export interface Car {
  id: string;
  name: string;
  category: string;
  pricePerDay: number;
  image: string;
  gallery: string[];
  capacity: number;
  transmission: string;
  fuel: string;
  year: number;
  features: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}
