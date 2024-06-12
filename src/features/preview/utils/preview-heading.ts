export const createHereTooltip = () => {
  const hereText = document.createElement('span');
  hereText.textContent = '<- Here!!';

  hereText.className =
    'text-xs ml-2 absolute top-1/2 -translate-y-1/2 text-text-primary-red animate-bounce';

  return hereText;
};

export const createCopyToolTip = () => {
  const copyToolTip = document.createElement('span');
  copyToolTip.textContent = 'copy link';
  copyToolTip.className =
    'text-xs ml-2 absolute opacity-0 transition-all duration-200';

  return copyToolTip;
};

export const addHeadingAttributes = (
  heading: HTMLHeadingElement,
  id: string,
) => {
  heading.id = id;

  heading.className = `${heading.className} hover:underline cursor-pointer relative`;
};

type MouseEventType = 'mouseenter' | 'mouseleave' | 'click';

type CallbackList = Map<MouseEventType, () => void>;

export const addHeadingEvent = (
  heading: HTMLHeadingElement,
  callbacks: CallbackList,
) => {
  callbacks.forEach((callback, eventType) => {
    heading.addEventListener(eventType, callback);
  });
};
