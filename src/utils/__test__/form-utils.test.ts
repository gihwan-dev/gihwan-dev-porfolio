import { describe, expect, it } from 'vitest';
import { extractFiles, extractImageFile } from '../form-utils';

describe('form-utils', () => {
  it('extractImageFile', () => {
    const formData = new FormData();

    const image = new File([''], 'image.jpg', { type: 'image/jpeg' });

    formData.append('image-file', image);

    const extractedImage = extractImageFile(formData);

    expect(extractedImage).toBe(image);
  });

  it('extractFiles', async () => {
    const formData = new FormData();

    const image = new File([''], 'image.jpg', { type: 'image/jpeg' });

    formData.append('image-file', image);

    const extractedFiles = await extractFiles(formData);

    expect(extractedFiles).toEqual([image]);
  });
});
