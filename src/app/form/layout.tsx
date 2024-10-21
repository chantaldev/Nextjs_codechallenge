"use client"

import Header from '../../components/Header'
import StepBar from '../../components/StepBar'
import { Flex, Section } from '../../components/styles_components'
import StyledComponentsRegistry from '../../lib/registry';

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <Header />
      <Flex>
        <nav style={{ marginRight: '20px' }}>
          <StepBar />
        </nav>
        <Section>
          {children}
        </Section>
      </Flex>
    </StyledComponentsRegistry>
  );
}