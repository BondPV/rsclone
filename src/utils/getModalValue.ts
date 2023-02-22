import { IdMap } from '../constants/htmlConstants';

export function getSelectedValue(id: string): string {
  const selectElem = document.querySelector(`#${id}`) as HTMLSelectElement;
  return selectElem.value;
}

export function getDateValue(): Date {
  const dateElem = document.querySelector(`#${IdMap.dateValue}`) as HTMLInputElement;
  const date = dateElem.value ? new Date(dateElem.value) : new Date();

  return date;
}

export function getSum(): number {
  const sumInput = document.querySelector(`#${IdMap.sumInput}`) as HTMLInputElement;
  return Number(sumInput.value);
}

export function getComment(): string {
  const commentElem = document.querySelector(`#${IdMap.comment}`) as HTMLTextAreaElement;
  return commentElem.value;
}