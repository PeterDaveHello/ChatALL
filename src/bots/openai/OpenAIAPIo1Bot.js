import OpenAIAPIBot from "./OpenAIAPIBot";

export default class OpenAIAPIo1Bot extends OpenAIAPIBot {
  static _className = "OpenAIAPIo1Bot"; // Class name of the bot
  static _logoFilename = "openai-o1-logo.png"; // Place it in public/bots/
  static _model = "o1";

  constructor() {
    super();
  }
}
