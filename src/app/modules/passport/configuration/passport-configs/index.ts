import { GeneralConfig } from "./general-config";
import { TitularConfig } from "./titular-config";
import { VehicleConfig } from "./vehicle-config";

export type PassportConfigs = GeneralConfig & TitularConfig & VehicleConfig;
