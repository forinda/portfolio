import type { HTMLAttributes } from "vue";

type FormFieldTag = "input" | "select" | "textarea" | "button" | "option";
type FormFieldInputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "date"
  | "datetime-local"
  | "time"
  | "month"
  | "week"
  | "color"
  | "range"
  | "tel"
  | "url"
  | "search"
  | "file"

type ExtraFormInputProps = Attr & {
  [key: string]: any;
};
export type FormFieldType = {
  name: string;
  type?: FormFieldInputType;
  label?: string;
  placeholder?: string;
  id?: string;
  as: FormFieldTag;
  children?: FormFieldType[];
} & HTMLAttributes;

export type GenericFormField<T = any> = {
  [K in keyof T]: FormFieldType;
}[keyof T];
