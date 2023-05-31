import type { FC } from 'react';
import clsx from 'clsx';
import { Img } from '@react-email/img';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';
import { Heading } from '@react-email/heading';
import { Link } from '@react-email/link';
import { DATA } from '@/constants/data';

const SignatureOutput: FC<typeof DATA> = (data) => {
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
    <>
      {logoUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt="Acme, Inc."
          src={logoUrl.data}
          width="32"
          height="32"
          style={{
            width: '32px',
            height: '32px',
          }}
        />
      )}

      <Break fontSize="12px" />

      <div
        style={{
          orphans: 2,
          widows: 2,
        }}
        dir="auto"
      >
        <span
          style={{
            fontFamily: fontStack.data,
          }}
        >
          <b
            style={{
              color: '#000000',
            }}
          >
            {fullName.data}
          </b>
        </span>
      </div>

      <Break fontSize="6px" />

      <div
        style={{
          orphans: 2,
          widows: 2,
        }}
        dir="auto"
      >
        <span
          style={{
            fontFamily: fontStack.data,
          }}
        >
          <span style={{ color: '#000000' }}>
            {role.data} &bull;
            {companyWebsite.data ? (
              <a
                style={{ color: '#000000' }}
                href={companyWebsite.data}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                {' '}
                <span style={{ textDecoration: 'underline' }}>
                  {company.data}
                </span>
              </a>
            ) : (
              <> {company.data}</>
            )}
          </span>
        </span>
      </div>
    </>
  );
};

const Break = ({ fontSize }: { fontSize: string }) => (
  <div
    style={{
      orphans: 2,
      widows: 2,
      fontSize,
    }}
    dir="auto"
  >
    <br />
  </div>
);

export default SignatureOutput;
