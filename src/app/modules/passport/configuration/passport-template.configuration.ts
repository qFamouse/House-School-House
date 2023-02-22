import { PassportVariables } from "../models/passport-template.model";

type PassportTemplateConfiguration = {
	[variable in PassportVariables]: {
		maxLength: number;
	};
};

export const passportTemplateConfigurations: PassportTemplateConfiguration = {
	[PassportVariables.name_of_the_educational_institution]: {
		maxLength: 53
	},
	[PassportVariables.the_last_two_digits_of_the_year]: {
		maxLength: 2
	}
};
