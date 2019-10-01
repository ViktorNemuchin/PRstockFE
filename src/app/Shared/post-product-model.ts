import { PostEventModel } from './post-event-model';
export class PostProductModel {
  ProductName: string;
  Detail: string;
  Price: number;
  Quantity: number;
  PictureUrl: string;
  TemplateUrl: string;
  TypeId: number;
  CompanyId: number;
  Event: PostEventModel;
  ProductState: number;
}
