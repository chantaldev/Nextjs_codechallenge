export const sendFormData = async (formData: { name: string | undefined; type: any; address: { line1: string | undefined; line2: string | undefined; city: string | undefined; state: string | undefined; zip: string | undefined; }; contact: { firstName: string | undefined; lastName: string | undefined; email: string | undefined; }; }) => {

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
    } catch (error) {

      return { success: false, message: 'An unexpected error occurred. Please try again.' };
    }
  };
  