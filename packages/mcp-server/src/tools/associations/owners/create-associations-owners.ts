// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.owners',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/associations/owners',
  operationId: 'ExternalApiAssociationOwners_CreateAssociationOwner',
};

export const tool: Tool = {
  name: 'create_associations_owners',
  description:
    'Creates an association owner.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`\r\n\r\n<span class="permissionBlock">Associations > Ownership accounts</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      FirstName: {
        type: 'string',
        description: 'First name of the owner. The value can not exceed 127 characters.',
      },
      IsOwnerOccupied: {
        type: 'boolean',
        description: 'Indicates if the association owner occupies a unit(s) within the association.',
      },
      LastName: {
        type: 'string',
        description: 'Last name of the owner. The value can not exceed 127 characters.',
      },
      OwnershipAccountId: {
        type: 'integer',
        description: 'Ownership account Id for the owner.',
      },
      PrimaryAddress: {
        $ref: '#/$defs/save_address',
      },
      SendWelcomeEmail: {
        type: 'boolean',
        description: 'Send a welcome email to any homeowner at the association',
      },
      AlternateAddress: {
        $ref: '#/$defs/save_address',
      },
      AlternateEmail: {
        type: 'string',
        description: 'Alternate email of owner.',
      },
      BoardMemberTerm: {
        $ref: '#/$defs/association_owner_board_term',
      },
      Comment: {
        type: 'string',
        description: 'Comments about the owner. The value can not exceed 65,535 characters.',
      },
      DateOfBirth: {
        type: 'string',
        description: 'Date Of Birth for the owner. Must be formatted as `YYYY-MM-DD`.',
        format: 'date',
      },
      Email: {
        type: 'string',
        description: 'Email of owner.',
      },
      EmergencyContact: {
        $ref: '#/$defs/save_emergency_contact',
      },
      MailingPreference: {
        type: 'string',
        description:
          'Mailing preferences for the owner. If an alternate address exists and this value is not provided then the primary address will be set as the preferred address.',
        enum: ['PrimaryAddress', 'AlternateAddress'],
      },
      PhoneNumbers: {
        $ref: '#/$defs/phone_numbers',
      },
      TaxId: {
        type: 'string',
        description:
          'Taxpayer identification number of the owner. Examples of United States identification numbers are Social Security number or a Employer Identification Number. Valid formats are: `12-1234567`, `123-12-1234`, `123456789`.',
      },
    },
    $defs: {
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
      association_owner_board_term: {
        type: 'object',
        description: 'Board member term.',
        properties: {
          BoardPositionType: {
            type: 'string',
            description: 'Indicates the board position held by the association owner.',
            enum: ['President', 'VicePresident', 'Treasurer', 'Secretary', 'BoardMember'],
          },
          EndDate: {
            type: 'string',
            description: 'End date of the board member term. Must be formatted as `YYYY-MM-DD`.',
            format: 'date',
          },
          StartDate: {
            type: 'string',
            description: 'Start date of the board member term. Must be formatted as `YYYY-MM-DD`.',
            format: 'date',
          },
        },
        required: ['BoardPositionType'],
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
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.associations.owners.create(body));
};

export default { metadata, tool, handler };
