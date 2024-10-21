import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { newCompanyInitialValuesType, NewCompanyType } from '../schemas/schemas';
import { StatusTextProps } from '../components/Status';

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

type FormState = {
  newCompanyData: newCompanyInitialValuesType;
  currentStep: string;
  completedStepIndex: number;
  status: StatusTextProps;
  errors: FormErrors;
  selectedType: string;
  showConfirmation: boolean;
  apiMessage: string;
  loading: boolean;
  success: boolean;
  buttonText: string;
  hide: boolean;
  formCompleted: boolean;
  updateNewCompanyDetails: (companyDetails: Partial<NewCompanyType>) => void;
  setCurrentStep: (step: string) => void;
  setCompletedStepIndex: (index: number) => void;
  setStatus: (status: StatusTextProps) => void;
  setErrors: (errors: FormErrors) => void;
  setSelectedType: (type: string) => void;
  setShowConfirmation: (show: boolean) => void;
  setApiMessage: (message: string) => void;
  setLoading: (loading: boolean) => void;
  setSuccess: (success: boolean) => void;
  setButtonText: (text: string) => void;
  setHide: (hide: boolean) => void;
  setFormCompleted: (completed: boolean) => void;
  resetForm: () => void;
  resetLocalStorage: () => void; 
};

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      newCompanyData: defaultCompany,
      currentStep: 'step-1',
      completedStepIndex: -1,
      status: { text: '', variant: 'yellow' },
      errors: {},
      selectedType: '',
      showConfirmation: false,
      apiMessage: '',
      loading: false,
      success: false,
      buttonText: 'Confirm and Submit',
      hide: false,
      formCompleted: false,
      updateNewCompanyDetails: (companyDetails) =>
        set((state) => ({
          newCompanyData: { ...state.newCompanyData, ...companyDetails },
        })),
      setCurrentStep: (step) => set({ currentStep: step }),
      setCompletedStepIndex: (index) => set({ completedStepIndex: index }),
      setStatus: (status) => set({ status }),
      setErrors: (errors) => set({ errors }),
      setSelectedType: (type) => set({ selectedType: type }),
      setShowConfirmation: (show) => set({ showConfirmation: show }),
      setApiMessage: (message) => set({ apiMessage: message }),
      setLoading: (loading) => set({ loading }),
      setSuccess: (success) => set({ success }),
      setButtonText: (text) => set({ buttonText: text }),
      setHide: (hide) => set({ hide }),
      setFormCompleted: (completed) => set({ formCompleted: completed }),
      resetForm: () => set({ newCompanyData: defaultCompany }),
      resetLocalStorage: () => {
        set({ newCompanyData: defaultCompany });
        localStorage.removeItem('form-storage');
      }, // Add this function
    }),
    {
      name: 'form-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ newCompanyData: state.newCompanyData }),
    }
  )
);