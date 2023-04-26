import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class FavouriteSignService extends Set<number> {
	constructor() {
		super();

		let favouriteJSON = localStorage.getItem("favourite_markers");

		(JSON.parse(favouriteJSON) as Array<number>)?.forEach(value => {
			this.add(value);
		});
	}

	private savePoint(): any {
		localStorage.setItem(
			"favourite_markers",
			JSON.stringify(Array.from(this.values()))
		);
	}

	public addOrDelete(value: number) {
		return this.has(value) ? this.delete(value) : this.add(value);
	}

	override add(value: number) {
		return super.add(value) && this.savePoint();
	}

	override delete(value: number): boolean {
		return super.delete(value) && this.savePoint();
	}
}
