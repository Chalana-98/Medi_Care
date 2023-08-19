export interface PhoneNumber {
    id: number;
    userId: number;
    phoneNumber: string;
  }
  
  export interface User {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    nic: string;
    birthday: Date;
    email: string;
    address: string;
    userType: string;
    phoneNumbers: PhoneNumber[];
  }
  