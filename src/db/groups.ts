// Groups API
import { Group } from './types';

// Mock data for groups
let groups: Group[] = [
  {
    id: 1,
    name: "Grupo de Jovens",
    description: "Grupo para jovens de 15 a 25 anos",
    leader_id: 2,
    meeting_time: "Domingo 19:00",
    meeting_location: "Sala 3",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    name: "Grupo de Oração",
    description: "Grupo de oração semanal",
    leader_id: 1,
    meeting_time: "Quarta 20:00",
    meeting_location: "Salão Principal",
    created_at: new Date(),
    updated_at: new Date()
  }
];

// Function to get all groups
export async function getAllGroups(): Promise<Group[]> {
  return groups;
}

// Function to get a group by ID
export async function getGroupById(id: number): Promise<Group | undefined> {
  return groups.find(group => group.id === id);
}

// Function to create a new group
export async function createGroup(group: Omit<Group, 'id' | 'created_at' | 'updated_at'>): Promise<Group> {
  const newGroup: Group = {
    id: groups.length + 1,
    ...group,
    created_at: new Date(),
    updated_at: new Date()
  };
  
  groups.push(newGroup);
  return newGroup;
}

// Function to update a group
export async function updateGroup(id: number, group: Partial<Omit<Group, 'id' | 'created_at' | 'updated_at'>>): Promise<Group | undefined> {
  const index = groups.findIndex(g => g.id === id);
  if (index === -1) return undefined;
  
  groups[index] = {
    ...groups[index],
    ...group,
    updated_at: new Date()
  };
  
  return groups[index];
}

// Function to delete a group
export async function deleteGroup(id: number): Promise<boolean> {
  const initialLength = groups.length;
  groups = groups.filter(group => group.id !== id);
  return groups.length < initialLength;
}