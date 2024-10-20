import { z } from 'zod';

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
        .regex(/^\+?\d{1,3}\s?\d{4}\s?\d{6}$/, { message: 'Phone Number must be in the format +[country code] and [8 digits minum]' }) 

    });

export type Form2Type = z.infer<typeof form2Schema>;
