"use client";

import DynamicForm from "@/components/ui/DynamicForm";
import { contact_data } from "@/constant/content_static_data";
import React, { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSaveChanges = useCallback(
    async (formData: any, setFormStateCallback: () => void) => {
      try {
        setLoading(true);

        const apiEndpoint = "/api/contact";

        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          toast.success(data.message);
          setFormStateCallback();
        } else {
          const data = await response.json();
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return (
    <DynamicForm
      fields={contact_data.contact_form}
      loading={loading}
      onSubmit={handleSaveChanges}
    />
  );
};

export default ContactForm;
