export class GetCategory {
CategoryViewModelId: number;
CategoryName: string;
}

export class GetType {
TypeViewModelId: number;
TypeName: string;
}

 export class GetCompany {
  CompanyViewModelId: number;
  CompanyName: string;
}

export class GetEmployee {
  EmployeeViewModelId: number;
  FirstName: string;
  LastName: string;
  ContactPhone: string;
  ContactEmail: string;
}

export class GetProducts {
  PrProductModelBriefId: number;
  Name: string;
  Type: string;
  Quantity: number;
  State: number;
  QuantityTaken: number;
}
