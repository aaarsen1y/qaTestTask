import { test, expect, TestInfo } from '@playwright/test';
import { RegistrationForm } from '../pages/Register';
import { userData } from '../fixtures/testData';



test('Отправка формы с валидными данными', async ({ page }, testInfo: TestInfo) => {


  const form = new RegistrationForm(page);
  await page.goto('https://demoqa.com/automation-practice-form');
  
  await test.step("Заполнение формы", async ()=>{
  await form.fill(userData.firstName, userData.lastName, userData.mobileNumber, userData.gender, userData.email);
  })

  await test.step("Отправка формы", async()=>{
  await form.submitForm();
  await form.successfullSubmission();
  })

  await test.step("Скриншот", async()=>{
  await page.screenshot({ path: `screenshots/${testInfo.project.name}-form-submitted.png` });
  })


  await test.step('Проверка корректности данных', async ()=> {
  await form.verifySubmission();
  })

});

