
export function echo<T>(value: T): T {
  return value;
}


export function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}


export interface Box<T> {
  value: T;
}


export function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}


export function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}


export interface ApiResponse<T> {
  status: number;
  data: T;
}


export function printLength<T extends { length: number }>(item: T): T {
  console.log(item.length);
  return item;
}


export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItems(): T[] {
    return this.data;
  }
}

export function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter(condition);
}

export interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

export interface AsyncState<T> {
  isLoading: boolean;
  data: T | null;
  error: string | null;
}




