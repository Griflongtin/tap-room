import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { EditKegsComponent } from './edit-kegs/edit-kegs.component';
import { NewKegsComponent } from './new-kegs/new-kegs.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { Filter2Pipe } from './filter2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    EditKegsComponent,
    NewKegsComponent,
    FilterPipe,
    Filter2Pipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
