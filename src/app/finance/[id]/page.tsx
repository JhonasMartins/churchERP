"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  DollarSign, 
  Calendar, 
  Edit, 
  Trash2, 
  ArrowLeft,
  FileText,
  TrendingUp,
  Building,
  User,
  CreditCard,
  CheckCircle
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Mock data for financial transaction details
const transactionData = {
  id: "1",
  description: "Pagamento de aluguel - Templo Central",
  amount: 3500,
  type: "Despesa",
  category: "Aluguel",
  status: "Pago",
  date: new Date("2023-06-01"),
  paymentMethod: "Transferência Bancária",
  receiptNumber: "REC-2023-001",
  notes: "Pagamento mensal do aluguel do templo central conforme contrato vigente.",
  createdAt: new Date("2023-06-01"),
  updatedAt: new Date("2023-06-01"),
  account: {
    name: "Conta Corrente - Banco do Brasil",
    number: "12345-6"
  },
  vendor: {
    name: "Imobiliária Central",
    contact: "contato@imobiliaria.com",
    phone: "(11) 98888-8888"
  },
  paymentDetails: {
    bank: "Banco do Brasil",
    agency: "1234-5",
    account: "12345-6",
    transactionId: "TXN-987654321"
  },
  relatedTransactions: [
    { id: "1", description: "Pagamento de aluguel - Maio/2023", amount: 3500, date: new Date("2023-05-01"), status: "Pago" },
    { id: "2", description: "Pagamento de aluguel - Abril/2023", amount: 3500, date: new Date("2023-04-01"), status: "Pago" },
    { id: "3", description: "Pagamento de aluguel - Março/2023", amount: 3500, date: new Date("2023-03-01"), status: "Pago" },
  ]
};

export default function FinanceDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [transaction] = useState(transactionData);
  
  const handleEdit = () => {
    console.log("Edit transaction");
  };
  
  const handleDelete = () => {
    console.log("Delete transaction");
  };
  
  const handleGenerateReport = () => {
    console.log("Generate report");
  };
  
  const handleResendReceipt = () => {
    console.log("Resend receipt");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Transação #{transaction.id}</h1>
            <p className="text-muted-foreground">{transaction.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={transaction.type === "Receita" ? "default" : "destructive"}>
            {transaction.type}
          </Badge>
          <Badge variant={transaction.status === "Pago" ? "default" : "secondary"}>
            {transaction.status}
          </Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleEdit}>
                <Edit className="mr-2 h-4 w-4" />
                Editar Transação
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleGenerateReport}>
                <TrendingUp className="mr-2 h-4 w-4" />
                Gerar Relatório
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleResendReceipt}>
                <FileText className="mr-2 h-4 w-4" />
                Reenviar Comprovante
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Excluir Transação
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Informações da Transação</CardTitle>
            <CardDescription>Detalhes financeiros</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Valor</p>
                <p className={`text-2xl font-bold ${transaction.type === "Receita" ? "text-green-600" : "text-red-600"}`}>
                  {transaction.type === "Receita" ? "+" : "-"} R$ {transaction.amount.toLocaleString('pt-BR')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Data</p>
                <p className="text-sm text-muted-foreground">
                  {format(transaction.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Categoria</p>
                <p className="text-sm text-muted-foreground">{transaction.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Método de Pagamento</p>
                <p className="text-sm text-muted-foreground">{transaction.paymentMethod}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conta Bancária</CardTitle>
            <CardDescription>Informações da conta</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Building className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Conta</p>
                <p className="text-sm text-muted-foreground">{transaction.account.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Número</p>
                <p className="text-sm text-muted-foreground">{transaction.account.number}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Banco</p>
                <p className="text-sm text-muted-foreground">{transaction.paymentDetails.bank}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Agência</p>
                <p className="text-sm text-muted-foreground">{transaction.paymentDetails.agency}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fornecedor</CardTitle>
            <CardDescription>Informações de contato</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Nome</p>
                <p className="text-sm text-muted-foreground">{transaction.vendor.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{transaction.vendor.contact}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Telefone</p>
                <p className="text-sm text-muted-foreground">{transaction.vendor.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Detalhes Adicionais</CardTitle>
            <CardDescription>Informações complementares</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium">Descrição</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {transaction.description}
                </p>
              </div>
              <Separator />
              <div>
                <p className="text-sm font-medium">Notas</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {transaction.notes}
                </p>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Número do Comprovante</p>
                  <p className="text-sm text-muted-foreground">{transaction.receiptNumber}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">ID da Transação</p>
                  <p className="text-sm text-muted-foreground">{transaction.paymentDetails.transactionId}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Transações Relacionadas</CardTitle>
            <CardDescription>Histórico de pagamentos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {transaction.relatedTransactions.map((related) => (
                <div key={related.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <p className="text-sm font-medium">{related.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {format(related.date, "dd/MM/yyyy")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${related.status === "Pago" ? "text-green-600" : ""}`}>
                      R$ {related.amount.toLocaleString('pt-BR')}
                    </p>
                    <Badge variant={related.status === "Pago" ? "default" : "secondary"} className="mt-1">
                      {related.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}