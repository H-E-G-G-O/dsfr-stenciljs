import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'fr-header-service',
  styleUrl: 'header-service.scss',
  shadow: true,
})
export class Logo {
  @Element() el!: HTMLElement;

  /** Niveau du titre pour générer le tag HTML et conserver la sématique (optionnel) */
  @Prop({ reflect: true }) headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;

  private get headingLevelFormat() {
    return 'h' + this.headingLevel;
  }

  render() {
    let template = (
      <p class="fr-header__service-title">
        <slot></slot>
      </p>
    );
    if (this.headingLevel) {
      template = (
        <this.headingLevelFormat class="fr-header__service-title">
          <slot></slot>
        </this.headingLevelFormat>
      );
    }
    return <div class="fr-header__service">{template}</div>;
  }
}
