import React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { FieldValues } from 'react-hook-form';

interface InputProps {
  form: FieldValues;
  name: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  desc?: string;
}

export const InputField = ({
  form,
  name,
  label,
  type,
  placeholder,
  desc,
}: InputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type ?? 'text'} placeholder={placeholder} {...field} />
          </FormControl>
          {desc && <FormDescription>{desc}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
