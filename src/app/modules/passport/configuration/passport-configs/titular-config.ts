import { TitularVariables } from "../passport-variables/titular-variables";
import { PassportConfigurationModel } from "../../models/passport-configuration.model";

export type TitularConfig = {
	[variable in TitularVariables]: PassportConfigurationModel;
};

export const titularConfig: TitularConfig = {
	[TitularVariables.name_of_the_educational_institution]: {
		text: "Наименование учреждения образовани",
		maxLength: 53,
		required: true
	},
	[TitularVariables.year]: {
		text: "Год",
		maxLength: 4,
		minLength: 4,
		required: true,
		isNumber: true
	}
};
