import React, { useState } from 'react';
import { 
  User, 
  Target, 
  CheckCircle, 
  Star, 
  Menu, 
  X, 
  ArrowRight, 
  FileText, 
  Users, 
  Award, 
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { number: '50K+', label: 'Resumes Improved' },
    { number: '85%', label: 'Success Rate' },
    { number: '2.5x', label: 'More Interviews' },
    { number: '30 Days', label: 'Average Job Find' }
  ];

  const features = [
    {
      icon: <Target className="w-8 h-8 text-teal-600" />,
      title: 'AI-Powered Analysis',
      description: 'Our smart technology analyzes your resume and provides personalized recommendations to make you stand out.'
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: 'Expert Guidance',
      description: 'Get feedback from industry professionals who know what recruiters are looking for in your field.'
    },
    {
      icon: <Award className="w-8 h-8 text-teal-600" />,
      title: 'Interview Preparation',
      description: 'Practice with mock interviews and get tips to confidently showcase your skills and experience.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-600" />,
      title: 'Career Tracking',
      description: 'Monitor your job search progress and see how your improvements translate to real results.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Developer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'I was stuck in my job search for months. Within two weeks of using this platform, I had three interview calls! The personalized feedback was incredibly helpful.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The expert guidance helped me completely transform my resume. I finally felt confident about my applications and landed my dream job!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Analyst',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The interview preparation was a game-changer. I went from nervous wreck to confident candidate. Highly recommend this platform!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-blue-500 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">ResumeBoost</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-teal-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-teal-600 transition-colors">Success Stories</a>
              <a href="#pricing" className="text-gray-600 hover:text-teal-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t py-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-teal-600 transition-colors">Features</a>
                <a href="#testimonials" className="text-gray-600 hover:text-teal-600 transition-colors">Success Stories</a>
                <a href="#pricing" className="text-gray-600 hover:text-teal-600 transition-colors">Pricing</a>
                <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-fit">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-cyan-400/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Land Your 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600"> Dream Job</span> Faster
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your resume from overlooked to outstanding. Our AI-powered platform and expert guidance help you craft applications that get noticed and land interviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center group">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
                  See How It Works
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-teal-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-6 text-white mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <FileText className="w-8 h-8" />
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Your Resume</h3>
                  <p className="text-white/80 text-sm">Optimized for success</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">ATS-friendly format</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Keyword optimized</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Industry-specific</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and guidance you need to transform your job search from frustrating to successful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                <div className="mb-4 p-3 bg-teal-50 rounded-xl w-fit group-hover:bg-teal-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Path to Success
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to transform your career prospects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Your Resume</h3>
              <p className="text-gray-600">
                Simply upload your current resume or create one from scratch using our guided templates.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Expert Analysis</h3>
              <p className="text-gray-600">
                Our AI and expert reviewers analyze your resume and provide detailed, actionable feedback.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Land More Interviews</h3>
              <p className="text-gray-600">
                Apply with confidence using your optimized resume and watch the interview invitations roll in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Real Users
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands who have transformed their careers with our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trusted by Job Seekers Worldwide</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="flex items-center justify-center">
                <Shield className="w-8 h-8 text-gray-400 mr-2" />
                <span className="text-lg font-semibold text-gray-600">Secure & Private</span>
              </div>
              <div className="flex items-center justify-center">
                <Zap className="w-8 h-8 text-gray-400 mr-2" />
                <span className="text-lg font-semibold text-gray-600">Lightning Fast</span>
              </div>
              <div className="flex items-center justify-center">
                <Award className="w-8 h-8 text-gray-400 mr-2" />
                <span className="text-lg font-semibold text-gray-600">Award Winning</span>
              </div>
              <div className="flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-400 mr-2" />
                <span className="text-lg font-semibold text-gray-600">50K+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of successful job seekers who found their dream jobs with our help. Start your journey today - it's completely free to try.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center group">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">ResumeBoost</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering job seekers to land their dream careers through expert guidance and AI-powered resume optimization.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>support@resumeboost.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resume Analysis</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cover Letter Help</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Interview Prep</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn Optimization</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Coaching</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resume Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Interview Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Salary Calculator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Job Search Tips</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 ResumeBoost. All rights reserved. Made with ❤️ for job seekers everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;