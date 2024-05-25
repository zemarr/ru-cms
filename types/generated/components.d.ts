import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAccordion extends Schema.Component {
  collectionName: 'components_components_accordions';
  info: {
    displayName: 'accordion';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    details: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface ComponentsAddress extends Schema.Component {
  collectionName: 'components_components_addresses';
  info: {
    displayName: 'address';
    icon: 'earth';
  };
  attributes: {
    url: Attribute.Text;
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String;
    destination: Attribute.String;
    class: Attribute.String;
  };
}

export interface ComponentsCoaching extends Schema.Component {
  collectionName: 'components_components_coachings';
  info: {
    displayName: 'Coaching';
    icon: 'globe';
    description: '';
  };
  attributes: {
    coachingMedia: Attribute.Media;
    title: Attribute.Text;
    subtitle: Attribute.Text;
    coachingFeatures: Attribute.Component<'components.accordion', true>;
    coachingCTA: Attribute.Component<'components.button'>;
    pageTitle: Attribute.String;
  };
}

export interface ComponentsLearnMore extends Schema.Component {
  collectionName: 'components_components_learn_mores';
  info: {
    displayName: 'LearnMore';
    icon: 'search';
    description: '';
  };
  attributes: {
    learnMoreMedia: Attribute.Media;
    title: Attribute.Text;
    socialMediaLinks: Attribute.Component<'components.social-media', true>;
    addressComponent: Attribute.Component<'components.address'>;
    privacyPolicyComponent: Attribute.Component<'components.privacy-policy'>;
    copyright: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    pageTitle: Attribute.String;
  };
}

export interface ComponentsPrivacyPolicy extends Schema.Component {
  collectionName: 'components_components_privacy_policies';
  info: {
    displayName: 'privacyPolicy';
    icon: 'information';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface ComponentsSocialMedia extends Schema.Component {
  collectionName: 'components_components_social_medias';
  info: {
    displayName: 'socialMedia';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String;
    icon: Attribute.Media;
    url: Attribute.String;
  };
}

export interface ComponentsSuccessesComponent extends Schema.Component {
  collectionName: 'components_components_successes_components';
  info: {
    displayName: 'SuccessesComponent';
    icon: 'check';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    subtitle: Attribute.Text;
    otherSuccesses: Attribute.Component<'components.button'>;
    pageTitle: Attribute.String;
  };
}

export interface ComponentsTestimonials extends Schema.Component {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'TestimonialsSection';
    icon: 'bell';
    description: '';
  };
  attributes: {
    testimonialsCTA: Attribute.Component<'components.button'>;
    pageTitle: Attribute.String;
  };
}

export interface ComponentsTypingHeading extends Schema.Component {
  collectionName: 'components_components_typing_headings';
  info: {
    displayName: 'TypingHeading';
    icon: 'write';
    description: '';
  };
  attributes: {
    title1: Attribute.Text;
    title2: Attribute.Text;
    subtitle: Attribute.Text;
    mainHeroImage: Attribute.Media;
    mainHeroCTA: Attribute.Component<'components.button'>;
  };
}

export interface LandingPageCoachingSection extends Schema.Component {
  collectionName: 'components_landing_page_coaching_sections';
  info: {
    displayName: 'CoachingSection';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.String;
    heading: Attribute.Text;
    subheading: Attribute.Text;
    coachActivity: Attribute.Component<'components.accordion', true>;
    coachesCTA: Attribute.Component<'components.button'>;
    coachingImage: Attribute.Media;
  };
}

export interface LandingPageLearnMoreSection extends Schema.Component {
  collectionName: 'components_landing_page_learn_more_sections';
  info: {
    displayName: 'LearnMoreSection';
    icon: 'pinMap';
  };
  attributes: {
    sectionTitle: Attribute.String;
    title: Attribute.Text;
    officeAddress: Attribute.Component<'components.address'>;
    privacy: Attribute.Component<'components.privacy-policy'>;
    copyright: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface LandingPageServicesSection extends Schema.Component {
  collectionName: 'components_landing_page_services_sections';
  info: {
    displayName: 'ServicesSection';
    icon: 'cog';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.String;
    title: Attribute.Text;
    subtitle: Attribute.Text;
    servicesAccordion: Attribute.Component<'components.accordion', true>;
    servicesImage: Attribute.Media;
  };
}

export interface LandingPageSuccessesSection extends Schema.Component {
  collectionName: 'components_landing_page_successes_sections';
  info: {
    displayName: 'SuccessesSection';
    icon: 'check';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    subtitle: Attribute.Text;
    ctaTitle: Attribute.Component<'components.button'>;
    sectionTitle: Attribute.String;
  };
}

export interface LandingPageTestimonialSection extends Schema.Component {
  collectionName: 'components_landing_page_testimonial_sections';
  info: {
    displayName: 'TestimonialSection';
    icon: 'message';
  };
  attributes: {
    sectionTitle: Attribute.String;
    successesCTA: Attribute.Component<'components.button'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.accordion': ComponentsAccordion;
      'components.address': ComponentsAddress;
      'components.button': ComponentsButton;
      'components.coaching': ComponentsCoaching;
      'components.learn-more': ComponentsLearnMore;
      'components.privacy-policy': ComponentsPrivacyPolicy;
      'components.social-media': ComponentsSocialMedia;
      'components.successes-component': ComponentsSuccessesComponent;
      'components.testimonials': ComponentsTestimonials;
      'components.typing-heading': ComponentsTypingHeading;
      'landing-page.coaching-section': LandingPageCoachingSection;
      'landing-page.learn-more-section': LandingPageLearnMoreSection;
      'landing-page.services-section': LandingPageServicesSection;
      'landing-page.successes-section': LandingPageSuccessesSection;
      'landing-page.testimonial-section': LandingPageTestimonialSection;
    }
  }
}
