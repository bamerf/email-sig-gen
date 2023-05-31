import type { FC } from 'react';
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
    primaryColor = { data: '#000000' },
  } = data;

  const fontStyles = { fontFamily: fontStack.data };

  return (
    <>
      {logoUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt="logo"
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
        <span style={{ ...fontStyles, fontSize: 16 }}>
          <b>{fullName.data}</b>
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
        <span style={fontStyles}>
          <span>
            {role.data} &bull;
            {companyWebsite.data ? (
              <a
                style={{ color: primaryColor.data }}
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

      {companyAddress.data && (
        <div style={{ orphans: 2, widows: 2 }} dir="auto">
          <span
            style={{
              fontFamily: fontStack.data,
            }}
          >
            {companyAddress.data}
          </span>
        </div>
      )}

      {(phoneNumber.data || mobileNumber.data) && (
        <div style={{ orphans: 2, widows: 2 }} dir="auto">
          <span>
            {phoneNumber.data && (
              <span style={fontStyles}>
                P:{' '}
                <a
                  style={{
                    textDecoration: 'underline',
                    color: '#000000',
                  }}
                  href={`tel:${phoneNumber.data}`}
                >
                  {phoneNumber.data}
                </a>
              </span>
            )}
            {phoneNumber.data && mobileNumber.data && (
              <span style={fontStyles}> &bull; </span>
            )}
            {mobileNumber.data && (
              <span style={fontStyles}>
                M:{' '}
                <a
                  style={{
                    textDecoration: 'underline',
                    color: '#000000',
                  }}
                  href={`tel:${mobileNumber.data}`}
                >
                  {mobileNumber.data}
                </a>
              </span>
            )}
          </span>
        </div>
      )}

      {(bookingLink.data || email.data || otherLinks.data) && (
        <div style={{ orphans: 2, widows: 2 }} dir="auto">
          <span>
            {bookingLink.data && (
              <span style={fontStyles}>
                <a
                  target="_blank"
                  referrerPolicy="no-referrer"
                  href={bookingLink.data}
                  style={{
                    textDecoration: 'underline',
                    color: primaryColor.data,
                  }}
                >
                  Book a Call
                </a>
              </span>
            )}
            {bookingLink.data && email.data && (
              <span style={fontStyles}> &bull; </span>
            )}
            {email.data && (
              <span style={fontStyles}>
                <a
                  target="_blank"
                  referrerPolicy="no-referrer"
                  href={`mailto:${email.data}`}
                  style={{
                    textDecoration: 'underline',
                    color: '#000000',
                  }}
                >
                  {email.data}
                </a>
              </span>
            )}
            {(email.data || bookingLink.data) && otherLinks.data && (
              <span style={fontStyles}> &bull; </span>
            )}
            {otherLinks.data && (
              <span style={fontStyles}>
                <a
                  target="_blank"
                  referrerPolicy="no-referrer"
                  href={otherLinks.data}
                  style={{
                    textDecoration: 'underline',
                    color: '#000000',
                  }}
                >
                  Website
                </a>
              </span>
            )}
          </span>
        </div>
      )}

      <Break fontSize="6px" />

      {footer.data && (
        <div style={{ orphans: 2, widows: 2, lineHeight: 1.1 }} dir="auto">
          <span style={{ ...fontStyles, fontSize: '10px', color: '#808080' }}>
            {footer.data}
          </span>
        </div>
      )}
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
