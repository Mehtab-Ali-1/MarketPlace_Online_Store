import HeroSection from '@/components/heroSection';
import React from 'react'
import NewArrivals from './new-arrival/page';
import DressStyle from '@/components/dressStyle';
// import ProductsList from './top-selling/page';
import HappyCustomers from '@/components/ourClients';
import New_Arrival from './new-arrival/page';
import Top_sell from './top-sell/page';

const Mainpage = () => {
  return (
    <main>

      <div>
        {/* components/heroSection.tsx */}
        <HeroSection/>
      </div>

      <div>
        {/* app/new-arrivals */}
        {/* components/new-arrival/page */}
        <New_Arrival/>
      </div>

        {/* app/top-sell */}
        {/* components/.tsx */}
        <Top_sell/>
      <div>
        {/* <ProductsList/> */}
      </div>

        {/* components/dressStyle.tsx */}
      <div>
        <DressStyle/>
      </div>

      {/* components/ourClients.tsx */}
      <div>
        <HappyCustomers/>
      </div>

    </main>
  )
}

export default Mainpage;