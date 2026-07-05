import React from "react";
import { Hero } from "../../Components";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
