import Nav from './components/nav/Nav.jsx';
import Hero from './components/sections/Hero.jsx';
import PopularProducts from './components/sections/PopularProducts.jsx';
import SuperQuality from './components/sections/SuperQuality.jsx';
import Services from './components/sections/Services.jsx';
import SpecialOffers from './components/sections/SpecialOffers.jsx';
import CustomerReviews from './components/sections/CustomerReviews.jsx';
import Subscribe from './components/sections/Subscribe.jsx';
import Footer from './components/sections/Footer.jsx';

const App = () => (
  <main className='relative'>
    <Nav />
    <section className='xl:padding-1 wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <PopularProducts />
    </section>
    <section className='padding'>
      <SuperQuality />
    </section>
    <section className='padding-x py-10'>
      <Services />
    </section>
    <section className='padding'>
      <SpecialOffers />
    </section>
    <section className='bg-pale-blue padding'>
      <CustomerReviews />
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe />
    </section>
    <section className='bg-black padding-x padding-t pb-8'>
      <Footer />
    </section>
  </main>
);

export default App;
