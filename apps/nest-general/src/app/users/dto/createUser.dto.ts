export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  address: Address;
}

export class Address {
  street: string;
  city: string;
  country: string;
}
