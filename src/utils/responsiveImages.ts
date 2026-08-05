const DEFAULT_WIDTHS = [320, 480, 640, 768, 960, 1200, 1600] as const;

const isUnsplashUrl = (src: string) => src.includes('images.unsplash.com');

const updateWidthParam = (src: string, width: number) => {
  const url = new URL(src);
  url.searchParams.set('w', String(width));
  return url.toString();
};

export const buildSrcSet = (
  src: string,
  widths: readonly number[] = DEFAULT_WIDTHS,
) => {
  if (!isUnsplashUrl(src)) return undefined;

  return widths.map((width) => `${updateWidthParam(src, width)} ${width}w`).join(', ');
};

export const getResponsiveImageProps = (
  src: string,
  sizes: string,
  widths: readonly number[] = DEFAULT_WIDTHS,
) => {
  const srcSet = buildSrcSet(src, widths);

  return srcSet
    ? {
        src,
        srcSet,
        sizes,
      }
    : {
        src,
        sizes,
      };
};
