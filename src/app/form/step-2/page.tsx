"use client";

import React, { useEffect, useState, useCallback } from 'react';
import 'react-international-phone/style.css';

import { FormContainer, AddressContainer, P, InputWrapper, Container } from '../../../components/styles_components'
import Button from '../../../components/Button';
import { submitForm2 } from '../step-2/actions';
import FormInput from '../../../utils/FormInput';
import FormSelect from '../../../utils/FormSelect';
import { AddFormRoutes } from '../../../types';
import { useRouter } from 'next/navigation';
import { useFormContext } from '../../../context/formContext';
import { PhoneInput } from 'react-international-phone';
import { statusOptions } from '../../../constants/staticOptions'
import StyledParagraph from '@/components/StyleP';


const Form2 = () => {
    const router = useRouter();
    const { newCompanyData, updateNewCompanyDetails,
        setCurrentStep, setCompletedStepIndex, setStatus, errors, setErrors } = useFormContext();

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


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await submitForm2(formData2);

        if (result.success) {
            setCurrentStep('step-2');
            setCompletedStepIndex(1)
            setErrors({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            });
            router.push(AddFormRoutes.REVIEW_SUBMIT);
        } else {
            setErrors(result.errors);

        }
    };


    useEffect(() => {
        const countrySelector = document.querySelector('.react-international-phone-country-selector-button');

        if (errors.phone) {
            countrySelector?.setAttribute('style', 'border-right: none');
            countrySelector?.setAttribute('style', 'border: 1px solid red');
        } else {
            countrySelector?.setAttribute('style', 'border: 1px solid gainsboro');

        }
    }, [errors.phone]);


    return (

        <Container>
            <FormContainer onSubmit={handleSubmit}>

                <StyledParagraph text='Name' />

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
                    />
                    </InputWrapper>

                    
                </AddressContainer>

                <StyledParagraph text='Email' />
                <FormInput
                    placeholder='Email address'
                    type="email"
                    id="email"
                    value={formData2.email}
                    onChange={handleChange}
                    hasError={!!errors.email}
                    errorMsg={errors.email}
                />

                <label
                    htmlFor="phone_number"
                    style={{
                        margin: '18px 5px 16px 5px',
                    }}>
                    Phone
                </label>


                <div className={`phone-input-container ${errors.phone ? 'error' : ''}`}>
                    <PhoneInput
                        placeholder="Enter phone number"
                        id="phone"
                        value={formData2.phone}
                        defaultCountry="cr"
                        onChange={handlePhoneChange}
                        inputStyle={{
                            border: errors.phone ? '1px solid red' : '1px solid gainsboro',
                            height: '36px',
                            outline: 'none',
                            boxShadow: 'none',
                            width: '100%',
                        }}
                    />
                </div>

                {errors.phone && <p style={{ color: 'red', fontSize: '14px', margin: '5px 0', marginBottom: '20px', marginTop: '10px' }}>{errors.phone}</p>}

                <Button type="submit">Continue</Button>

            </FormContainer>
        </Container>
    );
};

export default Form2;


