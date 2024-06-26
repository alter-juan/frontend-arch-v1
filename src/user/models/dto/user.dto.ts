interface AddressDto {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoDto;
}

interface GeoDto {
  lat: string;
  lng: string;
}

interface CompanyDto {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserDto {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressDto;
  phone: string;
  website: string;
  company: CompanyDto;
}
