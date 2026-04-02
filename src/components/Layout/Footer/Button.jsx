function Button({ href, icon, text, type = "button", className = "" }) {
  const combinedClasses = `flex items-center gap-2 ${className}`;

  const content = (
    <>
      {icon && icon}
      {text && <span>{text}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses}>
      {content}
    </button>
  );
}

export default Button;
