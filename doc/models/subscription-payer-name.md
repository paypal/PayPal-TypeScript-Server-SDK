
# Subscription Payer Name

The name of the party.

## Structure

`SubscriptionPayerName`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prefix` | `string \| undefined` | Optional | The prefix, or title, to the party's name.<br><br>**Constraints**: *Maximum Length*: `140` |
| `givenName` | `string \| undefined` | Optional | When the party is a person, the party's given, or first, name.<br><br>**Constraints**: *Maximum Length*: `140` |
| `surname` | `string \| undefined` | Optional | When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.<br><br>**Constraints**: *Maximum Length*: `140` |
| `middleName` | `string \| undefined` | Optional | When the party is a person, the party's middle name. Use also to store multiple middle names including the patronymic, or father's, middle name.<br><br>**Constraints**: *Maximum Length*: `140` |
| `suffix` | `string \| undefined` | Optional | The suffix for the party's name.<br><br>**Constraints**: *Maximum Length*: `140` |
| `fullName` | `string \| undefined` | Optional | When the party is a person, the party's full name.<br><br>**Constraints**: *Maximum Length*: `300` |

## Example (as JSON)

```json
{
  "prefix": "prefix4",
  "given_name": "given_name8",
  "surname": "surname2",
  "middle_name": "middle_name4",
  "suffix": "suffix4"
}
```

