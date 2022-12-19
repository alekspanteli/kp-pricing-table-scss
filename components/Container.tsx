import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx('container', className)}
      {...props}
    />
  )
}
