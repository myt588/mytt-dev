import Image, { ImageLoaderProps, ImageProps } from 'next/image';

// opt-out of image optimization, no-op
const customLoader = ({ src }: ImageLoaderProps) => {
  return src;
};

export default function NoOpImage(props: ImageProps) {
  return (
    <Image
      {...props}
      loader={customLoader}
      alt={props.alt}
      unoptimized={true}
    />
  );
}
