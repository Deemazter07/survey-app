import "./radiobutton.scss";

export interface RadioButtonInterface {
  name: string;
  id: string;
  value: number;
  text: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  disabled?: boolean;
}

function RadioButton({
  name,
  id,
  value,
  text,
  onChange,
  checked,
  disabled = false,
}: RadioButtonInterface) {
  return (
    <label htmlFor={id} className="radio-label">
      <input
        disabled={disabled}
        name={name}
        id={id}
        className="radio-input"
        type="radio"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className="custom-radio" />
      {text}
    </label>
  );
}

export default RadioButton;
