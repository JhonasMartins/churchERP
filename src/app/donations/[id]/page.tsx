"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Heart, 
  Users, 
  Calendar, 
  Edit, 
  Trash2, 
  ArrowLeft,
  User,
  DollarSign,
  CreditCard,
  Building,
  FileText,
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

// Mock data for donation details
const donationData = {
  id: "1",
  donor: {
    id: "101",
    name: "Carlos Silva",
    email: "carlos.silva@email.com",
    phone: "(11) 99999-9999",
    avatar: "https://github.com/shadcn.png",
    type: "Membro"
  },
  amount: 250,
  currency: "BRL",
  method: "Cartão de Crédito",
  status: "Confirmada",
  date: new Date("2023-06-05"),
  purpose: "Campanha de Arrecadação - Natal",
  campaignId: "1",
  receiptNumber: "REC-2023-001",
  notes: "Doação especial para ajudar famílias carentes durante o período natalino.",
  createdAt: new Date("2023-06-05"),
  updatedAt: new Date("2023-06-05"),
  paymentDetails: {
    cardType: "Visa",
    lastFour: "1234",
    installments: 1,
    transactionId: "TXN-987654321"
  },
  donorHistory: [
    { id: "1", date: new Date("2023-05-05"), amount: 100, purpose: "Dízimo" },
    { id: "2", date: new Date("2023-04-05"), amount: 100, purpose: "Dízimo" },
    { id: "3", date: new Date("2023-03-05"), amount: 100, purpose: "Dízimo" },
  ]
};

export default function DonationDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [donation] = useState(donationData);
  
  const handleEdit = () => {
    console.log("Edit donation");
  };
  
  const handleDelete = () => {
    console.log("Delete donation");
  };
  
  const handleResendReceipt = () => {
    console.log("Resend receipt");
  };
  
  const handleRefund = () => {
    console.log("Refund donation");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Doação #{donation.id}</h1>
            <p className="text-muted-foreground">Detalhes da doação</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={donation.status === "Confirmada" ? "default" : "secondary"}>
            {donation.status}
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
                Editar Doação
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleResendReceipt}>
                <FileText className="mr-2 h-4 w-4" />
                Reenviar Recibo
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleRefund} className="text-destructive">
                <DollarSign className="mr-2 h-4 w-4" />
                Estornar Doação
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Excluir Doação
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Informações da Doação</CardTitle>
            <CardDescription>Detalhes sobre a doação</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Heart className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Valor</p>
                <p className="text-2xl font-bold">R$ {donation.amount.toLocaleString('pt-BR')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Data</p>
                <p className="text-sm text-muted-foreground">
                  {format(donation.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Método</p>
                <p className="text-sm text-muted-foreground">{donation.method}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Recibo</p>
                <p className="text-sm text-muted-foreground">{donation.receiptNumber}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Doador</CardTitle>
            <CardDescription>Informações do doador</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={donation.donor.avatar} alt={donation.donor.name} />
                <AvatarFallback>{donation.donor.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{donation.donor.name}</p>
                <p className="text-sm text-muted-foreground">{donation.donor.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{donation.donor.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Telefone</p>
                <p className="text-sm text-muted-foreground">{donation.donor.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detalhes do Pagamento</CardTitle>
            <CardDescription>Informações da transação</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Cartão</p>
                <p className="text-sm text-muted-foreground">{donation.paymentDetails.cardType} ****{donation.paymentDetails.lastFour}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Parcelas</p>
                <p className="text-sm text-muted-foreground">{donation.paymentDetails.installments}x sem juros</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">ID da Transação</p>
                <p className="text-sm text-muted-foreground">{donation.paymentDetails.transactionId}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Propósito da Doação</CardTitle>
            <CardDescription>Destinação dos recursos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-medium">{donation.purpose}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {donation.notes}
                </p>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Histórico de Doações</p>
                <Button variant="outline" size="sm">
                  Ver Todas
                </Button>
              </div>
              <div className="space-y-3">
                {donation.donorHistory.map((history) => (
                  <div key={history.id} className="flex items-center justify-between p-2 rounded-lg border">
                    <div>
                      <p className="text-sm font-medium">
                        {format(history.date, "dd/MM/yyyy")}
                      </p>
                      <p className="text-xs text-muted-foreground">{history.purpose}</p>
                    </div>
                    <p className="font-medium">R$ {history.amount.toLocaleString('pt-BR')}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status e Ações</CardTitle>
            <CardDescription>Gerenciamento da doação</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg border">
                <CheckCircle className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Doação Confirmada</p>
                  <p className="text-sm text-muted-foreground">
                    Processada em {format(donation.date, "dd/MM/yyyy 'às' HH:mm")}
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Ações Disponíveis</p>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" onClick={handleResendReceipt}>
                    <FileText className="mr-2 h-4 w-4" />
                    Reenviar Recibo
                  </Button>
                  <Button variant="outline" onClick={handleRefund} className="text-destructive hover:text-destructive">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Estornar
                  </Button>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Informações Adicionais</p>
                <div className="text-sm text-muted-foreground">
                  <p>Criada em: {format(donation.createdAt, "dd/MM/yyyy 'às' HH:mm")}</p>
                  <p>Última atualização: {format(donation.updatedAt, "dd/MM/yyyy 'às' HH:mm")}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}