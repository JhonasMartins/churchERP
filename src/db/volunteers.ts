// Volunteers API
import { Volunteer } from './types';

// Mock data for volunteers
let volunteers: Volunteer[] = [
  {
    id: 1,
    member_id: 1,
    skills: "Som, Iluminação",
    availability: "Finais de semana",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    member_id: 2,
    skills: "Ensino, Organização",
    availability: "Segundas e Quartas",
    created_at: new Date(),
    updated_at: new Date()
  }
];

// Function to get all volunteers
export async function getAllVolunteers(): Promise<Volunteer[]> {
  return volunteers;
}

// Function to get a volunteer by ID
export async function getVolunteerById(id: number): Promise<Volunteer | undefined> {
  return volunteers.find(volunteer => volunteer.id === id);
}

// Function to get volunteers by member ID
export async function getVolunteersByMemberId(memberId: number): Promise<Volunteer[]> {
  return volunteers.filter(volunteer => volunteer.member_id === memberId);
}

// Function to create a new volunteer
export async function createVolunteer(volunteer: Omit<Volunteer, 'id' | 'created_at' | 'updated_at'>): Promise<Volunteer> {
  const newVolunteer: Volunteer = {
    id: volunteers.length + 1,
    ...volunteer,
    created_at: new Date(),
    updated_at: new Date()
  };
  
  volunteers.push(newVolunteer);
  return newVolunteer;
}

// Function to update a volunteer
export async function updateVolunteer(id: number, volunteer: Partial<Omit<Volunteer, 'id' | 'created_at' | 'updated_at'>>): Promise<Volunteer | undefined> {
  const index = volunteers.findIndex(v => v.id === id);
  if (index === -1) return undefined;
  
  volunteers[index] = {
    ...volunteers[index],
    ...volunteer,
    updated_at: new Date()
  };
  
  return volunteers[index];
}

// Function to delete a volunteer
export async function deleteVolunteer(id: number): Promise<boolean> {
  const initialLength = volunteers.length;
  volunteers = volunteers.filter(volunteer => volunteer.id !== id);
  return volunteers.length < initialLength;
}