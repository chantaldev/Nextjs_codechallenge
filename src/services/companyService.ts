interface Address {
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  zip?: string;
}

interface Contact {
  firstName?: string;
  lastName?: string;
  email?: string;
}

interface FormData {
  name?: string;
  address: Address;
  contact: Contact;
}

export const sendFormData = async (formData: FormData) => {
  try {
    const response = await fetch('https://ss-company.free.beeceptor.com/company', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.status === 'ok') {
      return { success: true, message: result.message };
    } else {
      return { success: false, message: result.message };
    }
  } catch {
    return { success: false, message: 'An unexpected error occurred. Please try again.' };
  }
};
