import type { FC } from 'react';
import clsx from 'clsx';
import { Img } from '@react-email/img';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';
import { Heading } from '@react-email/heading';
import { Link } from '@react-email/link';
import { DATA } from '@/constants/data';

const ReactEmail: FC<typeof DATA> = (data) => {
  const {
    logoUrl,
    fullName,
    role,
    company,
    companyWebsite,
    companyAddress,
    phoneNumber,
    mobileNumber,
    bookingLink,
    email,
    otherLinks,
    footer,
    fontStack,
    primaryColor,
  } = data;

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
          className="w-8 h-8 mb-4 rounded-full"
          src={logoUrl.data}
          alt="logo"
          width="32"
          height="32"
        />
      )}
      <Heading as="h4" className="mb-1 font-bold text-black">
        {fullName.data}
      </Heading>
      <Heading as="h4" className="m-0 text-black">
        {role.data} &bull;{' '}
        {companyWebsite.data ? (
          <Link
            className={clsx('text-brand', {
              underline: true,
              'text-brand': primaryColor.data,
              'text-black': !primaryColor.data,
            })}
            href={companyWebsite.data}
          >
            {company.data}
          </Link>
        ) : (
          company.data
        )}
      </Heading>{' '}
      {companyAddress.data && (
        <Heading as="h4" className="m-0 text-black">
          {companyAddress.data}
        </Heading>
      )}
      {(phoneNumber.data || mobileNumber.data) && (
        <Heading as="h4" className="m-0 text-black">
          {phoneNumber.data && (
            <Link
              className="text-black underline"
              href={`tel:${phoneNumber.data}`}
            >
              P: {phoneNumber.data}
            </Link>
          )}{' '}
          &bull;{' '}
          {mobileNumber.data && (
            <Link
              className="text-black underline"
              href={`tel:${mobileNumber.data}`}
            >
              M: {mobileNumber.data}
            </Link>
          )}
        </Heading>
      )}
      {(bookingLink.data || email.data || otherLinks.data) && (
        <Heading as="h4" className="m-0 text-black">
          {bookingLink.data && (
            <Link className="text-black underline" href={bookingLink.data}>
              Book a meeting
            </Link>
          )}{' '}
          &bull;{' '}
          {email.data && (
            <Link
              className="text-black underline"
              href={`mailto:${email.data}`}
            >
              {email.data}
            </Link>
          )}{' '}
          &bull;{' '}
          {otherLinks.data && (
            <Link className="text-black underline" href={otherLinks.data}>
              Website
            </Link>
          )}
        </Heading>
      )}
      <Text className="text-[0.675rem] leading-4 text-stone-400">
        {footer.data}
      </Text>
    </Tailwind>
  );
};

export default ReactEmail;
