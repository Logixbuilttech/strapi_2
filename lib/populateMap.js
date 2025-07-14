// lib/populateMap.js
export const globalPopulate = { populate: '*' };

export const homePopulate = {
  Home: {
    on: {
      'layout.hero': { populate: '*' },
      'layout.content-block': { populate: '*' },
      'layout.feature-card': { populate: { card: { populate: '*' } } },
      'layout.feature-item': { populate: { Item: { populate: '*' } } },
      'layout.step-item': { populate: '*' },
      'layout.target-audience-section': {
        populate: { Item: { populate: '*' } },
      },
    },
  },
};


export const WhoWeArePopulate = { populate: '*' };

export const ArticlePopulate = { populate: '*' };

export const ArticleSlugPopulate = { populate: '*' };

export const PrivacyPolicyPopulate = { populate: '*' };