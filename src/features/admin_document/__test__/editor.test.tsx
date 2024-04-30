import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Editor from '../components/Editor';

const mockRouter = {
  push: vi.fn(),
  back: vi.fn(),
};

const mockMutate = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
  useParams: () => ({
    id: '1',
  }),
}));

vi.mock('~/components/ui/use-toast', () => ({
  toast: vi.fn(),
}));

vi.mock('~/trpc/react', () => ({
  api: {
    document: {
      updateContent: {
        useMutation: () => ({
          mutate: mockMutate,
        }),
      },
      getOneDocument: {
        useQuery: () => ({
          document: {
            content: '',
          },
          isLoading: false,
          isError: false,
        }),
      },
    },
  },
}));

// @ts-ignore
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ link: 'http://example.com/image.png' }),
  }),
);

describe('Editor', async () => {
  const { findByTestId } = render(<Editor.TextArea />);
  const textarea = (await findByTestId(
    'editorTextArea',
  )) as HTMLTextAreaElement;
  it('이미지를 붙여넣을 경우 img 태그를 볼 수 있어야 한다.', async () => {
    fireEvent.paste(textarea, {
      clipboardData: {
        items: [
          {
            kind: 'file',
            type: 'image/png',
            getAsFile: () =>
              new File(['dummy content'], 'image.png', { type: 'image/png' }),
          },
        ],
      },
    });

    await waitFor(() => {});
    expect(textarea.value.includes('img')).toBe(true);
  });
  it('텍스트를 붙여넣을 경우 해당 텍스트를 볼 수 있어야 한다.', async () => {
    fireEvent.paste(textarea, {
      clipboardData: {
        getData: () => 'Hello',
        items: [],
      },
    });
    await waitFor(() => {});

    expect(textarea.value.includes('Hello')).toBe(true);
  });
});
