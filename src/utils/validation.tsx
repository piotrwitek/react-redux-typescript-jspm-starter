export function isInputFocused(target: Element) {
  return target === document.activeElement;
}

export function isNotValidCurrency(value: string) {
  if (value && (isNaN(parseFloat(value)) || !/^[0-9,.\s]+$/.test(value))) return true;

  const parts = value.toString().split('.');
  if (parts.length > 2) return true;

  const decimal = parts[1];
  return decimal && decimal.length > 2;
}

export function validateStatusCode(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return true;
  } else {
    throw new Error(response.statusText);
  }
}
