"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Edit, 
  Trash2, 
  ArrowLeft,
  Heart,
  CalendarDays,
  Users,
  DollarSign
} from "lucide-react";
import Link from "next/link";

export default function MemberProfilePage() {
  // Mock member data
  const member = {
    id: 1,
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99999-9999",
    address: "Rua Exemplo, 123, Centro, São Paulo - SP",
    status: "Ativo",
    memberSince: "15/03/2020",
    birthday: "25/07/1985",
    role: "Membro",
    ministry: "Ministério de Louvor",
    group: "Grupo de Oração - Segunda",
    avatar: "/placeholder.svg?height=128&width=128"
  };

  // Mock attendance data
  const attendance = [
    { date: "01/09/2025", event: "Culto de Domingo", status: "Presente" },
    { date: "25/08/2025", event: "Culto de Domingo", status: "Presente" },
    { date: "18/08/2025", event: "Culto de Domingo", status: "Ausente" },
    { date: "11/08/2025", event: "Culto de Domingo", status: "Presente" },
  ];

  // Mock donations data
  const donations = [
    { date: "01/09/2025", amount: 150.00, type: "Dízimo" },
    { date: "01/08/2025", amount: 150.00, type: "Dízimo" },
    { date: "01/07/2025", amount: 150.00, type: "Dízimo" },
    { date: "01/06/2025", amount: 150.00, type: "Dízimo" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/members">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Perfil do Membro</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Informações Pessoais</CardTitle>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 flex items-center justify-center">
                  <User className="h-16 w-16 text-gray-400" />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold">{member.name}</h2>
                  <Badge variant={member.status === "Ativo" ? "default" : "secondary"}>
                    {member.status}
                  </Badge>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{member.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{member.phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm">{member.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Membro desde {member.memberSince}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Aniversário: {member.birthday}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Participação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Ministério</span>
                </div>
                <span className="text-sm font-medium">{member.ministry}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Grupo</span>
                </div>
                <span className="text-sm font-medium">{member.group}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Frequência (30 dias)</span>
                </div>
                <span className="text-sm font-medium">85%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contribuições Financeiras</CardTitle>
              <CardDescription>
                Histórico de dízimos e ofertas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted font-medium text-sm">
                  <div>Data</div>
                  <div>Tipo</div>
                  <div className="text-right">Valor</div>
                </div>
                <div className="divide-y">
                  {donations.map((donation, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 p-4 text-sm">
                      <div>{donation.date}</div>
                      <div>{donation.type}</div>
                      <div className="text-right font-medium">R$ {donation.amount.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-muted-foreground">
                  Total nos últimos 4 meses: R$ 600,00
                </div>
                <Button variant="outline" size="sm">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Registrar Contribuição
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequência</CardTitle>
              <CardDescription>
                Histórico de participação em eventos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted font-medium text-sm">
                  <div>Data</div>
                  <div>Evento</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {attendance.map((record, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 p-4 text-sm">
                      <div>{record.date}</div>
                      <div>{record.event}</div>
                      <div>
                        <Badge variant={record.status === "Presente" ? "default" : "destructive"}>
                          {record.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-muted-foreground">
                  Frequência nos últimos 4 eventos: 75%
                </div>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Registrar Presença
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-2">
            <Button variant="outline">
              <Edit className="h-4 w-4 mr-2" />
              Editar
            </Button>
            <Button variant="destructive">
              <Trash2 className="h-4 w-4 mr-2" />
              Excluir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}