import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'button.button', true>;
    image: Attribute.Media;
    Backgroundimage: Attribute.Media;
    color: Attribute.JSON;
    image2: Attribute.Media;
  };
}

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    color: Attribute.JSON;
    isnew: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.String;
  };
}

export interface ButtonColor extends Schema.Component {
  collectionName: 'components_button_colors';
  info: {
    displayName: 'color';
  };
  attributes: {
    colors: Attribute.JSON;
  };
}

export interface FeedbackFeedback extends Schema.Component {
  collectionName: 'components_feedback_feedbacks';
  info: {
    displayName: 'insta';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    cardItems: Attribute.Component<'main.brands', true>;
    heading: Attribute.String;
    button: Attribute.Component<'button.button', true>;
    colors: Attribute.JSON;
  };
}

export interface FooterBottomFooter extends Schema.Component {
  collectionName: 'components_footer_bottom_footers';
  info: {
    displayName: 'bottom-footer';
  };
  attributes: {
    content: Attribute.String;
    image: Attribute.Media;
    button: Attribute.Component<'button.button', true>;
    colors: Attribute.JSON;
  };
}

export interface FooterFooterCatlogue extends Schema.Component {
  collectionName: 'components_footer_footer_catlogues';
  info: {
    displayName: 'Menu';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'footer.items', true>;
    colors: Attribute.JSON;
  };
}

export interface FooterItems extends Schema.Component {
  collectionName: 'components_footer_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    content: Attribute.String;
    link: Attribute.String;
  };
}

export interface FooterLeftContent extends Schema.Component {
  collectionName: 'components_footer_left_contents';
  info: {
    displayName: 'leftContent';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    description: Attribute.Text;
    colors: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface MainBrands extends Schema.Component {
  collectionName: 'components_main_brands';
  info: {
    displayName: 'brands';
    description: '';
  };
  attributes: {
    brandlogo: Attribute.Media;
    productname: Attribute.String;
    productcount: Attribute.String;
    colors: Attribute.JSON;
  };
}

export interface MainCategorey extends Schema.Component {
  collectionName: 'components_main_categoreys';
  info: {
    displayName: 'categorey';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Component<'main.brands', true>;
  };
}

export interface MainHeader extends Schema.Component {
  collectionName: 'components_main_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media;
    headerbutton: Attribute.Component<'button.button', true>;
  };
}

export interface MainNavbar extends Schema.Component {
  collectionName: 'components_main_navbars';
  info: {
    displayName: 'navbar';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    type: Attribute.String;
  };
}

export interface MainTopMain extends Schema.Component {
  collectionName: 'components_main_top_mains';
  info: {
    displayName: 'top-main';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    image: Attribute.Media;
    frame1: Attribute.Media;
    colors: Attribute.JSON;
    description: Attribute.Text;
    topbutton: Attribute.Component<'button.button', true>;
    frame2: Attribute.Media;
  };
}

export interface ProductsCard extends Schema.Component {
  collectionName: 'components_products_cards';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    cardimages: Attribute.Media;
    title: Attribute.String;
    content: Attribute.String;
    prize: Attribute.String;
    link: Attribute.String;
    colors: Attribute.JSON;
  };
}

export interface ProductsProductList extends Schema.Component {
  collectionName: 'components_products_product_lists';
  info: {
    displayName: 'product-list';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    navbar: Attribute.Component<'main.navbar', true>;
    filterbutton: Attribute.Component<'button.button', true>;
    cards: Attribute.Component<'products.card', true>;
  };
}

export interface ProductsProductNavbar extends Schema.Component {
  collectionName: 'components_products_product_navbars';
  info: {
    displayName: 'product-navbar';
  };
  attributes: {
    title: Attribute.String;
    navbar: Attribute.Component<'main.navbar', true>;
    filterbutton: Attribute.Component<'button.button', true>;
    cards: Attribute.Component<'products.card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.banner': BannerBanner;
      'button.button': ButtonButton;
      'button.color': ButtonColor;
      'feedback.feedback': FeedbackFeedback;
      'footer.bottom-footer': FooterBottomFooter;
      'footer.footer-catlogue': FooterFooterCatlogue;
      'footer.items': FooterItems;
      'footer.left-content': FooterLeftContent;
      'main.brands': MainBrands;
      'main.categorey': MainCategorey;
      'main.header': MainHeader;
      'main.navbar': MainNavbar;
      'main.top-main': MainTopMain;
      'products.card': ProductsCard;
      'products.product-list': ProductsProductList;
      'products.product-navbar': ProductsProductNavbar;
    }
  }
}
