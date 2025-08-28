// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { ShoppingCart, Star, Heart, Zap, Sun } from 'lucide-react';
// import cakeimage from '../assets/hero-breakfast-cake.jpg';
// const FunHeroSection = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50 overflow-hidden pt-10">
//       {/* Animated Background with Food Illustrations */}
//       <div className="absolute inset-0">
//         {/* Soft floating orbs */}
//         <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-pink-200/60 to-rose-200/60 rounded-full filter blur-2xl animate-blob"></div>
//         <div className="absolute top-60 right-32 w-80 h-80 bg-gradient-to-r from-yellow-200/50 to-orange-200/50 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full filter blur-2xl animate-blob animation-delay-4000"></div>
//         <div className="absolute top-1/3 right-1/5 w-56 h-56 bg-gradient-to-r from-emerald-200/50 to-teal-200/50 rounded-full filter blur-xl animate-blob animation-delay-6000"></div>

//         {/* 🍌🥕🧁🍰🥜🌴 Food Illustrations - spread across screen */}
//         {/* Top-left */}
//         <div className="absolute top-24 left-16 text-5xl animate-float transform rotate-12 hover:rotate-0 transition-transform cursor-pointer">
//           🍌
//         </div>
//         {/* Mid-left */}
//         <div className="absolute top-1/2 left-20 text-4xl animate-bounce-gentle animation-delay-1500 transform -rotate-6 hover:scale-110 transition-transform cursor-pointer">
//           🥕
//         </div>
//         {/* Bottom-left */}
//         <div className="absolute bottom-28 left-28 text-5xl animate-float animation-delay-2000 transform rotate-6 hover:rotate-12 transition-transform cursor-pointer">
//           🧁
//         </div>

//         {/* Top-right */}
//         <div className="absolute top-16 right-20 text-5xl animate-float animation-delay-1000 transform -rotate-12 hover:rotate-0 transition-transform cursor-pointer">
//           🍰
//         </div>
//         {/* Mid-right */}
//         <div className="absolute top-1/2 right-16 text-4xl animate-wiggle animation-delay-2500 transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
//           🥜
//         </div>
//         {/* Bottom-right */}
//         <div className="absolute bottom-24 right-28 text-5xl animate-bounce-gentle animation-delay-3000 transform rotate-6 hover:scale-105 transition-transform cursor-pointer">
//           🌴
//         </div>

//         {/* Minimal sparkles */}
//         <div className="absolute top-1/3 left-1/2 text-3xl animate-twinkle text-green-400">
//           ✨
//         </div>
//         <div className="absolute bottom-1/3 right-1/2 text-3xl animate-twinkle animation-delay-1500 text-emerald-400">
//           ✨
//         </div>
//       </div>

//       {/* Hero Content */}
//       <section className="relative z-10 flex items-center justify-center min-h-screen py-20">
//         <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
//             {/* Left Column */}
//             <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
//               {/* Fun Badge */}
//               <div className="inline-flex lg:mt-5 items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-200 rounded-full backdrop-blur-sm shadow-lg">
//                 <Sun className="w-5 h-5 text-yellow-500 animate-spin-slow" />
//                 <span className="text-gray-700 font-bold">
//                   🌱 100% Natural Goodness
//                 </span>
//               </div>

//               {/* Main Heading */}
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
//                 <span className="block text-gray-800 mb-2">Start Your</span>
//                 <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-shift mb-2">
//                   Morning
//                 </span>
//                 <span className="block text-gray-800">Adventure!</span>
//               </h1>

//               {/* Subtitle */}
//               <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
//                 Delicious breakfast cakes packed with
//                 <span className="text-pink-500 font-bold">
//                   {' '}
//                   superfood magic{' '}
//                 </span>
//                 to fuel your amazing day! 🚀
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
//                 <Button className="group relative bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500 text-white font-bold text-xl px-10 py-5 rounded-full transform hover:scale-105 hover:-rotate-1 transition-all duration-300 shadow-2xl hover:shadow-pink-300/50">
//                   <ShoppingCart className="w-6 h-6 mr-3 group-hover:animate-bounce" />
//                   Get Yours - Only 20 BDT! 🎉
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </Button>
//                 {/* <Button className="border-3 border-purple-300 text-purple-600 hover:bg-purple-50 font-bold text-xl px-10 py-5 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:rotate-1 shadow-lg">
//                   <Heart className="w-6 h-6 mr-3 animate-pulse" />
//                   Learn More ✨
//                 </Button> */}
//               </div>

