import Image from 'next/image';
import Link from 'next/link';
// @ts-ignore
import { NotionAPI } from 'notion-client';
import { NotionRendererClient as NotionRenderer } from '~/components/NotionRender';
import 'react-notion-x/src/styles.css';
import '~/app/globals.css';

async function getData(pageId: string) {
  const notion = new NotionAPI();

  // 91bb71ef8c454bb08b7dcd2e895eb973
  const recordMap = await notion.getPage(pageId);

  return recordMap;
}

const Page = async ({ params }: { params: { pageId: string } }) => {
  const recordMap = await getData(params.pageId);

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      //   rootDomain="/page"
      showCollectionViewDropdown
      // darkMode={true}
      rootPageId={'2e6d4459ab59423591394e8a6a72ce35'}
      // searchNotion={true}
      bodyClassName="prose max-w-none dark:prose-invert"
      components={{
        nextImage: Image,
        Link,
      }}
    />
  );
};

export default Page;
