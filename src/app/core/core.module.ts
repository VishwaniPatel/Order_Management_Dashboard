import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MasterComponent } from './master/master.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from '../dashboard/service/auth.service';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, MasterComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, SidebarComponent],
  providers: [UserService, AuthGuard, AuthService],
})
export class CoreModule {}
