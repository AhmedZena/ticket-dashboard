import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  getData() {
    return [
      {
        id: 1000,
        name: 'أحمد جمال',
        imgSrc:
          'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
        phone: '01011752787',

        ticket: {
          number: 'C-101',
          price: 40,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 101.pdf',
          size: '7.3 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
      {
        id: 1001,
        name: 'محمد عبد الله',
        phone: '01011752787',
        imgSrc:
          'https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774',

        ticket: {
          number: 'C-102',
          price: 70,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 102.pdf',
          size: '9.2 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
      {
        id: 1003,
        name: 'علي فؤاد',
        imgSrc:
          'https://img.freepik.com/free-photo/portrait-young-man_23-2148170049.jpg',
        phone: '01011752800',
        ticket: {
          number: 'C-104',
          price: 60,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 104.pdf',
          size: '7.5 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
      {
        id: 1004,
        name: 'رانيا محمود',
        imgSrc:
          'https://img.freepik.com/free-photo/portrait-young-woman_23-2148164220.jpg',
        phone: '01011752801',
        ticket: {
          number: 'C-105',
          price: 55,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 105.pdf',
          size: '7.8 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
      {
        id: 1005,
        name: 'خالد يوسف',
        imgSrc:
          'https://img.freepik.com/free-photo/portrait-young-man_23-2148170050.jpg',
        phone: '01011752802',
        ticket: {
          number: 'C-106',
          price: 65,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 106.pdf',
          size: '8.0 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
      {
        id: 1006,
        name: 'ليلى عادل',
        imgSrc:
          'https://img.freepik.com/free-photo/portrait-young-woman_23-2148164221.jpg',
        phone: '01011752803',
        ticket: {
          number: 'C-107',
          price: 45,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 107.pdf',
          size: '7.6 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
      {
        id: 1007,
        name: 'سميرة وائل',
        imgSrc:
          'https://img.freepik.com/free-photo/portrait-young-woman_23-2148164222.jpg',
        phone: '01011752804',
        ticket: {
          number: 'C-108',
          price: 50,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 108.pdf',
          size: '8.2 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
      {
        id: 1008,
        name: 'أسامة محمد',
        imgSrc:
          'https://img.freepik.com/free-photo/portrait-young-man_23-2148170051.jpg',
        phone: '01011752805',
        ticket: {
          number: 'C-109',
          price: 60,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 109.pdf',
          size: '7.9 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
      {
        id: 1009,
        name: 'نادية عمر',
        imgSrc:
          'https://img.freepik.com/free-photo/portrait-young-woman_23-2148164223.jpg',
        phone: '01011752806',
        ticket: {
          number: 'C-110',
          price: 70,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 110.pdf',
          size: '8.3 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
      {
        id: 1010,
        name: 'حسين كريم',
        imgSrc:
          'https://img.freepik.com/free-photo/portrait-young-man_23-2148170052.jpg',
        phone: '01011752807',
        ticket: {
          number: 'C-111',
          price: 55,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 111.pdf',
          size: '7.4 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
      {
        id: 1011,
        name: 'منى سعيد',
        imgSrc:
          'https://img.freepik.com/free-photo/portrait-young-woman_23-2148164224.jpg',
        phone: '01011752808',
        ticket: {
          number: 'C-112',
          price: 65,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 112.pdf',
          size: '8.5 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
      {
        id: 1012,
        name: 'فاطمة خالد',
        imgSrc:
          'https://img.freepik.com/free-photo/portrait-young-woman_23-2148164225.jpg',
        phone: '01011752809',
        ticket: {
          number: 'C-113',
          price: 50,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 113.pdf',
          size: '8.6 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
      {
        id: 1013,
        name: 'عبد الرحمن ماجد',
        imgSrc:
          'https://img.freepik.com/free-photo/portrait-young-man_23-2148170053.jpg',
        phone: '01011752810',
        ticket: {
          number: 'C-114',
          price: 60,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 114.pdf',
          size: '7.7 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
      {
        id: 1014,
        name: 'سها عمرو',
        imgSrc:
          'https://img.freepik.com/free-photo/portrait-young-woman_23-2148164226.jpg',
        phone: '01011752811',
        ticket: {
          number: 'C-115',
          price: 55,
          number_of_seats: 1,
          number_of_tickets: 1,
          link: 'تذكرة رقم 115.pdf',
          size: '8.8 mb',
          type: 'PDF',
          discount: 25,
          expired: '15 يوليو 2023',
        },
        cinema: {
          locations: ['سينما مصر', 'مول العرب', 'برج الأطنان', 'سرايا القبة'],
        },
      },
    ];
  }

  constructor(private http: HttpClient) {}

  getCustomersPaginated(page: number, rows: number) {
    let data = this.getData();
    let startIndex = (page - 1) * rows;
    let endIndex = startIndex + rows;

    let paginatedData = data.slice(startIndex, endIndex);

    // return Promise.resolve(this.getData().slice(startIndex, endIndex));
    // return Promise.resolve({
    //   data: paginatedData,
    //   totalRecords: this.getTotalCustomersCount(),
    // });
    if (paginatedData) {
      console.log(
        startIndex,
        endIndex,
        paginatedData,
        this.getTotalCustomersCount()
      );
      return Promise.resolve({
        data: paginatedData,
        totalRecords: this.getTotalCustomersCount(),
      });
    } else {
      // return Promise.reject('Error');
      // get all
      console.log('get all');
      return Promise.resolve({
        data: this.getData(),
        totalRecords: this.getTotalCustomersCount(),
      });
    }
  }

  getTotalCustomersCount(): number {
    return this.getData().length;
  }
}
