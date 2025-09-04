// Ministries API
import { Ministry } from './types';

// Mock data for ministries
let ministries: Ministry[] = [
  {
    id: 1,
    name: "Ministério de Louvor",
    description: "Responsável pelas músicas e adoração durante os cultos",
    leader_id: 2,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    name: "Ministério de Ensino",
    description: "Responsável pelas aulas bíblicas e formação teológica",
    leader_id: 1,
    created_at: new Date(),
    updated_at: new Date()
  }
];

// Function to get all ministries
export async function getAllMinistries(): Promise<Ministry[]> {
  return ministries;
}

// Function to get a ministry by ID
export async function getMinistryById(id: number): Promise<Ministry | undefined> {
  return ministries.find(ministry => ministry.id === id);
}

// Function to create a new ministry
export async function createMinistry(ministry: Omit<Ministry, 'id' | 'created_at' | 'updated_at'>): Promise<Ministry> {
  const newMinistry: Ministry = {
    id: ministries.length + 1,
    ...ministry,
    created_at: new Date(),
    updated_at: new Date()
  };
  
  ministries.push(newMinistry);
  return newMinistry;
}

// Function to update a ministry
export async function updateMinistry(id: number, ministry: Partial<Omit<Ministry, 'id' | 'created_at' | 'updated_at'>>): Promise<Ministry | undefined> {
  const index = ministries.findIndex(m => m.id === id);
  if (index === -1) return undefined;
  
  ministries[index] = {
    ...ministries[index],
    ...ministry,
    updated_at: new Date()
  };
  
  return ministries[index];
}

// Function to delete a ministry
export async function deleteMinistry(id: number): Promise<boolean> {
  const initialLength = ministries.length;
  ministries = ministries.filter(ministry => ministry.id !== id);
  return ministries.length < initialLength;
}