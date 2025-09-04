// Attendance API
import { Attendance } from './types';

// Mock data for attendance
let attendanceRecords: Attendance[] = [
  {
    id: 1,
    event_id: 1,
    member_id: 1,
    attended: true,
    created_at: new Date()
  },
  {
    id: 2,
    event_id: 1,
    member_id: 2,
    attended: true,
    created_at: new Date()
  }
];

// Function to get all attendance records
export async function getAllAttendance(): Promise<Attendance[]> {
  return attendanceRecords;
}

// Function to get attendance by event ID
export async function getAttendanceByEventId(eventId: number): Promise<Attendance[]> {
  return attendanceRecords.filter(record => record.event_id === eventId);
}

// Function to get attendance by member ID
export async function getAttendanceByMemberId(memberId: number): Promise<Attendance[]> {
  return attendanceRecords.filter(record => record.member_id === memberId);
}

// Function to create a new attendance record
export async function createAttendance(attendance: Omit<Attendance, 'id' | 'created_at'>): Promise<Attendance> {
  const newAttendance: Attendance = {
    id: attendanceRecords.length + 1,
    ...attendance,
    created_at: new Date()
  };
  
  attendanceRecords.push(newAttendance);
  return newAttendance;
}

// Function to update an attendance record
export async function updateAttendance(id: number, attended: boolean): Promise<Attendance | undefined> {
  const index = attendanceRecords.findIndex(a => a.id === id);
  if (index === -1) return undefined;
  
  attendanceRecords[index] = {
    ...attendanceRecords[index],
    attended,
    created_at: new Date()
  };
  
  return attendanceRecords[index];
}

// Function to delete an attendance record
export async function deleteAttendance(id: number): Promise<boolean> {
  const initialLength = attendanceRecords.length;
  attendanceRecords = attendanceRecords.filter(record => record.id !== id);
  return attendanceRecords.length < initialLength;
}