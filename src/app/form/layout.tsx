// app/form/layout.tsx

"use client"

import type { Metadata } from "next";
import Header from '../../components/Header'
import StepBar from '../../components/StepBar'
import { Flex, Section } from '../../components/styles_components'
import { FormProvider } from '../../context/formContext';
import StyledComponentsRegistry from '../../lib/registry';
// import Navigation from '../components/Navigation'; 
// import Aside from '../components/Aside'; 

// export const metadata: Metadata = {
//   title: "My Form Layout",
//   description: "This is the layout for my form.",
// };

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
