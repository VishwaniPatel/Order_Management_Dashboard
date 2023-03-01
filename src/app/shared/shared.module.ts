import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PipePipe } from './pipe.pipe';
import { FilterPipe } from './filter.pipe';
import { filter } from 'rxjs';

@NgModule({
  declarations: [FilterPipe],
  imports: [CommonModule],
  exports: [FilterPipe],
})
export class SharedModule {}
