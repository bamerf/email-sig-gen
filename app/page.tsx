'use client';

import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { DATA } from '@/constants/data';
import SignatureOutput from '@/components/SignatureOutput';
import FieldsSection from '@/components/FieldsSection';

export default function Home() {
  const [data, setData] = useState(DATA);

  const html = ReactDOMServer.renderToString(<SignatureOutput {...data} />);

  return (
    <div className="flex h-full gap-4">
      <FieldsSection data={data} setData={setData} />
      <div className="flex flex-col w-full h-full gap-4">
        <div className="relative flex p-4 overflow-auto text-sm text-white border rounded bg-stone-950 border-stone-700 h-1/2">
          <SyntaxHighlighter
            style={vscDarkPlus}
            customStyle={{
              padding: 0,
              overflowX: 'hidden',
            }}
            useInlineStyles
            language="html"
            wrapLongLines
            className="syntax"
          >
            {`${html}`}
          </SyntaxHighlighter>
        </div>
        <div className="p-6 bg-white border rounded h-1/2 border-neutral-200">
          <SignatureOutput {...data} />
        </div>
      </div>
    </div>
  );
}
