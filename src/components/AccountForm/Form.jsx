import React from 'react';
import ACCOUNT_TYPE from './accountType';
import '../../styles/Account.scss';

const Form = ({ type }) => {
    const renderCreateForm = ACCOUNT_TYPE.CREATE === type;
    const renderName = () => {
        return (renderCreateForm ?
            <input className="input input-name" id="name" placeholder="Name" type="text" />
            : <p className="value">Pedro Capriles</p>
        );
    };

    const renderEmail = () => {
        return (renderCreateForm ?
            <input className="input input-email" id="email" placeholder="email@example.com" type="email" />
            : <p className="value">caprilespe@outlook.com</p>
        );
    };

    const renderPassword = () => {
        return (renderCreateForm ?
            <input className="input input-password" id="password" placeholder="********" type="password" />
            : <p className="value">**********</p>
        );
    };
    return (
        <div className="create-account-form">
            <div className="form-container">
                <h1 className="title">
                    My account
                </h1>
                <form action="/" className="form">
                    <div>
                        <label className="label" for="name">Name</label>
                        {renderName()}
                        <label className="label" for="email">Email address</label>
                        {renderEmail()}
                        <label className="label" for="password">Password</label>
                        {renderPassword()}
                    </div>
                    <div>
                        <button className={`${renderCreateForm ? "primary" : "secondary"}-button login-button`} type="submit">{renderCreateForm ? 'Create' : 'Edit'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;