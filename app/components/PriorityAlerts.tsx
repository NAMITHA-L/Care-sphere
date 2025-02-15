import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

const alerts = [
  { id: 1, message: "Arun hasn't eaten in 5 hours", priority: "high" },
  { id: 2, message: "Meena's medication is due in 30 minutes", priority: "medium" },
  { id: 3, message: "Sourav's sleep pattern is irregular", priority: "low" },
]

export default function PriorityAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
          Priority Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {alerts.map((alert) => (
            <li key={alert.id} className="flex items-start space-x-2">
              <AlertTriangle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${getPriorityColor(alert.priority)}`} />
              <span className="text-sm">{alert.message}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case "high":
      return "text-red-500"
    case "medium":
      return "text-yellow-500"
    case "low":
      return "text-green-500"
    default:
      return "text-gray-500"
  }
}

