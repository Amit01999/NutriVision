import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Star,
  Sparkles,
  Crown,
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      href: '#',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: '#',
      color: 'from-pink-400 to-purple-600',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
      color: 'from-blue-300 to-cyan-500',
    },
  ];

  const contactInfo = [
    { icon: Phone, label: '+880 1234-567890', href: 'tel:+8801234567890' },
    {
      icon: Mail,
      label: 'hello@nutrivision.bd',
      href: 'mailto:hello@nutrivision.bd',
    },
    { icon: MapPin, label: 'Dhaka, Bangladesh', href: '#' },
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Products', href: '#products' },
    { label: 'Nutrition Facts', href: '#nutrition' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 text-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-r from-pink-200/60 to-purple-200/60 rounded-full blur-2xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-yellow-200/60 to-orange-200/60 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-emerald-200/60 to-teal-200/60 rounded-full blur-xl animate-blob animation-delay-4000"></div>

        {/* Floating food elements */}
        <div className="absolute top-16 right-1/4 text-3xl animate-float opacity-40">
          🍰
        </div>
        <div className="absolute bottom-16 left-1/4 text-2xl animate-float animation-delay-1000 opacity-40">
          🥕
        </div>
        <div className="absolute top-1/2 right-20 text-2xl animate-bounce-gentle opacity-40">
          🍌
        </div>

        {/* Sparkle effects */}
        <div className="absolute top-20 left-1/2 text-yellow-500 animate-twinkle opacity-50">
          ✨
        </div>
        <div className="absolute bottom-1/3 right-1/3 text-purple-500 animate-twinkle animation-delay-1500 opacity-50">
          ⭐
        </div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg animate-pulse-gentle">
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-xl animate-bounce-gentle">
                    🌟
                  </div>
                </div>
                <div>
                  <h3 className="font-black text-3xl bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
                    NutriVision
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">
                    Breakfast Revolution
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                🚀 Powering Bangladesh's mornings with
                <span className="text-pink-600 font-bold">
                  {' '}
                  real nutrition{' '}
                </span>
                and{' '}
                <span className="text-purple-600 font-bold">
                  superfood magic
                </span>{' '}
                since 2024! Join the breakfast revolution! 🌱
              </p>

              <div className="flex items-center gap-3 bg-gradient-to-r from-pink-100/80 to-purple-100/80 backdrop-blur-sm border border-pink-300/30 rounded-2xl p-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="w-5 h-5 text-white fill-current" />
                </div>
                <div>
                  <p className="text-gray-800 font-bold">Made with Love</p>
                  <p className="text-gray-600 text-sm">
                    by Food Engineering Students 👨‍🎓
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 animate-fade-in-up animation-delay-300">
              <h4 className="font-black text-xl mb-4 flex items-center gap-2 text-gray-800">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-600 hover:text-pink-600 transition-colors duration-300 font-medium hover:translate-x-2 transform "
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    → {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <h4 className="font-black text-xl mb-4 flex items-center gap-2 text-gray-800">
                <Phone className="w-5 h-5 text-emerald-500" />
                Get in Touch
              </h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <contact.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium group-hover:translate-x-1 transform transition-transform">
                      {contact.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="border-t border-gray-300/50 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="animate-fade-in-up">
                <h4 className="font-bold text-lg mb-4 text-center md:text-left text-gray-800">
                  🌟 Follow Our Journey!
                </h4>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`group relative w-12 h-12 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transform transition-all duration-300 hover:-rotate-12`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 animate-fade-in-up animation-delay-300">
                <div className="text-center">
                  <div className="text-2xl font-black text-pink-600">1000+</div>
                  <div className="text-sm text-gray-500">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-purple-600">
                    50k+
                  </div>
                  <div className="text-sm text-gray-500">Cakes Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-yellow-600">5.0</div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    Rating{' '}
                    <Star className="w-3 h-3 fill-current text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-300/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left animate-fade-in-up">
                <p className="text-gray-600 text-sm">
                  © 2024 NutriVision Bangladesh. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Fueling dreams, one bite at a time 🚀
                </p>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500 animate-fade-in-up animation-delay-300">
                <a
                  href="#"
                  className="hover:text-pink-600 transition-colors font-medium"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-purple-600 transition-colors font-medium"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-600 transition-colors font-medium"
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>

          {/* Fun tagline */}
          <div className="mt-8 text-center animate-bounce-gentle">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100/80 to-purple-100/80 backdrop-blur-sm border border-pink-300/40 rounded-full px-6 py-3">
              <span className="text-sm text-gray-700">
                Made in Bangladesh with
              </span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span className="text-sm text-gray-700">and lots of</span>
              <span className="text-yellow-500 animate-bounce">🍰</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes pulse-gentle {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
