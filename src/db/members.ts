// Members API
import { Member } from './types';

// Mock data for members
let members: Member[] = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@example.com",
    phone: "(11) 99999-9999",
    address: "Rua das Flores, 123 - Centro, São Paulo - SP",
    birth_date: new Date("1985-03-15"),
    join_date: new Date("2020-01-12"),
    status: "active",
    role: "Membro",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    name: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    phone: "(11) 88888-8888",
    address: "Av. Paulista, 456 - Bela Vista, São Paulo - SP",
    birth_date: new Date("1990-07-22"),
    join_date: new Date("2019-05-10"),
    status: "active",
    role: "Líder de Grupo",
    created_at: new Date(),
    updated_at: new Date()
  }
];

// Function to get all members
export async function getAllMembers(): Promise<Member[]> {
  // In a real implementation, this would query the database
  // return await pool.query('SELECT * FROM members');
  return members;
}

// Function to get a member by ID
export async function getMemberById(id: number): Promise<Member | undefined> {
  // In a real implementation, this would query the database
  // return await pool.query('SELECT * FROM members WHERE id = $1', [id]);
  return members.find(member => member.id === id);
}

// Function to create a new member
export async function createMember(member: Omit<Member, 'id' | 'created_at' | 'updated_at'>): Promise<Member> {
  // In a real implementation, this would insert into the database
  // return await pool.query(
  //   'INSERT INTO members (name, email, phone, address, birth_date, join_date, status, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
  //   [member.name, member.email, member.phone, member.address, member.birth_date, member.join_date, member.status, member.role]
  // );
  
  const newMember: Member = {
    id: members.length + 1,
    ...member,
    created_at: new Date(),
    updated_at: new Date()
  };
  
  members.push(newMember);
  return newMember;
}

// Function to update a member
export async function updateMember(id: number, member: Partial<Omit<Member, 'id' | 'created_at' | 'updated_at'>>): Promise<Member | undefined> {
  // In a real implementation, this would update the database
  // return await pool.query(
  //   'UPDATE members SET name = $1, email = $2, phone = $3, address = $4, birth_date = $5, join_date = $6, status = $7, role = $8, updated_at = NOW() WHERE id = $9 RETURNING *',
  //   [member.name, member.email, member.phone, member.address, member.birth_date, member.join_date, member.status, member.role, id]
  // );
  
  const index = members.findIndex(m => m.id === id);
  if (index === -1) return undefined;
  
  members[index] = {
    ...members[index],
    ...member,
    updated_at: new Date()
  };
  
  return members[index];
}

// Function to delete a member
export async function deleteMember(id: number): Promise<boolean> {
  // In a real implementation, this would delete from the database
  // const result = await pool.query('DELETE FROM members WHERE id = $1', [id]);
  // return result.rowCount > 0;
  
  const initialLength = members.length;
  members = members.filter(member => member.id !== id);
  return members.length < initialLength;
}