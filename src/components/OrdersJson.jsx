import React, { use } from 'react';
import Orders from './Orders';
import OrderCard from './Card/OrderCard';

const OrdersJson = ({promise}) => {
    const orders = use(promise);
    console.log(orders);
    return (
        <div>
            <Orders></Orders>

            <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div className="col-span-7 lg:col-span-7">
                    <h2 className="font-bold text-4xl">Current Orders</h2>
                    <div className="space-y-5">
                        {
                            orders.map((item) => ( <OrderCard key={item.id} order={item}></OrderCard> ))
                        }
                    </div>
                </div>
                <div className="lg:col-span-5">
                    <h2 className="font-bold text-4xl">Cooking + Ready to serve</h2>
                </div>
            </section>
        </div>
    );
};

export default OrdersJson;