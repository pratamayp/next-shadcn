import React from 'react';

import { SelectProps } from '@/types/field';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export const SelectField = ({
  form,
  name,
  label,
  placeholder,
  options,
  desc,
}: SelectProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder ?? `Select ${label}`} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map(({ value, label }, index) => (
                <SelectItem key={index} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {desc && <FormDescription>{desc}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
