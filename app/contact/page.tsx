'use client'
import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Award, CheckCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    service: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    dataVolume: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        industry: '',
        service: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        dataVolume: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const industries = [
    'Healthcare & Medical',
    'Automotive & Transportation',
    'Finance & Banking',
    'Retail & E-commerce',
    'Manufacturing',
    'Agriculture',
    'Gaming & Entertainment',
    'Security & Surveillance',
    'Energy & Utilities',
    'Other'
  ]

  const services = [
    'Image Annotation',
    'Video Annotation',
    'Text Annotation',
    'Audio Annotation',
    '3D Point Cloud Annotation',
    'Custom Solution',
    'Multiple Services'
  ]

  const projectTypes = [
    'Computer Vision',
    'Natural Language Processing',
    'Machine Learning Training',
    'Data Validation',
    'Quality Assurance',
    'Research & Development',
    'Other'
  ]

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    'Over $500,000',
    'Prefer to discuss'
  ]

  const timelines = [
    'Rush (1-2 weeks)',
    'Standard (2-4 weeks)',
    'Extended (1-3 months)',
    'Long-term (3+ months)',
    'Ongoing partnership'
  ]

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

      {/* Contact Form Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Request a Quote
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="John Doe"
                          required
                          className="bg-white/80"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@company.com"
                          required
                          className="bg-white/80"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your Company"
                          className="bg-white/80"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                          <SelectTrigger className="bg-white/80">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Project Details</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Needed *</Label>
                          <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)} required>
                            <SelectTrigger className="bg-white/80">
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="projectType">Project Type</Label>
                          <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                            <SelectTrigger className="bg-white/80">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                            <SelectTrigger className="bg-white/80">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Timeline</Label>
                          <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                            <SelectTrigger className="bg-white/80">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              {timelines.map((timeline) => (
                                <SelectItem key={timeline} value={timeline}>
                                  {timeline}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dataVolume">Estimated Data Volume</Label>
                        <Input
                          id="dataVolume"
                          value={formData.dataVolume}
                          onChange={(e) => handleInputChange('dataVolume', e.target.value)}
                          placeholder="e.g., 10,000 images, 100 hours of video"
                          className="bg-white/80"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Project Description *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your project requirements, specific annotation needs, quality standards, and any other relevant details..."
                        rows={5}
                        required
                        className="bg-white/80"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      {submitStatus === 'success' && (
                        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <p className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                        </div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-800">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                        </div>
                      )}

                      <Button 
                        type="submit" 
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.service || !formData.message}
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information & Benefits */}
              <div className="space-y-8">
                {/* Contact Info Card */}
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
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
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 flex-shrink-0 mt-1 text-primary" />
                      <div>
                        <h4 className="font-semibold mb-1">Business Hours</h4>
                        <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                        <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM IST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" />
                      Why Choose Maximo?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { icon: CheckCircle, title: "99.9% Accuracy", desc: "Industry-leading precision" },
                      { icon: Users, title: "Expert Team", desc: "Domain specialists" },
                      { icon: Clock, title: "Fast Turnaround", desc: "24-48 hour delivery" },
                      { icon: Award, title: "Quality Assured", desc: "Multi-level validation" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl">Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { title: "View Our Services", href: "/services" },
                      { title: "Industry Solutions", href: "/industries" },
                      { title: "Why Choose Us", href: "/why-choose-us" },
                      { title: "About Maximo", href: "/about" }
                    ].map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
                      >
                        <span className="font-medium text-gray-900">{link.title}</span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </a>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
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
              <AccordionItem value="q5">
                <AccordionTrigger className="text-lg font-semibold">Do you provide free project consultations?</AccordionTrigger>
                <AccordionContent className="text-gray-700">Yes, we offer free initial consultations to understand your project requirements and provide expert recommendations for your data annotation needs.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-lg font-semibold">What file formats do you support?</AccordionTrigger>
                <AccordionContent className="text-gray-700">We support all major file formats including JPEG, PNG, MP4, AVI, CSV, JSON, XML, and many others. We can also work with custom formats based on your requirements.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}