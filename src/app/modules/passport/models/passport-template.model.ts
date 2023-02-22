export enum PassportVariables {
	name_of_the_educational_institution = "name_of_the_educational_institution",
	the_last_two_digits_of_the_year = "the_last_two_digits_of_the_year"
}

export class PassportTemplate {
	[PassportVariables.name_of_the_educational_institution]: string;
	[PassportVariables.the_last_two_digits_of_the_year]: string = `${
		new Date().getFullYear() % 100
	}`;
}
