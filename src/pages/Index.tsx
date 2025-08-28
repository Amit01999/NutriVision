import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSolution from '@/components/ProblemSolution';
import ProductHighlights from '@/components/ProductHighlights';
import TargetMarket from '@/components/TargetMarket';
import BusinessModel from '@/components/BusinessModel';
import Competition from '@/components/Competition';
import FinancialsSnapshot from '@/components/FinancialsSnapshot';
import VisionExpansion from '@/components/VisionExpansion';
import TeamSection from '@/components/TeamSection';
import PlaceOrder from '@/components/PlaceOrder';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-bg-gradient font-body overflow-y-hidden">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <ProductHighlights />
      <TargetMarket />
      <BusinessModel />
      <Competition />
      <FinancialsSnapshot />
      <VisionExpansion />
      <TeamSection />
      <PlaceOrder />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
