import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'fr-header',
  styleUrl: 'header.scss',
  shadow: true,
})
export class Header {
  @State() opened = false;
  open() {
    this.opened = !this.opened;
  }

  render() {
    return (
      <header role="banner" class="fr-header">
        <div class="fr-header__body">
          <div class="fr-container">
            <div class="fr-header__body-row">
              <div class="fr-header__brand fr-enlarge-link">
                <div class="fr-header__brand-top">
                  <div class="fr-header__logo">
                    <a href="https://www.systeme-de-design.gouv.fr/" title="Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                      <slot name="logo"></slot>
                    </a>
                  </div>
                  <div class="fr-header__navbar">
                    <button class="fr-btn--menu fr-btn" aria-controls="modal-626" aria-haspopup="menu" id="button-627" title="Menu" onClick={() => this.open()}>
                      Menu
                    </button>
                  </div>
                </div>
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
        <div
          class={{
            'fr-header__menu fr-modal': true,
            [`fr-modal--opened`]: this.opened,
          }}
          id="modal-626"
          aria-labelledby="button-627"
        >
          <div class="fr-container">
            <button class="fr-btn--close fr-btn" aria-controls="modal-626" title="Fermer" onClick={() => this.open()}>
              Fermer
            </button>
            <div class="fr-header__menu-links"></div>
            <slot name="navigation"></slot>
          </div>
        </div>
      </header>
    );
  }
}
