export type TUserCred = {
  userName?: string | null
  password?: string
  token?: string | null
}

// usuarios
export enum roles {
  User = "User",
  Admin = "Admin",
}

export interface TUser {
  id: number;
  firstName: string;
  password: string;
  role?: roles;
  order?: Order[]
}

export interface TNewUser {
  firstName: string;
  password: string;
  role: roles;
}

// clientes

export interface TCostumer {
  id: number;
  firstName: string;
  secondName?: string;
  lastName: string;
  phone?: string;
  email?: string;
  socials?: string;
  order?: Order[];
}

export type newCostumer = Omit<TCostumer, 'id'>

// esto es para los pedidos
export enum stateOrder {
  Pendiente = "Pendiente",
  Embolsado = "Embolsado",
  Nd = "Nd",
  Retirado = "Retirado",
  Nvm = "Nvm",
  Desarmar = "Desarmar",
  Nlq = "Nlq",
  BajaNd = "BajaNd",
  Desarmado = "Desarmado",
  Nuevo = "Nuevo",
}

export enum noticesType {
  Mail = "Mail",
  Phone = "Phone",
  Wpp = "Wpp",
}

export interface TOrder {
  id: number,
  isbn?: number,
  title: string
  url?: string
  state: stateOrder
  notice?: noticesType
  comment?: string
}

export type TNewOrder = Omit<TOrder, 'id'>