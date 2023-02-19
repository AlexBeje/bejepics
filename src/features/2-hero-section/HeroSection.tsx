import { BackgroundImage, Box, Center, Text, Title } from '@mantine/core';
import { useState } from 'react';
import { heroSectionData } from './HeroSection.data';

export function HeroSection() {
  const [selectedStep, setSelectedStep] = useState(2);

  const getSelectedStepStyle = (stepId: number): string => {
    return (stepId !== selectedStep && 'text-white text-opacity-20') || '';
  };

  return (
    <BackgroundImage
      src='/src/assets/photos/IMG_7032--edited.jpg'
      className='flex flex-1 mb-4 overflow-hidden sm:hidden'
    >
      <Box className='backdrop-blur-[10px] bg-black/30 mt-[300px] p-6 shadow-black shadow-xl text-white w-full'>
        <Title order={1} className='font-extralight mb-6 text-6xl'>
          {heroSectionData.title}
        </Title>
        <Box className='bg-black/30 flex mb-6 rounded-sm'>
          {heroSectionData.steps.map((step) => (
            <Center
              className='flex-1 flex-col p-4'
              onClick={() => setSelectedStep(step.id)}
            >
              <Title className={getSelectedStepStyle(step.id)}>
                0{step.id}
              </Title>
              <Text className={getSelectedStepStyle(step.id)}>
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
              <Text weight='bold' span>
                {step.state}
              </Text>
              <Text span>{` - ${step.description}`}</Text>
            </Box>
          ))}
      </Box>
    </BackgroundImage>
  );
}
