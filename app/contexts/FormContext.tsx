import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';


type FormState = {
  name: string;
  gender: string;
  children: string[];
 
};


type FormContextType = {
  formState: FormState;
  updateField: (field: keyof FormState, value: string) => void;
};


const FormContext = createContext<FormContextType | undefined>(undefined);

// Custom hook to use the context
export const useForm = (): FormContextType => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};

export const FormProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    gender: '',
    children: [],
   
  });

  const updateField = (field: keyof FormState, value: string): void => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ formState, updateField }}>
      {children}
    </FormContext.Provider>
  );
};
