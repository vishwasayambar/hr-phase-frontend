import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-save-btn",
	templateUrl: "./save-btn.component.html",
})
export class SaveBtnComponent {
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

	onSave() {
		this.saveBtnClick.emit();
	}
}
