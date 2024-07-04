/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloudUpload, Upload, X } from 'lucide-react';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { truncateFileName } from '@/lib/truncate';
import { cn } from '@/lib/utils';

import { Button } from './button';

interface FileUploadProps {
  maxFiles?: number;
  maxSize?: number;
  accept: {
    [mimeType: string]: string[];
  };
}

function FileUpload({ accept, maxFiles = 1, maxSize = 2 }: FileUploadProps) {
  const [files, setFiles] = React.useState<File[]>([]);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length && files.length < maxFiles) {
        setFiles((prev) => [
          ...prev,
          ...acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) }),
          ),
        ]);
      }
    },
    [files, maxFiles],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    onDrop,
    maxFiles,
    multiple: false,
    maxSize: maxSize * 1024 * 1024,
  });

  React.useEffect(() => {
    return () =>
      files.forEach((file) => URL.revokeObjectURL((file as any).preview));
  }, [files]);
  const handleRemove = (index: number) => {
    setFiles((files) => files.filter((_, i) => i !== index));
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
            {maxFiles !== 1
              ? `up to ${maxFiles} files, ${maxSize}MB per file`
              : `up to ${maxSize}MB`}
          </div>
        </div>
      </div>
      {files.length > 0 && (
        <div className="flex items-end justify-between py-2">
          <div className="text-base font-semibold">File accepted</div>
          <Button
            type="button"
            variant="outline"
            className="rounded-md text-xs"
            size="sm"
          >
            Upload files
            <CloudUpload className="ml-2 size-4" />
          </Button>
        </div>
      )}
      <div className="flex flex-col justify-center gap-2">
        {files.map((file, index) => (
          <div
            className="flex justify-between rounded-md border px-4 py-3"
            key={file.name}
          >
            <div className="flex items-center gap-4 text-sm">
              <div className="relative size-16">
                <Image
                  src={(file as any).preview}
                  alt={file.name}
                  fill
                  onLoad={() => {
                    URL.revokeObjectURL((file as any).preview);
                  }}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="inline-block max-w-[300px]">
                  {truncateFileName(file.name, 30)}
                </span>
                <span className="text-xs">{file.size}</span>
              </div>
            </div>
            <div className="flex items-center">
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

export default FileUpload;
