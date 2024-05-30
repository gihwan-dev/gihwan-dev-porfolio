/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextRequest, NextResponse } from 'next/server';

import { put } from '@vercel/blob';
import { db } from '~/server/db';
import { extractImageFile } from '~/utils/form-utils';
import STATUS_CODE from '~/consts/status-code';
import { ApiError } from '~/objects/error-objects';

export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    const formData = await req.formData();
    const id = params.id;
    const image = extractImageFile(formData);

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
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.statusCode },
      );
    }
    return NextResponse.json(
      { message: 'Fail to upload image. Try again.' },
      { status: STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
};
