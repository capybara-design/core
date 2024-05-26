export interface CoreOptions {
  lastNameUpperCase?: boolean;
}

export function core(firstName: string, lastName: string, options?: CoreOptions) {
  if (options?.lastNameUpperCase) {
    return firstName + ' ' + lastName.toLocaleUpperCase();
  }
  return firstName + ' ' + lastName;
}
