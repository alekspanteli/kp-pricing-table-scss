import Link from "next/link";
import clsx from "clsx";

const baseStyles = {
  solid: "btn",
};

const variantStyles = {
  solid: {
    blue: "btn--blue",
    white: "btn--white",
  },
};

export function Button({
  variant = "solid",
  color = "blue",
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}
