'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { InputField, TextareaField } from '@/components/forms';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

const formSchema = z.object({
  username: z.string().min(1, 'Field is required'),
  address: z.string().min(1, 'Field is required'),
});

export function DashboardForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      address: '',
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
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
