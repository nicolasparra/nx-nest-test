export class RegisterDto {
  email: string;
  name: string;
  password: string;
  address: AddressDto;
}

export class AddressDto {
  street: string;
  city: string;
  country: string;
}
