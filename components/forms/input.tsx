import React from 'react';

import { InputFieldProps } from '@/types/field';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

export const InputField = ({
  form,
  name,
  label,
  type,
  placeholder,
  desc,
}: InputFieldProps) => {
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
