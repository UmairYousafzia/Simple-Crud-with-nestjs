import { Injectable } from '@nestjs/common';
import { Customer } from './interface/customer-interface';
import { CreateCustomerDto } from './dto/create-customer-dto';

@Injectable()
export class CustomerService {

    private cutomers:Customer [] = [];

    getAllCustomer(): Customer[] {
        return this.cutomers;
    }
    addCustomer(createCustomerDto: CreateCustomerDto): 
    Customer {
            const newCustomer:Customer = {
               id: Data.now(),
                ...createCustomerDto
            };
            this.cutomers.push(newCustomer);
            return newCustomer;
    }
}
