// Donations API
import { Donation } from './types';

// Mock data for donations
let donations: Donation[] = [
  {
    id: 1,
    member_id: 1,
    amount: 150.00,
    donation_date: new Date(),
    payment_method: "Dinheiro",
    notes: "Dízimo mensal",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    member_id: 2,
    amount: 100.00,
    donation_date: new Date(),
    payment_method: "Transferência",
    notes: "Oferta especial",
    created_at: new Date(),
    updated_at: new Date()
  }
];

// Function to get all donations
export async function getAllDonations(): Promise<Donation[]> {
  return donations;
}

// Function to get a donation by ID
export async function getDonationById(id: number): Promise<Donation | undefined> {
  return donations.find(donation => donation.id === id);
}

// Function to get donations by member ID
export async function getDonationsByMemberId(memberId: number): Promise<Donation[]> {
  return donations.filter(donation => donation.member_id === memberId);
}

// Function to create a new donation
export async function createDonation(donation: Omit<Donation, 'id' | 'created_at' | 'updated_at'>): Promise<Donation> {
  const newDonation: Donation = {
    id: donations.length + 1,
    ...donation,
    created_at: new Date(),
    updated_at: new Date()
  };
  
  donations.push(newDonation);
  return newDonation;
}

// Function to update a donation
export async function updateDonation(id: number, donation: Partial<Omit<Donation, 'id' | 'created_at' | 'updated_at'>>): Promise<Donation | undefined> {
  const index = donations.findIndex(d => d.id === id);
  if (index === -1) return undefined;
  
  donations[index] = {
    ...donations[index],
    ...donation,
    updated_at: new Date()
  };
  
  return donations[index];
}

// Function to delete a donation
export async function deleteDonation(id: number): Promise<boolean> {
  const initialLength = donations.length;
  donations = donations.filter(donation => donation.id !== id);
  return donations.length < initialLength;
}