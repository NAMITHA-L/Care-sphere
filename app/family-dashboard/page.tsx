import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Bell, Calendar, MessageSquare, FileText, User } from "lucide-react"
import Link from "next/link"

export default function FamilyDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome, Arun Family</h1>
        <Button variant="outline">
          <User className="mr-2 h-4 w-4" /> Switch Patient
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Overview: Arun</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="font-medium">Last Meal</p>
              <p>Lunch at 12:30 PM</p>
            </div>
            <div>
              <p className="font-medium">Sleep Status</p>
              <p>Resting since 2:00 PM</p>
            </div>
            <div>
              <p className="font-medium">Next Medication</p>
              <p>4:00 PM - Blood Pressure Pills</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
              Active Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                { message: "Missed afternoon medication", time: "30 min ago" },
                { message: "Irregular sleep pattern detected", time: "2 hours ago" },
              ].map((alert, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 mt-0.5 text-red-500" />
                  <div>
                    <p>{alert.message}</p>
                    <p className="text-sm text-gray-500">{alert.time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/family/alerts" className="text-sm text-blue-500 hover:underline mt-4 inline-block">
              View all alerts
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Recent Health Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                { update: "Blood pressure reading: 120/80", time: "This morning" },
                { update: "Completed physical therapy session", time: "Yesterday" },
                { update: "Weight: 150 lbs", time: "2 days ago" },
              ].map((update, index) => (
                <li key={index}>
                  <p>{update.update}</p>
                  <p className="text-sm text-gray-500">{update.time}</p>
                </li>
              ))}
            </ul>
            <Link href="/family/reports" className="text-sm text-blue-500 hover:underline mt-4 inline-block">
              View all health logs
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                { event: "Doctor's Appointment", time: "Tomorrow, 10:00 AM" },
                { event: "Family Visit", time: "Saturday, 2:00 PM" },
                { event: "Medication Review", time: "Next Monday, 11:00 AM" },
              ].map((event, index) => (
                <li key={index}>
                  <p className="font-medium">{event.event}</p>
                  <p className="text-sm text-gray-500">{event.time}</p>
                </li>
              ))}
            </ul>
            <Link href="/family/schedule" className="text-sm text-blue-500 hover:underline mt-4 inline-block">
              View full schedule
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Recent Communications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                { from: "Dr. Smith", message: "Updated medication dosage", time: "1 hour ago" },
                { from: "Nurse Johnson", message: "Daily health report", time: "Yesterday" },
              ].map((comm, index) => (
                <li key={index}>
                  <p>
                    <strong>{comm.from}</strong>: {comm.message}
                  </p>
                  <p className="text-sm text-gray-500">{comm.time}</p>
                </li>
              ))}
            </ul>
            <Link href="/family/messages" className="text-sm text-blue-500 hover:underline mt-4 inline-block">
              Open communication center
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Notification Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <p>Health Alerts: Enabled</p>
              </li>
              <li>
                <p>Medication Reminders: Enabled</p>
              </li>
              <li>
                <p>Activity Updates: Disabled</p>
              </li>
            </ul>
            <Button variant="outline" className="mt-4">
              Manage Notifications
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

