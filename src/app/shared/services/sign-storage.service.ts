import { Injectable } from "@angular/core";
import { SignStorageItem } from "../models/sign-storage-item";
import { KeyValue, KeyValuePipe } from "@angular/common";

@Injectable({
	providedIn: "root"
})
export class SignStorageService {
	private storage = new Map<string, SignStorageItem>();
	constructor(private keyValuePipe: KeyValuePipe) {}

	public keyvalue(): Array<KeyValue<string, SignStorageItem>> {
		return this.keyValuePipe.transform(this.storage);
	}

	public add(key, title): void {
		let value = this.storage.get(key);
		if (value) {
			value.count++;
		} else {
			this.storage.set(key, {
				count: 1,
				title: title
			});
		}
	}

	public remove(key) {
		let value = this.storage.get(key);

		if (!value) {
			return;
		}

		if (value.count > 1) {
			value.count--;
		} else {
			this.storage.delete(key);
		}
	}

	public clear() {
		console.log("sign storage - clear");
		this.storage.clear();
	}
}
