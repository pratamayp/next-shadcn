import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FileUploadProps } from '@/types/field';

import FileUpload from '../ui/file-upload';

export const FileUploadField = ({ name, form }: FileUploadProps) => {
  const {} = useFormContext();
  return (
    <Controller
      name={name}
      control={form.control}
      render={() => (
        <FileUpload
          maxFiles={2}
          accept={{
            'image/*': ['.png', '.jpeg', '.jpg', '.webp'],
          }}
        />
      )}
    ></Controller>
  );
};
