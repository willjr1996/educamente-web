import {
    Input as ChakraInput,
    FormLabel,
    FormControl,
    InputProps as ChakraInputProps,
    FormErrorMessage,
  } from '@chakra-ui/react'
  import { forwardRef, ForwardRefRenderFunction } from 'react'
  import { FieldError } from 'react-hook-form'

export interface InputProps extends ChakraInputProps {
    name:string
    label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, label, ...rest },
    ref,
  ) => {

    return (
      <FormControl>
        {!!label && (
          <FormLabel htmlFor={name}>
            {label}
          </FormLabel>
        )}
        <ChakraInput
          name={name}
          id={name}
          variant="filled"
          size="lg"
          _hover={{ 
            background: "transparent"
           }}
          ref={ref}
          {...rest}
        />
      </FormControl>
    )
  }
  
  export const Input = forwardRef(InputBase)

  //Baseado no OrganiConecta