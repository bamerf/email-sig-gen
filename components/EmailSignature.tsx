import Image from 'next/image';
import React, { FC } from 'react';

interface EmailSignatureProps {
  fullName: string;
  email: string;
  pronouns?: string;
  role?: string;
  phoneNumber?: string;
  mobileNumber?: string;
  bookingLink?: string;
  company?: string;
  companyWebsite?: string;
  logoUrl?: string;
  footer?: string;
  fontStack?: string;
  primaryColor?: string;
  twitter?: string;
}

const EmailSignature: FC<EmailSignatureProps> = ({
  fullName,
  email,
  pronouns,
  role,
  phoneNumber,
  mobileNumber,
  bookingLink,
  company,
  companyWebsite,
  logoUrl,
  footer,
  fontStack,
  primaryColor,
  twitter,
}) => {
  const fontStyle = `font-family: ${
    fontStack ||
    'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'
  };`;

  return (
    <div style={{ color: primaryColor || '#000000' }}>
      {logoUrl && (
        <Image
          alt={fullName}
          src={logoUrl}
          width="32"
          height="32"
          style={{ width: '32px', height: '32px' }}
        />
      )}
      {fullName && (
        <div style={{ fontFamily: fontStyle }}>
          <b style={{ color: primaryColor || '#000000' }}>{fullName}</b>
          {pronouns && (
            <span style={{ color: '#808080', fontSize: '14px' }}>
              {' '}
              ({pronouns})
            </span>
          )}
        </div>
      )}
      {role && company && companyWebsite && (
        <div>
          <a
            href={companyWebsite}
            style={{ color: primaryColor || '#000000' }}
          >{`${role} • ${company}`}</a>
        </div>
      )}
      {(phoneNumber || mobileNumber) && (
        <div>
          {phoneNumber && (
            <span>
              P:{' '}
              <a
                href={`tel:${phoneNumber}`}
                style={{ color: primaryColor || '#000000' }}
              >
                {phoneNumber}
              </a>
            </span>
          )}
          {mobileNumber && (
            <span>
              M:{' '}
              <a
                href={`tel:${mobileNumber}`}
                style={{ color: primaryColor || '#000000' }}
              >
                {mobileNumber}
              </a>
            </span>
          )}
        </div>
      )}
      {bookingLink && email && twitter && (
        <div>
          <a href={bookingLink} style={{ color: primaryColor || '#000000' }}>
            Book a Call
          </a>{' '}
          •
          <a
            href={`mailto:${email}`}
            style={{ color: primaryColor || '#000000' }}
          >
            {email}
          </a>{' '}
          •
          <a
            href={`https://twitter.com/${twitter}`}
            style={{ color: primaryColor || '#000000' }}
          >
            @{twitter}
          </a>
        </div>
      )}
      {footer && (
        <div style={{ fontSize: '10px', color: '#808080', lineHeight: '1.1' }}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default EmailSignature;
