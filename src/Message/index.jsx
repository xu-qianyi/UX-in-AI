import React, { useState } from "react";
import "./index.css";

const MessageType = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "infon",
};

const Message = ({ type, text, autoCloseTime = 3000, setShowMessage }) => {
  const [isVisible, setIsVisible] = useState(true);

  const getClassName = () => {
    switch (type) {
      case MessageType.SUCCESS:
        return "success-message";
      case MessageType.ERROR:
        return "error-message";
      case MessageType.WARNING:
        return "warning-message";
      case MessageType.INFO:
        return "info-message";
      default:
        return "default-message";
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };
  const handleShow = () => {
    setIsVisible(true);
  };

  React.useEffect(() => {
    if (autoCloseTime > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setShowMessage(false);
      }, autoCloseTime);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`message-box ${getClassName()}`}>
      <span>{text}</span>
    </div>
  );
};

export default Message;
