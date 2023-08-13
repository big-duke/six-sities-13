import { useState } from 'react';

export interface Toggle {
  state: boolean;
  toggle(): void;
  turnOff(): void;
  turnOn(): void;
  set(value: boolean): void;
}

export const useToggle = (defaultValue = false): Toggle => {
  const [state, setState] = useState(defaultValue);

  const toggle = () => setState((prevState) => !prevState);

  const turnOff = () => setState(false);

  const turnOn = () => setState(true);

  const set = (value: boolean) => {
    setState(value);
  };

  return {
    state,
    toggle,
    turnOff,
    turnOn,
    set,
  };
};
