import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
	selector: "[appHover]",
	standalone: true
})
export class HoverDirective {
	@Input("appHover") targetId: string;
	private popoverElement: HTMLElement;
	private isInside: boolean = false;

	constructor(private el: ElementRef) {
	}

	@HostListener("mouseenter") onMouseEnter() {
		this.togglePopover(true);
		this.isInside = true;
	}

	@HostListener("mouseleave") onMouseLeave() {
		this.isInside = false;
		setTimeout(() => this.checkMousePosition(), 100);
	}

	private checkMousePosition() {
		if (!this.isInside) {
			this.togglePopover(false);
		}
	}

	private togglePopover(show: boolean) {
		this.popoverElement = document.getElementById(this.targetId);
		if (this.popoverElement) {
			if (show) {
				this.popoverElement.classList.remove("invisible", "opacity-0");
				this.popoverElement.classList.add("visible", "opacity-100");
				this.addPopoverListeners();
			} else {
				this.popoverElement.classList.remove("visible", "opacity-100");
				this.popoverElement.classList.add("invisible", "opacity-0");
				this.removePopoverListeners();
			}
		}
	}

	private addPopoverListeners() {
		this.popoverElement.addEventListener("mouseenter", this.onPopoverMouseEnter);
		this.popoverElement.addEventListener("mouseleave", this.onPopoverMouseLeave);
	}

	private removePopoverListeners() {
		this.popoverElement.removeEventListener("mouseenter", this.onPopoverMouseEnter);
		this.popoverElement.removeEventListener("mouseleave", this.onPopoverMouseLeave);
	}

	private onPopoverMouseEnter = () => {
		this.isInside = true;
	};

	private onPopoverMouseLeave = () => {
		this.isInside = false;
		setTimeout(() => this.checkMousePosition(), 100);
	};
}
