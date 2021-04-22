import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    getEmployeeGreeting():string{
        return "hey this is employee"
    }
}
