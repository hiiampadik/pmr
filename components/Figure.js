import Image from "next/image";

export default function Figure(props) {
  const getWidth = () => {
    if (typeof props.width !== "undefined" && props.width !== null) {
      return props.width;
    } else {
      return 600;
    }
  };

  const getHeight = () => {
    if (typeof props.height !== "undefined" && props.height !== null) {
      return props.height;
    } else {
      if (typeof props.image.metadata?.dimensions.aspectRatio !== "undefined") {
        return 600 / props.image.metadata.dimensions.aspectRatio;
      } else {
        return (600 / 16) * 9;
      }
    }
  };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={props.className}
      width={getWidth()}
      height={getHeight()}
      src={props.image.src}
      alt={props.alt}
      sizes="70vmin"
    />
  );
}
