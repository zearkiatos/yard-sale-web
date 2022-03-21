import React, { Fragment } from "react";
import Header from "@components/Header";
import { CreateAccountForm } from "../../components/AccountForm";

const CreateAccount = () => {
  return (
    <Fragment>
      <Header />
      <CreateAccountForm />
    </Fragment>
  );
};

export default CreateAccount;
