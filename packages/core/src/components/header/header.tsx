import { Component, h, State, Element, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'fr-header',
  styleUrl: 'header.scss',
  shadow: true,
})
export class Header implements ComponentInterface {
  @Element() el!: HTMLElement;

  @State() opened = false;
  private open() {
    this.opened = !this.opened;
  }

  templateService: HTMLElement;

  handleClick() {
    (this.el.querySelector('[slot=band]') as HTMLLinkElement).click();
  }

  componentWillLoad() {
    if (this.el.querySelector('[slot=service]')) {
      this.templateService = (
        <div class="fr-header__service">
          <slot name="service"></slot>
        </div>
      );
    }
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
                    <slot name="band"></slot>
                  </div>
                  <div class="fr-header__navbar">
                    <button class="fr-btn--menu fr-btn" aria-controls="modal-626" aria-haspopup="menu" id="button-627" title="Menu" onClick={() => this.open()}>
                      Menu
                    </button>
                  </div>
                </div>
                {this.templateService}
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
            <slot></slot>
          </div>
        </div>
      </header>
    );
  }
}
