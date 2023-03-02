import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, SidebarComponent],
  providers: [UserService],
})
export class CoreModule {}
