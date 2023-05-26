import clsx from 'clsx';
import { useId } from 'react';

const Field = ({
  name,
  label,
  placeholder,
  value,
  onChange,
}: {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const id = useId();

  return (
    <div key={id} className="grid w-full items-center gap-1.5">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-neutral-900"
        htmlFor={id}
      >
        {label}
      </label>
      {name === 'footer' ? (
        <textarea
          id={id}
          className={clsx(
            'flex w-full h-20 px-3 py-2 text-sm bg-transparent border rounded-md border-neutral-300 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ',
            {
              'dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900':
                false,
            }
          )}
        >
          {value}
        </textarea>
      ) : (
        <input
          id={id}
          className={clsx(
            'flex w-full h-10 px-3 py-2 text-sm bg-transparent border rounded-md border-neutral-300 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            {
              'dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900':
                false,
            }
          )}
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Field;
