/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextRequest, NextResponse } from 'next/server';

import { put } from '@vercel/blob';

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const image = formData.get('image-file') as File;

    if (image) {
      const blob = await put(image.name, image, {
        access: 'public',
      });
      return NextResponse.json({ link: blob.url });
    }

    return NextResponse.json({});
  } catch (error) {
    console.error(error);
    return NextResponse.json({});
  }
};
