export interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "classic" | "specialty" | "vegetarian" | "meat-lovers";
  ingredients: string[];
  popular?: boolean;
}

export interface CartItem extends Pizza {
  quantity: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
