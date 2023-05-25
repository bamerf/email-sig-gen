'use client';

import EmailSignature from '@/components/EmailSignature';
import ReactEmail from '@/components/ReactEmail';
import { useEffect, useState } from 'react';
import { render } from '@react-email/render';

const html = render(<ReactEmail />);

console.log('html', html);

const FIELDS = [
  'fullName',
  'role',
  'company',
  'companyWebsite',
  'companyAddress',
  'email',
  'pronouns',
  'phoneNumber',
  'mobileNumber',
  'bookingLink',
  'logoUrl',
  'footer',
  'fontStack',
  'primaryColor',
  'twitter',
] as const;

export default function Home() {
  const [formData, setFormData] = useState(
    FIELDS.reduce((a, v) => ({ ...a, [v]: undefined }), {})
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex">
      <div className="flex flex-col gap-4">
        {Object.keys(formData).map((field) => (
          <div key={field} className="flex flex-col gap-2">
            <label htmlFor="field">{field}</label>
            <input
              type="text"
              name={field}
              placeholder={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <div>
        <ReactEmail {...formData} />
      </div>
      {/* <EmailSignature {...formData} /> */}
    </div>
  );
  return <div></div>;
}
