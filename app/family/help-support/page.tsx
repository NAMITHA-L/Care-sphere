import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageSquare, PhoneCall, AlertTriangle } from "lucide-react"

export default function HelpSupport() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Help & Support 🆘</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <HelpCircle className="mr-2 h-5 w-5" />
            FAQs & Tutorials
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I book an appointment?</AccordionTrigger>
              <AccordionContent>
                To book an appointment, go to the Doctor Appointments page, click on "Book New Appointment", select your
                preferred doctor, date, and time, then confirm your booking.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can I view medical reports?</AccordionTrigger>
              <AccordionContent>
                You can view medical reports in the Reports section. Click on the specific report you want to view, and
                it will open in a new window or download to your device.
              </AccordionContent>
            </AccordionItem>
            {/* Add more FAQ items as needed */}
          </Accordion>
          <Button className="mt-4">View All Tutorials</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-5 w-5" />
            Chat Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Need immediate assistance? Chat with our support team or AI assistant.</p>
          <Button className="mr-2">Start Live Chat</Button>
          <Button variant="outline">Chat with AI Assistant</Button>
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
            <Button type="submit">Submit Report</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <PhoneCall className="mr-2 h-5 w-5" />
            Emergency Contacts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <strong>Doctor's Emergency Line:</strong> +1 (555) 123-4567
            </li>
            <li>
              <strong>Caregiver Helpline:</strong> +1 (555) 987-6543
            </li>
            <li>
              <strong>24/7 Support Hotline:</strong> +1 (800) 555-1234
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

