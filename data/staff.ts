export interface StaffMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  languages: string[];
  image: string;
  speciality?: string;
}

export const staff: StaffMember[] = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "General Manager",
    bio: "With over 18 years in Egyptian hospitality, Ahmed ensures every guest receives a world-class experience. Born and raised in Giza, he has an unmatched passion for sharing Egypt's wonders.",
    languages: ["Arabic", "English", "French"],
    speciality: "Guest Relations & Hotel Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Mohamed Salah",
    role: "Head Tour Guide & Egyptologist",
    bio: "A licensed Egyptologist with a PhD from Cairo University, Mohamed has guided thousands of guests through Egypt's ancient sites. His storytelling brings pharaonic history to life.",
    languages: ["Arabic", "English", "German", "Italian"],
    speciality: "Ancient Egyptian History & Archaeology",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Fatima El-Sayed",
    role: "Guest Relations Manager",
    bio: "Fatima is the warm face that greets every guest at Venus Hotel. With her exceptional attention to detail and genuine care, she ensures your stay exceeds every expectation.",
    languages: ["Arabic", "English", "Spanish"],
    speciality: "Guest Experience & Concierge Services",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Karim Mansour",
    role: "Senior Tour Driver",
    bio: "Karim has been driving guests across Egypt for 12 years in our private luxury fleet. Fluent in English, he is known for his safe driving, local knowledge, and warm personality.",
    languages: ["Arabic", "English"],
    speciality: "Private Tours — Cairo, Luxor & Aswan",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
];
