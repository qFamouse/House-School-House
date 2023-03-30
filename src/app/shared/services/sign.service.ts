import { Injectable } from "@angular/core";
import { NgxCsvParser } from "ngx-csv-parser";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, first, firstValueFrom, map, Observable } from "rxjs";
import { Sign } from "../models/sign";

@Injectable({
	providedIn: "root"
})
export class SignService {
	private signs = new BehaviorSubject<Map<number, Sign>>(null);

	public getAll(): Observable<Map<number, Sign>> {
		return this.signs.asObservable();
	}

	// public getById(id: number): Observable<Sign> {
	// 	return this.signs.pipe(map(sings => sings.get(id)));
	// }

	constructor(private csvParser: NgxCsvParser, private httpClient: HttpClient) {
		this.init();
	}

	async init(): Promise<void> {
		// Initialize local sign storage
		let csvFile = await firstValueFrom(this.getCsvFile());
		let csvRecords = await firstValueFrom(this.parseCsvFile(csvFile));
		this.assignCsvRecord(csvRecords);
	}

	private getCsvFile(): Observable<File> {
		return this.httpClient
			.get("assets/signs/signs.csv", { responseType: "text" })
			.pipe(
				first(),
				map(data => new File([data], "signs.csv"))
			);
	}

	private parseCsvFile(file: File): Observable<any> {
		return this.csvParser.parse(file, {
			header: false,
			delimiter: ";",
			encoding: "utf8"
		});
	}

	private assignCsvRecord(records: any[]) {
		let signs = new Map<number, Sign>();

		records.forEach(record => {
			let id = record[0];

			let sign: Sign = {
				number: record[1],
				title: record[2],
				explanation: record[3]
			};

			if (signs.has(id)) {
				throw new Error("Violation of unique key constraint");
			}

			signs.set(id, sign);
		});

		this.signs.next(signs);
	}
}
