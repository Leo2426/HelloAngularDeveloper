export class Developer {
  firstname: string;
  lastname: string;
  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullname(): string {
    return `${this.firstname} ${this.lastname}`.trim();
  }
}
