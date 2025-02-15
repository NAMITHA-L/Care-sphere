"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { HelpCircle, MessageSquare, PhoneCall, AlertTriangle, Video } from "lucide-react"

export default function CaregiverHelpSupport() {
  const [showEmergencyDialog, setShowEmergencyDialog] = useState(false)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Help & Support 🆘</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <HelpCircle className="mr-2 h-5 w-5" />
            FAQs & How-To Guides
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I log a patient's vital signs?</AccordionTrigger>
              <AccordionContent>
                To log vital signs, go to the Health Observation page, enter the values in the provided fields, and
                click the "Save Health Log" button.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What should I do if I make a mistake in a health log?</AccordionTrigger>
              <AccordionContent>
                If you make a mistake, you can edit the most recent log by clicking the "Edit" button next to the entry.
                For older logs, please contact your supervisor.
              </AccordionContent>
            </AccordionItem>
            {/* Add more FAQ items as needed */}
          </Accordion>
          <Button className="mt-4" variant="outline">
            <Video className="mr-2 h-4 w-4" />
            Watch How-To Videos
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-5 w-5" />
            Live Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Need immediate assistance? Chat with our support team or AI assistant.</p>
          <div className="space-y-2">
            <Button className="w-full">Start Live Chat with Support</Button>
            <Button variant="outline" className="w-full">
              Chat with AI Assistant
            </Button>
            <Button variant="secondary" className="w-full">
              <PhoneCall className="mr-2 h-4 w-4" />
              Request a Callback
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Report an Issue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Input placeholder="Describe the issue you're facing" />
            </div>
            <Button type="submit" className="w-full">
              Submit Report
            </Button>
          </form>
        </CardContent>
      </Card>

      <AlertDialog open={showEmergencyDialog} onOpenChange={setShowEmergencyDialog}>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" className="w-full">
            Emergency Contact
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Emergency Contacts</AlertDialogTitle>
            <AlertDialogDescription>
              <ul className="list-disc list-inside">
                <li>Doctor's Emergency Line: +1 (555) 123-4567</li>
                <li>Caregiver Support Line: +1 (555) 987-6543</li>
                <li>Emergency Services: 911</li>
              </ul>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
            <AlertDialogAction>Call Emergency Services</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

