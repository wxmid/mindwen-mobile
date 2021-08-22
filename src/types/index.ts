export interface router {
    path:string,
    component:any,
    children?:Array<router>
}
