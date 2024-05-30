import { type NextRequest, NextResponse } from 'next/server';

import { put } from '@vercel/blob';
import { extractImageFile } from '~/utils/form-utils';
import { ApiError } from '~/objects/error-objects';

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const image = extractImageFile(formData);

    const blob = await put(image.name, image, {
      access: 'public',
    });
    return NextResponse.json({ link: blob.url });
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.statusCode },
      );
    }

    return NextResponse.json(
      { message: 'Fail to upload image. Try again.' },
      { status: 500 },
    );
  }
};
