import { describe, expect, it } from 'vitest';
import { useEditorStore } from '../useEditorStore';

describe('useEditorStore 테스트', () => {
  it('빈 문자열로 초기화 되어야 합니다.', () => {
    expect(getEditorStoreState().model).toBe('');
  });

  it('onChange 를 통해 상태가 변경될 수 있어야 합니다.', () => {
    const newValue = 'new content.';

    getEditorStoreState().change(newValue);

    expect(getEditorStoreState().model).toBe(newValue);
  });

  it('initialize 를 통해 상태를 빈 문자열로 초기화 할 수 있어야 합니다.', () => {
    getEditorStoreState().initializeState();

    expect(getEditorStoreState().model).toBe('');
  });
});

function getEditorStoreState() {
  return useEditorStore.getState();
}
