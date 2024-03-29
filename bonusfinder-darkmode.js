document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('#darkmode').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    this.x = ((this.x || 0) + 1)%2; 
    if(this.x){ 
      document.querySelectorAll('.body').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.button').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.text-color-grey').forEach(target => target.classList.add('is-dark')); 
      document.querySelectorAll('.text-color-green').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.text-color-darkgreen').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.text-color-blue').forEach(target => target.classList.add('is-dark')); 
      document.querySelectorAll('.text-color-orange').forEach(target => target.classList.add('is-dark')); 
      document.querySelectorAll('.element-title').forEach(target => target.classList.add('is-dark')); 
      document.querySelectorAll('.element-wrapper').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.card').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.card_fancy').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.styleguide-block').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.text-link').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.text-link-enhanced').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.text-link-underline').forEach(target => target.classList.add('is-dark')); 
      document.querySelectorAll('.text-link-breadcrumb').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.text-color-yellow').forEach(target => target.classList.add('is-dark')); 
      document.querySelectorAll('.text-color-highlight').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.text-style-bonuscode').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.text-style-description').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.text-style-socialproof').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.li-item-icon').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.is-cheveron').forEach(target => target.classList.add('is-dark')); 
      document.querySelectorAll('.bonus_item-card').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.bonus_item-logo').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.bonus_item-breakdown').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.dotted-dash').forEach(target => target.classList.add('is-dark')); 
      document.querySelectorAll('.bonus_item-terms').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.bonus_item-img').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.bonus_item-rating .has-img').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.bonus_item-info .has-img').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.secondary_nav').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.button_filters-parent .border-bottom').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.spotlight-bar').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.nav-bar').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.geo-bar').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.text-style-breadcrumb').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.table-container').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.table-head-container').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.table-head-item').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.table-cell-container').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.table-cell-item').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.faq-expand').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.author-element').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.footer').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.footer-top').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.footer-mid').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.footer-bottom').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.section_bonus-list').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.menu-header').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.menu-link').forEach(target => target.classList.add('is-dark'));  
      document.querySelectorAll('.p').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.button_menu').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.image-caption').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.toc').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.container-large .is-bonus-section').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.border-bottom').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.text-color-lightblue').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.float_offer').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.float_offer-logo').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.bonus_item-facts').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.bonus_item-facts-col').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.table-head-mobile').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.cover-photo_logo').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.bonus_item-info-label').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.menu-link-sub').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.loading-spinner').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.payment_icon_large').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.bonus_item-payment-wrapper').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.card_howto-item').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.card_howto-title').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.section_hero').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.press-logos-container-hero').forEach(target => target.classList.add('is-dark'));
      document.querySelectorAll('.live-jackpot').forEach(target => target.classList.add('is-dark'));
      }
      else{ 
      document.querySelectorAll('.body').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.button').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.text-color-grey').forEach(target => target.classList.remove('is-dark'));    
      document.querySelectorAll('.text-color-green').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.text-color-darkgreen').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.text-color-blue').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.text-color-orange').forEach(target => target.classList.remove('is-dark')); 
      document.querySelectorAll('.element-title').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.element-wrapper').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.card').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.card_fancy').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.styleguide-block').forEach(target => target.classList.remove('is-dark')); 
      document.querySelectorAll('.text-link').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.text-link-enhanced').forEach(target => target.classList.remove('is-dark')); 
      document.querySelectorAll('.text-link-underline').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.text-link-breadcrumb').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.text-color-yellow').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.text-color-highlight').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.text-style-bonuscode').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.text-style-description').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.text-style-socialproof').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.li-item-icon').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.is-cheveron').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.bonus_item-card').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.bonus_item-logo').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.bonus_item-breakdown').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.dotted-dash').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.bonus_item-terms').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.bonus_item-img').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.bonus_item-rating .has-img').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.bonus_item-info .has-img').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.secondary_nav').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.button_filters-parent .border-bottom').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.spotlight-bar').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.nav-bar').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.geo-bar').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.text-style-breadcrumb').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.table-container').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.table-head-container').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.table-head-item').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.table-cell-container').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.table-cell-item').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.faq-expand').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.author-element').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.footer').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.footer-top').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.footer-mid').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.footer-bottom').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.section_bonus-list').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.menu-header').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.menu-link').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.p').forEach(target => target.classList.remove('is-dark')); 
      document.querySelectorAll('.button_menu').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.image-caption').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.toc').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.container-large .is-bonus-section').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.border-bottom').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.text-color-lightblue').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.float_offer').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.float_offer-logo').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.bonus_item-facts').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.bonus_item-facts-col').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.table-head-mobile').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.cover-photo_logo').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.bonus_item-info-label').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.menu-link-sub').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.loading-spinner').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.payment_icon_large').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.bonus_item-payment-wrapper').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.card_howto-item').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.card_howto-title').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.section_hero').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.press-logos-container-hero').forEach(target => target.classList.remove('is-dark'));
      document.querySelectorAll('.live-jackpot').forEach(target => target.classList.remove('is-dark'));
      } 
    });
 });
});
