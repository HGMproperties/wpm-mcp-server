// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.renewals',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/leases/{leaseId}/renewals',
  operationId: 'ExternalApiLeaseRenewalsWrite_CreateLeaseRenewal',
};

export const tool: Tool = {
  name: 'create_leases_renewals',
  description:
    'Creates a lease renewal.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      LeaseType: {
        type: 'string',
        description: 'Describes the type of lease.',
        enum: ['Fixed', 'FixedWithRollover', 'AtWill'],
      },
      Rent: {
        $ref: '#/$defs/lease_rent_for_post_message',
      },
      SendWelcomeEmail: {
        type: 'boolean',
        description:
          'Indicates whether to send a welcome email to all tenants on the lease inviting them to the resident center website.',
      },
      AutomaticallyMoveOutTenants: {
        type: 'boolean',
        description:
          'Indicates whether to automatically move out all tenants assigned to the lease and set the lease status to past when the lease ends.',
      },
      Cosigners: {
        type: 'array',
        description: 'List of the cosigners to create on the lease.',
        items: {
          $ref: '#/$defs/lease_cosigner',
        },
      },
      LeaseToDate: {
        type: 'string',
        description:
          'End date of the lease. This is required if `LeaseType` is `Fixed` or `FixedWithRollover`',
        format: 'date',
      },
      RecurringChargesToCreate: {
        type: 'array',
        description: 'List of new recurring charges to create.',
        items: {
          $ref: '#/$defs/charge_recurring_transaction',
        },
      },
      RecurringChargesToStop: {
        type: 'array',
        description: 'Unique identifiers of existing recurring charges on the lease to stop.',
        items: {
          type: 'integer',
        },
      },
      RecurringChargesToUpdate: {
        type: 'array',
        description: 'List of existing recurring charges to update.',
        items: {
          type: 'object',
          properties: {
            Amount: {
              type: 'number',
              description: 'The amount to record when applying the charge to the lease ledger.',
            },
            FirstOccurrenceDate: {
              type: 'string',
              description:
                'The date the charge will first be processed. This value along with the `Frequency` is also used as the basis for the date set on the transactions in future occurrences.',
              format: 'date',
            },
            Frequency: {
              type: 'string',
              description: 'Specifies the frequency at which the recurring charge will be processed.',
              enum: [
                'Monthly',
                'Weekly',
                'Every2Weeks',
                'Quarterly',
                'Yearly',
                'Every2Months',
                'Daily',
                'Every6Months',
                'OneTime',
              ],
            },
            GLAccountId: {
              type: 'integer',
              description:
                'The general ledger account unique identifier under which the charge amount will be recorded. The general ledger account can only be an income or liability account.',
            },
            Id: {
              type: 'integer',
              description: 'The unique identifier for the charge.',
            },
            PostDaysInAdvance: {
              type: 'integer',
              description:
                'Specifies the number of days ahead of the transaction date the charge will post on the lease ledger. This setting can be used to add the charge to the ledger ahead of the due date for visibility. For example, if the `FirstOccurrenceDate` is set to 8/10/2022 and this value is set to 5 then the charge will added to the ledger on 8/5/2022, but will have transaction date of 8/10/2022. Note, the value must be between 0 to 45 or set to 60, 75 or 90.',
            },
            Duration: {
              type: 'string',
              description:
                'Specifies the period of time/occurrences the recurring payment will be processed. Note, if the `Frequency` field is set to `OneTime` this field should be set to `NULL` as any submitted value will be ignored.',
              enum: ['UntilEndOfTerm', 'SpecificNumber'],
            },
            Memo: {
              type: 'string',
              description:
                'Memo associated with the recurring charge. This value cannot exceed 65 characters.',
            },
            NumberOfOccurrences: {
              type: 'integer',
              description:
                'Indicates the number of times the recurring transaction should be processed. This value is required if the `Duration` field is set to `SpecificNumber`. This value can not exceed 100.',
            },
          },
          required: ['Amount', 'FirstOccurrenceDate', 'Frequency', 'GLAccountId', 'Id', 'PostDaysInAdvance'],
        },
      },
      TenantIds: {
        type: 'array',
        description:
          'Unique identifiers of existing tenants to include on the lease. The request must include at least one tenant in this property OR the `Tenants` property.',
        items: {
          type: 'integer',
        },
      },
      Tenants: {
        type: 'array',
        description:
          'List of new tenants to create on the lease. The request must include at least one tenant in this property OR the `TenantIds` property.',
        items: {
          type: 'object',
          properties: {
            Address: {
              $ref: '#/$defs/save_address',
            },
            FirstName: {
              type: 'string',
              description: 'First name of the tenant. The value cannot exceed 127 characters.',
            },
            LastName: {
              type: 'string',
              description: 'Last name of the tenant. The value cannot exceed 127 characters.',
            },
            AlternateAddress: {
              $ref: '#/$defs/save_address',
            },
            AlternateEmail: {
              type: 'string',
              description: 'Alternate email of the tenant.',
            },
            Comment: {
              type: 'string',
              description: 'Comments about the tenant. The value cannot exceed 65,535 characters.',
            },
            DateOfBirth: {
              type: 'string',
              description: 'Date of birth for the tenant. Must be formatted as `YYYY-MM-DD`.',
              format: 'date',
            },
            Email: {
              type: 'string',
              description: 'Email of the tenant.',
            },
            EmergencyContact: {
              $ref: '#/$defs/save_emergency_contact',
            },
            MailingPreference: {
              type: 'string',
              description:
                'Mailing preference for the tenant. If an alternate address exists and this value is not provided then the primary address will be set as the preferred address.',
              enum: ['PrimaryAddress', 'AlternateAddress'],
            },
            PhoneNumbers: {
              $ref: '#/$defs/phone_numbers',
            },
            TaxId: {
              type: 'string',
              description:
                'Tax identifier of the tenant. Valid formats are: `12-1234567`, `123-12-1234`, `123456789`',
            },
          },
          required: ['Address', 'FirstName', 'LastName'],
        },
      },
    },
    $defs: {
      lease_rent_for_post_message: {
        type: 'object',
        description:
          'The rent for the lease. When provided in the request the charges for the specified amount will be automatically applied to the lease ledger on the cadence specified in the `Cycle`.',
        properties: {
          Charges: {
            type: 'array',
            description: 'List of charges to apply to the lease.',
            items: {
              $ref: '#/$defs/lease_rent_charge_post_message',
            },
          },
          Cycle: {
            type: 'string',
            description:
              'Indicates the cadence of when rent `Charges` will be applied automatically to the lease ledger.',
            enum: [
              'Monthly',
              'Weekly',
              'Every2Weeks',
              'Quarterly',
              'Yearly',
              'Every2Months',
              'Daily',
              'Every6Months',
              'OneTime',
            ],
          },
        },
        required: ['Charges', 'Cycle'],
      },
      lease_rent_charge_post_message: {
        type: 'object',
        properties: {
          Amount: {
            type: 'number',
            description: 'The amount of the charge.',
          },
          GlAccountId: {
            type: 'integer',
            description: 'The general ledger account identifier under which to record the charge.',
          },
          NextDueDate: {
            type: 'string',
            description:
              'Indicates the next date the charge will be applied to the lease ledger. This date will also be used as the start date for the calculating the `Cycle` of when to apply the next charge. The date must be formatted as YYYY-MM-DD.',
            format: 'date',
          },
          Memo: {
            type: 'string',
            description: 'Memo for the charge.',
          },
        },
        required: ['Amount', 'GlAccountId', 'NextDueDate'],
      },
      lease_cosigner: {
        type: 'object',
        description: 'This object represents a rental lease cosigner.',
        properties: {
          FirstName: {
            type: 'string',
            description: 'First name of the cosigner.',
          },
          LastName: {
            type: 'string',
            description: 'Last name of the cosigner.',
          },
          Address: {
            $ref: '#/$defs/save_address',
          },
          AlternateAddress: {
            $ref: '#/$defs/save_address',
          },
          AlternateEmail: {
            type: 'string',
            description: 'Alternate Email for the cosigner.',
          },
          Email: {
            type: 'string',
            description: 'Email for the cosigner.',
          },
          MailingPreference: {
            type: 'string',
            description:
              'Mailing preferences for the cosigner. If an alternate address exists and this value is not provided then the primary address will be set as the preferred address.',
            enum: ['PrimaryAddress', 'AlternateAddress'],
          },
          PhoneNumbers: {
            $ref: '#/$defs/phone_numbers',
          },
        },
        required: ['FirstName', 'LastName'],
      },
      save_address: {
        type: 'object',
        description: 'Address.',
        properties: {
          AddressLine1: {
            type: 'string',
            description:
              'Address line 1 (e.g., street, PO Box, or company name). This value cannot exceed 100 characters.',
          },
          Country: {
            type: 'string',
            description: 'Country. Must be a valid `Country` enumeration value.',
            enum: [
              'Afghanistan',
              'Akrotiri',
              'Albania',
              'Algeria',
              'AmericanSamoa',
              'Andorra',
              'Angola',
              'Anguilla',
              'Antarctica',
              'AntiguaandBarbuda',
              'Argentina',
              'Armenia',
              'Aruba',
              'AshmoreandCartierIslands',
              'Australia',
              'Austria',
              'Azerbaijan',
              'Bahamas',
              'Bahrain',
              'Bangladesh',
              'Barbados',
              'BassasdaIndia',
              'Belarus',
              'Belgium',
              'Belize',
              'Benin',
              'Bermuda',
              'Bhutan',
              'Bolivia',
              'BosniaandHerzegovina',
              'Botswana',
              'BouvetIsland',
              'Brazil',
              'BritishIndianOceanTerritory',
              'BritishVirginIslands',
              'Brunei',
              'Bulgaria',
              'BurkinaFaso',
              'Burma',
              'Burundi',
              'Cambodia',
              'Cameroon',
              'Canada',
              'CapeVerde',
              'CaymanIslands',
              'CentralAfricanRepublic',
              'Chad',
              'Chile',
              'China',
              'ChristmasIsland',
              'ClippertonIsland',
              'CocosIslands',
              'Colombia',
              'Comoros',
              'DemocraticRepublicOfTheCongo',
              'RepublicOfTheCongo',
              'CookIslands',
              'CoralSeaIslands',
              'CostaRica',
              'CotedIvoire',
              'Croatia',
              'Cuba',
              'Cyprus',
              'CzechRepublic',
              'Denmark',
              'Dhekelia',
              'Djibouti',
              'Dominica',
              'DominicanRepublic',
              'Ecuador',
              'Egypt',
              'ElSalvador',
              'EquatorialGuinea',
              'Eritrea',
              'Estonia',
              'Ethiopia',
              'EuropaIsland',
              'FalklandIslands',
              'FaroeIslands',
              'Fiji',
              'Finland',
              'France',
              'FrenchGuiana',
              'FrenchPolynesia',
              'FrenchSouthernandAntarcticLands',
              'Gabon',
              'Gambia',
              'GazaStrip',
              'Georgia',
              'Germany',
              'Ghana',
              'Gibraltar',
              'GloriosoIslands',
              'Greece',
              'Greenland',
              'Grenada',
              'Guadeloupe',
              'Guam',
              'Guatemala',
              'Guernsey',
              'Guinea',
              'GuineaBissau',
              'Guyana',
              'Haiti',
              'HeardIslandandMcDonaldIslands',
              'VaticanCity',
              'Honduras',
              'HongKong',
              'Hungary',
              'Iceland',
              'India',
              'Indonesia',
              'Iran',
              'Iraq',
              'Ireland',
              'IsleofMan',
              'Israel',
              'Italy',
              'Jamaica',
              'JanMayen',
              'Japan',
              'Jersey',
              'Jordan',
              'JuandeNovaIsland',
              'Kazakhstan',
              'Kenya',
              'Kiribati',
              'NorthKorea',
              'SouthKorea',
              'Kuwait',
              'Kyrgyzstan',
              'Laos',
              'Latvia',
              'Lebanon',
              'Lesotho',
              'Liberia',
              'Libya',
              'Liechtenstein',
              'Lithuania',
              'Luxembourg',
              'Macau',
              'Macedonia',
              'Madagascar',
              'Malawi',
              'Malaysia',
              'Maldives',
              'Mali',
              'Malta',
              'MarshallIslands',
              'Martinique',
              'Mauritania',
              'Mauritius',
              'Mayotte',
              'Mexico',
              'Micronesia',
              'Moldova',
              'Monaco',
              'Mongolia',
              'Montserrat',
              'Morocco',
              'Mozambique',
              'Namibia',
              'Nauru',
              'NavassaIsland',
              'Nepal',
              'Netherlands',
              'NetherlandsAntilles',
              'NewCaledonia',
              'NewZealand',
              'Nicaragua',
              'Niger',
              'Nigeria',
              'Niue',
              'NorfolkIsland',
              'NorthernMarianaIslands',
              'Norway',
              'Oman',
              'Pakistan',
              'Palau',
              'Panama',
              'PapuaNewGuinea',
              'ParacelIslands',
              'Paraguay',
              'Peru',
              'Philippines',
              'PitcairnIslands',
              'Poland',
              'Portugal',
              'PuertoRico',
              'Qatar',
              'Reunion',
              'Romania',
              'Russia',
              'Rwanda',
              'SaintHelena',
              'SaintKittsandNevis',
              'SaintLucia',
              'SaintPierreandMiquelon',
              'SaintVincentandtheGrenadines',
              'Samoa',
              'SanMarino',
              'SaoTomeandPrincipe',
              'SaudiArabia',
              'Senegal',
              'SerbiaandMontenegro',
              'Seychelles',
              'SierraLeone',
              'Singapore',
              'Slovakia',
              'Slovenia',
              'SolomonIslands',
              'Somalia',
              'SouthAfrica',
              'SouthGeorgiaandtheSouthSandwichIslands',
              'Spain',
              'SpratlyIslands',
              'SriLanka',
              'Sudan',
              'Suriname',
              'Svalbard',
              'Swaziland',
              'Sweden',
              'Switzerland',
              'Syria',
              'Taiwan',
              'Tajikistan',
              'Tanzania',
              'Thailand',
              'TimorLeste',
              'Togo',
              'Tokelau',
              'Tonga',
              'TrinidadandTobago',
              'TromelinIsland',
              'Tunisia',
              'Turkey',
              'Turkmenistan',
              'TurksandCaicosIslands',
              'Tuvalu',
              'Uganda',
              'Ukraine',
              'UnitedArabEmirates',
              'UnitedKingdom',
              'UnitedStates',
              'Uruguay',
              'Uzbekistan',
              'Vanuatu',
              'Venezuela',
              'Vietnam',
              'VirginIslands',
              'WakeIsland',
              'WallisandFutuna',
              'WestBank',
              'WesternSahara',
              'Yemen',
              'Zambia',
              'Zimbabwe',
            ],
          },
          PostalCode: {
            type: 'string',
            description: 'ZIP or postal code.',
          },
          AddressLine2: {
            type: 'string',
            description:
              'Address line 2 (e.g., apartment, suite, unit, or building). This value cannot exceed 100 characters.',
          },
          AddressLine3: {
            type: 'string',
            description: 'Address line 3.  This value cannot exceed 100 characters.',
          },
          City: {
            type: 'string',
            description: 'City, district, suburb, town, or village. This value cannot exceed 100 characters.',
          },
          State: {
            type: 'string',
            description:
              'State, county, province, or region. When `Country` is set to `UnitedStates` this value must be a valid state name or abbreviation. If the value is `Canada` this value must be a valid Canadian province. For all other countries this field is optional and not validated.',
          },
        },
        required: ['AddressLine1', 'Country', 'PostalCode'],
      },
      phone_numbers: {
        type: 'object',
        description: 'Phone numbers.',
        properties: {
          Fax: {
            type: 'string',
            description:
              'Fax number. If provided, must be between 10 and 20 characters, ideally formatted as `(123) 123-1234`.',
          },
          Home: {
            type: 'string',
            description:
              'Home phone number. If provided, must be between 10 and 20 characters, ideally formatted as `(123) 123-1234`.',
          },
          Mobile: {
            type: 'string',
            description:
              'Mobile phone number. If provided, must be between 10 and 20 characters, ideally formatted as `(123) 123-1234`.',
          },
          Work: {
            type: 'string',
            description:
              'Work phone number. If provided, must be between 10 and 20 characters, ideally formatted as `(123) 123-1234`.',
          },
        },
        required: [],
      },
      charge_recurring_transaction: {
        type: 'object',
        properties: {
          Amount: {
            type: 'number',
            description: 'The amount to record when applying the charge to the lease ledger.',
          },
          FirstOccurrenceDate: {
            type: 'string',
            description:
              'The date the charge will first be processed. This value along with the `Frequency` is also used as the basis for the date set on the transactions in future occurrences.',
            format: 'date',
          },
          Frequency: {
            type: 'string',
            description: 'Specifies the frequency at which the recurring charge will be processed.',
            enum: [
              'Monthly',
              'Weekly',
              'Every2Weeks',
              'Quarterly',
              'Yearly',
              'Every2Months',
              'Daily',
              'Every6Months',
              'OneTime',
            ],
          },
          GLAccountId: {
            type: 'integer',
            description:
              'The general ledger account unique identifier under which the charge amount will be recorded. The general ledger account can only be an income or liability account.',
          },
          PostDaysInAdvance: {
            type: 'integer',
            description:
              'Specifies the number of days ahead of the transaction date the charge will post on the lease ledger. This setting can be used to add the charge to the ledger ahead of the due date for visibility. For example, if the `FirstOccurrenceDate` is set to 8/10/2022 and this value is set to 5 then the charge will added to the ledger on 8/5/2022, but will have transaction date of 8/10/2022. Note, the value must be between 0 to 45 or set to 60, 75 or 90.',
          },
          Duration: {
            type: 'string',
            description:
              'Specifies the period of time/occurrences the recurring payment will be processed. Note, if the `Frequency` field is set to `OneTime` this field should be set to `NULL` as any submitted value will be ignored.',
            enum: ['UntilEndOfTerm', 'SpecificNumber'],
          },
          Memo: {
            type: 'string',
            description: 'Memo associated with the recurring charge. This value cannot exceed 65 characters.',
          },
          NumberOfOccurrences: {
            type: 'integer',
            description:
              'Indicates the number of times the recurring transaction should be processed. This value is required if the `Duration` field is set to `SpecificNumber`. This value can not exceed 100.',
          },
        },
        required: ['Amount', 'FirstOccurrenceDate', 'Frequency', 'GLAccountId', 'PostDaysInAdvance'],
      },
      save_emergency_contact: {
        type: 'object',
        properties: {
          Email: {
            type: 'string',
            description: 'Emergency contact email address.',
          },
          Name: {
            type: 'string',
            description: 'This is an object that represents an emergency contact.',
          },
          Phone: {
            type: 'string',
            description: 'Emergency contact phone number',
          },
          RelationshipDescription: {
            type: 'string',
            description: 'Emergency contact relationship to the person.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { leaseId, ...body } = args as any;
  return asTextContentResult(await client.leases.renewals.create(leaseId, body));
};

export default { metadata, tool, handler };
