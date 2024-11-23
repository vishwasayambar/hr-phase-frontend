import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {BaseComponent} from "../../base-component";

@Component({
	selector: "app-save-btn",
	templateUrl: "./save-btn.component.html",
})
export class SaveBtnComponent extends BaseComponent {
	@Input() isSaving = false;
	@Input() savingText = "Saving...";
	@Input() saveText = "Save";
	@Input() isOnPopup = false;
	@Input() icon = "save";
	@Input() type = "submit";
	@Input() gaEvent = "create_event_analytics";
	@Input() height = 35;
	@Input() width: number | string = "auto";
	@Input() class = "";
	@Input() isDisabled = false;
	@Input() id = "save-button";
	@Output() saveBtnClick: EventEmitter<any> = new EventEmitter();
	
	constructor(injector: Injector) {
		super(injector);
	}
	
	onSave() {
		this.saveBtnClick.emit();
	}
}
