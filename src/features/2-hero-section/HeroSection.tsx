import { Box, Center, Text, Title } from '@mantine/core';
import { useState } from 'react';
import { heroSectionData } from './HeroSection.data';

export function HeroSection() {
  const imageUrl = new URL('./images/image1.jpg', import.meta.url).href;

  const [selectedStep, setSelectedStep] = useState(2);

  const getSelectedStepStyle = (stepId: number): string => {
    return (stepId !== selectedStep && 'text-white text-opacity-20') || '';
  };

  return (
    <Box
      style={{ backgroundImage: `url(${imageUrl})` }}
      className='flex flex-1 mb-4 overflow-hidden bg-left-top bg-cover'
    >
      <Box className='backdrop-blur-[10px] bg-black/40 mt-[280px] p-6 shadow-black shadow-xl text-white sm:flex sm:flex-col sm:justify-center sm:ml-auto sm:mt-0 sm:w-1/2'>
        <Title order={1} className='mb-6'>
          {heroSectionData.title}
        </Title>
        <Box className='bg-black/60 flex mb-6 rounded-sm'>
          {heroSectionData.steps.map((step) => (
            <Center
              className='flex-1 flex-col p-4 text-center'
              onClick={() => setSelectedStep(step.id)}
            >
              <Title
                className={`cursor-pointer ${getSelectedStepStyle(step.id)}`}
              >
                {'0' + step.id}
              </Title>
              <Text
                className={`cursor-pointer ${getSelectedStepStyle(step.id)}`}
              >
                {step.title}
              </Text>
            </Center>
          ))}
        </Box>
        {heroSectionData.steps
          .filter((step) => step.id === selectedStep)
          .map((step) => (
            <Box className='w-full'>
              <Title>{step.title}</Title>
              <Text
                span
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
}
