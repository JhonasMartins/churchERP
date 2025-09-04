// Campaigns API
import { Campaign } from './types';

// Mock data for campaigns
let campaigns: Campaign[] = [
  {
    id: 1,
    name: "Campanha de Natal",
    description: "Campanha de arrecadação para presentes de Natal",
    goal_amount: 5000.00,
    current_amount: 3250.00,
    start_date: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    end_date: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    status: "active",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    name: "Construção do Templo",
    description: "Campanha para arrecadar fundos para a construção do novo templo",
    goal_amount: 500000.00,
    current_amount: 125000.00,
    start_date: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    end_date: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    status: "active",
    created_at: new Date(),
    updated_at: new Date()
  }
];

// Function to get all campaigns
export async function getAllCampaigns(): Promise<Campaign[]> {
  return campaigns;
}

// Function to get a campaign by ID
export async function getCampaignById(id: number): Promise<Campaign | undefined> {
  return campaigns.find(campaign => campaign.id === id);
}

// Function to create a new campaign
export async function createCampaign(campaign: Omit<Campaign, 'id' | 'created_at' | 'updated_at' | 'current_amount'>): Promise<Campaign> {
  const newCampaign: Campaign = {
    id: campaigns.length + 1,
    ...campaign,
    current_amount: 0.00,
    created_at: new Date(),
    updated_at: new Date()
  };
  
  campaigns.push(newCampaign);
  return newCampaign;
}

// Function to update a campaign
export async function updateCampaign(id: number, campaign: Partial<Omit<Campaign, 'id' | 'created_at' | 'updated_at'>>): Promise<Campaign | undefined> {
  const index = campaigns.findIndex(c => c.id === id);
  if (index === -1) return undefined;
  
  campaigns[index] = {
    ...campaigns[index],
    ...campaign,
    updated_at: new Date()
  };
  
  return campaigns[index];
}

// Function to update campaign amount
export async function updateCampaignAmount(id: number, amount: number): Promise<Campaign | undefined> {
  const index = campaigns.findIndex(c => c.id === id);
  if (index === -1) return undefined;
  
  campaigns[index] = {
    ...campaigns[index],
    current_amount: campaigns[index].current_amount + amount,
    updated_at: new Date()
  };
  
  return campaigns[index];
}

// Function to delete a campaign
export async function deleteCampaign(id: number): Promise<boolean> {
  const initialLength = campaigns.length;
  campaigns = campaigns.filter(campaign => campaign.id !== id);
  return campaigns.length < initialLength;
}