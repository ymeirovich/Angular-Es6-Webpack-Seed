import template from "!html!./hello.html";

class HelloController {
  constructor() {
    this.heading = 'Hello, World!'
    this.text = 'Lorem ipsum mi posuere venenatis mi etiam tempor sapien, varius maecenas porttitor proin fusce gravida ad nunc, volutpat fermentum curabitur eu class posuere sodales.'
  }
}

export let hello = {
    template: template,
    bindings: {},
    controller:HelloController
};
