const tryEn = `Use prompt-master. Write a prompt for ChatGPT that turns my meeting notes
into a weekly update for my manager. Ask me what you need to know.`

const tryRu = `Используй prompt-master. Напиши промпт для ChatGPT, который превращает
мои заметки со встреч в недельный отчёт для руководителя. Спроси меня, что тебе нужно знать.`

const briefEn = `Use prompt-master. Write a prompt for [tool].
Goal: [what the result is for]
Input: [what I will paste in]
Output: [format and length]
Reader: [who reads the result]
Rules: [what to avoid]`

const briefRu = `Используй prompt-master. Напиши промпт для [инструмент].
Цель: [для чего нужен результат]
Вход: [что я буду вставлять]
Результат: [формат и длина]
Читатель: [кто прочитает результат]
Правила: [чего избегать]`

const install = `mkdir -p ~/.claude/skills
git clone https://github.com/nidhinjs/prompt-master.git ~/.claude/skills/prompt-master`

export function PromptMasterEn() {
  return (
    <>
      <p>
        Many people write a one-line request to an AI tool and get a bland
        answer. The fix is a better prompt, but writing one takes time, and
        every tool likes a different shape. A coding agent, an image model and a
        chat assistant need different instructions.
      </p>
      <p>
        <code>prompt-master</code> is a Claude skill by the GitHub user
        nidhinjs. Its README describes it as a skill that writes prompts for any
        AI tool. It is free under the MIT license.
      </p>

      <h2>What it does</h2>
      <p>The README lists the steps it runs on every request:</p>
      <ul>
        <li>It detects the tool the prompt is for.</li>
        <li>
          It pulls out what you want: task, input, output, constraints, context,
          audience, memory, success criteria and examples.
        </li>
        <li>
          It asks clarifying questions only when key information is missing:
          "max 3 questions if critical info is missing, never more".
        </li>
        <li>It removes words that don't change the result.</li>
        <li>
          It returns "one clean copyable block with a one-line strategy note".
        </li>
      </ul>
      <p>
        The skill's own description says it activates only when you explicitly
        ask for a prompt for a specific AI tool. It stays out of ordinary chats.
      </p>

      <h2>Try it in five minutes</h2>
      <ol>
        <li>Add the skill (see Install below).</li>
        <li>Open a new chat in Claude and paste:</li>
      </ol>
      <pre>
        <code>{tryEn}</code>
      </pre>
      <ol start={3}>
        <li>Answer the questions. There are at most three.</li>
        <li>Copy the prompt it gives you into ChatGPT and run it.</li>
        <li>
          Compare the result with what you get from your usual one-line request.
        </li>
      </ol>

      <h2>A brief to fill in</h2>
      <p>
        The more of these you give, the fewer questions it needs to ask. Replace
        the brackets and paste:
      </p>
      <pre>
        <code>{briefEn}</code>
      </pre>

      <h2>Install</h2>
      <p>
        In the Claude app, the README recommends this route: download the
        repository as a ZIP, then go to Customize → Skills → Upload a skill.
        Skills need code execution turned on. Anthropic's skills page is
        available for Free, Pro, Max, Ultra, Team and Enterprise plans.
      </p>
      <p>
        In Claude Code, clone the repo into your skills folder. The README marks
        this route "Not suggested", so use the ZIP if you can:
      </p>
      <pre>
        <code>{install}</code>
      </pre>
      <p>
        Anthropic says to install skills only from trusted sources, and to
        review a skill from a less-trusted source before you enable it. The main
        file is SKILL.md, a text file you can read in a few minutes.
      </p>

      <h2>Limits</h2>
      <ul>
        <li>
          The README's promises, such as saving tokens, come from the author.
          The page shows no independent measurements.
        </li>
        <li>
          Memory does not persist across sessions. For a long project, paste
          your background again in each new chat.
        </li>
        <li>
          The README mentions tool profiles in two ways, "20+" in one place and
          "30+" in another. Treat it as a rough size.
        </li>
        <li>
          The output is still a prompt. Read it before you use it, and check
          that it has no facts you did not give.
        </li>
      </ul>
      <p>
        Checked on 24 November 2026: the repository shows about 16,300 stars,
        the MIT license, and SKILL.md version 1.8.2 (the README says 1.8.0).
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a href="https://github.com/nidhinjs/prompt-master">
            nidhinjs/prompt-master on GitHub
          </a>{' '}
          (README, SKILL.md)
        </li>
        <li>
          <a href="https://support.claude.com/en/articles/12512180-using-skills-in-claude">
            Anthropic: using skills in Claude
          </a>
        </li>
      </ul>
    </>
  )
}

