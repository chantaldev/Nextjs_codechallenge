export interface FormErrors {
    [key: string]: string | undefined;
  }
  
  export enum AddFormRoutes {
    BUSINESS_STRUCTURE = '/form/step-1',
    CONTACT_INFO = '/form/step-2',
    REVIEW_SUBMIT = '/form/step-3',
  }



