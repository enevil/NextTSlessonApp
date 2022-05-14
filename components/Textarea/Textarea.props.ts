import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export default interface InputProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: FieldError;
}
