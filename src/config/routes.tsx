import { RouteRecordRaw } from "vue-router";
import { First } from "../components/First";
import { Forth } from "../components/Forth";
import { Second } from "../components/Second";
import { Third } from "../components/Third";
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/Welcome";

export const routes:RouteRecordRaw[] = [
    {path:'/',component:Foo},
    {path:'/about',component:Bar},
    {path:'/welcome',component:Welcome,children:[
        {path:'first',component:First},
        {path:'second',component:Second},
        {path:'third',component:Third},
        {path:'forth',component:Forth},
    ]}
]