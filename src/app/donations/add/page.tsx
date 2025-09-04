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
  DollarSign, 
  User, 
  CreditCard, 
  ArrowLeft,
  Save
} from "lucide-react";

export default function AddDonationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    donor: "",
    amount: "",
    date: "",
    method: "Dinheiro",
    type: "Dízimo",
    notes: "",
    campaign: ""
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
    router.push("/donations");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Registrar Nova Doação</h1>
          <p className="text-muted-foreground">
            Preencha as informações da doação
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informações da Doação</CardTitle>
            <CardDescription>
              Detalhes sobre a doação recebida
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="donor">Nome do Doador</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="donor"
                    name="donor"
                    value={formData.donor}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Nome completo do doador"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="amount">Valor</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    step="0.01"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Data da Doação</Label>
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
                <Label htmlFor="method">Método de Pagamento</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Select name="method" value={formData.method} onValueChange={(value) => handleSelectChange("method", value)}>
                    <SelectTrigger className="pl-10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dinheiro">Dinheiro</SelectItem>
                      <SelectItem value="Cartão">Cartão</SelectItem>
                      <SelectItem value="Transferência">Transferência</SelectItem>
                      <SelectItem value="Cheque">Cheque</SelectItem>
                      <SelectItem value="Boleto">Boleto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="type">Tipo de Doação</Label>
                <Select name="type" value={formData.type} onValueChange={(value) => handleSelectChange("type", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dízimo">Dízimo</SelectItem>
                    <SelectItem value="Oferta">Oferta</SelectItem>
                    <SelectItem value="Oferta Especial">Oferta Especial</SelectItem>
                    <SelectItem value="Doação">Doação</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="campaign">Campanha (Opcional)</Label>
                <Input
                  id="campaign"
                  name="campaign"
                  value={formData.campaign}
                  onChange={handleInputChange}
                  placeholder="Selecione uma campanha"
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
                placeholder="Informações adicionais sobre a doação"
                rows={3}
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
            Registrar Doação
          </Button>
        </div>
      </form>
    </div>
  );
}