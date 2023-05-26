import { useState } from 'react';
import clsx from 'clsx';

import { DATA } from '@/constants/data';
import Field from '@/components/Field';

const FieldsSection = () => {
  const [formData, setFormData] = useState(DATA);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange ~ event:', event.target.value);

    setFormData({
      ...formData,
      [event.target.name]: {
        ...formData[event.target.name as keyof typeof formData],
        data: event.target.value,
      },
    });
  };
  return (
    <main className="grid h-full w-full max-w-[520px] shrink-0 gap-8 self-start overflow-y-auto rounded border border-neutral-200 bg-white p-6">
      <div>
        <h1 className="mb-2 text-3xl font-semibold text-gray-900">
          Email Signature Generator
        </h1>
        <p className="m-0 font-normal text-gray-500 text-md">
          Enter your details below to generate your email signature.
        </p>
      </div>
      <div className="grid gap-6">
        {Object.keys(formData).map((field, index) => (
          <Field
            key={field + index}
            name={field}
            label={formData[field as keyof typeof formData].label}
            placeholder={formData[field as keyof typeof formData].placeholder}
            value={formData[field as keyof typeof formData].data}
            onChange={handleChange}
          />
        ))}
      </div>
      <p
        className={clsx('text-sm text-gray-500', {
          'dark:text-gray-400': false,
        })}
      >
        Test in Gmail, Outlook and Spark
      </p>
    </main>
  );
};

export default FieldsSection;
