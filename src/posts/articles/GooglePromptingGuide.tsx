const templateEn = `Persona:  You are [a role].
Task:     [Verb] [what you need].
Context:  [Who it is for, the situation, @file with the details].
Format:   [Length, list or paragraph, tone].`

const templateRu = `Persona (роль):   Ты [роль].
Task (задача):    [Глагол] [что нужно].
Context (контекст): [Для кого, в какой ситуации, @файл с деталями].
Format (формат):  [Длина, список или абзац, тон].`

const exampleEn = `You are a program manager in retail. Draft an executive summary email to the
regional director based on the launch plan in @Launch plan Q1. Limit to bullet points.`

const exampleRu = `Ты менеджер программ в рознице. Составь краткое письмо для директора региона
по плану запуска из @Launch plan Q1. Только маркированный список.`

export function GooglePromptingGuideEn() {
  return (
    <>
      <p>
        Google publishes a free prompting guide for Workspace with Gemini. It is
        more than 70 pages, mostly example prompts by job: administrative
        support, marketing, sales, HR and more. The core advice fits on one
        card.
      </p>

      <h2>Four parts of a prompt</h2>
      <p>
        The guide says: "The four main areas to consider when writing a basic,
        effective prompt are" persona, task, context and format.
      </p>
      <ul>
        <li>Persona: who the AI should be.</li>
        <li>Task: what you want done.</li>
        <li>Context: what the AI needs to know.</li>
        <li>Format: how the answer should look.</li>
      </ul>
      <p>
        Google's own example: "You are a program manager in [industry]. Draft an
        executive summary email to [persona] based on [details about relevant
        program docs]. Limit to bullet points."
      </p>
      <p>
        And a note on how much to use: "You don't need to use all four
        components in every prompt, but using a few will help! Always remember
        to include a verb or command as part of your task; this is the most
        important part of a prompt."
      </p>

      <h2>Six quick tips from the guide</h2>
      <ul>
        <li>Use natural language, as if you speak to another person.</li>
        <li>
          Be specific and iterate. Give instructions (what to do) and
          constraints (what to avoid).
        </li>
        <li>Be concise and avoid jargon.</li>
        <li>
          Make it a conversation: if the result misses, send a follow-up and
          refine.
        </li>
        <li>Use your documents from Google Drive to personalize the output.</li>
        <li>
          Let Gemini suggest prompts, for example the suggested actions in the
          Gmail side panel.
        </li>
      </ul>

      <h2>The card as a fill-in template</h2>
      <pre>
        <code>{templateEn}</code>
      </pre>
      <p>A filled example in the same shape:</p>
      <pre>
        <code>{exampleEn}</code>
      </pre>
      <p>
        The four parts do not depend on the tool. The guide is written for
        Gemini in Workspace, but the same structure works in ChatGPT or Claude.
        Only the file tagging with @ is specific to Google.
      </p>

      <h2>After the first answer</h2>
      <p>
        The guide ends with a reminder that is easy to skip: "Before putting an
        output from Workspace with Gemini into action, review it to ensure
        clarity, relevance, and accuracy." It adds that "the final output is
        yours". Its "Leveling up" page also suggests asking the AI: "What
        questions do you have for me that would help you provide the best
        output?"
      </p>

      <h2>A note on the link</h2>
      <p>
        Google also has a shorter "Prompting Guide 101" PDF. At the time of
        writing, its old direct link no longer opened, so the post links to the
        current full guide below.
      </p>

      <h2>Source</h2>
      <ul>
        <li>
          <a href="https://services.google.com/fh/files/misc/workspace_with_gemini_prompting_guide.pdf">
            Google: Workspace with Gemini prompting guide (PDF), pages 4 to 5
            and 70
          </a>
        </li>
      </ul>
    </>
  )
}

export function GooglePromptingGuideRu() {
  return (
    <>
      <p>
        У Google есть бесплатное руководство по промптам для Workspace with
        Gemini. В нём больше 70 страниц, в основном примеры промптов по
        профессиям: поддержка руководителей, маркетинг, продажи, HR и другие.
        Главный совет помещается на одну карточку.
      </p>

      <h2>Четыре части промпта</h2>
      <p>
        В руководстве сказано: «The four main areas to consider when writing a
        basic, effective prompt are», то есть четыре основные области хорошего
        базового промпта: persona, task, context и format.
      </p>
      <ul>
        <li>Persona: кем должен быть AI.</li>
        <li>Task: что нужно сделать.</li>
        <li>Context: что AI нужно знать.</li>
        <li>Format: как должен выглядеть ответ.</li>
      </ul>
      <p>
        Пример самого Google: «You are a program manager in [industry]. Draft an
        executive summary email to [persona] based on [details about relevant
        program docs]. Limit to bullet points.» По-русски: «Ты менеджер программ
        в [отрасль]. Составь краткое письмо для [адресат] по [детали из
        документов программы]. Только маркированный список».
      </p>
      <p>
        И замечание о том, сколько брать: использовать все четыре в каждом
        промпте не нужно, но несколько помогут. Всегда добавляйте глагол или
        команду в задачу, это самая важная часть промпта.
      </p>

      <h2>Шесть быстрых советов из руководства</h2>
      <ul>
        <li>Пишите естественным языком, как будто говорите с человеком.</li>
        <li>
          Будьте конкретны и уточняйте. Давайте инструкции (что сделать) и
          ограничения (чего избегать).
        </li>
        <li>Пишите коротко и без жаргона.</li>
        <li>
          Ведите диалог: если результат не подошёл, отправьте уточнение и
          доработайте.
        </li>
        <li>Подключайте свои документы из Google Drive.</li>
        <li>
          Пользуйтесь подсказками Gemini, например предложенными действиями на
          боковой панели Gmail.
        </li>
      </ul>

      <h2>Карточка как шаблон</h2>
      <pre>
        <code>{templateRu}</code>
      </pre>
      <p>Заполненный пример в той же форме:</p>
      <pre>
        <code>{exampleRu}</code>
      </pre>
      <p>
        Четыре части не привязаны к инструменту. Руководство написано для Gemini
        в Workspace, но такая же структура работает в ChatGPT и Claude. Только
        подключение файлов через @ есть у Google.
      </p>

      <h2>После первого ответа</h2>
      <p>
        В конце руководство напоминает о вещи, которую легко пропустить: прежде
        чем использовать ответ, проверьте его на ясность, уместность и точность.
        Итоговый текст остаётся вашим. На странице «Leveling up» также советуют
        спросить у AI: «What questions do you have for me that would help you
        provide the best output?», то есть какие вопросы у него есть к вам,
        чтобы ответ получился лучше.
      </p>

      <h2>О ссылке</h2>
      <p>
        У Google есть и более короткий PDF «Prompting Guide 101». На момент
        написания его старая прямая ссылка не открывалась, поэтому в посте
        ссылка на актуальное полное руководство ниже.
      </p>

      <h2>Источник</h2>
      <ul>
        <li>
          <a href="https://services.google.com/fh/files/misc/workspace_with_gemini_prompting_guide.pdf">
            Google: руководство по промптам Workspace with Gemini (PDF),
            страницы 4–5 и 70
          </a>
        </li>
      </ul>
    </>
  )
}
