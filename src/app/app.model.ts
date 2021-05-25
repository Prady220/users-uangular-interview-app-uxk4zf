export class User {
  constructor(public name: string, public address: Address) {}
}

export class Address {
  constructor(
    public street: string,
    public suite: string,
    public city: string,
    public zipcode: string
  ) {}
}
