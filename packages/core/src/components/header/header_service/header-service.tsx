import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'fr-header-service',
  styleUrl: 'header-service.scss',
  shadow: true,
})
export class Logo {
  render() {
    return (
      <p class="fr-header__service-title">
        <slot></slot>
      </p>
    );
  }
}
