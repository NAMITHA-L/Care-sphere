import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Plus, Bell, Calendar, Clipboard } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Daily Overview</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Add Observation
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alerts Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Patient Priority List</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { name: "Arun", issue: "Skipped lunch", priority: "high" },
                { name: "Sourav Chatterjee", issue: "Irregular sleep", priority: "medium" },
                { name: "Meena", issue: "Missed medication", priority: "high" },
                { name: "Ananya Gosh", issue: "High fever", priority: "high" },
                { name: "Rahul Sharma", issue: "Dizziness", priority: "medium" },
              ].map((patient, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <AlertTriangle
                    className={`h-5 w-5 ${patient.priority === "high" ? "text-red-500" : "text-yellow-500"}`}
                  />
                  <span>
                    <strong>{patient.name}</strong>: {patient.issue}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { time: "10:00 AM", task: "Medication for Alice" },
                { time: "11:30 AM", task: "Doctor visit for Bob" },
                { time: "1:00 PM", task: "Lunch check for all patients" },
              ].map((task, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="font-medium">{task.time}</span>
                  <span>{task.task}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                { message: "Medication alert for Arun", time: "5 min ago" },
                { message: "Irregular sleep pattern for Sourav Chatterjee", time: "20 min ago" },
                { message: "Missed meal for Meena", time: "1 hour ago" },
              ].map((alert, index) => (
                <li key={index} className="text-sm">
                  <p>{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.time}</p>
                </li>
              ))}
            </ul>
            <Link href="/alerts" className="text-sm text-blue-500 hover:underline mt-2 inline-block">
              View all alerts
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                { time: "9:00 AM", event: "Morning rounds" },
                { time: "12:00 PM", event: "Lunch distribution" },
                { time: "3:00 PM", event: "Medication time" },
              ].map((event, index) => (
                <li key={index} className="text-sm">
                  <span className="font-medium">{event.time}</span>: {event.event}
                </li>
              ))}
            </ul>
            <Link href="/schedule" className="text-sm text-blue-500 hover:underline mt-2 inline-block">
              View full schedule
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clipboard className="mr-2 h-5 w-5" />
              Recent Observations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                { patient: "Arun", observation: "Improved appetite", time: "1 hour ago" },
                { patient: "Sourav Chatterjee", observation: "Complained of mild pain", time: "2 hours ago" },
                { patient: "Meena", observation: "Engaged in group activity", time: "3 hours ago" },
              ].map((obs, index) => (
                <li key={index} className="text-sm">
                  <p>
                    <strong>{obs.patient}</strong>: {obs.observation}
                  </p>
                  <p className="text-xs text-gray-500">{obs.time}</p>
                </li>
              ))}
            </ul>
            <Link href="/observations" className="text-sm text-blue-500 hover:underline mt-2 inline-block">
              View all observations
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

