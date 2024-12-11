// Button.jsx
function Button({ type = "button", visual = "button", onClick, linkText }) {
  return (
    <button 
      type={type} 
      className={visual}
      onClick={onClick}  
    >
      {linkText}
    </button>
  );
}

export default Button;
