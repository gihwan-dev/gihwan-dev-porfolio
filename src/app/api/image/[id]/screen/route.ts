import { type NextRequest, NextResponse } from 'next/server';
import { createDocumentScreenPhotos } from '~/app/api/image/[id]/screen/handler';

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();

  const files = await extractFiles(formData);

  const type = formData.get('type') as 'mobile' | 'desktop' | 'tablet';

  const documentId = Number(formData.get('documentId'));

  const result = await createDocumentScreenPhotos({
    fileList: files,
    documentId,
    type,
  });

  if (result) {
    return NextResponse.json({
      success: true,
      message: 'Screen photos uploaded successfully',
    });
  }
  return NextResponse.json({
    success: false,
    message: 'Screen photos upload failed',
  });
};

const extractFiles = async (formData: FormData) => {
  const files = [];
  for (const value of formData.values()) {
    if (value instanceof File) {
      files.push(value);
    }
  }
  return files;
};
