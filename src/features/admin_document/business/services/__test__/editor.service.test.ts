// @ts-nocheck
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  appendImageToFormData,
  createImageTag,
  createNewModel,
  getImageOrNull,
  sendImageAndGetLink,
} from '../editor.service';

vi.useFakeTimers();

describe('sendImageAndGetLink 함수 테스트', () => {
  const mockFile = new File(['dummy content'], 'test.png', {
    type: 'image/png',
  });
  it('업로드에 성공하면 이미지 링크를 반환해야 한다.', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ link: 'http://example.com/image.png' }),
      }),
    );

    const link = await sendImageAndGetLink(mockFile);

    expect(link).toBe('http://example.com/image.png');
  });

  it('업로드에 실패하면 에러를 반환해야 한다.', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      }),
    );

    await expect(sendImageAndGetLink(mockFile)).rejects.toThrow(
      '이미지를 업로드하는데 실패했습니다.',
    );
  });
});

describe('getImageOrNull 함수 테스트', () => {
  const mockFile = new File(['dummy content'], 'test.png', {
    type: 'image/png',
  });

  it('클립보드 데이터 리스트에 이미지가 있다면 이미지를 반환한다.', () => {
    const items = [
      {
        type: 'image/png',
        getAsFile: () => mockFile,
      },
    ] as unknown as DataTransferItemList;
    const result = getImageOrNull(items);

    expect(result).toBe(mockFile);
  });

  it('클립보드 데이터 리스트에 이미지가 없다면 Null 을 반환한다.', () => {
    const items = [
      {
        type: 'text/plain',
        getAsFile: () => null,
      },
    ] as unknown as DataTransferItemList;
    const result = getImageOrNull(items);

    expect(result).toBeNull;
  });
});

describe('appendImageToFormData 함수 테스트', () => {
  it('파일을 입력값으로 줬을 경우 image-file 키에 파일이 값으로 입력된 formData 가 반환되어야 한다.', () => {
    const mockFile = new File(['dummy content'], 'text.png', {
      type: 'image/png',
    });

    const formData = appendImageToFormData(mockFile);

    expect(formData.get('image-file')).toBe(mockFile);
  });
});

describe('createImageTag 함수 테스트', () => {
  it('링크를 입력하면 src 값이 링크인 alt="markdown image" 인 이미지 태그를 반환해야 한다.', () => {
    const link = 'http://example.com/image.png';

    const imageTagLink = createImageTag(link);

    expect(imageTagLink).toBe(`<img src="${link}" alt="markdown image" />`);
  });
});

describe('createNewModel 함수 테스트', () => {
  let ref;

  const originModel = 'test model';
  const imageTag = `<img src="http://example.com/image.png" alt="markdown image" />`;
  const newText = 'new Text';
  const selectionStart = 5;
  const selectionEnd = 5;

  beforeEach(() => {
    const textArea = document.createElement('textarea');
    textArea.value = originModel;
    ref = {
      current: textArea,
    };

    ref.current.selectionStart = selectionStart;
    ref.current.selectionEnd = selectionEnd;
  });

  afterEach(() => {
    vi.runAllTimers();
  });

  it('추가되는 입력값이 이미지 태그라면 기존 모델의 적절한 위치에 이미지 태그가 추가되고 줄바꿈이 되어야 한다.', () => {
    const newModel = createNewModel(originModel, imageTag, ref);
    expect(newModel).toBe('test ' + imageTag + '\n' + 'model');
  });
  it('추가되는 입력값이 문자열이라면 기존 모델의 적절한 위치에 문자열이 추가되어야 한다.', () => {
    const newModel = createNewModel(originModel, newText, ref);
    expect(newModel).toBe('test ' + newText + 'model');
  });
  it('입력값 입력되고 나면 셀렉션의 위치가 추가된 문자열 이후로 이동되어야 한다. : 이미지 태그 입력', () => {
    ref.current.value = createNewModel(originModel, imageTag, ref);
    const newValue = `${imageTag}\n`;
    vi.runAllTimers();
    expect(ref.current.selectionStart).toBe(selectionStart + newValue.length);
  });

  it('입력값 입력되고 나면 셀렉션의 위치가 추가된 문자열 이후로 이동되어야 한다. : 문자열 입력', () => {
    ref.current.value = createNewModel(originModel, newText, ref);
    vi.runAllTimers();
    expect(ref.current.selectionStart).toBe(selectionStart + newText.length);
  });
});
