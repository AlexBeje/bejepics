import { Box, Center, Text, Title, TitleOrder } from '@mantine/core';
import { useState } from 'react';
import { heroSectionData } from './HeroSection.data';

export function HeroSection() {
  const [selectedStep, setSelectedStep] = useState(2);

  const getSelectedStepStyle = (stepId: number): string => {
    return (stepId !== selectedStep && 'text-white text-opacity-20') || '';
  };

  const getSelectedStepOrder = (
    stepId: number,
    type: string
  ): TitleOrder | undefined => {
    if (stepId === selectedStep) {
      if (type === 'title') {
        return 1;
      } else if (type === 'subtitle') {
        return 3;
      }
    } else {
      if (type === 'title') {
        return 2;
      } else if (type === 'subtitle') {
        return 4;
      }
    }
  };

  return (
    <Box className='backdrop-blur-[10px] flex flex-col justify-center flex-1 bg-black/60 shadow-black/80 shadow-2xl text-white p-6 sm:ml-auto sm:w-1/2 sm:max-w-[500px] md:mr-10 md:p-10 lg:mr-20 lg:p-20'>
      {heroSectionData.steps
        .filter((step) => step.id === selectedStep)
        .map((step) => (
          <Title order={1} className='mb-6'>
            {step.title}
          </Title>
        ))}

      <Box className='bg-black/80 flex mb-6 rounded-[4px] h-[120px]'>
        {heroSectionData.steps.map((step) => (
          <Center
            className='flex-1 flex-col m-4 text-center cursor-pointer'
            onClick={() => setSelectedStep(step.id)}
          >
            <Title
              order={getSelectedStepOrder(step.id, 'title')}
              className={`${getSelectedStepStyle(step.id)}`}
            >
              {'0' + step.id}
            </Title>
            <Title
              order={getSelectedStepOrder(step.id, 'subtitle')}
              className={`${getSelectedStepStyle(step.id)}`}
            >
              {step.title}
            </Title>
          </Center>
        ))}
      </Box>
      {heroSectionData.steps
        .filter((step) => step.id === selectedStep)
        .map((step) => (
          <Box className='w-full'>
            <Text
              component='p'
              dangerouslySetInnerHTML={{ __html: step.description }}
            />
          </Box>
        ))}
    </Box>
  );
}
