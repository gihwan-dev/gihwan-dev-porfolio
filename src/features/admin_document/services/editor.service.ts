import type React from 'react';

export const sendImageAndGetLink = async (file: File) => {
  const formData = appendImageToFormData(file);
  const response = await fetch(`/api/image`, {
    method: 'POST',
    body: formData,
  });
  if (response.ok) {
    const data = (await response.json()) as { link: string };
    return data.link;
  }
  throw Error('이미지를 업로드하는데 실패했습니다.');
};

export const getImageOrNull = (items: DataTransferItemList) => {
  for (const item of items) {
    if (item.type.indexOf('image') !== -1) {
      const file = item.getAsFile();

      if (file) {
        return file;
      }
    }
  }
  return null;
};

export const appendImageToFormData = (file: File) => {
  const formData = new FormData();
  formData.append('image-file', file);
  return formData;
};

export const createImageTag = (link: string) =>
  `<img src="${link}" alt="markdown image" />`;

export const createNewModel = (
  model: string,
  value: string,
  ref: React.MutableRefObject<HTMLTextAreaElement>,
) => {
  const startPos = ref.current.selectionStart;
  const endPos = ref.current.selectionEnd;
  const firstModel = model.substring(0, startPos);
  const lastModel = model.substring(endPos);
  let newValue = value;
  if (value.includes('img')) {
    newValue = `${value}\n`;
  }
  setCursor(ref, startPos, newValue.length);
  return getInsertedText(firstModel, newValue, lastModel);
};

export const setCursor = (
  ref: React.MutableRefObject<HTMLTextAreaElement>,
  start: number,
  valueLength: number,
) => {
  setTimeout(() => {
    ref.current.selectionEnd = start + valueLength;
  }, 0);
};

export const getInsertedText = (
  first: string,
  middle: string,
  last: string,
) => {
  return first + middle + last;
};
