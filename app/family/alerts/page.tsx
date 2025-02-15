import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function Alerts() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Alerts</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
            Critical Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Missed evening medication - 2 hours ago</li>
            <li>Irregular heart rate detected - 1 day ago</li>
          </ul>
        </CardContent>
      </Card>
      {/* Add more alert categories and details here */}
    </div>
  )
}