export function PromptMasterRu() {
  return (
    <>
      <p>
        Многие пишут ИИ-инструменту запрос в одну строку и получают
        невыразительный ответ. Помогает хороший промпт, но писать его долго, а
        каждый инструмент любит свою форму. Агенту для кода, генератору картинок
        и чат-ассистенту нужны разные инструкции.
      </p>
      <p>
        <code>prompt-master</code> это скилл для Claude от GitHub-пользователя
        nidhinjs. В README он описан как скилл, который пишет промпты для любого
        ИИ-инструмента. Он бесплатный, лицензия MIT.
      </p>

      <h2>Что он делает</h2>
      <p>README перечисляет шаги, которые скилл проходит на каждом запросе:</p>
      <ul>
        <li>Определяет инструмент, для которого нужен промпт.</li>
        <li>
          Вытаскивает, чего вы хотите: задачу, вход, результат, ограничения,
          контекст, аудиторию, память, критерии успеха и примеры.
        </li>
        <li>
          Задаёт уточняющие вопросы, только если не хватает важного: не больше
          трёх, по словам README.
        </li>
        <li>Убирает слова, которые не меняют результат.</li>
        <li>Возвращает один блок для копирования и стратегию в одну строку.</li>
      </ul>
      <p>
        В описании самого скилла сказано, что он включается, только когда вы
        прямо просите промпт для конкретного ИИ-инструмента. В обычных чатах он
        не мешает.
      </p>

      <h2>Попробуйте за пять минут</h2>
      <ol>
        <li>Добавьте скилл (см. «Установка» ниже).</li>
        <li>Откройте новый чат в Claude и вставьте:</li>
      </ol>
      <pre>
        <code>{tryRu}</code>
      </pre>
      <ol start={3}>
        <li>Ответьте на вопросы. Их будет не больше трёх.</li>
        <li>Скопируйте готовый промпт в ChatGPT и запустите.</li>
        <li>
          Сравните результат с тем, что даёт ваш обычный запрос в одну строку.
        </li>
      </ol>

      <h2>Бриф для заполнения</h2>
      <p>
        Чем больше пунктов вы заполните, тем меньше вопросов придётся задавать
        скиллу. Замените скобки и вставьте:
      </p>
      <pre>
        <code>{briefRu}</code>
      </pre>

      <h2>Установка</h2>
      <p>
        В приложении Claude README рекомендует такой путь: скачайте репозиторий
        ZIP-архивом, затем откройте Customize → Skills → Upload a skill. Для
        скиллов нужно включить выполнение кода. Скиллы доступны на тарифах Free,
        Pro, Max, Ultra, Team и Enterprise, по странице Anthropic.
      </p>
      <p>
        В Claude Code клонируйте репозиторий в папку скиллов. README помечает
        этот путь как «не рекомендуется», поэтому по возможности берите ZIP:
      </p>
      <pre>
        <code>{install}</code>
      </pre>
      <p>
        Anthropic просит ставить скиллы только из доверенных источников и
        просматривать скилл из менее надёжного источника перед включением.
        Главный файл здесь SKILL.md, текст, который читается за несколько минут.
      </p>

      <h2>Ограничения</h2>
      <ul>
        <li>
          Обещания из README, например экономия токенов, исходят от автора.
          Независимых замеров на странице нет.
        </li>
        <li>
          Память не сохраняется между сессиями. В долгом проекте вставляйте
          вводные заново в каждом новом чате.
        </li>
        <li>
          В README число профилей инструментов названо двумя способами: «20+» в
          одном месте и «30+» в другом. Считайте это примерным размером.
        </li>
        <li>
          Результат остаётся промптом. Прочитайте его перед использованием и
          проверьте, что в нём нет фактов, которых вы не давали.
        </li>
      </ul>
      <p>
        Проверено 24 ноября 2026: у репозитория около 16 300 звёзд, лицензия
        MIT, версия SKILL.md 1.8.2 (в README указана 1.8.0).
      </p>

      <h2>Источники</h2>
      <ul>
        <li>
          <a href="https://github.com/nidhinjs/prompt-master">
            nidhinjs/prompt-master на GitHub
          </a>{' '}
          (README, SKILL.md)
        </li>
        <li>
          <a href="https://support.claude.com/en/articles/12512180-using-skills-in-claude">
            Anthropic: как пользоваться скиллами в Claude
          </a>
        </li>
      </ul>
    </>
  )
}
