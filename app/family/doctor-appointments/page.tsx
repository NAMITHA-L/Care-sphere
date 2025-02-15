"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { CalendarIcon, FileText, Bell } from "lucide-react"

export default function DoctorAppointments() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Doctor Appointments 🏥</h1>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Appointments</TabsTrigger>
          <TabsTrigger value="book">Book New Appointment</TabsTrigger>
          <TabsTrigger value="past">Past Appointments</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments 📅</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Example appointment */}
              <div className="flex justify-between items-center p-4 border rounded-lg mb-4">
                <div>
                  <p className="font-semibold">Dr. Smith - Cardiologist</p>
                  <p className="text-sm text-gray-500">June 15, 2023 at 10:00 AM</p>
                  <p className="text-sm text-green-500">Confirmed</p>
                </div>
                <div>
                  <Button variant="outline" size="sm" className="mr-2">
                    <CalendarIcon className="mr-2 h-4 w-4" /> Reschedule
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" /> View Details
                  </Button>
                </div>
              </div>
              {/* Add more appointments here */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="book">
          <Card>
            <CardHeader>
              <CardTitle>Book New Appointment 📝</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="doctor">Select Doctor</Label>
                  <Select>
                    <SelectTrigger id="doctor">
                      <SelectValue placeholder="Choose a doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smith">Dr. Smith - Cardiologist</SelectItem>
                      <SelectItem value="jones">Dr. Jones - Neurologist</SelectItem>
                      {/* Add more doctors */}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Select Date</Label>
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                </div>
                <div>
                  <Label htmlFor="time">Select Time</Label>
                  <Select>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Choose a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9am">9:00 AM</SelectItem>
                      <SelectItem value="10am">10:00 AM</SelectItem>
                      {/* Add more time slots */}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="reason">Reason for Appointment</Label>
                  <Input id="reason" placeholder="Brief description of the issue" />
                </div>
                <Button type="submit">Confirm Appointment</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past">
          <Card>
            <CardHeader>
              <CardTitle>Past Appointments & Reports 📂</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Example past appointment */}
              <div className="flex justify-between items-center p-4 border rounded-lg mb-4">
                <div>
                  <p className="font-semibold">Dr. Jones - Neurologist</p>
                  <p className="text-sm text-gray-500">May 20, 2023 at 2:00 PM</p>
                  <p className="text-sm text-blue-500">Completed</p>
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" /> View Report
                  </Button>
                </div>
              </div>
              {/* Add more past appointments here */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="mr-2 h-5 w-5" />
            Appointment Reminders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch id="appointment-reminders" />
            <Label htmlFor="appointment-reminders">Enable appointment reminders</Label>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            You'll receive notifications 24 hours and 1 hour before your scheduled appointments.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

