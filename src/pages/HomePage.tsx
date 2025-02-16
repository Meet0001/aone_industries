import React from 'react';
import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Features } from '../components/Features';
import { Testimonial } from '../components/home/Testimonial';

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProducts />
      <Features />
      <Testimonial />
    </>
  );
}