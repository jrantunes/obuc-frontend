import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  useState
} from "react";
import { FiX } from "react-icons/fi";

import * as S from "./styles";

export type ItemsFieldProps = {
  onInputChange?: (value: string) => void;
  onUpdateItems?: (updatedItems: string[]) => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  label?: string;
  labelFor?: string;
  initialValue?: string;
  initialItems?: string[];
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const ItemsField = ({
  onInputChange,
  onUpdateItems,
  label,
  error,
  labelFor = "",
  initialValue = "",
  initialItems = [],
  disabled = false,
  ...props
}: ItemsFieldProps) => {
  const [value, setValue] = useState(initialValue);
  const [items, setItems] = useState(initialItems);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  const handleRemoveItemByIndex = (index: number) => {
    const updatedItems = [...items];

    updatedItems.splice(index, 1);

    setItems(updatedItems);

    onUpdateItems && onUpdateItems(updatedItems);
  };

  const handleAddNewItem = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (value === "") return;

      const newItems = [...items, value];

      setItems(newItems);

      onUpdateItems && onUpdateItems(newItems);

      setValue("");
    }
  };

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      <S.InputWrapper>
        <S.InputContent hasLabel={!!label}>
          {items.length > 0 && (
            <S.ItemsContainer>
              {items.map((item, index) => (
                <S.Tag key={index}>
                  {item}
                  <button
                    type="button"
                    onClick={() => handleRemoveItemByIndex(index)}
                  >
                    <FiX />
                  </button>
                </S.Tag>
              ))}
            </S.ItemsContainer>
          )}
          <S.Input
            id={labelFor}
            disabled={disabled}
            hasValue={!!value || items.length > 0}
            hasLabel={!!label}
            onChange={onChange}
            value={value}
            autoComplete="off"
            onKeyDown={handleAddNewItem}
            {...props}
          />
        </S.InputContent>
        {!!label && (
          <S.Label
            aria-hidden={!value}
            hasValue={!!value || items.length > 0}
            htmlFor={labelFor}
          >
            {label}
          </S.Label>
        )}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default ItemsField;
