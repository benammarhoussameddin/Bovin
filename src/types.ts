export type Language = 'fr' | 'ar';

export interface BovineType {
  id: string;
  name: { fr: string; ar: string };
  description: { fr: string; ar: string };
}

export interface QuoteRequest {
  bovineType: string;
  quantity: number;
  destination: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
