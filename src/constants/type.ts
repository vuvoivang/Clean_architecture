export type InnerHtml = string;
export type Image = string;

export type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> &
  Pick<T, TRequired>;
