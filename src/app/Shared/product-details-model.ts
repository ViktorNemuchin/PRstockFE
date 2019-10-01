import { CompanyContactsModel } from './company-contacts-model';
import {EventViewModel} from './event-view-model';
export class ProductDetailsModel {
         ProductDetailViewModelId: number;
         ProductName: string;
         Category: string;
         Type: string;
         Detail: string;
         Price: number;
         State: number;
         Quantity: number;
         PictureUrl: string;
         TemplateUrl: string;
         CompanyName: string;
         CompanyAddress: string;
         CompanyContacts: CompanyContactsModel;
         Events: EventViewModel[];
}
