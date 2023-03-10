export class personalDetails {
  public id: number;
  public userName: string;
  public email: any;
  public contact: number;
  public city: string;
  public address: string;
  public pincode: number;
  public role: string;
  public password: any;
  public reTypePassword: any;
  constructor(
    id: number,
    userName: string,
    email: any,
    contact: number,
    city: string,
    address: string,
    pincode: number,
    role: string
  ) {
    this.id = id;
    this.userName = userName;
    this.email = email;
    this.contact = contact;
    this.city = city;
    this.address = address;
    this.pincode = pincode;
    this.role = role;
  }
}
// export class personalDetails {
//   public firstName: string;
//   public lastName: string;
//   public email: any;
//   public contact: number;
//   public role: string;
//   constructor(
//     firstName: string,
//     lastName: string,
//     email: any,
//     contact: number,
//     role: string
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.contact = contact;
//     this.role = role;
//   }
// }
// export class addressDetails {
//   public city: string;
//   public address: string;
//   public pincode: number;
//   constructor(city: string, address: string, pincode: number) {
//     this.city = city;
//     this.address = address;
//     this.pincode = pincode;
//   }
// }
// export class setPassword {
//   public password: any;
//   public reTypePassword: any;
// }
