import type { Schema, Struct } from '@strapi/strapi';

export interface CompanyKompaniya extends Struct.ComponentSchema {
  collectionName: 'components_company_kompaniya';
  info: {
    description: '';
    displayName: '\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F';
    icon: 'briefcase';
  };
  attributes: {
    company_description: Schema.Attribute.Text;
    company_name: Schema.Attribute.String;
  };
}

export interface EducationObrazovanie extends Struct.ComponentSchema {
  collectionName: 'components_education_obrazovanie';
  info: {
    description: '';
    displayName: '\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435';
    icon: 'book';
  };
  attributes: {
    educate_end: Schema.Attribute.BigInteger;
    educate_start: Schema.Attribute.BigInteger;
    education_level: Schema.Attribute.Text;
    education_name: Schema.Attribute.Text;
  };
}

export interface SkillNavyk extends Struct.ComponentSchema {
  collectionName: 'components_skill_navyk';
  info: {
    displayName: '\u041D\u0430\u0432\u044B\u043A';
    icon: 'chartCircle';
  };
  attributes: {
    skill_name: Schema.Attribute.String;
    skill_percent: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'company.kompaniya': CompanyKompaniya;
      'education.obrazovanie': EducationObrazovanie;
      'skill.navyk': SkillNavyk;
    }
  }
}
