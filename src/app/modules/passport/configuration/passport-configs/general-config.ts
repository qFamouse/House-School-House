import { GeneralVariables } from "../passport-variables/general-variables";
import { PassportConfigurationModel } from "../../models/passport-configuration.model";

export type GeneralConfig = {
	[variable in GeneralVariables]: PassportConfigurationModel;
};

export const generalConfig: GeneralConfig = {
	[GeneralVariables.full_name_of_the_educational_institution]: {
		text: "Полное наименование учреждения образования",
		maxLength: 192,
		required: true
	},
	[GeneralVariables.type_of_educational_institution]: {
		text: "Тип учреждения образования",
		maxLength: 34,
		required: true
	},
	[GeneralVariables.legal_address]: {
		text: "Юридический адрес",
		maxLength: 109,
		required: true
	},
	[GeneralVariables.actual_address]: {
		text: "Фактический адрес",
		maxLength: 110,
		required: true
	},
	[GeneralVariables.director_manager__full_name]: {
		text: "Фамилия, имя, отчество директора (заведующего)",
		maxLength: 25,
		required: true
	},
	[GeneralVariables.director_manager__phone]: {
		text: "Номер телефона директора (заведующего)",
		maxLength: 15,
		required: true
	},
	[GeneralVariables.deputy_director_for_academic_affairs__full_name]: {
		text: "Фамилия, имя, отчество заместителя директора по учебной работе",
		maxLength: 27, // перепроверить,
		required: true
	},
	[GeneralVariables.deputy_director_for_academic_affairs__phone]: {
		text: "Номер телефона заместителя директора по учебной работе",
		maxLength: 15,
		required: true
	},
	[GeneralVariables.deputy_director_for_educational_work__full_name]: {
		text: "Фамилия, имя, отчество заместителя директора по воспитательной работе",
		maxLength: 25,
		required: true
	},
	[GeneralVariables.deputy_director_for_educational_work__phone]: {
		text: "Номер телефона заместителя директора по воспитательной работе",
		maxLength: 15,
		required: true
	},
	[GeneralVariables.responsible_employees_for_measures_to_prevent_child_injuries__first__job_title]: {
		title: "Ответственные работники за мероприятия по профилактике детского травматизма:",
		text: "Должность",
		maxLength: 22,
		required: true
	},
	[GeneralVariables.responsible_employees_for_measures_to_prevent_child_injuries__first__full_name]: {
		text: "Фамилия, имя, отчество",
		maxLength: 19,
		required: true
	},
	[GeneralVariables.responsible_employees_for_measures_to_prevent_child_injuries__first__phone]: {
		text: "Номер телефона",
		maxLength: 42,
		required: true
	},
	[GeneralVariables.responsible_employees_for_measures_to_prevent_child_injuries__second__job_title]: {
		text: "Должность",
		maxLength: 22,
		required: true
	},
	[GeneralVariables.responsible_employees_for_measures_to_prevent_child_injuries__second__full_name]: {
		text: "Фамилия, имя, отчество",
		maxLength: 19,
		required: true
	},
	[GeneralVariables.responsible_employees_for_measures_to_prevent_child_injuries__second__phone]: {
		text: "Номер телефона",
		maxLength: 42,
		required: true
	},
	[GeneralVariables.responsible_from_the_department_of_internal_affairs__first__job_title]: {
		title: "Ответственные от ОВД:",
		text: "Должность",
		maxLength: 17,
		required: true
	},
	[GeneralVariables.responsible_from_the_department_of_internal_affairs__first__full_name]: {
		text: "Фамилия, имя, отчество",
		maxLength: 16,
		required: true
	},
	[GeneralVariables.responsible_from_the_department_of_internal_affairs__second__job_title]: {
		text: "Должность",
		maxLength: 17,
		required: true
	},
	[GeneralVariables.responsible_from_the_department_of_internal_affairs__second__full_name]: {
		text: "Фамилия, имя, отчество",
		maxLength: 16,
		required: true
	},
	[GeneralVariables.responsible_from_the_department_of_internal_affairs__phones]: {
		text: "Номера телефонов",
		maxLength: 35
	},
	[GeneralVariables.the_head_or_responsible_employee_of_the_road_maintenance_organization_that_carries_out_the_maintenance_of_the_road_network__full_name]:
		{
			title:
				"Руководитель или ответственный работник дорожно-эксплуатационной организации, осуществляющей содержание улично-дорожной сети",
			text: "Фамилия, имя, отчество",
			maxLength: 21,
			required: true
		},
	[GeneralVariables.the_head_or_responsible_employee_of_the_road_maintenance_organization_that_carries_out_the_maintenance_of_the_road_network__phone]:
		{
			text: "Номера телефона",
			maxLength: 14,
			required: true
		},
	[GeneralVariables.the_head_or_responsible_employee_of_a_road_maintenance_organization_that_carries_out_the_maintenance_of_technical_means_of_traffic_management__full_name]:
		{
			title:
				"Руководитель или ответственный работник дорожно-эксплуатационной организации, осуществляющей содержание технических средств организации дорожного движения",
			text: "Фамилия, имя, отчество",
			maxLength: 21,
			required: true
		},
	[GeneralVariables.the_head_or_responsible_employee_of_a_road_maintenance_organization_that_carries_out_the_maintenance_of_technical_means_of_traffic_management__phone]:
		{
			text: "Номера телефона",
			maxLength: 14,
			required: true
		},
	[GeneralVariables.number_of_students_students_pupils]: {
		text: "Количество обучающихся (учащихся, воспитанников)",
		maxLength: 16,
		required: true,
		isNumber: true
	},
	[GeneralVariables.availability_of_a_corner_for_bdd]: {
		text: "Наличие уголка по БДД (если имеется, указать место расположения)",
		maxLength: 43
	},
	[GeneralVariables.availability_of_a_bdd_cabinet]: {
		text: "Наличие кабинета по БДД (если имеется, указать место расположения)",
		maxLength: 41
	},
	[GeneralVariables.availability_of_a_bdd_center]: {
		text: "Наличие центра по БДД (если имеется, указать место расположения)",
		maxLength: 41
	},
	[GeneralVariables.the_presence_of_a_motor_city_or_a_parking_lot_according_to_the_bdd]: {
		text: "Наличие автогородка или автоплощадки по БДД (указать, что именно и место расположения)",
		maxLength: 38
	},
	[GeneralVariables.the_presence_of_the_yid_squad]: {
		text: "Наличие отряда ЮИД (количество человек)",
		maxLength: 43,
		isNumber: true
	},
	[GeneralVariables.head_of_the_yid_squad__job_title]: {
		title: "Руководитель отряда ЮИД",
		text: "Должность",
		maxLength: 19
	},
	[GeneralVariables.head_of_the_yid_squad__full_name]: {
		text: "Фамилия, имя, отчество",
		maxLength: 19
	},
	[GeneralVariables.head_of_the_yid_squad__phone]: {
		text: "Номера телефона",
		maxLength: 42
	},

	[GeneralVariables.the_presence_and_condition_of_the_fencing_of_the_territory_locking_devices_and_barriers]: {
		text: "Наличие и состояние ограждения территории, запирающих устройств и шлагбаумов (указать)",
		maxLength: 38
	},
	[GeneralVariables.availability_of_a_school_bus_in_an_educational_institution]: {
		text: "Наличие школьного автобуса в учреждении образования",
		maxLength: 38
	},

	// Время занятий в учреждении образования
	[GeneralVariables.class_time_1st_shift__start_hour]: {
		title: "Время занятий в учреждении образования для 1-ой смены (период)",
		text: "C час.",
		maxLength: 3,
		required: true
	},
	[GeneralVariables.class_time_1st_shift__start_minute]: {
		text: "Мин.",
		maxLength: 3,
		required: true
	},
	[GeneralVariables.class_time_1st_shift__end_hour]: {
		text: "По час.",
		maxLength: 3,
		required: true
	},
	[GeneralVariables.class_time_1st_shift__end_minute]: {
		text: "Мин.",
		maxLength: 3,
		required: true
	},

	[GeneralVariables.class_time_2nd_shift__start_hour]: {
		title: "Время занятий в учреждении образования для 2-ой смены (период)",
		text: "C час.",
		maxLength: 3,
		required: true
	},
	[GeneralVariables.class_time_2nd_shift__start_minute]: {
		text: "Мин.",
		maxLength: 3,
		required: true
	},
	[GeneralVariables.class_time_2nd_shift__end_hour]: {
		text: "По час.",
		maxLength: 3,
		required: true
	},
	[GeneralVariables.class_time_2nd_shift__end_minute]: {
		text: "Мин.",
		maxLength: 3,
		required: true
	},

	[GeneralVariables.time_extracurricular_activities__start_hour]: {
		title: "Внеклассные занятия (период)",
		text: "C час.",
		maxLength: 3
	},
	[GeneralVariables.time_extracurricular_activities__start_minute]: {
		text: "Мин.",
		maxLength: 3
	},
	[GeneralVariables.time_extracurricular_activities__end_hour]: {
		text: "По час.",
		maxLength: 3
	},
	[GeneralVariables.time_extracurricular_activities__end_minute]: {
		text: "Мин.",
		maxLength: 3
	},

	[GeneralVariables.working_hours_on_the_sixth_school_day__start_hour]: {
		title: "Режим работы в шестой школьный день",
		text: "C час.",
		maxLength: 3
	},
	[GeneralVariables.working_hours_on_the_sixth_school_day__start_minute]: {
		text: "Мин.",
		maxLength: 3
	},
	[GeneralVariables.working_hours_on_the_sixth_school_day__end_hour]: {
		text: "По час.",
		maxLength: 3
	},
	[GeneralVariables.working_hours_on_the_sixth_school_day__end_minute]: {
		text: "Мин.",
		maxLength: 3
	}
};
