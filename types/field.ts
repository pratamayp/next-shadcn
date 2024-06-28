import { FieldValues } from 'react-hook-form';

export interface FieldProps<T extends React.ElementType> {
  form: FieldValues;
  name: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  desc?: string;
  fieldProps?: React.ComponentProps<T>;
}
