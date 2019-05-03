import { MatInputModule} from '@angular/material';
import { MatSelectModule} from '@angular/material';
import { MatButtonModule} from '@angular/material';
import { MatTabsModule} from '@angular/material';
import { MatTableModule} from '@angular/material';
import { MatPaginatorModule} from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';




import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule
   


  ],
  exports: [
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule
 

  ]
})

export class MaterialModule{ }

