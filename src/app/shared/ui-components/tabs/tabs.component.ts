import {AfterViewInit, Component, EventEmitter, Injector, Input, input, OnInit, Output} from "@angular/core";
import { TabItem, Tabs, TabsInterface, TabsOptions } from "flowbite";
import { BaseComponent } from "../../base-component";
import {NgClass, NgIf} from "@angular/common";

@Component({
	selector: "app-tabs",
	standalone: true,
	imports: [
		NgIf,
		NgClass
	],
	templateUrl: "./tabs.component.html",
})
export class TabsComponent extends BaseComponent implements OnInit, AfterViewInit {
	@Input() tabsArr: any = [];
	@Input() isHorizontalTabs = true;
	@Input() showIcon = false;
	@Output() currentTab = new EventEmitter();
	tabElements: TabItem[] = [];
	tabs: TabsInterface | undefined;
	selectedTabId: string;
	trackingTabId: number;
	options: TabsOptions = {
		defaultTabId: "1",
		activeClasses: "text-white hover:text-blue-300 dark:text-white dark:hover:text-white border-blue-600 dark:border-white dark:bg-gray-700",
		inactiveClasses: "text-white hover:text-blue-300 dark:text-gray-200 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300 dark:hover:border-gray-300",
		onShow: (res) => {
			console.log(res);
			this.selectedTabId = res._activeTab.id;
			this.currentTab.emit(this.selectedTabId);
		},
	};

	constructor(injector: Injector) {
		super(injector);
	}

	ngOnInit() {

	}

	getTabElements(): void {
		// Initialize tab elements
		for (let tabsArrElement of this.tabsArr) {
			this.tabElements.push({
				id: tabsArrElement.tabElementId,
				triggerEl: document.querySelector(tabsArrElement.triggerEl),
				targetEl: document.querySelector(tabsArrElement.targetEl),
			});
		}
		const tabsElement = document.getElementById(this.isHorizontalTabs ? 'horizontal-tab' : 'vertical-tab');
		this.tabElements = this.tabElements.filter(item => item.triggerEl && item.targetEl);
		this.tabs = new Tabs(tabsElement, this.tabElements, this.options);

	}

	ngAfterViewInit(): void {
		this.getTabElements();
	}

	showTab(tabId: string): void {
		if (this.tabs) {
			this.trackingTabId = Number(this.selectedTabId);
			this.trackingTabId++;
			if (this.tabs._items.length >= this.trackingTabId) {
				this.tabs.show(this.trackingTabId.toString());
			}
		} else {
			console.error("Tabs instance is not initialized.");
		}
	}
}
