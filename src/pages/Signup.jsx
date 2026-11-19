import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignup from "../components/Fragments/FormSignup";

function Signup() {
  return (
    <AuthLayout>
      <FormSignup />
    </AuthLayout>
  );
}

export default Signup;