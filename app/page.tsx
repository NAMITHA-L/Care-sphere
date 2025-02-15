"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function LoginPage() {
  const [isNewUser, setIsNewUser] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("caretaker")
  const router = useRouter()

  // Reset form state when component mounts (i.e., after logout)
  useEffect(() => {
    setUsername("")
    setPassword("")
    setUserType("caretaker")
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userType === "caretaker") {
      router.push("/dashboard")
    } else {
      router.push("/family-dashboard")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-green-100 to-blue-200">
      <div className="w-full max-w-md p-6 space-y-4 bg-white rounded-xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">CareSphere</h1>
          <p className="text-lg text-gray-600">Empowering Care, Simplifying Lives</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="username" className="text-sm font-medium text-gray-700">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              required
              className="mt-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              required
              className="mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <RadioGroup value={userType} onValueChange={setUserType} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="caretaker" id="caretaker" />
              <Label htmlFor="caretaker">Professional Caretaker</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="family" id="family" />
              <Label htmlFor="family">Family Member</Label>
            </div>
          </RadioGroup>
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            {isNewUser ? "Sign Up" : "Login"}
          </Button>
        </form>
        <p className="text-center text-sm text-gray-600">
          {isNewUser ? "Already have an account?" : "Don't have an account?"}
          <Button variant="link" className="text-blue-500 hover:text-blue-600" onClick={() => setIsNewUser(!isNewUser)}>
            {isNewUser ? "Login" : "Sign Up"}
          </Button>
        </p>
      </div>
    </div>
  )
}

