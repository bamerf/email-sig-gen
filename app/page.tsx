'use client';

import { useState } from 'react';
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
import { DATA } from '@/constants/data';

export default function Home() {
  const [data, setData] = useState(DATA);

  const html = render(<ReactEmail {...data} />).replace(/<!DOCTYPE[^>]*>/i, '');

  return (
    <div className="flex h-full gap-4">
      <FieldsSection data={data} setData={setData} />
      <div className="flex flex-col w-full h-full gap-4">
        <div className="relative flex p-4 overflow-auto text-sm text-white border rounded bg-stone-950 border-stone-700 h-1/2">
          {`${html}`}
          {/* <SyntaxHighlighter
            style={atelierHeathDark}
            language="html"
            wrapLongLines
          >
            
          </SyntaxHighlighter> */}
        </div>
        <div className="p-6 bg-white border rounded h-1/2 border-neutral-200">
          <ReactEmail {...data} />
        </div>
      </div>
    </div>
  );
}
