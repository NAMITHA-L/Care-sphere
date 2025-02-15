import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Bell } from "lucide-react"

const alerts = [
  { id: 1, patient: "Arun", issue: "Missed dinner", priority: "high", time: "2 hours ago" },
  { id: 2, patient: "Ananya", issue: "Irregular sleep pattern", priority: "medium", time: "4 hours ago" },
  { id: 3, patient: "Rahul", issue: "Missed medication", priority: "high", time: "1 hour ago" },
  { id: 4, patient: "Sourav", issue: "Slight fever", priority: "medium", time: "3 hours ago" },
  { id: 5, patient: "Meena", issue: "Routine check-up due", priority: "low", time: "1 day ago" },
]

export default function Alerts() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Active Alerts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alerts.map((alert) => (
          <Card
            key={alert.id}
            className={
              alert.priority === "high"
                ? "border-red-500"
                : alert.priority === "medium"
                  ? "border-yellow-500"
                  : "border-green-500"
            }
          >
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle
                  className={`h-5 w-5 ${alert.priority === "high" ? "text-red-500" : alert.priority === "medium" ? "text-yellow-500" : "text-green-500"}`}
                />
                <span>{alert.patient}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{alert.issue}</p>
              <p className="text-sm text-gray-500 mb-4">{alert.time}</p>
              <Button>Check on Patient</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

