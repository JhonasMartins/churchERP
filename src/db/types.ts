// Database entity types

export interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  birth_date: Date;
  join_date: Date;
  status: 'active' | 'inactive' | 'visitor';
  role: string;
  created_at: Date;
  updated_at: Date;
}

export interface Group {
  id: number;
  name: string;
  description: string;
  leader_id: number;
  meeting_time: string;
  meeting_location: string;
  created_at: Date;
  updated_at: Date;
}

export interface Event {
  id: number;
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  location: string;
  type: string;
  status: 'planned' | 'ongoing' | 'completed' | 'cancelled';
  created_at: Date;
  updated_at: Date;
}

export interface Attendance {
  id: number;
  event_id: number;
  member_id: number;
  attended: boolean;
  created_at: Date;
}

export interface Donation {
  id: number;
  member_id: number;
  amount: number;
  donation_date: Date;
  payment_method: string;
  notes: string;
  created_at: Date;
  updated_at: Date;
}

export interface Ministry {
  id: number;
  name: string;
  description: string;
  leader_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  role: 'admin' | 'staff' | 'member';
  status: 'active' | 'inactive';
  last_login: Date | null;
  created_at: Date;
  updated_at: Date;
}

export interface Campaign {
  id: number;
  name: string;
  description: string;
  goal_amount: number;
  current_amount: number;
  start_date: Date;
  end_date: Date;
  status: 'active' | 'completed' | 'cancelled';
  created_at: Date;
  updated_at: Date;
}

export interface FinancialTransaction {
  id: number;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  description: string;
  transaction_date: Date;
  created_at: Date;
  updated_at: Date;
}

export interface Volunteer {
  id: number;
  member_id: number;
  skills: string;
  availability: string;
  created_at: Date;
  updated_at: Date;
}