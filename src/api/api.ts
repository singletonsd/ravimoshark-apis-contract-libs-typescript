export * from './contracts.service';
import { ContractsService } from './contracts.service';
export * from './contracts.serviceInterface'
export * from './importedMachines.service';
import { ImportedMachinesService } from './importedMachines.service';
export * from './importedMachines.serviceInterface'
export * from './machines.service';
import { MachinesService } from './machines.service';
export * from './machines.serviceInterface'
export const APIS = [ContractsService, ImportedMachinesService, MachinesService];
