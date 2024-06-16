import { Component, EventEmitter, forwardRef, Injector, Input, OnInit, Output } from "@angular/core";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { BaseComponent } from "../../base-component";
import { RoleService } from "../../services/role.service";

@Component({
	selector: "app-user-role-dropdown",
	standalone: true,
	imports: [
		ReactiveFormsModule,
		FormsModule
	],
	templateUrl: "./user-role-dropdown.component.html",
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UserRoleDropdownComponent),
			multi: true,
		},
	],
})
export class UserRoleDropdownComponent extends BaseComponent implements OnInit, ControlValueAccessor {
	@Input() isEditMode = true;
	@Input() isFilter = false;
	@Input() placeholder = "Role";
	@Input() id = "role";
	@Output() itemClick: EventEmitter<any> = new EventEmitter();
	roles: any = [];

	constructor(injector: Injector, private service: RoleService) {
		super(injector);
	}

	// eslint-disable-next-line @angular-eslint/no-input-rename
	@Input("value") _value: any = null;

	get value() {
		return this._value;
	}

	set value(val) {
		this._value = val;
		this.onChange(val);
		this.onTouched();
	}

	ngOnInit(): void {
		this.service.getRoles().subscribe({
			next: (res) => {
				this.roles = res;
				this.value = res[0].id;
			},
		});
	}

	onChange: any = () => {
	};

	onTouched: any = () => {
	};

	registerOnChange(fn: any) {
		this.onChange = fn;
	}

	writeValue(value: any) {
		this.value = value;
	}

	registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	onValueChange(event: Event) {
		this.value = (event.target as HTMLSelectElement).value;
		this.itemClick.emit(this.value);
	}
}
