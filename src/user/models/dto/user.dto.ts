export interface UserDto {
  id: string
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
}

export interface UserDtoFromSocialMedia {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}