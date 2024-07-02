import { Check, ChevronsUpDown } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';
import { ComboBoxProps } from '@/types/field';

import { Button } from '../ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

export const ComboboxField = ({
  form,
  name,
  label,
  desc,
  options,
  placeholder,
  searchPlaceholder,
  triggerClassName,
  popoverClassName,
}: ComboBoxProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="flex flex-col">
            <FormLabel>{label}</FormLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      triggerClassName,
                      'justify-between',
                      !field.value && 'text-muted-foreground',
                    )}
                  >
                    {field.value
                      ? options.find((item) => item.value === field.value)
                          ?.label
                      : placeholder ?? `Select ${label?.toLowerCase()}`}
                    <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className={cn(popoverClassName, 'p-0')}>
                <Command>
                  <CommandInput
                    placeholder={
                      searchPlaceholder ?? `Search ${label?.toLowerCase()}...`
                    }
                  />
                  <CommandEmpty>No item found.</CommandEmpty>
                  <CommandGroup>
                    <CommandList>
                      {options.map((item) => (
                        <CommandItem
                          value={item.label}
                          key={item.value}
                          onSelect={() => {
                            const currentValue = form.getValues(name);
                            form.setValue(
                              name,
                              currentValue === item.value ? '' : item.value,
                            );
                            form.clearErrors(name);
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              item.value === field.value
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                          {item.label}
                        </CommandItem>
                      ))}
                    </CommandList>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            {desc && <FormDescription>{desc}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
