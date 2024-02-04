export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Ticket {
  number: string;
  price: number;
  number_of_seats: number;
  number_of_tickets: number;
  link: string;
  size: string;
  type: string;
  discount: number;
  expired: string;
}

export interface Customer {
  id: number;
  name: string;
  imgSrc: string;
  phone: string;
  ticket: Ticket;

  cinema: {
    locations: string[];
  };
}
