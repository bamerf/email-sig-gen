import Image from 'next/image';
import { useState } from 'react';

const FIELDS = {
  fullName: '',
  email: '',
  pronouns: '',
  role: '',
  phoneNumber: '',
  mobileNumber: '',
  bookingLink: '',
  company: '',
  companyWebsite: '',
  logoUrl: '',
  footer: '',
  fontStack: '',
  primaryColor: '',
  twitter: '',
};

export default function Home() {
  const [formData, setFormData] = useState(FIELDS);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const signatureHTML = `
      <img alt="${formData.company}" src="${formData.logoUrl}" width="32" height="32" style="width: 32px; height: 32px;">
      <div style="orphans: 2; widows: 2; font-size: 12px;" dir="auto"><br></div>
      <div style="orphans: 2; widows: 2;" dir="auto"><span style="font-family: ${formData.fontStack};"><b style="color: ${formData.primaryColor}">${formData.fullName}</b><font color="#808080" style="font-size: 14px"> (${formData.pronouns})</font></span></div>
      <!-- Rest of the HTML, replacing placeholders with form data... -->
    `;

    // Do something with signatureHTML
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(FIELDS).map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder="Full Name"
          value={formData[field as keyof typeof formData]}
          onChange={handleChange}
        />
      ))}
      {/* Repeat for the rest of the form fields */}
      <button type="submit">Generate Signature</button>
    </form>
  );
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24"></main>
  );
}
