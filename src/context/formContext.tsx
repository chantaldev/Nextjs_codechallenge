"use client";

import React, { useCallback, useEffect, createContext, useContext, useState, ReactNode } from 'react';
import {
  newDealInitialValuesSchema,
  newCompanyInitialValuesType,
  NewCompanyType
} from '../schemas/schemas'
import  StatusTextProps  from '../components/Status'



const defaultCompany: newCompanyInitialValuesType = {
  companyName: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

type FormErrors = {
  firstName?: string; 
  lastName?: string;  
  email?: string;     
  phone?: string;     
  companyName?: string; 
  companyType?: string;
  address1?: string; 
  city?: string; 
  state?: string;
  zip?: string; 
};


const LOCAL_STORAGE_KEY = 'hola';


type AddCompanyContextType = {
  newCompanyData: newCompanyInitialValuesType;
  updateNewCompanyDetails: (companyDetails: Partial<NewCompanyType>) => void;
  dataLoaded: boolean;
  resetLocalStorage: () => void;
  setStepCompleted: (stepName: string) => void;
  currentStep: string;
  setCurrentStep: (step: string) => void;
  setCompletedStepIndex: (index: number) => void; 
  completedStepIndex: number;
  status: StatusTextProps,
  setStatus: React.Dispatch<React.SetStateAction<StatusTextProps>>;
  errors: FormErrors; 
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  selectedType: string; 
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
  showConfirmation: boolean;
  setShowConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  apiMessage: string;
  setApiMessage: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  buttonText: string;
  setButtonText: React.Dispatch<React.SetStateAction<string>>;

  hide: boolean; 
  setHide: React.Dispatch<React.SetStateAction<boolean>>; 
  formCompleted: boolean;
  setFormCompleted: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormContext = createContext<AddCompanyContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState('step-1');
  const [newFormData, setNewFormData] = useState<newCompanyInitialValuesType>(defaultCompany);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [completedStepIndex, setCompletedStepIndex] = useState(-1);
  const [status, setStatus] = useState<StatusTextProps>({ text: '', variant: 'yellow' });

  const [hide, setHide] = useState(false)
  const [formCompleted, setFormCompleted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
    const [selectedType, setSelectedType] = useState(''); 


const [showConfirmation, setShowConfirmation] = useState(false);
const [apiMessage, setApiMessage] = useState('');
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [buttonText, setButtonText] = useState("Confirm and Submit");

  useEffect(() => {
    readFromLocalStorage();
    setDataLoaded(true);
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      saveDataToLocalStorage(newFormData);
    }
  }, [newFormData, dataLoaded]);

  const updateNewCompanyDetails = useCallback(
    (companyDetails: Partial<NewCompanyType>) => {
      setNewFormData({ ...newFormData, ...companyDetails });
    },
    [newFormData]
  );

  const saveDataToLocalStorage = (
    currentCompanyData: newCompanyInitialValuesType,

  ) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentCompanyData));
  };

  const readFromLocalStorage = () => {
    const loadedDataString = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!loadedDataString) return setNewFormData(defaultCompany);
    const validated = newDealInitialValuesSchema.safeParse(
      JSON.parse(loadedDataString)
    );

    if (validated.success) {
      setNewFormData(validated.data);
    } else {
      setNewFormData(defaultCompany);
    }


  };

  const resetLocalStorage = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setNewFormData(defaultCompany);

  };


  return (
    <FormContext.Provider value={{
      newCompanyData: newFormData,
      updateNewCompanyDetails,
      dataLoaded,
      resetLocalStorage,
      currentStep, setCurrentStep,
      completedStepIndex, setCompletedStepIndex,
      status, setStatus,
      hide, setHide,
      formCompleted, setFormCompleted,
      errors,
      setErrors,
      selectedType, 
      setSelectedType,
      showConfirmation,
      setShowConfirmation,
      apiMessage,
      setApiMessage,
      loading,
      setLoading,
      success,
      setSuccess,
      buttonText,
      setButtonText,
    }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

