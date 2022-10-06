import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'fr-header',
  styleUrl: 'header.scss',
  shadow: true,
})
export class Header {
  @State() opened = false;
  close() {
    this.opened = false;
  }

  render() {
    return (
      <header role="banner" class="fr-header">
        <div class="fr-header__body">
          <div class="fr-container">
            <div class="fr-header__body-row">
              <slot></slot>
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
            <button class="fr-btn--close fr-btn" aria-controls="modal-626" title="Fermer" onClick={() => this.close()}>
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
