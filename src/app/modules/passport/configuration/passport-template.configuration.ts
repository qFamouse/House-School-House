import { PassportVariables } from "../models/passport-template.model";

type PassportTemplateConfiguration = {
	[variable in PassportVariables]: {
		maxLength: number;
	};
};

export const passportTemplateConfigurations: PassportTemplateConfiguration = {
	// Титульник
	[PassportVariables.name_of_the_educational_institution]: {
		maxLength: 53
	},
	[PassportVariables.the_last_two_digits_of_the_year]: {
		maxLength: 2
	},

	// Общие сведения
	[PassportVariables.full_name_of_the_educational_institution]: {
		maxLength: 192
	},
	[PassportVariables.type_of_educational_institution]: {
		maxLength: 34
	},
	[PassportVariables.legal_address]: {
		maxLength: 109
	},
	[PassportVariables.actual_address]: {
		maxLength: 110
	},
	[PassportVariables.director_manager__full_name]: {
		maxLength: 25
	},
	[PassportVariables.director_manager__phone]: {
		maxLength: 15
	},
	[PassportVariables.deputy_director_for_academic_affairs__full_name]: {
		maxLength: 27 // перепроверить
	},
	[PassportVariables.deputy_director_for_academic_affairs__phone]: {
		maxLength: 15
	},
	[PassportVariables.deputy_director_for_educational_work__full_name]: {
		maxLength: 25
	},
	[PassportVariables.deputy_director_for_educational_work__phone]: {
		maxLength: 15
	},
	[PassportVariables.responsible_employees_for_measures_to_prevent_child_injuries__first__job_title]:
		{
			maxLength: 22
		},
	[PassportVariables.responsible_employees_for_measures_to_prevent_child_injuries__first__full_name]:
		{
			maxLength: 19
		},
	[PassportVariables.responsible_employees_for_measures_to_prevent_child_injuries__first__phone]:
		{
			maxLength: 42
		},
	[PassportVariables.responsible_employees_for_measures_to_prevent_child_injuries__second__job_title]:
		{
			maxLength: 22
		},
	[PassportVariables.responsible_employees_for_measures_to_prevent_child_injuries__second__full_name]:
		{
			maxLength: 19
		},
	[PassportVariables.responsible_employees_for_measures_to_prevent_child_injuries__second__phone]:
		{
			maxLength: 42
		},
	[PassportVariables.responsible_from_the_department_of_internal_affairs__first__job_title]:
		{
			maxLength: 17
		},
	[PassportVariables.responsible_from_the_department_of_internal_affairs__first__full_name]:
		{
			maxLength: 16
		},
	[PassportVariables.responsible_from_the_department_of_internal_affairs__second__job_title]:
		{
			maxLength: 17
		},
	[PassportVariables.responsible_from_the_department_of_internal_affairs__second__full_name]:
		{
			maxLength: 16
		},
	[PassportVariables.responsible_from_the_department_of_internal_affairs__phones]:
		{
			maxLength: 35
		},
	[PassportVariables.the_head_or_responsible_employee_of_the_road_maintenance_organization_that_carries_out_the_maintenance_of_the_road_network__full_name]:
		{
			maxLength: 21
		},
	[PassportVariables.the_head_or_responsible_employee_of_the_road_maintenance_organization_that_carries_out_the_maintenance_of_the_road_network__phone]:
		{
			maxLength: 14
		},
	[PassportVariables.the_head_or_responsible_employee_of_a_road_maintenance_organization_that_carries_out_the_maintenance_of_technical_means_of_traffic_management__full_name]:
		{
			maxLength: 21
		},
	[PassportVariables.the_head_or_responsible_employee_of_a_road_maintenance_organization_that_carries_out_the_maintenance_of_technical_means_of_traffic_management__phone]:
		{
			maxLength: 14
		},
	[PassportVariables.number_of_students_students_pupils]: {
		maxLength: 16
	},
	[PassportVariables.availability_of_a_corner_for_bdd]: {
		// (если имеется, указать место расположения)
		maxLength: 43
	},
	[PassportVariables.availability_of_a_bdd_cabinet]: {
		// (если имеется, указать место расположения)
		maxLength: 41
	},
	[PassportVariables.availability_of_a_bdd_center]: {
		//  (если имеется, указать место расположения)
		maxLength: 41
	},
	// (указать что  именно и место расположения)
	[PassportVariables.the_presence_of_a_motor_city_or_a_parking_lot_according_to_the_bdd]:
		{
			maxLength: 38
		},
	[PassportVariables.the_presence_of_the_yid_squad]: {
		//  (количество человек)
		maxLength: 43
	},
	[PassportVariables.head_of_the_yid_squad__job_title]: {
		maxLength: 19
	},
	[PassportVariables.head_of_the_yid_squad__full_name]: {
		maxLength: 19
	},
	[PassportVariables.head_of_the_yid_squad__phone]: {
		maxLength: 42
	},

	[PassportVariables.the_presence_and_condition_of_the_fencing_of_the_territory_locking_devices_and_barriers]:
		{
			// указать
			maxLength: 38
		},
	[PassportVariables.availability_of_a_school_bus_in_an_educational_institution]:
		{
			maxLength: 38
		},

	// Время занятий в учреждении образования
	[PassportVariables.class_time_1st_shift__start_hour]: {
		maxLength: 3
	},
	[PassportVariables.class_time_1st_shift__end_hour]: {
		maxLength: 3
	},
	[PassportVariables.class_time_1st_shift__start_minute]: {
		maxLength: 3
	},
	[PassportVariables.class_time_1st_shift__end_minute]: {
		maxLength: 3
	},
	[PassportVariables.class_time_2nd_shift__start_hour]: {
		maxLength: 3
	},
	[PassportVariables.class_time_2nd_shift__end_hour]: {
		maxLength: 3
	},
	[PassportVariables.class_time_2nd_shift__start_minute]: {
		maxLength: 3
	},
	[PassportVariables.class_time_2nd_shift__end_minute]: {
		maxLength: 3
	},
	[PassportVariables.time_extracurricular_activities__start_hour]: {
		maxLength: 3
	},
	[PassportVariables.time_extracurricular_activities__end_hour]: {
		maxLength: 3
	},
	[PassportVariables.time_extracurricular_activities__start_minute]: {
		maxLength: 3
	},
	[PassportVariables.time_extracurricular_activities__end_minute]: {
		maxLength: 3
	},
	[PassportVariables.working_hours_on_the_sixth_school_day__start_hour]: {
		maxLength: 3
	},
	[PassportVariables.working_hours_on_the_sixth_school_day__end_hour]: {
		maxLength: 3
	},
	[PassportVariables.working_hours_on_the_sixth_school_day__start_minute]: {
		maxLength: 3
	},
	[PassportVariables.working_hours_on_the_sixth_school_day__end_minute]: {
		maxLength: 3
	},

	// Информация об обеспечении безопасности перевозок детей специальным транспортным средством (автобусом).
	// (при наличии автобуса)
	// Общие сведения
	[PassportVariables.brand]: {
		maxLength: 58
	},
	[PassportVariables.model]: {
		maxLength: 57
	},
	[PassportVariables.registration_mark]: {
		maxLength: 29
	},
	[PassportVariables.year_of_release]: {
		maxLength: 17
	},
	[PassportVariables.number_of_passenger_seats]: {
		maxLength: 11
	},
	[PassportVariables.compliance_of_the_design_with_the_requirements_for_school_buses]:
		{
			maxLength: 122
		},

	// 2. Сведения о водителе(ях) автобуса(ов)
	[PassportVariables.first_bus_driver__full_name]: {
		maxLength: 0
	},
	[PassportVariables.first_bus_driver__age]: {
		maxLength: 0
	},
	[PassportVariables.first_bus_driver__date_of_employment]: {
		maxLength: 0
	},
	[PassportVariables.first_bus_driver__driving_experience_of_a_category_d_vehicle]:
		{
			maxLength: 0
		},
	[PassportVariables.first_bus_driver__date_of_the_upcoming_medical_examination]:
		{
			maxLength: 0
		},
	[PassportVariables.first_bus_driver__traffic_violations_committed]: {
		maxLength: 0
	},
	[PassportVariables.second_bus_driver__full_name]: {
		maxLength: 0
	},
	[PassportVariables.second_bus_driver__age]: {
		maxLength: 0
	},
	[PassportVariables.second_bus_driver__date_of_employment]: {
		maxLength: 0
	},
	[PassportVariables.second_bus_driver__driving_experience_of_a_category_d_vehicle]:
		{
			maxLength: 0
		},
	[PassportVariables.second_bus_driver__date_of_the_upcoming_medical_examination]:
		{
			maxLength: 0
		},
	[PassportVariables.second_bus_driver__traffic_violations_committed]: {
		maxLength: 0
	},

	// 3. Организационно-техническое обеспечение
	[PassportVariables.the_official_responsible_for_ensuring_road_safety_and_vehicle_operation__full_name]:
		{
			maxLength: 46
		},
	[PassportVariables.the_official_responsible_for_ensuring_road_safety_and_vehicle_operation__date_of_appointment]:
		{
			maxLength: 49
		},

	[PassportVariables.pre_trip_medical_examination__performs]: {
		maxLength: 52
	},
	[PassportVariables.pre_trip_medical_examination__on_the_basis_of]: {
		maxLength: 52
	},
	[PassportVariables.pre_trip_medical_examination__valid_until]: {
		maxLength: 46
	},

	[PassportVariables.control_over_the_technical_condition_and_design_of_the_vehicle__performs]:
		{
			maxLength: 52
		},
	[PassportVariables.control_over_the_technical_condition_and_design_of_the_vehicle__on_the_basis_of]:
		{
			maxLength: 52
		},
	[PassportVariables.control_over_the_technical_condition_and_design_of_the_vehicle__valid_until]:
		{
			maxLength: 46
		},

	[PassportVariables.date_of_the_next_state_inspection]: {
		maxLength: 86
	},
	[PassportVariables.bus_parking_place_during_nonworking_hours]: {
		maxLength: 83
	},
	[PassportVariables.measures_to_prevent_unauthorized_use]: {
		maxLength: 142
	},
	// 4. Сведения о владельце автобуса
	[PassportVariables.bus_owner__legal_address]: {
		maxLength: 33
	},
	[PassportVariables.bus_owner__actual_address]: {
		maxLength: 35
	},
	[PassportVariables.bus_owner__phone_of_responsible_person]: {
		maxLength: 38
	}
};
