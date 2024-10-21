

"use client"

import Header from '../../components/Header'
import StepBar from '../../components/StepBar'
import { Flex, Section } from '../../components/styles_components'
import { FormProvider } from '../../context/formContext';
import StyledComponentsRegistry from '../../lib/registry';


export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <FormProvider>
        <Header />
        <Flex>
          <nav style={{ marginRight: '20px' }}>
            <StepBar />
          </nav>
          <Section>
            {children}
          </Section>
        </Flex>
      </FormProvider>
    </StyledComponentsRegistry>
  );
}
