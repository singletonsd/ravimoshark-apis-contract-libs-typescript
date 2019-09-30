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


import { Contracts } from '../model/contracts';
import { CustomError } from '../model/customError';
import { Deleted } from '../model/deleted';
import { InlineResponse2001 } from '../model/inlineResponse2001';
import { RefContract } from '../model/refContract';
import { Reviewed } from '../model/reviewed';
import { Valid } from '../model/valid';


import { Configuration }                                     from '../configuration';


export interface ContractsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Add one contract.
    * Add one contract.
    * @param body 
    */
    addContract(body?: Contracts, extraHttpRequestParams?: any): Observable<Contracts>;

    /**
    * Delete one contract.
    * Delete one contract.
    * @param refContract id to delete or search
    */
    deleteContract(refContract: number, extraHttpRequestParams?: any): Observable<RefContract>;

    /**
    * Edit one contract.
    * Edit one contract.
    * @param body 
    */
    editContract(body?: Contracts, extraHttpRequestParams?: any): Observable<Contracts>;

    /**
    * Get one contract.
    * Get one contract.
    * @param refContract id to delete or search
    * @param deleted Get all, deleted, not deleted data. Default not deleted.
    */
    getContractById(refContract: number, deleted?: Deleted, extraHttpRequestParams?: any): Observable<Contracts>;

    /**
    * Get all contracts.
    * Get all contracts.
    * @param skip number of item to skip
    * @param limit max records to return
    * @param orderBy order by property.
    * @param filterBy filter data.
    * @param deleted Get all, deleted, not deleted data. Default not deleted.
    * @param metadata If metadata is needed (for pagination controls)
    * @param valid Only valid data.
    * @param reviewed only reviewed data.
    */
    getContracts(skip: number, limit: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, valid?: Valid, reviewed?: Reviewed, extraHttpRequestParams?: any): Observable<InlineResponse2001>;

}
