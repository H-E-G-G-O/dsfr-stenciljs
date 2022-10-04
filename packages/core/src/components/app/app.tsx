import { Component, h } from '@stencil/core';
@Component({
  tag: 'fr-app',
  styleUrl: 'app.scss',
})
export class App {
  render() {
    return <slot></slot>;
  }
}
