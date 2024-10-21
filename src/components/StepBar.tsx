"use client";

import React from 'react';
import Link from 'next/link';
import { HorizontalBar, StepContainer, StepNumber, StepsStyle, BarandSteps } from '../components/styles_components';
import { useFormStore } from '../context/formContext';
import { AddFormRoutes } from '@/types';
import { MdCheck } from 'react-icons/md';

const steps = [
  {
    title: 'Business Structure',
    route: 'step-1',
    link: AddFormRoutes.BUSINESS_STRUCTURE,
  },
  {
    title: 'Contact Person',
    route: 'step-2',
    link: AddFormRoutes.CONTACT_INFO,
  },
  {
    title: 'Review & Submit',
    route: 'step-3',
    link: AddFormRoutes.REVIEW_SUBMIT,
  },
];

export default function StepBar() {
  const { currentStep, formCompleted } = useFormStore(); 


  const isStepCompleted = (completedStepIndex: number) => {
    const currentStepIndex = steps.findIndex((step) => step.route === currentStep);
    return currentStepIndex > completedStepIndex || (completedStepIndex === 2 && formCompleted); 
  };

  return (
    <BarandSteps>
      <HorizontalBar>
        {steps.map((step, index) => {
          const isBlocked = formCompleted || !isStepCompleted(index) && currentStep !== step.route;

          return (
            <StepContainer key={index}>
              {!isBlocked ? (
                <Link href={step.link} passHref>
                  <StepNumber
                    $isActive={currentStep === step.route} 
                    style={{
                      backgroundColor: 
                        isStepCompleted(index) ? 'rgba(74, 222, 128, 1)' : 
                        currentStep === step.route ? 'blue' : 
                        'white',
                      color: 
                        currentStep === step.route ? 'white' : 
                        isStepCompleted(index) ? 'white' : 
                        'black',
                    }}
                  >
                    {isStepCompleted(index) ? ( 
                      <MdCheck style={{ fontSize: '1.2em' }} />
                    ) : (
                      index + 1
                    )}
                  </StepNumber>
                </Link>
              ) : (
                <StepNumber
                  $isActive={currentStep === step.route}
                  style={{
                    backgroundColor: 
                      isStepCompleted(index) ? 'rgba(74, 222, 128, 1)' : 
                      currentStep === step.route ? 'blue' : 
                      'white',
                    color: 
                      currentStep === step.route ? 'white' : 
                      isStepCompleted(index) ? 'white' : 
                      'black',
                    cursor: 'not-allowed',
                  }}
                >
                  {isStepCompleted(index) ? ( 
                    <MdCheck style={{ fontSize: '1.2em' }} />
                  ) : (
                    index + 1
                  )}
                </StepNumber>
              )}
            </StepContainer>
          );
        })}
      </HorizontalBar>

      <StepsStyle>
        {steps.map((step, index) => (
          <p key={index}>{step.title}</p>
        ))}
      </StepsStyle>
    </BarandSteps>
  );
}