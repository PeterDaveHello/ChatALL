import OpenAIAPIBot from "./OpenAIAPIBot";

export default class OpenAIAPIo1MiniBot extends OpenAIAPIBot {
  static _className = "OpenAIAPIo1MiniBot"; // Class name of the bot
  static _logoFilename = "openai-o1-mini-logo.png"; // Place it in public/bots/
  static _model = "o1-mini";

  constructor() {
    super();
  }
}
