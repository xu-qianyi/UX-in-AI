import { useRef, useState } from "react";
import Button from "./Button";
import "./SubscriptionForm.css";
import ConfirmationDialog from "./ConfirmationDialog";
import Message from "./Message/index";

function SubscriptionForm({ dialogRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    wantsSpam: false,
    tier: "",
    otherReason: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    tier: "",
    otherReason: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: updatedValue }));
    validateField(name, updatedValue);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        error = value ? "" : "Name is required.";
        break;
      case "email":
        // console.log( /^[a-zA-Z]+@[a-zA-Z]+$/.test(value) ,value)
        error = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
          ? ""
          : "Email is invalid.";
        break;
      case "confirmEmail":
        error = value === formData.email ? "" : "Emails do not match.";
        break;
      case "tier":
        error = value ? "" : "You must select an option.";
        break;
      case "otherReason":
        error =
          formData.tier === "other" && !value
            ? "Please specify your Reason."
            : "";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateAllFields = () => {
    const fields = ["name", "email", "confirmEmail", "tier", "otherReason"];
    fields.forEach((field) => validateField(field, formData[field]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAllFields();
    console.log(
      Object.values(formData).every((x) => x !== "" || x === false),
      "======value"
    );
    const { otherReason, ...other } = formData;
    const _formData = formData.tier === "other" ? formData : { ...other };
    if (
      Object.values(errors).every((x) => x === "") &&
      Object.values(_formData).every((x) => x !== "" || x === false)
    ) {
      setShowConfirmation(true);
    }
  };
  const onConfirm = () => {
    localStorage.setItem("info", formData);
    handleConfirmationClose();
    setFormData({
      name: "",
      email: "",
      confirmEmail: "",
      wantsSpam: false,
      tier: "",
      otherReason: "",
    });
    setShowMessage(true);
  };
  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    dialogRef?.current?.close();
  };

  return (
    <div className="subscription-form">
      <h2 className="form-title">Register Now</h2>
      <p className="form-instruction">
        (Fields marked with an <span className="required">*</span>are required.)
      </p>

      <form onSubmit={handleSubmit} className="register">
        <div className="register_label">
          <label className="register_name-label">
            Name(required) <span className="required">*</span>:
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="register_name"
          />
          {errors.name && (
            <span className="error-message visible">{errors.name}</span>
          )}
        </div>

        <div className="register_label">
          <label className="register_email-label">
            Email(required) <span className="required">*</span>:
          </label>
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            className="register_email"
          />
          {errors.email && (
            <span className="error-message visible">{errors.email}</span>
          )}
        </div>

        <div className="register_label">
          <label className="register_confirm-email-label">
            Confirm Email(required) <span className="required">*</span>:
          </label>
          <input
            name="confirmEmail"
            type="text"
            value={formData.confirmEmail}
            onChange={handleChange}
            className="register_confirm-email"
          />
          {errors.confirmEmail && (
            <span className="error-message visible">{errors.confirmEmail}</span>
          )}
        </div>

        <div className="register_label">
          <label className="register_select-label">
            How did you hear about us?<span className="required">*</span>:
          </label>
          <select name="tier" value={formData.tier} onChange={handleChange}>
            <option value="">Social media</option>
            <option value="cat care">Advertisement</option>
            <option value="adoption">Friend or family</option>
            <option value="volunteering">Event</option>
            <option value="other">Other</option>
          </select>
          {errors.tier && (
            <span className="error-message visible">{errors.tier}</span>
          )}
        </div>

        {formData.tier === "other" && (
          <div className="register_label">
            <label className="register_specify-label">
              Please specify<span className="required">*</span>:
            </label>
            <input
              name="otherReason"
              type="text"
              value={formData.otherReason}
              onChange={handleChange}
            />
            {errors.otherReason && (
              <span className="error-message visible">
                {errors.otherReason}
              </span>
            )}
          </div>
        )}

        <Button
          className="subscription-form-button"
          type="submit"
          visual="button"
          linkText="Submit"
        />
      </form>

      <ConfirmationDialog
        isOpen={showConfirmation}
        onConfirm={onConfirm}
        onClose={handleConfirmationClose}
      />
      {showMessage && (
        <Message
          type={"success"}
          text={"Form Submitted Successfully!"}
          setShowMessage={setShowMessage}
        />
      )}
    </div>
  );
}

export default SubscriptionForm;
