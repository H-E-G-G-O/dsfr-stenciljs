import { Component, h, Host, State, Element } from '@stencil/core';

@Component({
  tag: 'fr-header-band',
  styleUrl: 'header-band.scss',
  shadow: true,
})
export class headerBand {
  @Element() el!: HTMLElement;

  @State() opened = false;
  open() {
    this.opened = true;
  }
  handleClick() {
    (this.el.querySelector('[slot=band]') as HTMLLinkElement).click();
  }
  render() {
    return (
      <Host onClick={() => this.handleClick()}>
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
          <slot></slot>
        </div>
      </Host>
    );
  }
}
