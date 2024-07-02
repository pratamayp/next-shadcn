import { FieldValues } from 'react-hook-form';

interface FormProps {
  form: FieldValues;
  name: string;
}

interface RadioItemProps {
  id: number;
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  value: string;
}
export interface FieldProps<T extends React.ElementType> extends FormProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  desc?: string;
  fieldProps?: React.ComponentProps<T>;
}

export interface RadioFieldProps extends FormProps {
  label?: string;
  options: RadioItemProps[];
}

export interface ComboBoxProps extends FormProps {
  label?: string;
  desc?: string;
  options: SelectProps[];
  placeholder?: string;
  searchPlaceholder?: string;
  triggerClassName?: string;
  popoverClassName?: string;
}
