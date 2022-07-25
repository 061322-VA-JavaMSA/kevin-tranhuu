import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UsersComponent } from './components/users/users.component';
import { AdminGuard } from './guards/admin.guard';
import { BasicUserGuard } from './guards/basic-user.guard';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'users',
  component: UsersComponent,
  canActivate: [AdminGuard]
}, {
  path: 'tasks',
  component: TasksComponent,
  canActivate: [BasicUserGuard]
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
