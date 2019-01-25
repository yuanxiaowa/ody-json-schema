import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialDesignFrameworkModule } from 'angular6-json-schema-form';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';


import { AppComponent } from './app.component';
// import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    // EditorComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignFrameworkModule,
    BrowserAnimationsModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent/* , EditorComponent */]
})
export class AppModule {
}
