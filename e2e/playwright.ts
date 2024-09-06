import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

// Complete a Payment Flow
export async function completePayment(
  page,
  checkoutUrl: string
): Promise<boolean> {
  try {
    await page.goto(checkoutUrl);
    if (email && pass) {
      await page.fill('#email', email);
      if (await page.isVisible('#btnNext')) {
        await page.click('#btnNext');
      }
      await page.fill('#password', pass);
      await page.click('#btnLogin');
      try {
        // Check if successfully loaded the page
        await page.waitForSelector('#payment-submit-btn', { timeout: 5000 });
      } catch (error) {
        // if the error page is shown than go to previous page
        await page.goBack();
        await page.waitForSelector('#payment-submit-btn');
      }
      await page.waitForSelector('#payment-submit-btn');
      await page.click('#payment-submit-btn');
      try {
        await page.waitForURL('https://example.com/returnUrl**', {
          timeout: 10000,
        });
      } catch (error) {
        await page.reload();
        await page.waitForURL('https://example.com/returnUrl**', {
          timeout: 10000,
        });
      }
      return true;
    } else {
      throw new Error('EMAIL or PASSWORD environment variable is not set');
    }
  } catch (error) {
    console.error('Error completing payment:', error);
    return false;
  }
}

// Save Payment Method Flow
export async function savePaymentMethod(page, url: string): Promise<boolean> {
  try {
    await page.goto(url);
    if (email && pass) {
      await page.fill('#email', email);
      if (await page.isVisible('#btnNext')) {
        await page.click('#btnNext');
      }
      await page.fill('#password', pass);
      await page.click('#btnLogin');
      try {
        // Check if successfully loaded the page
        await page.waitForSelector('#consentButton', { timeout: 5000 });
      } catch (error) {
        // if the error page is shown than go to previous page
        await page.goBack();
        await page.waitForSelector('#consentButton');
      }
      await page.waitForSelector('#consentButton');
      await page.click('#consentButton');
      try {
        await page.waitForURL('https://example.com/returnUrl**', {
          timeout: 10000,
        });
      } catch (error) {
        await page.reload();
        await page.waitForURL('https://example.com/returnUrl**', {
          timeout: 10000,
        });
      }
      return true;
    } else {
      throw new Error('EMAIL or PASSWORD environment variable is not set');
    }
  } catch (error) {
    console.error('Error saving payment method:', error);
    return false;
  }
}

// Complete Verification Flow
export async function completeHeliosVerification(
  page,
  checkoutUrl: string
): Promise<boolean> {
  try {
    await page.goto(checkoutUrl);
    try {
      await page.waitForURL(
        'https://www.sandbox.paypal.com/webapps/helios?action=verify&flow=3ds**',
        { timeout: 10000 }
      );
    } catch (error) {
      await page.reload();
      await page.waitForURL(
        'https://www.sandbox.paypal.com/webapps/helios?action=verify&flow=3ds**',
        { timeout: 10000 }
      );
    }
    // wait till all network calls are done so that the iframe loads completely
    await page.waitForLoadState('networkidle', { timeout: 10000 });
    const frame = page
      .frameLocator('iframe[name="threedsIframeV2"]')
      .frameLocator('iframe');
    const inputField = frame.getByPlaceholder(' Enter Code Here');
    const submitButton = frame.getByRole('button', { name: 'SUBMIT' });
    if (await inputField.isVisible()) {
      await inputField.click();
      await inputField.fill('1234');
    }
    if (await submitButton.isVisible()) {
      await submitButton.click();
    }
    // check for the return url
    try {
      await page.waitForURL('https://example.com/returnUrl**', {
        timeout: 10000,
      });
    } catch (error) {
      await page.reload();
      await page.waitForURL('https://example.com/returnUrl**', {
        timeout: 10000,
      });
    }
    return true;
  } catch (error) {
    console.error('Error completing payment:', error);
    return false;
  }
}
