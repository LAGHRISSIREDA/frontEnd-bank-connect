import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin/admin.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ClientComponent } from "./client/client/client.component";
import { HomeComponent } from "./home/home.component";

const routes : Routes = [
    {path : '' ,   component : HomeComponent},
    {path : 'admin' ,   component : AdminComponent},
    {path : 'client' ,   component : ClientComponent},
    {path : 'login' ,   component : LoginComponent},
    {path : 'register' ,   component : RegisterComponent},


]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule],
})

export class AppRoutingModule{
    

}