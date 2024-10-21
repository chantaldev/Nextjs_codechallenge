"use client";
import React, { useState, useEffect, useRef } from 'react';
import { AddFormRoutes } from '../../../types';
import { useRouter } from 'next/navigation';
import { AddressContainer, P, InputWrapper, FormContainer } from '../../../components/styles_components';
import Button from '../../../components/Button';
import FormInput from '../../../utils/FormInput';
import FormSelect from '../../../utils/FormSelect';
import { companyTypes, states, statusOptions } from '../../../constants/staticOptions';
import { submitForm1 } from '../step-1/actions';
import focusFirstErrorInput from '../../../utils/focusUtils';
import { useFormContext } from '../../../context/formContext';
import { findCurrentStep } from '../../../utils/findCurrentStep'



export default function Form1() {
    const router = useRouter();

    const {
        newCompanyData,
        updateNewCompanyDetails,
        setCurrentStep,
        setStatus,
        setCompletedStepIndex,
        errors, setErrors,
        setSelectedType
    } = useFormContext();

    const [formData1, setFormData1] = useState({
        companyName: newCompanyData?.companyName || '',
        companyType: newCompanyData?.companyType || '',
        address1: newCompanyData?.address1 || '',
        address2: newCompanyData?.address2 || '',
        city: newCompanyData?.city || '',
        state: newCompanyData?.state || '',
        zip: newCompanyData?.zip || '',
    });

    const inputRefs = {
        companyName: useRef<HTMLInputElement | null>(null),
        companyType: useRef<HTMLSelectElement | null>(null),
        address1: useRef<HTMLInputElement | null>(null),
        address2: useRef<HTMLInputElement | null>(null),
        city: useRef<HTMLInputElement | null>(null),
        state: useRef<HTMLSelectElement | null>(null),
        zip: useRef<HTMLInputElement | null>(null),
    };


    useEffect(() => {
        const path = window.location.pathname; 
        const step = findCurrentStep(path);
        console.log("step 1>>", step);
        if (step) {
          setCurrentStep(step.route); 
        }
      }, [setCurrentStep]);

    useEffect(() => {
        setFormData1({
            companyName: newCompanyData?.companyName || '',
            companyType: newCompanyData?.companyType || '',
            address1: newCompanyData?.address1 || '',
            address2: newCompanyData?.address2 || '',
            city: newCompanyData?.city || '',
            state: newCompanyData?.state || '',
            zip: newCompanyData?.zip || '',
        });
    }, [newCompanyData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target;

        setFormData1(prevData => ({
            ...prevData,
            [id]: value,
        }));

        if (id === 'companyType' || id === 'state') {
            setSelectedType(value);
        }

        updateNewCompanyDetails({
            ...formData1,
            [id]: value,
        });

        if (value) {
            setStatus({ text: statusOptions[0].status, variant: statusOptions[0].variant });
        }
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await submitForm1({
            ...formData1,
            companyType: formData1.companyType,
            state: formData1.state,
        });

        if (result.success) {
            setCompletedStepIndex(0);
            router.push(AddFormRoutes.CONTACT_INFO);
            setErrors({
                companyName: '',
                companyType: '',
                address1: '',
                city: '',
                state: '',
                zip: '',
            });
        } else {
            setErrors(result.errors);
            focusFirstErrorInput(result.errors, inputRefs);
        }
    };

    return (
        <FormContainer>
            <P>Business Name</P>
            <FormInput
                placeholder="Registered business name"
                id="companyName"
                type="text"
                value={formData1.companyName}
                onChange={handleChange}
                hasError={!!errors.companyName}
                errorMsg={errors.companyName}
                ref={inputRefs.companyName} 
            />
 
            <P>Type</P>
            <FormSelect
                options={companyTypes}
                id="companyType"
                value={formData1.companyType}
                onChange={handleChange}
                title="Select Type of Business"
                hasError={!!errors.companyType}
                errorMsg={errors.companyType}
                ref={inputRefs.companyType} 
                label={''} 
            /> 

            <P>Address</P>
            <FormInput
                placeholder="Address Line 1"
                id="address1"
                type="text"
                value={formData1.address1}
                onChange={handleChange}
                hasError={!!errors.address1}
                errorMsg={errors.address1}
                aria-required="true"
                ref={inputRefs.address1} 
            />
            <FormInput
                placeholder="Address Line 2 (optional)"
                type="text"
                id="address2"
                value={formData1.address2}
                onChange={handleChange}
                aria-required="false"
                ref={inputRefs.address2} 
            />

            <FormInput
                placeholder="City"
                type="text"
                id="city"
                value={formData1.city}
                onChange={handleChange}
                hasError={!!errors.city}
                errorMsg={errors.city}
                aria-required="true"
                ref={inputRefs.city} 
            /> 

            <AddressContainer>
                <InputWrapper>
                    <FormSelect
                        options={states}
                        id="state"
                        value={formData1.state}
                        hasError={!!errors.state}
                        errorMsg={errors.state}
                        onChange={handleChange}
                        title="State"
                        ref={inputRefs.state} 
                        label={''} 
                    />
                </InputWrapper>

                <InputWrapper>
                    <FormInput
                        type="text"
                        id="zip"
                        value={formData1.zip}
                        onChange={handleChange}
                        placeholder="Zip Code"
                        hasError={!!errors.zip}
                        errorMsg={errors.zip}
                        aria-required="true"
                        ref={inputRefs.zip} 
                    />
                </InputWrapper>
            </AddressContainer> 
            <Button type="submit" onClick={handleSubmit}>
                Continue
            </Button>
        </FormContainer>
    );
}
