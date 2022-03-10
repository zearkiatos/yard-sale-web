import React, { Fragment } from "react";
import Header from "../../components/Header";
import { EditAccountForm } from "../../components/AccountForm";

const EditAccount = () => {
  return (
    <Fragment>
      <Header />
      <EditAccountForm />
    </Fragment>
  );
};

export default EditAccount;