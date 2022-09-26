import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'djl-form-checkbox',
  styleUrl: 'form-checkbox.scss',
  shadow: true,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DjlFormCheckbox {
  /**
   * Makes the purpose of the field clear
   */
  @Prop() label: string;

  /**
   * When further detail of the purpose is needed
   */
  @Prop() description: string;

  /**
   * Specifies a short hint that describes the expected value of the field. Can also be used as a supporting instruction.
   */
  @Prop() hint: string;

  /**
   * Text that describes the error that occurred
   */
  @Prop() errorText: string;

  /**
   * Include “(required)” as text at the end of labels of required fields
   */
  @Prop() required = false;

  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({mutable: true}) type: 'normal' | 'parent-child';

  componentWillLoad() {
    if (this.type == undefined) {
      this.type = 'normal';
    }
  }

  render() {
    return (
      <Host>
        {this.required
          ? <h3 class='form-checkbox-label'><span class='text-color-warning'>*</span> {this.label} (required)</h3>
          : <h3 class='form-checkbox-label'>{this.label}</h3>
        }
        {this.description && <p class='form-checkbox-desc'>{this.description}</p>}
        {this.hint && <p class='form-checkbox-hint'>{this.hint}</p>}
        <div class={`slot-${this.type}`}>
          <slot/>
        </div>
        {this.errorText &&
          <p class='error-message'>
            <djl-icon icon-config={'{"unicode": "f06a", "fontFamily": "fa-light"}'}></djl-icon>
            {this.errorText}
          </p>
        }
      </Host>
    );
  }

}
