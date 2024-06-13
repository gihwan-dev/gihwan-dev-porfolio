'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import {
  addHeadingAttributes,
  addHeadingEvent,
  createCopyToolTip,
  createHereTooltip,
} from '../utils/preview-heading';
import { toast } from '~/components/ui/use-toast';

export default function useHeadingLink(documentId: number) {
  const searchParams = useSearchParams();
  const search = searchParams.get('id');

  let [targetHeading, setTargetHeading] = useState<HTMLHeadingElement | null>(
    null,
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [headingList, setHeadingList] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    if (targetHeading) {
      const hereText = createHereTooltip();

      targetHeading.appendChild(hereText);

      targetHeading.scrollIntoView({
        block: 'center',
      });
    }
  }, [targetHeading]);

  useLayoutEffect(() => {
    const headingList = document.querySelectorAll<HTMLHeadingElement>(
      '#mark-down-container > h2, h3, h4',
    );

    setHeadingList([...headingList]);

    headingList.forEach((heading, index) => {
      addHeadingAttributes(heading, `${documentId}-heading-${index}`);

      if (search && search === `${documentId}-heading-${index}`) {
        setTargetHeading(heading);
      }

      setTimeout(() => {
        const copyToolTip = createCopyToolTip();

        heading.appendChild(copyToolTip);
        addHeadingEvent(
          heading,
          new Map([
            [
              'mouseenter',
              () => {
                copyToolTip.classList.remove('opacity-0');
              },
            ],
            [
              'mouseleave',
              () => {
                copyToolTip.classList.add('opacity-0');
              },
            ],
            [
              'click',
              async () => {
                await navigator.clipboard.writeText(
                  `${window.location.origin}/projects/${documentId}?id=${heading.id}`,
                );

                toast({
                  title: 'Copied!!',
                  description: 'Link copied to clipboard',
                });
              },
            ],
          ]),
        );
      });
    });
  }, [setHeadingList, setTargetHeading, documentId, search]);
}
