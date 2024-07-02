'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  CheckboxField,
  ComboboxField,
  InputField,
  RadioField,
  TextareaField,
} from '@/components/forms';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

const formSchema = z.object({
  username: z.string().min(1, 'Field is required'),
  address: z.string().min(1, 'Field is required'),
  framework: z.string().min(1, 'Field is required'),
  accept: z.boolean(),
  gender: z.enum(['M', 'F']),
});

export function DashboardForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      address: '',
      framework: '',
      accept: false,
      gender: 'M',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <InputField
            form={form}
            name="username"
            label="Username"
            placeholder="input"
          />
          <TextareaField
            form={form}
            name="address"
            label="Address"
            placeholder="textarea"
          />
          <ComboboxField
            form={form}
            name="framework"
            label="Framework"
            options={[
              {
                value: 'next.js',
                label: 'Next.js',
              },
              {
                value: 'sveltekit',
                label: 'SvelteKit',
              },
            ]}
            triggerClassName="w-[300px]"
          />
          <CheckboxField
            form={form}
            name="accept"
            label="I Accept Terms and Condition"
          />
          <RadioField
            form={form}
            name="gender"
            label="Gender"
            options={[
              {
                id: 1,
                value: 'M',
                label: 'Male',
              },
              {
                id: 2,
                value: 'F',
                label: 'Female',
              },
            ]}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
