import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PipePipe } from './pipe.pipe';
import { FilterPipe } from './filter.pipe';
import { filter } from 'rxjs';
import { SortDataPipe } from './sort-data.pipe';

@NgModule({
  declarations: [FilterPipe, SortDataPipe],
  imports: [CommonModule],
  exports: [FilterPipe, SortDataPipe],
})
export class SharedModule {}
