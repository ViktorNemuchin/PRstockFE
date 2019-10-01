export class PutProductModel {
  ProductId: string;
  ImageUrl: string;
}
export class PutNewEventTime {
  EventId: string;
  NewDate: string;
}
export class PutNewProductStatus {
  ProductId: string;
  EventId: string;
  NewCategoryId: string;
}
