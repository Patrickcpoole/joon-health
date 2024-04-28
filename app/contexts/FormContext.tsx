import React, { createContext, useState, useContext, ReactNode } from 'react';

type FormState = {
	name: string;
	gender: string;
	children: string[];
	email: string;
	password: string;
};

type UpdateFieldFunction = (
	field: keyof FormState,
	value: string | string[]
) => void;

type FormContextType = {
	formState: FormState;
	updateField: UpdateFieldFunction;
	resetForm: () => void;
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

export const FormProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const initialState = {
		name: '',
		gender: '',
		children: [],
		email: '',
		password: '',
	};

	const [formState, setFormState] = useState<FormState>(initialState);

	const updateField: UpdateFieldFunction = (field, value) => {
		setFormState((prev) => {
			const newValue =
				typeof value === 'string' || Array.isArray(value) ? value : prev[field];
			return { ...prev, [field]: newValue };
		});
	};

	const resetForm = () => {
		setFormState(initialState);
	};

	return (
		<FormContext.Provider value={{ formState, updateField, resetForm }}>
			{children}
		</FormContext.Provider>
	);
};
