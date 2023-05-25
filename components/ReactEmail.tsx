import type { FC } from 'react';
import clsx from 'clsx';
import { Img } from '@react-email/img';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';
import { Heading } from '@react-email/heading';
import { Html } from '@react-email/html';
import { Link } from '@react-email/link';

interface EmailSignatureProps {
  logoUrl?: string;
  fullName: string;
  role?: string;
  company?: string;
  companyWebsite?: string;
  email: string;
  pronouns?: string;
  phoneNumber?: string;
  mobileNumber?: string;
  bookingLink?: string;
  footer?: string;
  fontStack?: string;
  primaryColor?: string;
  twitter?: string;
}

const ReactEmail: FC<EmailSignatureProps> = ({
  logoUrl = 'https://source.unsplash.com/random',
  fullName = 'Bamdad Erfanian',
  role = 'Senior Frontend Engineer',
  company = 'Corellium',
  companyWebsite = 'https://example.com',
  companyAddress = 'Delray Beach, FL',
  email,
  pronouns,
  phoneNumber,
  mobileNumber,
  bookingLink,
  footer,
  fontStack,
  primaryColor,
  twitter,
}) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: '#007291',
            },
          },
        },
      }}
    >
      {logoUrl && (
        <Img
          className="w-8 h-8"
          src={logoUrl}
          alt="logo"
          width="32"
          height="32"
        />
      )}
      <Heading as="h4" className="text-black">
        {fullName}
      </Heading>
      <Text className="m-0 text-black">
        {role} &bull;{' '}
        {companyWebsite ? (
          <Link
            className={clsx('text-brand', {
              underline: true,
              'text-brand': primaryColor,
              'text-black': !primaryColor,
            })}
            href={companyWebsite}
          >
            {company}
          </Link>
        ) : (
          company
        )}
      </Text>{' '}
      {companyAddress && (
        <Text className="m-0 text-black">{companyAddress}</Text>
      )}
    </Tailwind>
  );
};

export default ReactEmail;
