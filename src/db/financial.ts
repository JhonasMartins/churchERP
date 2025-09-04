// Financial Transactions API
import { FinancialTransaction } from './types';

// Mock data for financial transactions
let transactions: FinancialTransaction[] = [
  {
    id: 1,
    type: "income",
    category: "Dízimo",
    amount: 150.00,
    description: "Dízimo de João Silva",
    transaction_date: new Date(),
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    type: "income",
    category: "Oferta",
    amount: 100.00,
    description: "Oferta especial",
    transaction_date: new Date(),
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 3,
    type: "expense",
    category: "Manutenção",
    amount: 200.00,
    description: "Manutenção do ar condicionado",
    transaction_date: new Date(),
    created_at: new Date(),
    updated_at: new Date()
  }
];

// Function to get all transactions
export async function getAllTransactions(): Promise<FinancialTransaction[]> {
  return transactions;
}

// Function to get a transaction by ID
export async function getTransactionById(id: number): Promise<FinancialTransaction | undefined> {
  return transactions.find(transaction => transaction.id === id);
}

// Function to get transactions by type
export async function getTransactionsByType(type: 'income' | 'expense'): Promise<FinancialTransaction[]> {
  return transactions.filter(transaction => transaction.type === type);
}

// Function to get transactions by date range
export async function getTransactionsByDateRange(startDate: Date, endDate: Date): Promise<FinancialTransaction[]> {
  return transactions.filter(transaction => 
    transaction.transaction_date >= startDate && transaction.transaction_date <= endDate
  );
}

// Function to create a new transaction
export async function createTransaction(transaction: Omit<FinancialTransaction, 'id' | 'created_at' | 'updated_at'>): Promise<FinancialTransaction> {
  const newTransaction: FinancialTransaction = {
    id: transactions.length + 1,
    ...transaction,
    created_at: new Date(),
    updated_at: new Date()
  };
  
  transactions.push(newTransaction);
  return newTransaction;
}

// Function to update a transaction
export async function updateTransaction(id: number, transaction: Partial<Omit<FinancialTransaction, 'id' | 'created_at' | 'updated_at'>>): Promise<FinancialTransaction | undefined> {
  const index = transactions.findIndex(t => t.id === id);
  if (index === -1) return undefined;
  
  transactions[index] = {
    ...transactions[index],
    ...transaction,
    updated_at: new Date()
  };
  
  return transactions[index];
}

// Function to delete a transaction
export async function deleteTransaction(id: number): Promise<boolean> {
  const initialLength = transactions.length;
  transactions = transactions.filter(transaction => transaction.id !== id);
  return transactions.length < initialLength;
}