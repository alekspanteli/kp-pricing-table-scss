import Link from "next/link";
import clsx from "clsx";

const variantStyles = {
    blue: "btn--blue",
    white: "btn--white",
};

export function Button({
  color = "blue",
  className,
  href,
  ...props
}) {
  className = clsx(
    "inline-flex",
    variantStyles[color],
    className
  );

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}
