// Users API
import { User } from './types';

// Mock data for users
let users: User[] = [
  {
    id: 1,
    name: "Administrador",
    email: "admin@igreja.com",
    password_hash: "hashed_password_here",
    role: "admin",
    status: "active",
    last_login: new Date(),
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    name: "João Silva",
    email: "joao.silva@example.com",
    password_hash: "hashed_password_here",
    role: "staff",
    status: "active",
    last_login: new Date(),
    created_at: new Date(),
    updated_at: new Date()
  }
];

// Function to get all users
export async function getAllUsers(): Promise<User[]> {
  return users;
}

// Function to get a user by ID
export async function getUserById(id: number): Promise<User | undefined> {
  return users.find(user => user.id === id);
}

// Function to get a user by email
export async function getUserByEmail(email: string): Promise<User | undefined> {
  return users.find(user => user.email === email);
}

// Function to create a new user
export async function createUser(user: Omit<User, 'id' | 'created_at' | 'updated_at' | 'last_login'>): Promise<User> {
  const newUser: User = {
    id: users.length + 1,
    ...user,
    last_login: null,
    created_at: new Date(),
    updated_at: new Date()
  };
  
  users.push(newUser);
  return newUser;
}

// Function to update a user
export async function updateUser(id: number, user: Partial<Omit<User, 'id' | 'created_at' | 'updated_at'>>): Promise<User | undefined> {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return undefined;
  
  users[index] = {
    ...users[index],
    ...user,
    updated_at: new Date()
  };
  
  return users[index];
}

// Function to delete a user
export async function deleteUser(id: number): Promise<boolean> {
  const initialLength = users.length;
  users = users.filter(user => user.id !== id);
  return users.length < initialLength;
}

// Function to update last login time
export async function updateLastLogin(id: number): Promise<User | undefined> {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return undefined;
  
  users[index] = {
    ...users[index],
    last_login: new Date(),
    updated_at: new Date()
  };
  
  return users[index];
}