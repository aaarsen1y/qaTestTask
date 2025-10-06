import {Locator, Page, expect} from "@playwright/test";
import { userData } from "../fixtures/testData";



export class RegistrationForm{
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly mobileNumber: Locator;
    readonly submit: Locator;

    constructor (page: Page) {
        this.page=page;
        this.firstName= page.getByRole('textbox', { name: 'First Name' });
        this.lastName=page.getByRole('textbox', { name: 'Last Name' });
        this.email=page.getByRole('textbox', { name: 'name@example.com' });
        this.mobileNumber=page.getByRole('textbox', { name: 'Mobile Number' });
        this.submit=page.getByRole('button', { name: 'Submit' });
  

    }



    async fill(firstName: string, lastName: string, mobileNumber: string, gender: string, email: string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.page.getByText(gender, {exact: true}).check();
        await this.mobileNumber.fill(mobileNumber);
    }

    async submitForm(){
        await this.submit.click();
    }

    async successfullSubmission(){
        await expect(this.page.getByText('Thanks for submitting the form')).toBeVisible();
    }

    async verifySubmission() {
        await expect(this.page.getByRole('cell', { name: `${userData.firstName} ${userData.lastName}`})).toBeVisible();
        await expect(this.page.getByRole('cell', { name: userData.lastName })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: userData.email })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: userData.gender })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: userData.mobileNumber })).toBeVisible();
    }
    
}