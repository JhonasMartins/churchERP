"use client";

import { useState } from "react";
import { 
  Database, 
  Download, 
  Upload, 
  RotateCcw, 
  Clock, 
  HardDrive,
  Server,
  AlertTriangle,
  CheckCircle,
  Play,
  Pause,
  Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminBackupPage() {
  const [autoBackup, setAutoBackup] = useState(true);
  const [backupFrequency, setBackupFrequency] = useState("daily");
  const [storageLocation, setStorageLocation] = useState("local");
  
  // Mock data for backup history
  const backupHistory = [
    { 
      id: 1, 
      date: "01/09/2025 02:00", 
      size: "1.2GB", 
      status: "Concluído",
      type: "Automático"
    },
    { 
      id: 2, 
      date: "31/08/2025 02:00", 
      size: "1.1GB", 
      status: "Concluído",
      type: "Automático"
    },
    { 
      id: 3, 
      date: "30/08/2025 14:30", 
      size: "1.1GB", 
      status: "Concluído",
      type: "Manual"
    },
    { 
      id: 4, 
      date: "29/08/2025 02:00", 
      size: "1.0GB", 
      status: "Falhou",
      type: "Automático"
    },
  ];

  const handleCreateBackup = () => {
    console.log("Creating backup...");
    // In a real app, this would trigger a backup process
  };

  const handleRestoreBackup = (id: number) => {
    console.log("Restoring backup:", id);
    // In a real app, this would trigger a restore process
  };

  const handleDeleteBackup = (id: number) => {
    console.log("Deleting backup:", id);
    // In a real app, this would delete a backup
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Backup e Dados</h1>
        <p className="text-muted-foreground">
          Gerencie backups e dados do sistema
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Criar Backup
            </CardTitle>
            <CardDescription>
              Crie um backup manual do sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <Label htmlFor="backup-name">Nome do Backup (Opcional)</Label>
                <Input
                  id="backup-name"
                  placeholder="Backup de segurança - Setembro 2025"
                />
              </div>
              <div className="flex items-end">
                <Button onClick={handleCreateBackup}>
                  <Download className="h-4 w-4 mr-2" />
                  Criar Backup
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Configurações de Backup Automático
            </CardTitle>
            <CardDescription>
              Configure backups automáticos do sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Backup Automático</Label>
                <p className="text-sm text-muted-foreground">
                  Ative para criar backups automaticamente
                </p>
              </div>
              <Switch
                checked={autoBackup}
                onCheckedChange={setAutoBackup}
              />
            </div>
            
            <Separator />
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Frequência do Backup</Label>
                <Select value={backupFrequency} onValueChange={setBackupFrequency}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">A cada hora</SelectItem>
                    <SelectItem value="daily">Diariamente</SelectItem>
                    <SelectItem value="weekly">Semanalmente</SelectItem>
                    <SelectItem value="monthly">Mensalmente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Local de Armazenamento</Label>
                <Select value={storageLocation} onValueChange={setStorageLocation}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local">Armazenamento Local</SelectItem>
                    <SelectItem value="cloud">Nuvem (AWS S3)</SelectItem>
                    <SelectItem value="external">Servidor Externo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="pt-4">
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Salvar Configurações
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HardDrive className="h-5 w-5" />
              Histórico de Backups
            </CardTitle>
            <CardDescription>
              Lista de backups criados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Tamanho</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {backupHistory.map((backup) => (
                  <TableRow key={backup.id}>
                    <TableCell className="font-medium">{backup.date}</TableCell>
                    <TableCell>{backup.size}</TableCell>
                    <TableCell>{backup.type}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        backup.status === "Concluído" 
                          ? "bg-green-100 text-green-800" 
                          : backup.status === "Falhou" 
                            ? "bg-red-100 text-red-800" 
                            : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {backup.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleRestoreBackup(backup.id)}>
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteBackup(backup.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Informações de Armazenamento
            </CardTitle>
            <CardDescription>
              Capacidade e uso do armazenamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <HardDrive className="h-8 w-8 text-blue-500 mb-2" />
                <span className="text-2xl font-bold">500GB</span>
                <span className="text-sm text-muted-foreground">Capacidade Total</span>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <Database className="h-8 w-8 text-green-500 mb-2" />
                <span className="text-2xl font-bold">180GB</span>
                <span className="text-sm text-muted-foreground">Dados do Sistema</span>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <Server className="h-8 w-8 text-purple-500 mb-2" />
                <span className="text-2xl font-bold">45GB</span>
                <span className="text-sm text-muted-foreground">Backups</span>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Uso do Armazenamento</span>
                <span>42%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}