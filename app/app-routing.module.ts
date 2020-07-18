import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TempConverterComponent } from './component/temp-converter/temp-converter.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { from } from 'rxjs';
import { userLoginComponent } from './components/user-login/user-login.component';

// Valid URLS for the system
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: userLoginComponent },
  { path: 'converter', component: TempConverterComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'user/profile', component: UserProfileComponent },
  { path: 'todolist', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
