"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, 
  User, 
  Calendar, 
  ArrowLeft,
  Save
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function AddPrayerRequestPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    requester: "",
    request: "",
    date: "",
    anonymous: false,
    notes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, anonymous: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your API
    router.push("/prayer-requests");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Adicionar Pedido de Oração</h1>
          <p className="text-muted-foreground">
            Registre um novo pedido de oração
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informações do Pedido</CardTitle>
            <CardDescription>
              Detalhes sobre o pedido de oração
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="requester">Nome do Solicitante</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="requester"
                    name="requester"
                    value={formData.requester}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Nome completo"
                    required={!formData.anonymous}
                    disabled={formData.anonymous}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Data</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2 flex items-center space-x-2">
                <Switch 
                  id="anonymous" 
                  checked={formData.anonymous}
                  onCheckedChange={handleSwitchChange}
                />
                <Label htmlFor="anonymous">Pedido Anônimo</Label>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="request">Pedido de Oração</Label>
              <div className="relative">
                <Heart className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Textarea
                  id="request"
                  name="request"
                  value={formData.request}
                  onChange={handleInputChange}
                  placeholder="Descreva o pedido de oração..."
                  className="pl-10"
                  rows={6}
                  required
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
                placeholder="Informações adicionais relevantes"
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
            Salvar Pedido
          </Button>
        </div>
      </form>
    </div>
  );
}