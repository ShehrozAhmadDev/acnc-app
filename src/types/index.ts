export interface IMenuItem {
    _id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    isFeatured: boolean;
    createdBy: IUser;

}

export interface IUser {
    _id: string;
    name: string;
    email: string;
    category: string;
    price: number;
    verified: boolean;
    createdAt: Date | number;
    updatedAt: Date | number;
}



export interface ICartItem {
    item: IMenu,
    quantity: number;
    addOns: { addOnId: IAddOnItem; quantity: number }[]
}


export interface IOrders {
    _id?: string;
    startTime?: string | Date;
    endTime?: string | Date;
    address: string;
    status?: string;
    phone: string;
    city: string;
    item?: {menuItem: IMenu, quantity: number, addOns: { addOnId: IAddOnItem; quantity: number }[]}[]
    createdBy?: IUser;
    createdAt?: string | Date;
    updatedAt?: string | Date;
  }
  

  export interface IAddOnItem {
    _id: string;
    name: string,
    description: string,
    category: string,
    price: number,
    createdBy: string | IUser,
    imageUrl?: string;

  }

  export interface IMenu {
    _id?: string;
    name: string;
    description: string;
    category: string;
    price: number;
    isFeatured: boolean;
    createdAt?: Date | string;
    quantity: number;
    imageUrl?: string;
}
