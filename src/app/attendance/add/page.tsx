"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Calendar, 
  Users, 
  ArrowLeft,
  Save
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function AddAttendancePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    event: "",
    date: format(new Date(), "yyyy-MM-dd"),
    totalAttendees: "",
    members: "",
    visitors: "",
    notes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your API
    router.push("/attendance");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Registrar Frequência</h1>
          <p className="text-muted-foreground">
            Registre a frequência de um evento
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informações do Evento</CardTitle>
            <CardDescription>
              Detalhes sobre o evento e frequência
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="event">Evento</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="event"
                    name="event"
                    value={formData.event}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Nome do evento"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Data do Evento</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="totalAttendees">Total de Participantes</Label>
                <Input
                  id="totalAttendees"
                  name="totalAttendees"
                  type="number"
                  value={formData.totalAttendees}
                  onChange={handleInputChange}
                  placeholder="Número total de participantes"
                  min="0"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="members">Membros</Label>
                <Input
                  id="members"
                  name="members"
                  type="number"
                  value={formData.members}
                  onChange={handleInputChange}
                  placeholder="Número de membros"
                  min="0"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="visitors">Visitantes</Label>
                <Input
                  id="visitors"
                  name="visitors"
                  type="number"
                  value={formData.visitors}
                  onChange={handleInputChange}
                  placeholder="Número de visitantes"
                  min="0"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notes">Observações</Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Informações adicionais sobre o evento"
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2 mt-6">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancelar
          </Button>
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            Salvar Frequência
          </Button>
        </div>
      </form>
    </div>
  );
}