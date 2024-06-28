import React from 'react';

import { FieldProps } from '@/types/field';

import { Checkbox } from '../ui/checkbox';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '../ui/form';

export const CheckboxField = ({
  name,
  form,
  label,
  desc,
  fieldProps,
}: FieldProps<typeof Checkbox>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              {...fieldProps}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{label}</FormLabel>
            <FormDescription>{desc}</FormDescription>
          </div>
        </FormItem>
      )}
    />
  );
};
