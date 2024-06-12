'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import {
  addHeadingAttributes,
  addHeadingEvent,
  createCopyToolTip,
  createHereTooltip,
} from '../utils/preview-heading';
import { toast } from '~/components/ui/use-toast';

export default function useHeadingLink(documentId: number) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('id');

    if (search) {
      const heading = document.getElementById(search) as HTMLHeadingElement;

      if (heading) {
        const hereText = createHereTooltip();

        heading.appendChild(hereText);

        heading.scrollIntoView({
          inline: 'center',
          block: 'center',
        });
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const headingList = document.querySelectorAll<HTMLHeadingElement>(
      '#mark-down-container > h1, h2, h3, h4, h5, h6',
    );

    headingList.forEach((heading, index) => {
      addHeadingAttributes(heading, `${documentId}-heading-${index}`);

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
  }, [documentId]);
}
