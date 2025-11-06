
# Plan Request Status

The initial state of the plan. Allowed input values are CREATED and ACTIVE.

## Enumeration

`PlanRequestStatus`

## Fields

| Name | Description |
|  --- | --- |
| `Created` | The plan was created. You cannot create subscriptions for a plan in this state. |
| `Inactive` | The plan is inactive. |
| `Active` | The plan is active. You can only create subscriptions for a plan in this state. |

