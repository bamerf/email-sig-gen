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
  companyAddress?: string;
  email: string;
  phoneNumber?: string;
  mobileNumber?: string;
  bookingLink?: string;
  footer?: string;
  fontStack?: string;
  primaryColor?: string;
  yourWebsite?: string;
}

const ReactEmail: FC<EmailSignatureProps> = ({
  logoUrl = 'https://source.unsplash.com/random',
  fullName = 'Bamdad Erfanian',
  role = 'Senior Frontend Engineer',
  company = 'Corellium',
  companyWebsite = 'https://example.com',
  companyAddress = 'Delray Beach, FL',
  phoneNumber = '+12345',
  mobileNumber = '+12345',
  bookingLink = 'https://example.com',
  email = 'test@gmal.com',
  yourWebsite = 'https://linkedin/test',
  footer = 'CONFIDENTIALITY NOTICE — This email with all attachment(s) is solely for the use of the individual or entity to which it was intended. Unless otherwise indicated, it contains information that is confidential, privileged and/or exempt from disclosure under applicable law. If you are not the intended recipient, any disclosure, copying, distribution, or action taken based on this email is strictly prohibited. If you have received this email in error, please notify the sender of the error and delete the email. Thank you.',
  fontStack,
  primaryColor,
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
      {(phoneNumber || mobileNumber) && (
        <Text className="m-0 text-black">
          {phoneNumber && (
            <Link className="text-black underline" href={`tel:${phoneNumber}`}>
              P: {phoneNumber}
            </Link>
          )}{' '}
          &bull;{' '}
          {mobileNumber && (
            <Link className="text-black underline" href={`tel:${mobileNumber}`}>
              M: {mobileNumber}
            </Link>
          )}
        </Text>
      )}
      {(bookingLink || email || yourWebsite) && (
        <Text className="m-0 text-black">
          {bookingLink && (
            <Link className="text-black underline" href={bookingLink}>
              Book a meeting
            </Link>
          )}{' '}
          &bull;{' '}
          {email && (
            <Link className="text-black underline" href={`mailto:${email}`}>
              {email}
            </Link>
          )}{' '}
          &bull;{' '}
          {yourWebsite && (
            <Link className="text-black underline" href={yourWebsite}>
              LinkedIn
            </Link>
          )}
        </Text>
      )}
      <Text>{footer}</Text>
    </Tailwind>
  );
};

export default ReactEmail;
