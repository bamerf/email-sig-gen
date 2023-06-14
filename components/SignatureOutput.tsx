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
    website,
    linkedin,
    footer,
    fontStack,
    primaryColor = { data: '#000000' },
  } = data;

  const fontStyles = { fontFamily: fontStack.data };

  const links = [
    bookingLink.data ? (
      <a
        target="_blank"
        referrerPolicy="no-referrer"
        href={bookingLink.data}
        style={{ textDecoration: 'underline', color: primaryColor.data }}
      >
        Book a Call
      </a>
    ) : null,
    email.data ? (
      <a
        target="_blank"
        referrerPolicy="no-referrer"
        href={`mailto:${email.data}`}
        style={{ textDecoration: 'underline', color: '#000000' }}
      >
        {email.data}
      </a>
    ) : null,
    website.data ? (
      <a
        target="_blank"
        referrerPolicy="no-referrer"
        href={website.data}
        style={{ textDecoration: 'underline', color: '#000000' }}
      >
        Website
      </a>
    ) : null,
    linkedin.data ? (
      <a
        target="_blank"
        referrerPolicy="no-referrer"
        href={linkedin.data}
        style={{ textDecoration: 'underline', color: '#000000' }}
      >
        LinkedIn
      </a>
    ) : null,
  ].filter(Boolean);

  return (
    <>
      {logoUrl.data && (
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
            {role.data}

            {role.data && company.data && <span> &bull;</span>}

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

      <div style={{ orphans: 2, widows: 2 }} dir="auto">
        <span style={fontStyles}>
          {links.map((link, index) => (
            <span key={index}>
              {link}
              {index < links.length - 1 && <span> &bull; </span>}
            </span>
          ))}
        </span>
      </div>

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
