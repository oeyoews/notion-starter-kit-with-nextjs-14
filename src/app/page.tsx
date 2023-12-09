'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// @ts-ignore
import { NotionAPI } from 'notion-client';
import { NotionRendererClient as NotionRenderer } from '~/components/NotionRender';
import 'react-notion-x/src/styles.css';
import '~/app/globals.css';

import collection from 'react-notion-x/build/third-party/collection';
async function getData() {
  const notion = new NotionAPI();

  // 91bb71ef8c454bb08b7dcd2e895eb973
  const recordMap = await notion.getPage('2e6d4459ab59423591394e8a6a72ce35');

  return recordMap;
}

const Page = () => {
  const recordMap = use(getData());

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      // darkMode={true}
      rootPageId={'2e6d4459ab59423591394e8a6a72ce35'}
      // searchNotion={true}
      // mapImageUrl={(x) => x}
      // mapPageUrl={mapPageUrl} // error serve / client
      bodyClassName="prose max-w-none dark:prose-invert"
      components={{
        Collection: collection,
        nextImage: Image,
        Link,
      }}
    />
  );
};

export default Page;
