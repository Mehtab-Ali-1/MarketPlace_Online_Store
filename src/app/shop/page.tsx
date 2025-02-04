import React from 'react'
import Products from '../new-arrival/page';
// import ProductsList from '../top-selling/page';
import HappyCustomers from '@/components/ourClients';

const Shop = () => (
    <main>
        <div>
            <Products />
        </div>
        <div>
            {/* <ProductsList /> */}
        </div>
        <div>
            <HappyCustomers/>
        </div>


    </main>
)

export default Shop;