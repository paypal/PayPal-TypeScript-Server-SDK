import { test } from '@playwright/test';
import standardCheckoutFlow from './standardCheckoutFlow';
import authorizeAndCaptureFlow from './authorizeAndCaptureFlow';
import voidAuthorizationFlow from './voidAuthorizationFlow';
import refundFlow from './refundFlow';
import patchOrderFlow from './patchOrderFlow';
import paymentMethodWithPurchaseFlow from './paymentMethodWithPurchaseFlow';
import paymentMethodWithoutPurchaseFlow from './paymentMethodWithoutPurchaseFlow';
import SecureAuthenticationSingleStepFlow from './3DSecureAuthenticationSingleStepFlow';
import AuthenticationMultiStepFlow from './3DAuthenticationMultiStepFlow';
import confirmOrderFlow from './confirmOrderFlow';
import AddShippingTrackerInformationToOrderFlow from './addShippingInformationFlow';

// Standard Checkout Flow
test.describe(standardCheckoutFlow);

// Authorize and Capture Flow
test.describe(authorizeAndCaptureFlow);

// Void Authorization Flow
test.describe(voidAuthorizationFlow);

// Refund Flow
test.describe(refundFlow);

// Patch Order Flow
test.describe(patchOrderFlow);

// Confirm Order Flow
test.describe(confirmOrderFlow);

// Add Shipping Tracker Information To Order Flow
test.describe(AddShippingTrackerInformationToOrderFlow);

// Payment Method With Purchase Flow
test.describe(paymentMethodWithPurchaseFlow);

// Payment Method WithOut Purchase Flow
test.describe(paymentMethodWithoutPurchaseFlow);

// Purchase Using 3D Secure Authentication (Single Step)
test.describe(SecureAuthenticationSingleStepFlow);

// Purchase Using 3D Secure Authentication (Multi Step)/
test.describe(AuthenticationMultiStepFlow);
