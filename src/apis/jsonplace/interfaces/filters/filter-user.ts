export interface FilterUser {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: FilterAddress;
  company?: FilterCompany;
}

export interface FilterAddress {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
  geo: FilterGeo;
}

export interface FilterCompany {
  name?: string;
  catchPhrase?: string;
  bs?: string;
}

export interface FilterGeo {
  lat?: string;
  lng?: string;
}
