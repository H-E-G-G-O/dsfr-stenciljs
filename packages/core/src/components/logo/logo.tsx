import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fr-logo',
  styleUrl: 'logo.scss',
  shadow: true,
})
export class Logo {
  /**
   * Global size of the logo with the Marianne and the french motto
   * The default size is medium and does not need to be specified
   */
  @Prop({ reflect: true }) size?: 'sm' | 'md' | 'lg' | 'header' = 'md';

  render() {
    return (
      <p
        class={{
          'fr-logo': true,
          [`fr-logo--${this.size}`]: ['sm', 'lg', 'header'].includes(this.size),
        }}
      >
        République
        <br />
        Française
      </p>
    );
  }
}
