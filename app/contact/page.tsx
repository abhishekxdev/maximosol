'use client'
import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Award } from 'lucide-react'
import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Get In Touch</Badge>
            <h1 className="text-5xl font-bold mb-6">
              Let's <span className="text-primary">Transform</span> Your AI Project
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to get started? Contact our team of experts to discuss your data annotation needs and receive a customized solution for your AI project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Card Only */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 bg-white/90 text-gray-900 shadow-xl p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription className="text-gray-700">
                  Ready to discuss your project? We're here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 flex-shrink-0 mt-1 text-primary" />
                  <div>
                    <h4 className="font-semibold mb-1">REGD. OFFICE</h4>
                    <p className="text-gray-700">
                      1204 Block-F Gauri, Savitri Heritage Bahu Bazar,<br />
                      Kantatoli, Ranchi, Jharkhand, India, 834001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 flex-shrink-0 mt-1 text-primary" />
                  <div>
                    <h4 className="font-semibold mb-1">Contact</h4>
                    <p className="text-gray-700">+91 9900199001</p>
                    <p className="text-gray-700">+91 9952632404</p>
                    <p className="text-gray-700">+91 9952632404</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 flex-shrink-0 mt-1 text-primary" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-700">info@max-imo.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-lg font-semibold">How quickly will I get a response after contacting you?</AccordionTrigger>
                <AccordionContent className="text-gray-700">We typically respond within 24 hours on business days. For urgent requests, please mention it in your message or call us directly.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-lg font-semibold">What industries do you serve?</AccordionTrigger>
                <AccordionContent className="text-gray-700">We serve a wide range of industries including healthcare, automotive, finance, retail, manufacturing, gaming, security, and energy.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-lg font-semibold">Can you handle large-scale or custom annotation projects?</AccordionTrigger>
                <AccordionContent className="text-gray-700">Absolutely! We have scalable teams and advanced tools to handle projects of any size and complexity, including custom requirements.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-lg font-semibold">Is my data secure with Maximo Solutions?</AccordionTrigger>
                <AccordionContent className="text-gray-700">Yes, we follow strict security protocols and are compliant with major data protection standards to ensure your data is safe and confidential.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}