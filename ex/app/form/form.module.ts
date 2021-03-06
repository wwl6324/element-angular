import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FormRoutingModule } from './form.routing'
import { ElModule } from '../../../src/index'
import { ExSharedModule } from '../shared/module'

import { ExFormMainComponent } from './main/main.component'
import { ExRadioComponent } from './radio/radio.component'
import { ExCheckboxComponent } from './checkbox/checkbox.component'
import { ExInputComponent } from './input/input.component'
import { ExInputNumberComponent } from './input-number/input-number.component'
import { ExSelectComponent } from './select/select.component'
import { ExSwitchComponent } from './switch/switch.component'
import { ExRateComponent } from './rate/rate.component'
import { ExCascaderComponent } from './cascader/cascader.component'
import { ExDatePickerComponent } from './date-picker/date-picker.component'
import { ExSliderComponent } from './slider/slider.component'
import { ExUploadComponent } from './upload/upload.component'

@NgModule({
  declarations: [
    ExFormMainComponent,
    ExRadioComponent,
    ExCheckboxComponent,
    ExInputComponent,
    ExInputNumberComponent,
    ExSelectComponent,
    ExSwitchComponent,
    ExRateComponent,
    ExCascaderComponent,
    ExDatePickerComponent,
    ExSliderComponent,
    ExUploadComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
    ElModule,
    ExSharedModule,
  ],
  exports: [ExFormMainComponent],
  providers: [],
})
export class FormModule {
}
