'use server';

import { nameSchema } from '../../../schemas/schemas';
import { z } from 'zod';

export interface FormErrors {
    companyName: string; 
    companyType: string; 
    address1: string; 
    city: string; 
    state: string; 
    zip: string; 
}

export async function submitForm1(formData: z.infer<typeof nameSchema>) {
    const validation = nameSchema.safeParse(formData);

    if (!validation.success) {
        const formErrors = validation.error.flatten().fieldErrors;

        const errors: FormErrors = {
            companyName: formErrors.companyName?.[0] || '', 
            companyType: formErrors.companyType?.[0] || '',
            address1: formErrors.address1?.[0] || '',
            city: formErrors.city?.[0] || '',
            state: formErrors.state?.[0] || '',
            zip: formErrors.zip?.[0] || '',
        };

        return { success: false, errors };
    }

    return { success: true };
}

