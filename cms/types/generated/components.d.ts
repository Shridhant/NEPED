import type { Schema, Struct } from '@strapi/strapi';

export interface BlogSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_sections';
  info: {
    description: 'A headed section of an article. Separate paragraphs with a blank line.';
    displayName: 'Section';
    icon: 'layer';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    highlightQuote: Schema.Attribute.Text;
  };
}

export interface SharedTextItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_items';
  info: {
    description: 'One line of text in a list.';
    displayName: 'Text item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'blog.section': BlogSection;
      'shared.text-item': SharedTextItem;
    }
  }
}
