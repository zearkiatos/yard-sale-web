import React from 'react';
import Form from './Form';
import ACCOUNT_TYPE from './accountType';
const CreateAccountForm = () => <Form type={ACCOUNT_TYPE.CREATE} />;
const EditAccountForm = () => <Form type={ACCOUNT_TYPE.EDIT} />;

export {
    CreateAccountForm,
    EditAccountForm
}