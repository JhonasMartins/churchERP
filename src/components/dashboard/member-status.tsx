import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface MemberStatusProps {
  title?: string
  data: {
    status: string
    count: number
    color: string
    icon: React.ComponentType<{ className?: string }>
  }[]
}

export function MemberStatus({ data, title = "Membros por Status" }: MemberStatusProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className={item.color}>
                    <Icon className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{item.status}</span>
              </div>
              <span className="text-sm font-bold">{item.count.toLocaleString('pt-BR')}</span>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}