//               {/* Features */}
//               <div className="grid grid-cols-3 gap-6 pt-8">
//                 <div className="text-center group">
//                   <div className="w-16 h-16 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce-gentle group-hover:scale-110 transition-transform shadow-lg">
//                     <Zap className="w-8 h-8 text-white" />
//                   </div>
//                   <p className="text-gray-700 font-bold">⚡ Instant Energy</p>
//                   <p className="text-gray-500 text-sm">Power up fast!</p>
//                 </div>
//                 <div className="text-center group">
//                   <div className="w-16 h-16 bg-gradient-to-r from-pink-300 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce-gentle animation-delay-500 group-hover:scale-110 transition-transform shadow-lg">
//                     <Star className="w-8 h-8 text-white" />
//                   </div>
//                   <p className="text-gray-700 font-bold">🌟 Super Tasty</p>
//                   <p className="text-gray-500 text-sm">Yum factor 100!</p>
//                 </div>
//                 <div className="text-center group">
//                   <div className="w-16 h-16 bg-gradient-to-r from-purple-300 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce-gentle animation-delay-1000 group-hover:scale-110 transition-transform shadow-lg">
//                     <Heart className="w-8 h-8 text-white" />
//                   </div>
//                   <p className="text-gray-700 font-bold">💝 Love & Care</p>
//                   <p className="text-gray-500 text-sm">Made with love</p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Product Showcase */}
//             <div className="relative  flex items-center justify-center animate-fade-in-right">
//               <div className="relative flex items-center justify-center">
//                 {/* Soft glow effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 via-purple-300/40 to-yellow-300/40 rounded-full blur-3xl scale-150 animate-pulse-glow"></div>

//                 {/* Main product container */}
//                 <div className="lg:-mt-32 relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-3xl p-10 border-2 border-white/50 shadow-2xl transform hover:rotate-2 transition-all duration-500 hover:scale-105">
//                   <div className="w-80 h-80 bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 rounded-3xl shadow-xl flex items-center justify-center text-8xl transform hover:scale-105 transition-transform duration-300 border-4 border-white/70">
//                     <img
//                       alt="Delicious Breakfast Cake"
//                       src={cakeimage}
//                       className="w-full h-full object-cover rounded-2xl "
//                     />
//                   </div>

//                   {/* Ingredient badges */}
//                   <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-800 px-5 py-2 rounded-full font-black shadow-xl animate-float hover:scale-110 transition-transform border-2 border-white">
//                     🍌 Banana Boost!
//                   </div>
//                   <div className="absolute top-1/4 -right-12 bg-gradient-to-r from-red-300 to-pink-400 text-white px-5 py-2 rounded-full font-black shadow-xl animate-float animation-delay-1000 hover:scale-110 transition-transform border-2 border-white">
//                     🥕 Beetroot Power!
//                   </div>
//                   <div className="absolute bottom-1/4 -right-12 bg-gradient-to-r from-amber-300 to-yellow-500 text-gray-800 px-5 py-2 rounded-full font-black shadow-xl animate-float animation-delay-2000 hover:scale-110 transition-transform border-2 border-white">
//                     🥜 Nutty Crunch!
//                   </div>
//                   <div className="absolute top-3/4 -left-12 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-5 py-2 rounded-full font-black shadow-xl animate-float animation-delay-3000 hover:scale-110 transition-transform border-2 border-white">
//                     🌴 Date Sweetness!
//                   </div>
//                   <div className="absolute top-10 -left-12 transform -translate-y-1/2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-5 py-2 rounded-full font-black shadow-xl animate-float animation-delay-4000 hover:scale-110 transition-transform border-2 border-white">
//                     🌱 Chia Magic!
//                   </div>
//                 </div>

