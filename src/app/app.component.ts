import { Component, OnInit } from '@angular/core';
import { WidgetLibraryService } from 'angular6-json-schema-form';
// import { EditorComponent } from './editor/editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ody-json-schema';

  constructor(public s: WidgetLibraryService) {
  }

  options = {
    defautWidgetOptions: {
      validationMessages: {
        required: '请填写该项',
        minLength: '最少输入{{minimumLength}}字符',
        maxLength: '最多输入{{maximumLength}}字符',
        pattern: '输入格式不正确',
        format: '输入格式不正确',
        minimum: '不能低于{{minimumValue}}',
        maximum: '不能高于{{maximumValue}}',
        multipleOf: '只能为{{multipleOfValue}}的倍数',
        minItems: '最少{{minimumItems}}项',
        maxItems: '最多{{maximumItems}}项',
        uniqueItems: '不能包含重复项'
      }
    }
  }

  widgets = {
    // 'editor': EditorComponent
  }

  schema = null
  layout = []
  data = null

  /* schema = {
    type: 'object',
    properties: {
      a: {
        title: 'a',
        type: 'string'
      }
    }
  }
  layout = [{
    key: 'a',
    type: 'editor'
  }]
  data = {} */

  ngOnInit() {
    // console.log(this.schema)
    // console.log(window.s = this.s.getAllWidgets())
    window.addEventListener('message', ({ data }) => {
      if (!data.schema) {
        return
      }
      this.schema = data.schema
      this.layout = data.layout
      this.data = data.data
    })
  }
  onSubmit(formData) {
    window.parent.postMessage({
      formData
    }, '*')
  }
}
