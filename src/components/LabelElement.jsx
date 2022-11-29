import '../assets/styles/components/labelElement.scss';

const LabelElement = (prop) => {
  const { name, error, children, forElement, errorMessage, textStyle } = prop;
  return (
    <label htmlFor={forElement} className="label-form">
      <span className={`label-form__span ${textStyle}`}>{name}</span>
      {children}
      {error && <p className="label-form__error">{errorMessage}</p>}
    </label>
  );
};
export default LabelElement;
