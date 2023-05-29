'use client';

import ReactEmail from '@/components/ReactEmail';
import { render } from '@react-email/render';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  docco,
  atelierHeathDark,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import FieldsSection from '@/components/FieldsSection';

const html = render(<ReactEmail />).replace(/<!DOCTYPE[^>]*>/i, '');

console.log('html', html);

export default function Home() {
  return (
    <div className="flex h-full gap-4">
      <FieldsSection />
      <div className="flex flex-col w-full h-full gap-4">
        <div className="relative flex p-4 overflow-auto bg-black rounded h-1/2">
          <SyntaxHighlighter
            style={atelierHeathDark}
            language="html"
            wrapLongLines
          >
            {`${html}`}
          </SyntaxHighlighter>
        </div>
        <div className="p-4 bg-white border rounded h-1/2 border-neutral-200">
          <ReactEmail />
        </div>
      </div>
    </div>
  );
}
