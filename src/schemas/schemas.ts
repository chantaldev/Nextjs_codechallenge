import { z } from 'zod';

export const nameSchema = z.object({
    companyName: z
        .string()
        .min(1, { message: 'Business Name is required' }),

        companyType: z
        .string()
        .min(3, { message: 'Company type is required' }),

    address1: z
        .string()
        .min(1, { message: 'Address Line 1 is required' }),

    city: z
        .string()
        .min(1, { message: 'City is required' }),

    state: z
        .string()
        .min(2, { message: 'State is required' }),

        zip: z
        .string()
        .length(5, { message: 'Zip must be exactly 5 digits' }) 
        .regex(/^\d{5}$/, { message: 'Zip must be numeric and 5 digits long' })
});

export const form2Schema = z.object({
    firstName: z
        .string()
        .min(1, { message: 'First Name is required' }),
    lastName: z
        .string()
        .min(1, { message: 'Last Name is required' }),
    email: z
        .string()
        .email({ message: 'Make sure your email is a well formed address' }),
    phone: z
        .string()
        .regex(/^[0-9]{10}$/, { message: 'Phone Number must have 10 digits' }) 
});

export const newCompanySchema = z.object({
    ...nameSchema.shape,
    ...form2Schema.shape,
});

export const newDealInitialValuesSchema = z.object({
    companyName: z.string().optional(),
    companyType: z.string().optional(),
    address1: z.string().optional(),
    address2: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
});


export type NewCompanyType = z.infer<typeof newCompanySchema>;
export type newCompanyInitialValuesType = z.infer<
    typeof newDealInitialValuesSchema
>;

export type NameFormType = z.infer<typeof nameSchema>;