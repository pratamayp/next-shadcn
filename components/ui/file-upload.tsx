import { CircleCheck, CloudUpload, Upload, X } from 'lucide-react';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { cn } from '@/lib/utils';

import { Button } from './button';

interface FileUploadProps {
  limit?: number;
  maxSize?: number;
  accept: {
    [mimeType: string]: string[];
  };
}

function MyDropzone({ accept, limit = 1, maxSize = 2 }: FileUploadProps) {
  const [files, setFiles] = React.useState<File[]>([]);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.log(acceptedFiles[0]);
      if (files.length < limit) {
        setFiles([...files, ...acceptedFiles]);
      }
    },
    [files, limit],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    onDrop,
    maxFiles: limit,
  });

  const handleRemove = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };
  const accExtension = Object.values(accept).flat().join(' ');

  return (
    <div className="flex flex-col">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div
          className={cn(
            isDragActive && 'bg-muted/25',
            'flex cursor-pointer flex-col items-center justify-center rounded-md border-with-gap border-dashed py-8 hover:bg-muted/25',
          )}
        >
          <Upload />
          <div className="mt-2 text-sm">
            <strong>Click to upload </strong>
            or drag and drop
          </div>
          <div className="mt-1 text-xs">Accepted types: {accExtension}</div>
          <div className="mt-1 text-xs">
            {limit !== 1
              ? `up to ${limit} files, ${maxSize}MB per file`
              : `up to ${maxSize}MB`}
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col justify-center gap-2">
        {files.map((file, index) => (
          <div
            className="flex justify-between rounded-md border p-4"
            key={index}
          >
            <div className="flex items-center gap-4 text-sm">
              <div>Image</div>
              <div className="flex flex-col">
                <span>{file.name}</span>
                <span className="text-xs">{file.size}</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <Button variant="ghost" type="button">
                  <CircleCheck className="size-5 text-green-700" />
                  <CloudUpload className="size-5" />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={() => handleRemove(index)}
              >
                <X className="size-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyDropzone;
