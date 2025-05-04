import React from "react";

const Button = ({ 
  children, 
  className = "", 
  size = "default", 
  variant = "default", 
  ...props 
}) => {
  // Generate size-specific classes
  const sizeClasses = {
    default: "py-2 px-4 text-base",
    sm: "py-1 px-3 text-sm",
    lg: "py-3 px-6 text-lg"
  };

  // Generate variant-specific classes
  const variantClasses = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-blue-600 hover:bg-blue-50"
  };

  const buttonClasses = `
    ${sizeClasses[size] || sizeClasses.default}
    ${variantClasses[variant] || variantClasses.default}
    rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    ${className}
  `;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export { Button };
