/**
 * Ravimoshark Contract API
 * This is an API to interact with Ravimoshark contracts database. # Introduction This API allow to create, modify and delete contracts and machines. It also interacts with machines imported from SAGE database. # User Authentication This API does not contain any kind of user validation but It request to have a valid authentication user to interact with it. For more information about user Authentication, please refer to [Ravimoshark User Authentication](https://ravimoshark.com/back/apis/auth/latest). 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dev@ravimoshark.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs/Observable';


import { CustomError } from '../model/customError';
import { Deleted } from '../model/deleted';
import { IdInteger } from '../model/idInteger';
import { InlineResponse2004 } from '../model/inlineResponse2004';
import { Machines } from '../model/machines';


import { Configuration }                                     from '../configuration';


export interface MachinesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Add one machine.
    * Add one machine.
    * @param body 
    */
    addMachine(body: Machines, extraHttpRequestParams?: any): Observable<Machines>;

    /**
    * Delete one machine.
    * Delete one machine.
    * @param id id to delete or search
    */
    deleteMachine(id: number, extraHttpRequestParams?: any): Observable<IdInteger>;

    /**
    * Edit one machine.
    * Edit one machine.
    * @param body 
    */
    editMachine(body: Machines, extraHttpRequestParams?: any): Observable<Machines>;

    /**
    * Get one Machine.
    * Get one machine.
    * @param id id to delete or search
    * @param deleted Get all, deleted, not deleted data. Default not deleted.
    */
    getMachineById(id: number, deleted?: Deleted, extraHttpRequestParams?: any): Observable<Machines>;

    /**
    * Get all machines.
    * Get all machines.
    * @param skip number of item to skip
    * @param limit max records to return
    * @param orderBy order by property.
    * @param filterBy filter data.
    * @param deleted Get all, deleted, not deleted data. Default not deleted.
    * @param metadata If metadata is needed (for pagination controls)
    * @param refClient Data from a desired client
    * @param refContract Data from a desired contract
    */
    getMachines(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, refContract?: number, extraHttpRequestParams?: any): Observable<InlineResponse2004>;

}
