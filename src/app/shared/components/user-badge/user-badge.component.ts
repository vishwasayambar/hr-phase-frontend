import {Component, Injector, Input, OnInit} from '@angular/core';
import {BaseComponent} from "../../base-component";
import {Employee} from "../../models/employee";
import {COMPONENT_SIZES} from "../../constants/constant";

@Component({
	selector: 'app-user-badge',
	templateUrl: './user-badge.component.html',
	styleUrl: './user-badge.component.scss'
})
export class UserBadgeComponent extends BaseComponent implements OnInit {
	@Input() user: Employee;
	@Input() iconOnly = true;
	@Input() isOnProfilePage = false;
	@Input() size = COMPONENT_SIZES.DEFAULT;
	@Input() isUserTextOnly = false;
	@Input() isClickable = true;
	@Input() isVisibleOriginalName = false;
	isShowAvatar = false;
	isHovering = false;
	isShowProfileImage = false;
	displayIconText = '';
	colors = [
		"#1abc9c",
		"#2ecc71",
		"#3498db",
		"#9b59b6",
		"#34495e",
		"#16a085",
		"#27ae60",
		"#2980b9",
		"#8e44ad",
		"#2c3e50",
		"#f1c40f",
		"#e67e22",
		"#e74c3c",
		"#ecf0f1",
		"#95a5a6",
		"#f39c12",
		"#d35400",
		"#c0392b",
		"#bdc3c7",
		"#7f8c8d",
	];
	backgroundColor = "";
	
	constructor(injector: Injector) {
		super(injector);
	}
	
	get userName() {
		if (this.isVisibleOriginalName) {
			return this.user?.name ?? '';
		}
		return this.user["display_name"] ?? this.user?.name;
	}
	
	ngOnInit() {
		if (this.user?.avatar) {
			this.isShowAvatar = true;
		} else {
			const matches = this.userName.match(/\b(\w)/g);
			this.displayIconText = matches.join("").substr(0, 2).toUpperCase();
			this.backgroundColor = this.colors[this.nameFromText(this.displayIconText) % this.colors.length];
		}
		// this.createRouterLink();
	}
	
	nameFromText(text: string) {
		// nameFromText("AA");
		const charCodes = text
			.split("") // => ["A", "A"]
			.map(char => char.charCodeAt(0)) // => [65, 65]
			.join(""); // => "6565"
		
		return parseInt(charCodes, 10);
	}
	
}
