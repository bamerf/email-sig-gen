import clsx from 'clsx';
import Field from '@/components/Field';
import type { DATA } from '@/constants/data';
import type { FC } from 'react';

type FieldsSectionProps = {
  data: typeof DATA;
  setData: React.Dispatch<typeof DATA>;
};

const FieldsSection: FC<FieldsSectionProps> = ({ data, setData }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: {
        ...data[event.target.name as keyof typeof data],
        data: event.target.value,
      },
    });
  };
  return (
    <main className="grid h-full w-full max-w-[520px] shrink-0 gap-8 self-start overflow-y-auto rounded border border-stone-700 bg-stone-900 p-6">
      <div>
        <h1 className="mb-2 text-3xl font-semibold text-stone-200">
          Email Signature Generator
        </h1>
        <p className="m-0 font-normal text-gray-500 text-md">
          Enter your details below to generate your email signature.
        </p>
      </div>
      <div className="grid gap-6">
        {Object.keys(data).map((field, index) => (
          <Field
            key={field + index}
            name={field}
            label={data[field as keyof typeof data].label}
            placeholder={data[field as keyof typeof data].placeholder}
            value={data[field as keyof typeof data].data}
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
