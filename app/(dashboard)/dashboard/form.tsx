'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  CheckboxField,
  ComboboxField,
  FileUploadField,
  InputField,
  RadioField,
  SelectField,
  TextareaField,
} from '@/components/forms';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

const formSchema = z.object({
  username: z.string().min(1, 'Field is required'),
  address: z.string().min(1, 'Field is required'),
  framework: z.string().min(1, 'Field is required'),
  features: z.string().min(1, 'Field is required'),
  accept: z.boolean(),
  gender: z.enum(['M', 'F']),
  images: z.array(z.string()).min(1),
});

export function DashboardForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      address: '',
      framework: '',
      features: '',
      accept: false,
      gender: 'M',
      images: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // eslint-disable-next-line no-console
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2 p-4">
          <div>
            <FileUploadField form={form} name="images" />
          </div>
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
          />
          <SelectField
            form={form}
            name="features"
            label="Features"
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
