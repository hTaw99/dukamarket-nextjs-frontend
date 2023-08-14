import React, { useMemo } from "react";

const OtpInput = ({ valueLength, onChange, value }) => {
  const RE_DIGIT = new RegExp(/^\d+$/);
  const valueItems = useMemo(() => {
    const valueArray = value.split("");
    const items = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [value, valueLength]);

  const focusToNextInput = (target) => {
    const nextElementSibling = target.nextElementSibling;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };
  const focusToPrevInput = (target) => {
    const previousElementSibling = target.previousElementSibling;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const inputOnChange = (e, idx) => {
    const isTargetValueDigit = RE_DIGIT.test(e.target.value);

    if (!inputOnChange && e.target.value !== "") {
      return;
    }

    e.target.value = isTargetValueDigit ? e.target.value : " ";

    const targetValueLength = e.target.value.length;
    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, idx) + e.target.value + value.substring(idx + 1);
      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      focusToNextInput(e.target);
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);
      target.blur();
    }
  };

  const inputOnKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      return focusToNextInput(e.target);
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      return focusToPrevInput(e.target);
    }

    e.target.setSelectionRange(0, e.target.value.length);

    if (e.key !== "Backspace" || e.target.value !== "") {
      return;
    }
    focusToPrevInput(e.target);
  };

  
  const inputOnFocus = (e) => {
    const { target } = e;

    const prevInputEl = target.previousElementSibling;

    if (prevInputEl && prevInputEl.value === "") {
      return prevInputEl.focus();
    }

    // target.setSelectionRange(0, target.value.length);
  };

  return (
    <div className="flex justify-center gap-4">
      {valueItems.map((digit, idx) => (
        <input
          key={idx}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={valueLength}
          className="relative block text-center w-full appearance-none rounded-md  border 
          outline-none border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
          value={digit}
          onChange={(e) => inputOnChange(e, idx)}
          onKeyDown={inputOnKeyDown}
          onFocus={inputOnFocus}
        />
      ))}
    </div>
  );
};

export default OtpInput;
