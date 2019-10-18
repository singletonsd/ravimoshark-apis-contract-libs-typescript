export * from './clients.service';
import { ClientsService } from './clients.service';
export * from './clients.serviceInterface'
export * from './contracts.service';
import { ContractsService } from './contracts.service';
export * from './contracts.serviceInterface'
export * from './importedMachines.service';
import { ImportedMachinesService } from './importedMachines.service';
export * from './importedMachines.serviceInterface'
export * from './locations.service';
import { LocationsService } from './locations.service';
export * from './locations.serviceInterface'
export * from './machines.service';
import { MachinesService } from './machines.service';
export * from './machines.serviceInterface'
export * from './pieces.service';
import { PiecesService } from './pieces.service';
export * from './pieces.serviceInterface'
export const APIS = [ClientsService, ContractsService, ImportedMachinesService, LocationsService, MachinesService, PiecesService];
