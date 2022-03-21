import React, { Fragment } from 'react';
import Login from '@containers/Login';
import Header from '@components/Header';
const LoginPage = () => {
    return (
        <Fragment>
            <Header />
            <Login />
        </Fragment>
    )
};

export default LoginPage;