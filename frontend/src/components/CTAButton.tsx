import { cn } from '../utils/cn'

type CTAButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export function CTAButton({ variant = 'primary', className, children, ...props }: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

  const variants = {
    primary:
      'bg-gradient-to-r from-brand-500 to-blue-500 text-white shadow-lg shadow-brand-200 hover:from-brand-600 hover:to-blue-600 focus-visible:outline-brand-500',
    ghost:
      'border border-slate-200 bg-white text-slate-800 hover:border-brand-200 hover:text-brand-700 focus-visible:outline-brand-500',
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

