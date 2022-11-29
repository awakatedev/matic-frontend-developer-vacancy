import '../assets/styles/components/inputTextElement.scss'

const InputTextElement = (prop)  => {
    const { placeholder, name, error, register, type,  privateClass } = prop;

    return (
      <input
        type={type}
        name={name}
        id={name}
        autoComplete="off"
        placeholder={placeholder}
        className={`${error ? 'inputTextElementError' : 'inputTextElement'} ${privateClass}`}
        {...register}
      />
    );
  }
  export default InputTextElement;