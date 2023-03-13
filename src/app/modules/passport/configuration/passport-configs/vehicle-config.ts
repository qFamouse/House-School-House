import { VehicleVariables } from "../passport-variables/vehicle-variables";
import { PassportConfigurationModel } from "../../models/passport-configuration.model";

export type VehicleConfig = {
	[variable in VehicleVariables]: PassportConfigurationModel;
};

export const vehicleConfig: VehicleConfig = {
	[VehicleVariables.brand]: {
		title: "1. Общие сведения",
		text: "Модель",
		maxLength: 58
	},
	[VehicleVariables.model]: {
		text: "Марка",
		maxLength: 57
	},
	[VehicleVariables.registration_mark]: {
		text: "Регистрационный знак",
		maxLength: 29
	},
	[VehicleVariables.year_of_release]: {
		text: "Год выпуска",
		maxLength: 17,
		isNumber: true
	},
	[VehicleVariables.number_of_passenger_seats]: {
		text: "Количество пассажирских мест",
		maxLength: 11
	},
	[VehicleVariables.compliance_of_the_design_with_the_requirements_for_school_buses]: {
		text: "Соответствие конструкции требованиям, предъявляемым к школьным автобусам",
		maxLength: 122
	},

	[VehicleVariables.first_bus_driver__full_name]: {
		title: "2. Сведения о водителе(ях) автобуса(ов)",
		text: "Имя, фамилия, отчество"
	},
	[VehicleVariables.first_bus_driver__age]: {
		text: "Возраст"
	},
	[VehicleVariables.first_bus_driver__date_of_employment]: {
		text: "Дата принятия на работу"
	},
	[VehicleVariables.first_bus_driver__driving_experience_of_a_category_d_vehicle]: {
		text: "Стаж вождения ТС категории D"
	},
	[VehicleVariables.first_bus_driver__date_of_the_upcoming_medical_examination]: {
		text: "Дата предстоящего медицинского осмотра"
	},
	[VehicleVariables.first_bus_driver__traffic_violations_committed]: {
		text: "Допущенные нарушения ПДД"
	},
	[VehicleVariables.second_bus_driver__full_name]: {
		text: "Имя, фамилия, отчество"
	},
	[VehicleVariables.second_bus_driver__age]: {
		text: "Возраст"
	},
	[VehicleVariables.second_bus_driver__date_of_employment]: {
		text: "Дата принятия на работу"
	},
	[VehicleVariables.second_bus_driver__driving_experience_of_a_category_d_vehicle]: {
		text: "Стаж вождения ТС категории D"
	},
	[VehicleVariables.second_bus_driver__date_of_the_upcoming_medical_examination]: {
		text: "Дата предстоящего медицинского осмотра"
	},
	[VehicleVariables.second_bus_driver__traffic_violations_committed]: {
		text: "Допущенные нарушения ПДД"
	},

	[VehicleVariables.the_official_responsible_for_ensuring_road_safety_and_vehicle_operation__full_name]: {
		title: "3. Организационно-техническое обеспечение",
		text: "Должностное лицо, ответственное за обеспечение безопасности дорожного движения и эксплуатацию ТС) (ФИО)",
		maxLength: 46
	},
	[VehicleVariables.the_official_responsible_for_ensuring_road_safety_and_vehicle_operation__date_of_appointment]: {
		text: "Назначено (дата)",
		maxLength: 49
	},

	[VehicleVariables.pre_trip_medical_examination__performs]: {
		text: "Организация проведения предрейсового медицинского обследования: осуществляет (Ф.И.О. специалиста)",
		maxLength: 52
	},
	[VehicleVariables.pre_trip_medical_examination__on_the_basis_of]: {
		text: "На основании",
		maxLength: 52
	},
	[VehicleVariables.pre_trip_medical_examination__valid_until]: {
		text: "Действительного до (дата)",
		maxLength: 46
	},

	[VehicleVariables.control_over_the_technical_condition_and_design_of_the_vehicle__performs]: {
		text: "Контроль за соответствием технического состояния и конструкции ТС осуществляет",
		maxLength: 52
	},
	[VehicleVariables.control_over_the_technical_condition_and_design_of_the_vehicle__on_the_basis_of]: {
		text: "На основании",
		maxLength: 52
	},
	[VehicleVariables.control_over_the_technical_condition_and_design_of_the_vehicle__valid_until]: {
		text: "Действительного до (дата)",
		maxLength: 46
	},

	[VehicleVariables.date_of_the_next_state_inspection]: {
		text: "Дата очередного гостехосмотра",
		maxLength: 86
	},
	[VehicleVariables.bus_parking_place_during_nonworking_hours]: {
		text: "Место стоянки автобуса в нерабочее время",
		maxLength: 83
	},
	[VehicleVariables.measures_to_prevent_unauthorized_use]: {
		text: "Меры, исключающие несанкционированное использование",
		maxLength: 142
	},

	[VehicleVariables.bus_owner__legal_address]: {
		title: "4. Сведения о владельце автобуса",
		text: "Юридический адрес собственника",
		maxLength: 33
	},
	[VehicleVariables.bus_owner__actual_address]: {
		text: "Фактический адрес собственника",
		maxLength: 35
	},
	[VehicleVariables.bus_owner__phone_of_responsible_person]: {
		text: "Телефон ответственного лица",
		maxLength: 38
	}
};
