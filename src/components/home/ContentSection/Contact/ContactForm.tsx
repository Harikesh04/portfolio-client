"use client";

import DynamicForm from "@/components/ui/DynamicForm";
import { contact_data } from "@/constant/content_static_data";
import React, { useCallback } from "react";

const ContactForm = () => {
  const handleSaveChanges = useCallback((formData: any) => {
    console.log(formData);
  }, []);
  return (
    <DynamicForm
      fields={contact_data.contact_form}
      onSubmit={handleSaveChanges}
    />
  );
};

export default ContactForm;
