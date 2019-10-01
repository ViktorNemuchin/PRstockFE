export class EventDetailedModel {
  DetailedViewModelId: number;
  EventName: string;
  EventDescription: string;
  EventUrl: string;
  StartDate: string;
  EndDate: string;
  Category: string;
  EventType: string;
  RespPerson: string;
  Products: ProductBriefModel[];
}

export class ProductBriefModel {
PrProductModelBriefId: number;
Name: string;
Type: string;
Quantity: number;
State: number;
QuantityTaken: number;
}
