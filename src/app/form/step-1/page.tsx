"use client";
import React, { useState, useEffect } from 'react';
import { AddFormRoutes } from '../../../types';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import type { Metadata } from "next";
import { Input, Select, AddressContainer, P, InputWrapper } from '../../../components/styles_components'
import Button from '../../../components/Button';
import FormInput from '../../../utils/FormInput';
import FormSelect from '../../../utils/FormSelect';
import { companyTypes, states, statusOptions } from '../../../constants/staticOptions'
import { submitForm1 } from '../step-1/actions';


import { useFormContext } from '../../../context/formContext';




// export const metadata: Metadata = {
//   title: "Step 1",
//   description: "This is step 1 of the process.",
// };


export const FormContainer = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 25px;
  max-width: 100%;
  margin-right: 15px;
`


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

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    //     const { id, value } = e.target;

    //     setFormData1(prevData => ({
    //         ...prevData,
    //         [id]: value,
    //     }));

    //     if (id === 'companyType' || id === 'state') {
    //         setSelectedType(value);
    //     }

    //     updateNewCompanyDetails({
    //         ...formData1,
    //         [id]: value,
    //     });

    //     if (value) {
    //         setStatus({ text: statusOptions[0].status, variant: statusOptions[0].variant });
    //     }

    //     return newData;
    // };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await submitForm1({
            ...formData1,
            companyType: formData1.companyType,
            state: formData1.state,
        });

        if (result.success) {

            setCurrentStep('step-1');
            setCompletedStepIndex(0)
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
        }
    };

    return (
        <FormContainer>
            <P >Business Name</P>
            <FormInput
                placeholder="Registered business name"

                id="companyName"
                type="text"
                value={formData1.companyName}
                onChange={handleChange}
                hasError={!!errors.companyName}
                errorMsg={errors.companyName}
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
                label={''} /> 

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
            />
            <FormInput
                placeholder="Address Line 2 (optional)"
                type="text"
                id="address2"
                value={formData1.address2}
                onChange={handleChange}
                aria-required="false"
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
                        title="State" label={''} />
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
                    />
                </InputWrapper>
            </AddressContainer> 
            <Button type="submit" onClick={handleSubmit}>
                Continue
            </Button>
        </FormContainer>

    );
}