//                 {/* Fun rating display */}
//                 <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-xl px-8 py-2 rounded-full border-2 border-pink-200 shadow-xl flex items-center gap-3">
//                   <div className="flex text-yellow-400">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         size={20}
//                         fill="currentColor"
//                         className="animate-twinkle"
//                         style={{ animationDelay: `${i * 0.1}s` }}
//                       />
//                     ))}
//                   </div>
//                   <span className="text-gray-700 font-bold">
//                     1k+ Happy Customers!
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Fun scroll indicator */}
//         <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
//           <span className="text-gray-600 font-medium">
//             More goodies below! 👇
//           </span>
//           <div className="w-8 h-12 border-3 border-purple-300 rounded-full flex justify-center bg-white/80 shadow-lg">
//             <div className="w-2 h-4 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mt-2 animate-scroll-bounce"></div>
//           </div>
//         </div>
//       </section>

//       {/* Custom Animations */}
//       <style>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }
//         @keyframes bounce-gentle {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-8px);
//           }
//         }
//         @keyframes wiggle {
//           0%,
//           100% {
//             transform: rotate(0deg);
//           }
//           25% {
//             transform: rotate(3deg);
//           }
//           75% {
//             transform: rotate(-3deg);
//           }
//         }
//         @keyframes gradient-shift {
//           0%,
//           100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         @keyframes pulse-glow {
//           0%,
//           100% {
//             opacity: 0.4;
//           }
//           50% {
//             opacity: 0.6;
//           }
//         }
//         @keyframes twinkle {
//           0%,
//           100% {
//             opacity: 0.4;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1.3);
//           }
//         }
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes fade-in-right {
//           from {
//             opacity: 0;
//             transform: translateX(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes slide-down {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         @keyframes pulse-slow {
//           0%,
//           100% {
//             transform: scale(1);
//             opacity: 0.8;
//           }
//           50% {
//             transform: scale(1.1);
//             opacity: 1;
//           }
//         }
//         @keyframes scroll-bounce {
//           0%,
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//           50% {
//             transform: translateY(8px);
//             opacity: 0.5;
//           }
//         }

//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//         .animate-bounce-gentle {
//           animation: bounce-gentle 3s ease-in-out infinite;
//         }
//         .animate-wiggle {
//           animation: wiggle 3s ease-in-out infinite;
//         }
//         .animate-gradient-shift {
//           animation: gradient-shift 3s ease infinite;
//           background-size: 200% 200%;
//         }
//         .animate-pulse-glow {
//           animation: pulse-glow 3s ease-in-out infinite;
//         }
//         .animate-twinkle {
//           animation: twinkle 2s ease-in-out infinite;
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out;
//         }
//         .animate-fade-in-right {
//           animation: fade-in-right 0.8s ease-out 0.3s both;
//         }
//         .animate-slide-down {
//           animation: slide-down 0.4s ease-out;
//         }
//         .animate-spin-slow {
//           animation: spin-slow 15s linear infinite;
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//         }
//         .animate-scroll-bounce {
//           animation: scroll-bounce 2s ease-in-out infinite;
//         }

//         .animation-delay-500 {
//           animation-delay: 0.5s;
//         }
//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }
//         .animation-delay-1500 {
//           animation-delay: 1.5s;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-2500 {
//           animation-delay: 2.5s;
//         }
//         .animation-delay-3000 {
//           animation-delay: 3s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//         .animation-delay-6000 {
//           animation-delay: 6s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default FunHeroSection;

import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Heart, Zap, Sun } from 'lucide-react';
import cakeimage from '../assets/hero-breakfast-cake.jpg';

const FunHeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50 overflow-hidden pt-10">
      {/* Animated Background with Food Illustrations */}
      <div className="absolute inset-0">
        {/* Soft floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-pink-200/60 to-rose-200/60 rounded-full filter blur-2xl animate-blob"></div>
        <div className="absolute top-60 right-8 md:right-32 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-yellow-200/50 to-orange-200/50 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full filter blur-2xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/5 w-28 h-28 md:w-56 md:h-56 bg-gradient-to-r from-emerald-200/50 to-teal-200/50 rounded-full filter blur-xl animate-blob animation-delay-6000"></div>

        {/* 🍌🥕🧁🍰🥜🌴 Food Illustrations - spread across screen */}
        {/* Top-left */}
        <div className="absolute top-16 md:top-24 left-4 md:left-16 text-3xl md:text-5xl animate-float transform rotate-12 hover:rotate-0 transition-transform cursor-pointer">
          🍌
        </div>
        {/* Mid-left */}
        <div className="absolute top-1/2 left-4 md:left-20 text-2xl md:text-4xl animate-bounce-gentle animation-delay-1500 transform -rotate-6 hover:scale-110 transition-transform cursor-pointer">
          🥕
        </div>
        {/* Bottom-left */}
        <div className="absolute bottom-20 md:bottom-28 left-6 md:left-28 text-3xl md:text-5xl animate-float animation-delay-2000 transform rotate-6 hover:rotate-12 transition-transform cursor-pointer">
          🧁
        </div>

        {/* Top-right */}
        <div className="absolute top-12 md:top-16 right-4 md:right-20 text-3xl md:text-5xl animate-float animation-delay-1000 transform -rotate-12 hover:rotate-0 transition-transform cursor-pointer">
          🍰
        </div>
        {/* Mid-right */}
        <div className="absolute top-1/2 right-4 md:right-16 text-2xl md:text-4xl animate-wiggle animation-delay-2500 transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
          🥜
        </div>
        {/* Bottom-right */}
        <div className="absolute bottom-16 md:bottom-24 right-6 md:right-28 text-3xl md:text-5xl animate-bounce-gentle animation-delay-3000 transform rotate-6 hover:scale-105 transition-transform cursor-pointer">
          🌴
        </div>

        {/* Minimal sparkles */}
        <div className="absolute top-1/3 left-1/2 text-2xl md:text-3xl animate-twinkle text-green-400">
          ✨
        </div>
        <div className="absolute bottom-1/3 right-1/2 text-2xl md:text-3xl animate-twinkle animation-delay-1500 text-emerald-400">
          ✨
        </div>
      </div>

      {/* Hero Content */}
      <section className="relative z-10 flex items-center justify-center min-h-screen py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 xl:gap-20 items-center">
            {/* Left Column */}
            <div className="text-center lg:text-left space-y-6 md:space-y-8 animate-fade-in-up">
              {/* Fun Badge */}
              <div className="inline-flex mt-10 lg:mt-5 items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-200 rounded-full backdrop-blur-sm shadow-lg">
                <Sun className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 animate-spin-slow" />
                <span className="text-gray-700 font-bold text-sm md:text-base">
                  🌱 100% Natural Goodness
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="block text-gray-800 mb-1 md:mb-2">
                  Start Your
                </span>
                <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-shift mb-1 md:mb-2">
                  Morning
                </span>
                <span className="block text-gray-800">Adventure!</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Delicious breakfast cakes packed with
                <span className="text-pink-500 font-bold">
                  {' '}
                  superfood magic{' '}
                </span>
                to fuel your amazing day! 🚀
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <Button
                  className=" sm:w-auto group relative 
    bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 
    hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500 
    text-white font-bold 
    text-sm sm:text-base md:text-lg 
    px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-5 
    rounded-full transform hover:scale-105 hover:-rotate-1 
    transition-all duration-300 shadow-2xl hover:shadow-pink-300/50"
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-2 md:mr-3 group-hover:animate-bounce" />
                  Get Yours - Only 20 BDT! 🎉
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8">
                <div className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 animate-bounce-gentle group-hover:scale-110 transition-transform shadow-lg">
                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-bold text-xs md:text-base">
                    ⚡ Instant Energy
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">
                    Power up fast!
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-300 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 animate-bounce-gentle animation-delay-500 group-hover:scale-110 transition-transform shadow-lg">
                    <Star className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-bold text-xs md:text-base">
                    🌟 Super Tasty
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">
                    Yum factor 100!
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-300 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 animate-bounce-gentle animation-delay-1000 group-hover:scale-110 transition-transform shadow-lg">
                    <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-bold text-xs md:text-base">
                    💝 Love & Care
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">
                    Made with love
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Product Showcase */}
            <div className="relative flex items-center justify-center animate-fade-in-right mt-8 lg:mt-0">
              <div className="relative flex items-center justify-center">
                {/* Soft glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 via-purple-300/40 to-yellow-300/40 rounded-full blur-3xl scale-150 animate-pulse-glow"></div>

                {/* Main product container */}
                <div className="lg:-mt-32 relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-white/50 shadow-2xl transform hover:rotate-2 transition-all duration-500 hover:scale-105">
                  <div className="w-60 h-60 md:w-96 md:h-80 bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 rounded-2xl md:rounded-3xl shadow-xl flex items-center justify-center text-6xl md:text-8xl transform hover:scale-105 transition-transform duration-300 border-4 border-white/70">
                    <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-pink-200 rounded-xl md:rounded-2xl flex items-center justify-center text-4xl md:text-6xl">
                      <img
                        alt="Delicious Breakfast Cake"
                        src={cakeimage}
                        className="w-full h-full object-cover rounded-2xl "
                      />
                    </div>
                  </div>

                  {/* Ingredient badges - Responsive positioning */}
                  <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-800 px-3 md:px-5 py-1 md:py-2 rounded-full font-black shadow-xl animate-float hover:scale-110 transition-transform border-2 border-white text-xs md:text-base">
                    🍌 Banana Boost!
                  </div>
                  <div className="absolute top-1/4 -right-8 md:-right-12 bg-gradient-to-r from-red-300 to-pink-400 text-white px-3 md:px-5 py-1 md:py-2 rounded-full font-black shadow-xl animate-float animation-delay-1000 hover:scale-110 transition-transform border-2 border-white text-xs md:text-base">
                    🥕 Beetroot Power!
                  </div>
                  <div className="absolute bottom-1/4 -right-8 md:-right-12 bg-gradient-to-r from-amber-300 to-yellow-500 text-gray-800 px-3 md:px-5 py-1 md:py-2 rounded-full font-black shadow-xl animate-float animation-delay-2000 hover:scale-110 transition-transform border-2 border-white text-xs md:text-base">
                    🥜 Nutty Crunch!
                  </div>
                  <div className="absolute top-3/4 -left-8 md:-left-12 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 md:px-5 py-1 md:py-2 rounded-full font-black shadow-xl animate-float animation-delay-3000 hover:scale-110 transition-transform border-2 border-white text-xs md:text-base">
                    🌴 Date Sweetness!
                  </div>
                  <div className="absolute top-10 -left-8 md:-left-12 transform -translate-y-1/2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-3 md:px-5 py-1 md:py-2 rounded-full font-black shadow-xl animate-float animation-delay-4000 hover:scale-110 transition-transform border-2 border-white text-xs md:text-base">
                    🌱 Chia Magic!
                  </div>
                </div>

                {/* Fun rating display */}
                <div className="absolute -bottom-12 md:-bottom-16 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-xl px-4 md:px-8 py-2 rounded-full border-2 border-pink-200 shadow-xl flex items-center gap-2 md:gap-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="md:w-5 md:h-5 animate-twinkle"
                        fill="currentColor"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 font-bold text-xs md:text-base">
                    1k+ Happy Customers!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun scroll indicator */}
        <div className="hidden absolute bottom-5 left-1/2 transform -translate-x-1/2 lg:flex flex-col items-center gap-2 md:gap-3 animate-bounce">
          <span className="text-gray-600 font-medium text-sm md:text-base">
            More goodies below! 👇
          </span>
          <div className="w-6 h-10 md:w-8 md:h-12 border-2 md:border-3 border-purple-300 rounded-full flex justify-center bg-white/80 shadow-lg">
            <div className="w-1.5 h-3 md:w-2 md:h-4 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mt-1.5 md:mt-2 animate-scroll-bounce"></div>
          </div>
        </div>
      </section>

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
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(3deg);
          }
          75% {
            transform: rotate(-3deg);
          }
        }
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
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
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        @keyframes scroll-bounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.5;
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
        .animate-wiggle {
          animation: wiggle 3s ease-in-out infinite;
        }
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.3s both;
        }
        .animate-slide-down {
          animation: slide-down 0.4s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-scroll-bounce {
          animation: scroll-bounce 2s ease-in-out infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
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
        .animation-delay-2500 {
          animation-delay: 2.5s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
};

export default FunHeroSection;
