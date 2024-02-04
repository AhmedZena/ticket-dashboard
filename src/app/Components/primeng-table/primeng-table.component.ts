import { CustomerService } from '../../Services/customer.service';
import { CommonModule } from '@angular/common';
import { Customer } from '../../Model/customer';

import { Component } from '@angular/core';

// p-table
import { TableModule } from 'primeng/table';

// p-multiSelect
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';

// p-button
import { ButtonModule } from 'primeng/button';

// progressBar
import { ProgressBarModule } from 'primeng/progressbar';

import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { TranslateNumberPipe } from '../../Pipes/translate-number.pipe';
import { StringifyArrayPipe } from '../../Pipes/stringify-array.pipe';
import { InputSwitchModule } from 'primeng/inputswitch';

// p-paginator
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-primeng-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    FormsModule,
    ProgressBarModule,
    TagModule,
    TranslateNumberPipe,
    StringifyArrayPipe,
    ButtonModule,
    InputSwitchModule,
    PaginatorModule,
    // BrowserAnimationsModule,
  ],
  templateUrl: './primeng-table.component.html',
  styleUrl: './primeng-table.component.scss',
})
export class PrimengTableComponent {
  allCustomers!: Customer[];
  customers!: Customer[];
  selectedCustomers!: Customer[];
  loading: boolean = false;
  rowsPerPageOptions = [5, 10, 20];
  sortField: string = 'name';
  // pagination
  totalRecords: number = 1000;
  rows: number = 5;
  page: number = 1;

  //seraching
  searchQuery: string = '';
  inputToggled: boolean = true;
  // filter
  selectedFilter: string = 'name';
  isAscending: boolean = true;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.fetchCustomers();
  }

  fetchCustomers() {
    // this.loading = true;

    setTimeout(() => {
      console.log('this.page', this.page, 'this.rows', this.rows);
      this.customerService
        .getCustomersPaginated(this.page, this.rows)
        .then((customers) => {
          // console.log('customers', customers);
          // this.loading = false;
          this.allCustomers = customers.data.map((customer) => {
            console.log('customer', customer);
            return { ...customer, ticketPrice: customer.ticket.price };
          });
          this.totalRecords = customers.totalRecords;
          this.customers = this.allCustomers;
          console.log('this.customers', this.customers);
          console.log('this.totalRecords', this.totalRecords);
        });
    }, 1000);
  }

  onPaginate(event: any) {
    console.log('event', event);

    this.page = 1;
    this.rows = event.rows;

    this.fetchCustomers();
  }
  searchByName() {
    console.log('searchQuery', this.searchQuery);
    this.customers = this.allCustomers.filter((customer) =>
      customer.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    console.log(this.customers);
  }

  // filter
  applyFilter() {
    console.log('selectedFilter', this.selectedFilter);
    console.log('isAscending', this.isAscending);

    this.customers.sort((a, b) => {
      let valueA: string | number;
      let valueB: string | number;

      switch (this.selectedFilter) {
        case 'name':
          valueA = a.name || '';
          valueB = b.name || '';
          break;
        case 'price': // Assuming you have a price field
          valueA = a.ticket.price; // Adjust based on your object structure
          valueB = b.ticket.price;
          break;

        default:
          return 0;
      }

      return this.isAscending
        ? valueA < valueB
          ? -1
          : valueA > valueB
          ? 1
          : 0
        : valueA > valueB
        ? -1
        : valueA < valueB
        ? 1
        : 0;
    });
  }

  toggleSort() {
    this.isAscending = !this.isAscending;
    this.sortData();
  }

  sortData() {
    this.customers = this.customers.reverse();
  }
}
