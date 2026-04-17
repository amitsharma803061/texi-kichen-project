import React, { use, useState } from 'react';
import Orders from './Orders';
import OrderCard from './Card/OrderCard';
import CookingCard from './Card/CookingCard';
import ServeCard from './Card/ServeCard';
import { toast } from 'react-toastify';

const OrdersJson = ({ promise }) => {
    const data = use(promise);
    // console.log(orders);
    const [orders, setOrders] = useState(data)


    const [cookingItems, setCookingItems] = useState([]);
    const [readyItems, setReadyItems] = useState([]);

    const handleOrder = (order) => {
        toast.success("Order called")

        const isExist = cookingItems.find((item) => item.id == order.id);
        if (isExist) {
            alert("All ready cooking!!");
            return;
        }

        const newCookingItems = [...cookingItems, order];
        setCookingItems(newCookingItems)
    };

    const handleCooking = (order) => {
        order.cookedAt = new Date().toLocaleTimeString();

        // readyItems ar vitore order k dhukabo
        const newReadyItems = [...readyItems, order];
        setReadyItems(newReadyItems);

        // cooking items er vitor theke order ta k remove korbo
        const remaining = cookingItems.filter((item) => item.id !== order.id);
        setCookingItems(remaining);

        const remainingOrders = orders.filter((item) => item.id !== order.id);
        setOrders(remainingOrders);

    };



    return (
        <div>
            <Orders readyTotal={readyItems.length} cookingTotal={cookingItems.length} orderTotal={orders.length}></Orders>

            <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div className="col-span-7 lg:col-span-7">
                    <h2 className="font-bold text-4xl">Current Orders</h2>
                    <div className="space-y-5">
                        {
                            orders.map((order) => (<OrderCard handleOrder={handleOrder} key={order.id} order={order}></OrderCard>))
                        }
                    </div>
                </div>
                <div className="lg:col-span-5 space-y-5">
                    <h2 className="font-bold text-4xl">Currently Cooking</h2>
                    <div className="shadow p-10 space-y-5">
                        {
                            cookingItems.map((order) => (<CookingCard handleCooking={handleCooking} key={order.id} order={order}></CookingCard>))
                        }
                    </div>

                    <h2 className="font-bold text-4xl">Ready to Serve</h2>
                    <div className="shadow p-10 space-y-5">
                        {
                            readyItems.map((order) => (<ServeCard key={order.id} order={order}></ServeCard>))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrdersJson;