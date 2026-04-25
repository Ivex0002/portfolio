export function animatedNotionToggle(e: MouseEvent) {
  if (!(e.target instanceof Element)) return;
  const summary = e.target.closest("summary");
  const toggle = summary?.parentElement as HTMLDetailsElement | null;
  const content = summary?.nextElementSibling as HTMLElement | null;

  if (
    !summary ||
    !toggle ||
    !content ||
    !toggle.classList.contains("notion-toggle")
  )
    return;

  e.preventDefault();
  const isOpening = !toggle.open;

  if (isOpening) toggle.open = true;

  const animation = createAnimation(content, isOpening);

  animation.onfinish = () => {
    if (!isOpening) toggle.open = false;
    content.style.height = isOpening ? "auto" : "0px";
  };
}

function createAnimation(content: HTMLElement, isOpening: boolean) {
  return content.animate(
    [
      {
        clipPath: isOpening ? "inset(0 0 100% 0)" : "inset(0 0 0 0)",
        opacity: isOpening ? 0 : 1,
      },
      {
        clipPath: isOpening ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
        opacity: isOpening ? 1 : 0,
      },
    ],
    {
      duration: 280,
      easing: "ease",
      fill: "forwards",
    },
  );
}
