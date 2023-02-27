export class orderData {
    public id: number;
    public userName: string;
    public price: number;
    public status: string;
    public dateNtime: any;
    public profileImage: any;
    constructor(id: number, userName: string, price: number, status: string, dateNtime: any, profileImage: any) {
        this.id = id;
        this.userName = userName;
        this.price = price;
        this.status = status;
        this.dateNtime = dateNtime;
        this.profileImage = profileImage;
    }
}