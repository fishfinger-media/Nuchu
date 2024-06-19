class LocalizationForm extends HTMLElement {
    constructor() {
      super();
      this.elements = {
        input: this.querySelector('input[name="language_code"], input[name="country_code"]'),
        button: this.querySelector('button'),
        panel: this.querySelector('ul'),
      };
      this.elements.button.addEventListener('click', this.toggleSelector.bind(this));
      this.elements.button.addEventListener('focusout', this.closeSelector.bind(this));
      this.addEventListener('keyup', this.onContainerKeyUp.bind(this));
  
      this.querySelectorAll('a').forEach(item => item.addEventListener('click', this.onItemClick.bind(this)));
    }
  
    hidePanel() {
      this.elements.button.setAttribute('aria-expanded', 'false');
      this.elements.panel.style.display = 'none';
    }
  
    showPanel() {
      this.elements.button.setAttribute('aria-expanded', 'true');
      this.elements.panel.style.display = 'flex';
    }
  
    onContainerKeyUp(event) {
      if (event.code.toUpperCase() !== 'ESCAPE') return;
  
      this.hidePanel();
      this.elements.button.focus();
    }
  
    onItemClick(event) {
      event.preventDefault();
      const form = this.querySelector('form');
      this.elements.input.value = event.currentTarget.dataset.value;
      if (form) form.submit();
    }
  
    toggleSelector() {
      if (this.elements.panel.style.display === 'none' || this.elements.panel.style.display === '') {
        this.showPanel();
      } else {
        this.hidePanel();
      }
    }
  
    closeSelector(event) {
      if (!this.contains(event.relatedTarget)) {
        this.hidePanel();
      }
    }
  }
  
  customElements.define('localization-form', LocalizationForm);
  