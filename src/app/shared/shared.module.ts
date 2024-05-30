import { CommonModule } from "@angular/common";
import { NgModule, Type } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SaveBtnComponent } from './components/save-btn/save-btn.component';

const COMMON_COMP_LIST: any[] | Type<any> = [
	SaveBtnComponent
];

@NgModule({
    declarations: [
        COMMON_COMP_LIST,

    ],
	exports: [
		COMMON_COMP_LIST,
		FormsModule,
		ReactiveFormsModule,
	],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    providers: [],
})
export class SharedModule {}
