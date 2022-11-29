import '../assets/styles/components/inputTextElement.scss'

const TextAreaElement = (prop)  => {
    const { placeholder, name, error, register, type,  privateClass } = prop;
    return (
      <textarea
        type={type}
        name={name}
        id={name}
        autoComplete="off"
        placeholder={placeholder}
        className={`${error ? 'inputTextElementError' : 'inputTextElement'}  ${privateClass}`}
        {...register}
      />
    );
  }
  export default TextAreaElement;