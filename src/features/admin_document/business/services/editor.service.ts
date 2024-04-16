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

const appendImageToFormData = (file: File) => {
  const formData = new FormData();
  formData.append('image-file', file);
  return formData;
};

export const createImageTag = (link: string) =>
  `<img src="${link}" alt="markdown image" />`;

export const createNewModel = (model: string, value: string) => {
  if (value.includes('img')) {
    return (
      model +
      `
      ${value}
      `
    );
  }
  return model + value;
};
