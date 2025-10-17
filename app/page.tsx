"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Mail, Leaf, Heart, Shield, Sparkles, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { XIcon, Eye } from "lucide-react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const TestimonialsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
      {
        name: "Rajesh Kumar",
        age: 45,
        condition: "Jaundice Treatment",
        text: "I was suffering from severe jaundice and had lost hope. Dr. N.K. Sharma's natural treatment completely cured me in just 3 weeks. No side effects, just pure healing. I'm forever grateful!",
        rating: 5,
        location: "Delhi",
      },
      {
        name: "Priya Sharma",
        age: 38,
        condition: "Liver Wellness",
        text: "After years of liver problems, I found Shri Ramasewar Clinic. Dr. Rohan Sharma's Ayurvedic approach not only healed my liver but improved my overall health. Highly recommended!",
        rating: 5,
        location: "Gurgaon",
      },
      {
        name: "Amit Verma",
        age: 52,
        condition: "Stomach Issues",
        text: "Chronic acidity and digestion problems were ruining my life. The natural herbs and personalized care plan here worked wonders. I feel like a new person!",
        rating: 5,
        location: "Noida",
      },
      {
        name: "Sunita Devi",
        age: 41,
        condition: "Kashya Ki Thali Therapy",
        text: "The unique Kash Ki Thali therapy is truly miraculous. It helped me overcome multiple health issues naturally. The doctors here are angels in disguise.",
        rating: 5,
        location: "Faridabad",
      },
      {
        name: "Vikash Singh",
        age: 35,
        condition: "Liver & Stomach",
        text: "I had both liver and stomach problems. The comprehensive treatment approach here addressed all my issues. 25+ years of experience really shows in their expertise.",
        rating: 5,
        location: "Ghaziabad",
      },
      {
        name: "Suman Gupta",
        age: 29,
        condition: "Digestive Health",
        text: "Natural healing at its best! No chemicals, no side effects, just pure Ayurvedic wisdom. My digestive health has never been better. Thank you, doctors!",
        rating: 5,
        location: "Delhi",
      },
    ]

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 1000) // Change every 1 second

      return () => clearInterval(timer)
    }, [testimonials.length])

    const currentTestimonial = testimonials[currentIndex]

    return (
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            {/* Stars Rating */}
            <div className="flex justify-center mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Sparkles key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg lg:text-xl text-white/90 mb-6 leading-relaxed italic">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Patient Info */}
            <div className="border-t border-white/20 pt-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="bg-green-600 rounded-full p-3">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white text-lg">{currentTestimonial.name}</h4>
                  <p className="text-green-200 text-sm">
                    Age {currentTestimonial.age} • {currentTestimonial.condition}
                  </p>
                  <p className="text-green-300 text-sm">{currentTestimonial.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 bg-white/20 rounded-full h-1 overflow-hidden">
          <div
            className="bg-white h-full transition-all duration-1000 ease-linear"
            style={{
              width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
            }}
          />
        </div>
      </div>
    )
  }

  const RecoveryGallery = () => {
    const [selectedImage, setSelectedImage] = useState<any>(null)
    const [uploadMode, setUploadMode] = useState(false)
    const [editingCard, setEditingCard] = useState<number | null>(null)

    const recoveryImages = [
      {
        id: 1,
        condition: "Jaundice Treatment",
        beforeImage: "/jundice.jpg",
        afterImage: "/jundice after.jpg",
        description: "Complete recovery from severe jaundice can be achieved in 4 weeks using natural herbal treatment, but the treatment should continue for 8 weeks to cure jaundice completely.",
        duration: "8 weeks",
        patientAge: "18 years",
        treatment: "Ayurvedic herbs + dietary modifications",
      },
      {
        id: 2,
        condition: "Kashya Ki Thali Therapy",
        beforeImage: "/kashya before.jpg",
         afterImage: "/kashya after.jpg",
        description: "Multiple chronic conditions improved through our signature therapy",
        duration: "8 therapy",
        patientAge: "41 years",
        treatment: "Kash Ki Thali therapy + supportive herbs",
      },
      {
        id: 3,
        condition: "Skin Problem",
        beforeImage: "/skin before.jpg",
        afterImage: "/skin after.jpg",
        description: "The images show a case of chronic skin inflammation, likely psoriasis or severe eczema, affecting the elbow area. Initially, the skin appears red, thickened, and scaly, indicating active inflammation.",
        duration: "4 weeks",
        patientAge: "30 years",
        treatment: "Ayurvedic medicine + hand made Ayurvedic formulas",
      },
      {
        id: 4,
        condition: "Hapatices A",
        beforeImage: "/Hapaties A.png",
        afterImage: "/Hapaties A after.png",
        description: "This patient, Shahaj, is a 7-year-old boy who was diagnosed with Hepatitis A. His initial bilirubin level was 10.9. After 50 days of treatment, he is now fully recovered, and his Hepatitis A test is negative. ",
        duration: "6 weeks",
        patientAge: "7 years",
        treatment: "Liver detox program + herbal medicines",
      },
      {
        id: 6,
        condition: "Hapatices B",
        beforeImage: "/Hapaties B before.jpg",
        afterImage: "/Hapaties B after.png",
        description: "The patient initially had active Hepatitis B infection, but after 3 months of treatment, the reports show Hepatitis B is negative (non-reactive), indicating recovery.",
        duration: "12 weeks",
        patientAge: "65 years",
        treatment: "Ayurvedic medicine + hand made Ayurvedic formulas",
      },
      {
       id: 5,
       condition: "Hapatices C",
       beforeImage: "/before.png",
       afterImage: "/after.png",
       description: "The patient initially had a high Hepatitis C viral load (12,127,072 IU/ml on 01-Jul-2025). On repeat testing (05-Aug-2025), HCV RNA was not detected, showing a successful treatment response. Confirmation of cure will require follow-up at 12 weeks post-treatment.",
       duration: "12 weeks",
       patientAge: "29 years",
       treatment: "Ayurvedic medicine + hand made Ayurvedic formulas",
     },
    ]
 

    return (
      <>
       

        <div className="grid md:grid-cols-3 gap-8">
          {recoveryImages.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-green-800">{item.condition}</h3>
                  <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{item.duration}</div>
                </div>

                {/* Before/After Images */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="relative group">
                    <img
                      src={item.beforeImage || "/placeholder.svg"}
                      alt={`Before ${item.condition}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                      {/* <span className="text-white text-sm font-medium bg-red-600 px-2 py-1 rounded">BEFORE</span> */}
                    </div>
                  </div>
                  <div className="relative group">
                    <img
                      src={item.afterImage || "/"}
                      alt={`After ${item.condition}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                      {/* <span className="text-white text-sm font-medium bg-green-600 px-2 py-1 rounded">AFTER</span> */}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>Patient Age:</span>
                    <span className="font-medium">{item.patientAge}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Treatment:</span>
                    <span className="font-medium text-right">{item.treatment}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedImage(item)}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed view */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-green-800">{selectedImage.condition}</h2>

                  <button onClick={() => setSelectedImage(null)} className="text-gray-500 hover:text-gray-700 p-2" aria-label="Close image preview"><XIcon className="h-6 w-6" /></button>

                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={selectedImage.beforeImage || "/placeholder.svg"}
                        alt={`Before ${selectedImage.condition}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">BEFORE</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Before Treatment</h3>
                    <p className="text-gray-600">
                      Patient presented with symptoms requiring immediate attention and comprehensive care.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={selectedImage.afterImage || "/placeholder.svg"}
                        alt={`After ${selectedImage.condition}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          AFTER
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">After Treatment</h3>
                    <p className="text-gray-600">Complete recovery achieved through our natural healing approach.</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">Treatment Details</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Duration:</span>
                      <p className="font-semibold text-green-700">{selectedImage.duration}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Patient Age:</span>
                      <p className="font-semibold text-green-700">{selectedImage.patientAge}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Treatment Type:</span>
                      <p className="font-semibold text-green-700">{selectedImage.treatment}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-gray-600">Result:</span>
                    <p className="font-medium text-gray-800 mt-1">{selectedImage.description}</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 mb-4">
                    * Images are representative examples. Individual results may vary. Patient privacy is maintained.
                  </p>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                  >
                    Book Your Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');

   
 const handleform=(event)=>{
     event.preventDefault();
    console.log('Submitted Name:', name);
    console.log('Submitted Email:', email);
      console.log('Submitted phone:', phone);
      console.log('Submitted Message:', message);
    }
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-green-100 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-green-800">Shri Rameshwaram Clinic</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-green-700 hover:text-green-900 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-green-700 hover:text-green-900 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-green-700 hover:text-green-900 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-green-100">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-green-700 hover:text-green-900 transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-green-700 hover:text-green-900 transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-green-700 hover:text-green-900 transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-green-800 mb-4">Shri Rameshwaram Clinic</h1>
              <p className="text-xl lg:text-2xl text-green-600 mb-6 font-medium">"Healing Naturally, Caring Deeply"</p>

              <div className="mb-8 space-y-3">
                <div className="bg-white/80 rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Our Expert Doctors:</h3>
                  <div className="space-y-2 text-green-700">
                    <p className="flex items-center">
                      <Heart className="h-4 w-4 mr-2 text-green-600" />
                      <span className="font-medium">Dr. N.K. Sharma</span>
                      <span className="ml-2 text-sm">B.A.M.S., M.D. (Lucknow)</span>
                    </p>
                    <p className="flex items-center">
                      <Heart className="h-4 w-4 mr-2 text-green-600" />
                      <span className="font-medium">Dr. Rohan Sharma</span>
                      <span className="ml-2 text-sm">B.A.M.S. (Uttarakhand)</span>
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                Book an Appointment
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8">
                <Image
                  src="/clinic photo.jpg"
                  alt="Shri Ramasewar Clinic - Natural Healing Center"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg w-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg border-4 border-green-100">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-8">About Shri Rameshwaram Clinic</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  For over <span className="font-semibold text-green-700">25+ years</span>, Shri Rameshwaram Clinic has
                  been a beacon of trust and natural healing in our community. Founded on the principles of Ayurveda and
                  traditional medicine, we believe in treating the root cause of illness rather than just the symptoms.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Our experienced team, led by Dr. N.K. Sharma and Dr. Rohan Sharma, combines decades of medical
                  expertise with compassionate, patient-centered care. We specialize in natural treatments that work in
                  harmony with your body's healing mechanisms.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  At Shri Rameshwaram Clinic, we don't just treat diseases – we restore wellness, vitality, and hope. Our
                  mission is to provide safe, effective, and affordable natural healthcare solutions that have stood the
                  test of time.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-600 rounded-full p-3">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">25+ Years of Trust</h4>
                      <p className="text-green-600">Serving the community with dedication</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-600 rounded-full p-3">
                      <Leaf className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Natural Healing</h4>
                      <p className="text-green-600">Ayurvedic treatments with no side effects</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-600 rounded-full p-3">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Patient-Centered Care</h4>
                      <p className="text-green-600">Personalized treatment plans for each patient</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">Our Natural Healing Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized treatments using time-tested Ayurvedic principles and natural remedies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Jaundice Treatment */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-green-800">Jaundice Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Natural, herbal medication for jaundice treatment with no side effects. Our proven remedies help
                  restore liver function and eliminate toxins safely.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Liver Wellness */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Liver Wellness Program</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Comprehensive Ayurvedic detox and organ-strengthening solutions. Restore your liver's natural function
                  and improve overall digestive health.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Stomach Issues */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-green-800">Stomach-related Illnesses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Effective treatment for gas, acidity, digestion problems, and stomach infections using natural herbs
                  and personalized care plans.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Kash Ki Thali Therapy */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-green-800">Kashya Ki Thali Therapy</CardTitle>
                <div className="bg-green-600 text-white text-xs px-2 py-1 rounded-full inline-block">
                  UNIQUE THERAPY
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Our signature traditional healing therapy for treating multiple chronic and lifestyle-related
                  conditions. A natural detox and energy restoration process.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recovery Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">Patient Recovery Gallery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Witness the transformative power of natural healing through real patient recovery journeys. These before
              and after comparisons showcase the effectiveness of our Ayurvedic treatments.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>100% Natural Treatment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-green-600" />
                <span>No Side Effects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-green-600" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>

          <RecoveryGallery />

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Ready to Start Your Healing Journey?</h3>
              <p className="text-gray-700 mb-6">
                Join hundreds of patients who have experienced complete recovery through our natural treatments. Every
                journey begins with a single consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                  onClick={() => scrollToSection("contact")}
                >
                  Book Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 bg-transparent"
                  onClick={() => window.open("tel:+91 9761569526")}
                >
                  Call Now: +91 9761569526
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-green-800 to-green-700 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Real stories from patients who found healing through our natural treatments
            </p>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">
              Ready to start your natural healing journey? Get in touch with us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-6">Visit Our Clinic</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800">Address</h4>
                      <p className="text-gray-600">
                        Shri Rameshwaram Clinic
                        <br />
                        falavda road mawana Meerut, Uttar Pradesh - 250401
                        <br />
                        Near krishak inter college opposite sharma medical store
                      </p>
                      <div className="mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                          onClick={() => window.open("https://maps.app.goo.gl/TxuYsh85xWsrTu4G7", "_blank")}
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800">Phone & WhatsApp</h4>
                      <p className="text-gray-600">
                        +91 9761569526
                        <br />
                        +91 9870654832
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800">Working Hours</h4>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-600 text-white rounded-lg text-center">
                  <p className="font-medium">Walk-ins welcome. Prior appointment preferred.</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src=" https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3485.899847498479!2d77.910642!3d29.108638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDA2JzMxLjEiTiA3N8KwNTQnMzguMyJF!5e0!3m2!1sen!2sin!4v1751806241867!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 lg:h-80"
                  title="Shri Ramasewar Clinic Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Send us a Message</h3>

              <form className="space-y-6" onSubmit={handleform}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-green-800">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      
                      className="border-green-200 focus:border-green-500"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-green-800">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      className="border-green-200 focus:border-green-500"
                       value={phone}
                      onChange={(e)=>setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-green-800">
                    Email (Optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="border-green-200 focus:border-green-500"
                     value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-green-800">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your health concerns or questions..."
                    rows={4}
                    className="border-green-200 focus:border-green-500"
                     value={message}
                      onChange={(e)=>setMessage(e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-300" />
              <span className="text-2xl font-bold">Shri Rameshwaram Clinic</span>
            </div>

            <p className="text-green-200 mb-6 text-lg">"Your Health, Our Priority – Since Generations"</p>

            <div className="border-t border-green-700 pt-6">
              <p className="text-green-300">
                © {new Date().getFullYear()} Shri Rameshwaram Clinic. All rights reserved.
              </p>
              <p className="text-green-400 mt-2 text-sm">Healing Naturally, Caring Deeply</p>
              <p className="text-green-400 mt-2 text-sm">
               Website developed by <strong>Divam Sharma</strong> | Contact:
               <a href="tel:+1234567890" className="  hover:underline">+91 9548302195</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
