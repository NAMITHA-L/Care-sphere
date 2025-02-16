"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { User, Info, LogOut, Search, Pencil, Save } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function TopHeader() {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    setShowLogoutConfirm(true)
  }

  const confirmLogout = () => {
    setShowLogoutConfirm(false)
    router.push("/")
  }

  // Open Profile and Reset Edit Mode
  const openProfile = () => {
    setIsEditing(false) // Reset to view mode when opening
    setShowProfile(true)
  }

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">
          CARESPHERE
          <span className="text-sm font-normal block text-gray-500">Empowering Care, Simplifying Lives</span>
        </div>

        {/* Centered Search Bar */}
        <div className="flex-grow mx-6">
          <Input
            placeholder="Search..."
            className="w-80 mx-auto p-2 bg-gray-100 rounded-md"
            icon={<Search className="h-5 w-5 text-gray-500" />}
          />
        </div>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={openProfile}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setShowAbout(true)}>
              <Info className="mr-2 h-4 w-4" />
              <span>About</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={showLogoutConfirm} onOpenChange={setShowLogoutConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will end your current session and return you to the login screen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmLogout}>Logout</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* About Dialog */}
      <AlertDialog open={showAbout} onOpenChange={setShowAbout}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>About CareSphere</AlertDialogTitle>
            <AlertDialogDescription>
              CareSphere is a comprehensive healthcare management application designed to serve caregivers, patients,
              and their families. Our features include:
              <ul className="list-disc list-inside mt-2">
                <li>Health observation and monitoring</li>
                <li>Medication management</li>
                <li>Appointment scheduling</li>
                <li>Communication between caregivers and families</li>
                <li>Reporting and analytics</li>
                <li>Emergency alerts and notifications</li>
              </ul>
              Our mission is to empower care providers and simplify the lives of patients and their families through
              innovative technology solutions.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Profile Dialog */}
      <AlertDialog open={showProfile} onOpenChange={setShowProfile}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Profile</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            {isEditing ? (
              <div>
                <label className="block text-sm font-medium text-gray-700">Name:</label>
                <Input placeholder="Enter your name" className="mt-1" />
                <label className="block text-sm font-medium text-gray-700 mt-2">Phone number:</label>
                <Input placeholder="Enter your Phone number" className="mt-1" />
                <label className="block text-sm font-medium text-gray-700 mt-2">Email:</label>
                <Input placeholder="Enter your email" className="mt-1" />
              </div>
            ) : (
              <div>
                <p><strong>Name:</strong>ABCD</p>
                <p><strong>Phone number:</strong> 0123456789</p>
                <p><strong>Email:</strong> john.doe@example.com</p>
              </div>
            )}
          </AlertDialogDescription>
          <AlertDialogFooter>
            {isEditing ? (
              <AlertDialogAction onClick={() => setIsEditing(false)}>
                <Save className="mr-2 h-4 w-4" />
                Save
              </AlertDialogAction>
            ) : (
              <Button onClick={() => setIsEditing(true)}>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Button>
            )}
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </header>
  )
}
