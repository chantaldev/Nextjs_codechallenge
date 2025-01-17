"use client";

import 'react-international-phone/style.css';
import '../../page.module.css';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { FormContainer, AddressContainer, InputWrapper, Container, P } from '../../../components/styles_components';
import Button from '../../../components/Button';
import { submitForm2 } from '../step-2/actions';
import FormInput from '../../../utils/FormInput';
import { AddFormRoutes, FormErrors } from '../../../types';
import { useRouter } from 'next/navigation';
import { useFormStore } from '../../../context/formContext';
import CustomPhoneInput from '../../../utils/CustomPhoneInput';
import { statusOptions } from '../../../constants/staticOptions';
import focusFirstErrorInput from '../../../utils/focusUtils';
import { findCurrentStep } from '../../../utils/findCurrentStep'

const Form2 = () => {
    const router = useRouter();
    const { newCompanyData, updateNewCompanyDetails,
        setCurrentStep, setCompletedStepIndex, setStatus, errors, setErrors } = useFormStore();

    const [formData2, setFormData2] = useState({
        firstName: newCompanyData?.firstName || '',
        lastName: newCompanyData?.lastName || '',
        email: newCompanyData?.email || '',
        phone: newCompanyData?.phone || '',
    });

    useEffect(() => {
        setFormData2({
            firstName: newCompanyData?.firstName || '',
            lastName: newCompanyData?.lastName || '',
            email: newCompanyData?.email || '',
            phone: newCompanyData?.phone || '',
        });
    }, [newCompanyData]);

    const inputRefs = {
        firstName: useRef<HTMLInputElement | null>(null),
        lastName: useRef<HTMLInputElement | null>(null),
        email: useRef<HTMLInputElement | null>(null),
        phone: useRef<HTMLInputElement | null>(null),
    };


    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        setFormData2(prevData => ({
            ...prevData,
            [id]: value,
        }));

        updateNewCompanyDetails({
            ...formData2,
            [id]: value,
        });

        if (value) {
            setStatus({ text: statusOptions[0].status, variant: statusOptions[0].variant });
        }
    }, [updateNewCompanyDetails, setStatus, formData2]);

    const handlePhoneChange = async (value: string) => {
        try {
            setFormData2(prevData => {
                const newData = {
                    ...prevData,
                    phone: value,
                };
                return newData;
            });

            await updateNewCompanyDetails({
                ...formData2,
                phone: value,
            });

        } catch (error) {
            console.error('Error al actualizar el número de teléfono:', error);
        }
    };

    useEffect(() => {
        const path = window.location.pathname;
        const step = findCurrentStep(path);
        console.log("step 2>>", step);
        if (step) {
            setCurrentStep(step.route);
        }
    }, [setCurrentStep]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await submitForm2(formData2);
        const newErrors: FormErrors = result.errors || {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        }

        if (result.success) {
            setCompletedStepIndex(1);
            setErrors(newErrors);
            router.push(AddFormRoutes.REVIEW_SUBMIT);
        } else {
            ;
            setErrors(newErrors);
            focusFirstErrorInput({ ...newErrors }, inputRefs)
        };
    };

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <P>Name</P>
                <AddressContainer>
                    <InputWrapper>
                        <FormInput
                            placeholder='First Name'
                            type="text"
                            id="firstName"
                            value={formData2.firstName}
                            onChange={handleChange}
                            hasError={!!errors.firstName}
                            errorMsg={errors.firstName}
                            ref={inputRefs.firstName}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <FormInput
                            type="text"
                            placeholder='Last Name'
                            id="lastName"
                            value={formData2.lastName}
                            onChange={handleChange}
                            hasError={!!errors.lastName}
                            errorMsg={errors.lastName}
                            ref={inputRefs.lastName}
                        />
                    </InputWrapper>
                </AddressContainer>

                <P>Email</P>
                <FormInput
                    placeholder='Email address'
                    type="email"
                    id="email"
                    value={formData2.email}
                    onChange={handleChange}
                    hasError={!!errors.email}
                    errorMsg={errors.email}
                    ref={inputRefs.email}
                />

                <P>Phone</P>

                <div style={{ marginTop: '5px'}}>
                    <CustomPhoneInput
                        placeholder="Enter phone number"
                        id="phone"
                        value={formData2.phone}
                        defaultCountry="cr"
                        onChange={handlePhoneChange}
                        inputStyle={{
                            border: errors.phone ? '1px solid red' : '1px solid gainsboro',
                            outline: 'none',
                            boxShadow: 'none',
                            width: '83%',
                            height: '22px',
                        }}
                        ref={inputRefs.phone}
                        countrySelectorStyleProps={{
                            buttonStyle: {
                              border: errors.phone ? '1px solid red' : '1px solid gainsboro',
                              height: 22, 
                              padding: '0 px',  
                              borderRight: errors?.phone ? "white" : 'none', 
                            },
                            flagStyle: {
                              height: 17,
                              marginRight: '5px',  
                            },
                          }}
                    />

                </div>

                {errors.phone && <p style={{ color: 'red', fontSize: '12px', margin: '5px 0', marginBottom: '20px', marginTop: '10px' }}>{errors.phone}</p>}

                <Button type="submit">Continue</Button>
            </FormContainer>
        </Container>
    );
};

export default Form2;
