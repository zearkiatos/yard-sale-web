import React, { Fragment } from 'react';
import Header from '../../components/Header';
import OrderList from '../../containers/OrderList';

const MyOrders = () => {
    return (
        <Fragment>
            <Header />
            <OrderList />
        </Fragment>
    )
};

export default MyOrders;