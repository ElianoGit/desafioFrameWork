import { Observable } from "rxjs";

interface IAddressGeo {
    lat: string
    lng: string
}

interface IUserAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: IAddressGeo
}

interface IUserCompany {
    bs: string
    catchPhrase: string
    name: string
}
export interface IResourceUser {
    id: number
    name: string
    username: string
    email: string
    address: IUserAddress
    phone: string
    website: string    
    company: IUserCompany
}

export abstract class UserData {
    abstract getUsers(): Observable<string | Array<IResourceUser>>
}