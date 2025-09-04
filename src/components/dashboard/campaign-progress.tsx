import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Campaign {
  id: number
  name: string
  current: number
  goal: number
  unit?: string
}

interface CampaignProgressProps {
  campaigns: Campaign[]
  title?: string
  description?: string
}

export function CampaignProgress({ campaigns, title = "Progresso das Campanhas", description = "Arrecadação atual" }: CampaignProgressProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {campaigns.map((campaign) => {
          const percentage = Math.min(100, (campaign.current / campaign.goal) * 100)
          return (
            <div key={campaign.id}>
              <div className="flex justify-between text-sm mb-1">
                <span>{campaign.name}</span>
                <span>
                  {campaign.unit === "currency" 
                    ? `R$ ${campaign.current.toLocaleString('pt-BR')} / R$ ${campaign.goal.toLocaleString('pt-BR')}`
                    : `${campaign.current} / ${campaign.goal}`
                  }
                </span>
              </div>
              <Progress value={percentage} className="h-2" />
              <div className="text-xs text-muted-foreground mt-1">
                {percentage.toFixed(1)}% completo
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}