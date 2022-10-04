import { Component, h } from '@stencil/core';

@Component({
  tag: 'fr-header',
  styleUrl: 'header.scss',
  shadow: true,
})
export class Header {
  render() {
    return (
      <header role="banner" class="fr-header">
        <div class="fr-header__body">
          <div class="fr-container">
            <div class="fr-header__body-row">
              <div class="fr-header__brand fr-enlarge-link">
                <div class="fr-header__brand-top">
                  <div class="fr-header__logo">
                    <a href="/" title="Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                      <p class="fr-logo">
                        Intitulé
                        <br />
                        officiel
                      </p>
                    </a>
                  </div>
                  <div class="fr-header__navbar">
                    <button class="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-626" aria-haspopup="menu" id="button-627" title="Menu">
                      Menu
                    </button>
                  </div>
                </div>
                <div class="fr-header__service">
                  <p class="fr-header__service-title">
                    <span class="fr-badge fr-badge--sm fr-badge--green-emeraude">BETA</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fr-header__menu fr-modal" id="modal-626" aria-labelledby="button-627">
          <div class="fr-container">
            <button class="fr-btn--close fr-btn" aria-controls="modal-626" title="Fermer">
              Fermer
            </button>
            <div class="fr-header__menu-links"></div>
            <nav class="fr-nav" id="navigation-629" role="navigation" aria-label="Menu principal">
              <ul class="fr-nav__list">
                <li class="fr-nav__item">
                  <a class="fr-nav__link" href="#" target="_self">
                    accès direct
                  </a>
                </li>
                <li class="fr-nav__item">
                  <a class="fr-nav__link" href="#" target="_self">
                    accès direct
                  </a>
                </li>
                <li class="fr-nav__item">
                  <a class="fr-nav__link" href="#" target="_self">
                    accès direct
                  </a>
                </li>
                <li class="fr-nav__item">
                  <a class="fr-nav__link" href="#" target="_self">
                    accès direct
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
