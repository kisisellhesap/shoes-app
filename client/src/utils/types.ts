export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin";
  createdAt: string;
  uptatedAt: string;
  __v: 0;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister {
  email: string;
  password: string;
  name: string;
  surname: string;
}

export interface AuthResponse {
  message: string;
  accessToken: string;
  user: User;
}
export interface Shoe {
  _id: string;
  name: string;
  picture: string[];
  description: string;
  isNew?: boolean;
  discount: number;
  size: string;
  color: string;
  gender: "men" | "women";
  price: number;
  createdAt: string;
  updatedAt: string;
}

// Shoe Type for FormData
export type ShoeData = Omit<
  Shoe,
  "_id" | "picture" | "createdAt" | "updatedAt"
>;
