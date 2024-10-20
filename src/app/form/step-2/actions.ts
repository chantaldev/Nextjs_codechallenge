'use server';
import { z } from 'zod';

import { form2Schema } from '../../../schemas/form2Schema'; 

export async function submitForm2(formData: z.infer<typeof form2Schema>) {
    
    const validation = form2Schema.safeParse(formData);

    if (!validation.success) {
        const formErrors = validation.error.flatten().fieldErrors;
        const errors = {
            firstName: formErrors.firstName?.[0],
            lastName: formErrors.lastName?.[0],
            email: formErrors.email?.[0],
            phone: formErrors.phone?.[0],
        };
        return { success: false, errors };
    }

    return { success: true };
}
