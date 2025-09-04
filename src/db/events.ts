// Events API
import { Event } from './types';

// Mock data for events
let events: Event[] = [
  {
    id: 1,
    name: "Culto de Domingo",
    description: "Culto principal da igreja",
    start_date: new Date(new Date().setDate(new Date().getDate() + 7)),
    end_date: new Date(new Date().setDate(new Date().getDate() + 7)),
    location: "Templo Principal",
    type: "Culto",
    status: "planned",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    name: "Retiro de Jovens",
    description: "Retiro anual para jovens",
    start_date: new Date(new Date().setDate(new Date().getDate() + 30)),
    end_date: new Date(new Date().setDate(new Date().getDate() + 32)),
    location: "Centro de Retiros Monte Sion",
    type: "Retiro",
    status: "planned",
    created_at: new Date(),
    updated_at: new Date()
  }
];

// Function to get all events
export async function getAllEvents(): Promise<Event[]> {
  return events;
}

// Function to get an event by ID
export async function getEventById(id: number): Promise<Event | undefined> {
  return events.find(event => event.id === id);
}

// Function to create a new event
export async function createEvent(event: Omit<Event, 'id' | 'created_at' | 'updated_at'>): Promise<Event> {
  const newEvent: Event = {
    id: events.length + 1,
    ...event,
    created_at: new Date(),
    updated_at: new Date()
  };
  
  events.push(newEvent);
  return newEvent;
}

// Function to update an event
export async function updateEvent(id: number, event: Partial<Omit<Event, 'id' | 'created_at' | 'updated_at'>>): Promise<Event | undefined> {
  const index = events.findIndex(e => e.id === id);
  if (index === -1) return undefined;
  
  events[index] = {
    ...events[index],
    ...event,
    updated_at: new Date()
  };
  
  return events[index];
}

// Function to delete an event
export async function deleteEvent(id: number): Promise<boolean> {
  const initialLength = events.length;
  events = events.filter(event => event.id !== id);
  return events.length < initialLength;
}