export class User{
    constructor(
        public userId?:string,
        public name?:string,
        public email?:string,
        public phone?:string,
        public address?:string,
        public city?:string,
        public state?:string,
        public zip?:string,
        public password?:string,
    ){}
}