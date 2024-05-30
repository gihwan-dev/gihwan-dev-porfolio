import { ApiError } from '~/objects/error-objects';
import STATUS_CODE from '~/consts/status-code';

export const extractImageFile = (formData: FormData) => {
  const image = formData.get('image-file');

  if (image instanceof File) {
    return image;
  }

  throw new ApiError({
    message: 'Image file is required.',
    statusCode: STATUS_CODE.NOT_FOUND,
    name: 'BadRequestError',
  });
};

export const extractFiles = async (formData: FormData) => {
  const files = [];
  for (const value of formData.values()) {
    if (value instanceof File) {
      files.push(value);
    }
  }

  if (files.length === 0) {
    throw new ApiError({
      message: 'No files found',
      statusCode: STATUS_CODE.BAD_REQUEST,
      name: 'BadRequestError',
    });
  }

  return files;
};
