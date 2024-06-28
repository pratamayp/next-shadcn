import { FieldValues } from 'react-hook-form';

export interface InputFieldProps {
  form: FieldValues;
  name: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  desc?: string;
}
