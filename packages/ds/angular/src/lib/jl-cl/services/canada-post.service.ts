import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum CanadaPostServiceName {
    Find = 'Find',
    Retrieve = 'Retrieve',
}

interface CanadaPostFindParams {
    SearchTerm: string;
    LastId?: string;
    SearchFor?: 'Everything' | 'PostalCodes' | 'Companies' | 'Places';
    Country?: string;
    LanguagePreference?: string;
    MaxSuggestions?: string;
    MaxResults?: string;
}

interface CanadaPostRetreiveParams {
    Id: string;
}

interface CanadaPostFindResponse {
    Items: CanadaPostFindResult[];
}
interface CanadaPostRetreiveResponse {
    Items: CanadaPostRetreiveResult[];
}

export interface CanadaPostFindResult {
    Id: string;
    Text: string;
    Highlight: string;
    Cursor: number;
    Description: string;
    Next: string;
}

export interface CanadaPostRetreiveResult {
    Id: string;
    DomesticId: string;
    Language: string;
    LanguageAlternatives: number;
    Department: string;
    Company: string;
    SubBuilding: string;
    BuildingNumber: string;
    BuildingName: string;
    SecondaryStreet: string;
    Street: string;
    Block: string;
    Neighbourhood: string;
    District: string;
    City: string;
    Line1: string;
    Line2: string;
    Line3: string;
    Line4: string;
    Line5: string;
    AdminAreaName: string;
    AdminAreaCode: string;
    Province: string;
    ProvinceName: string;
    ProvinceCode: string;
    PostalCode: string;
    CountryName: string;
    CountryIso2: string;
    CountryIso3: string;
    CountryIsoNumber: string;
    SortingNumber1: string;
    SortingNumber2: string;
    Barcode: string;
    POBoxNumber: string;
    Label: string;
    DataLevel: string;
}

@Injectable({
    providedIn: 'root',
})
export class CanadaPostService {
    private readonly baseUrl = `https://ws1.postescanada-canadapost.ca/AddressComplete/Interactive`;
    private readonly baseParams = { Key: 'HX59-FJ25-AG81-GB89' };
    private readonly findUrl = `${this.baseUrl}/Find/v2.10/json3.ws?`;
    private readonly retrieveUrl = `${this.baseUrl}/retrieve/v2.11/json3.ws?`;

    constructor(
        private http: HttpClient,
        private translate: TranslateService
    ) {}

    public getAddressSuggestions(
        params: CanadaPostFindParams
    ): Observable<CanadaPostFindResult[]> {
        const canadaPostParams = {
            MaxSuggestions: '5',
            MaxResults: '5',
            ...this.baseParams,
            ...params,
        };

        return this.http
            .get<CanadaPostFindResponse>(
                `${this.findUrl}${new URLSearchParams(
                    canadaPostParams
                ).toString()}`
            )
            .pipe(map((result: CanadaPostFindResponse) => result.Items));
    }

    public getAddress(
        params: CanadaPostRetreiveParams
    ): Observable<CanadaPostRetreiveResult> {
        const canadaPostParams = {
            ...this.baseParams,
            ...params,
        };
        return this.http
            .get<CanadaPostRetreiveResponse>(
                `${this.retrieveUrl}${new URLSearchParams(
                    canadaPostParams
                ).toString()}`
            )
            .pipe(
                map(
                    (result: CanadaPostRetreiveResponse) =>
                        result.Items.find(
                            (item: CanadaPostRetreiveResult) =>
                                item.Language ===
                                (this.translate.currentLang === 'en'
                                    ? 'ENG'
                                    : 'FRE')
                        ) || result.Items[0]
                )
            );
    }
}
