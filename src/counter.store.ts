import { makeAutoObservable } from 'mobx';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  count = 0;

  inc = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-unused-expressions
    this.count++;
  };

  dec = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-unused-expressions
    this.count--;
  };

  get double(): number {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    return this.count * 2;
  }
}

const counterStore = new Store();
export { counterStore };
