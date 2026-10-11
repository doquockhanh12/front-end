export default function Button({ variant = 'primary', size = 'md', className = '', children, icon: Icon, type = 'button', ...props }) {
  return <button type={type} className={`button button--${variant} button--${size} ${className}`} {...props}>{Icon && <Icon size={18} aria-hidden="true" />}{children}</button>;
}
