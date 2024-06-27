'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { InputField } from '@/components/forms';

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export function DashboardForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
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
            placeholder="shadcn"
          />
          <InputField
            form={form}
            name="username"
            label="Username"
            placeholder="shadcn"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
