/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextRequest, NextResponse } from 'next/server';

import { put } from '@vercel/blob';
import { db } from '~/server/db';

export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    const formData = await req.formData();
    const id = params.id;
    const image = formData.get('image-file') as File;

    if (image) {
      const blob = await put(image.name, image, {
        access: 'public',
      });
      await db.documents.update({
        where: {
          document_id: Number(id),
        },
        data: {
          thumbnail: blob.url,
        },
      });
      return NextResponse.json({ link: blob.url });
    }

    return NextResponse.json({});
  } catch (error) {
    console.error(error);
    return NextResponse.json({});
  }
};
