// Not listed yet: register in src/posts/notes.ts and src/posts/meta.json on the
// day the LinkedIn post goes out (rule: LinkedIn first, then the site).

const promptEn = `Interview me about the plan below until we both understand it.
Ask in rounds. In each round, ask only the questions you can ask now,
number them, and give your recommended answer to each, worded so I can
reply "yes". Don't ask me for facts you can find yourself.
Don't write the plan until I confirm we're done.

My plan: [one or two sentences]`

const promptRu = `Задай мне вопросы о плане ниже, пока мы оба его не поймём.
Спрашивай раундами. В каждом раунде задавай только те вопросы, которые
можно задать уже сейчас, нумеруй их и к каждому давай свой рекомендуемый
ответ так, чтобы я мог ответить «да». Не спрашивай у меня то, что можешь
узнать сам. Не пиши план, пока я не подтвержу, что мы закончили.

Мой план: [одно-два предложения]`

const install = `claude plugin install mattpocock-skills@claude-plugins-official`

export function GrillMeEn() {
  return (
    <>
      <p>
        Most people ask AI for a plan in one message and get a confident answer
        built on guesses. Matt Pocock calls the root problem misalignment: you
        think the other side knows what you want, then you see the result. His
        fix is a grilling session, where the AI asks you questions before it
        writes anything.
      </p>
      <p>
        <code>grill-me</code> is that session packed as a Claude skill. It is
        part of his free skills repo on GitHub (MIT license), and he calls it
        one of his most popular skills.
      </p>

      <h2>How a session goes</h2>
      <ul>
        <li>
          You type <code>/grill-me</code> and describe a loose idea. Claude
          won't start it on its own.
        </li>
        <li>
          Questions come in numbered rounds. A round holds only the questions
          that don't depend on answers you haven't given yet.
        </li>
        <li>
          Each question comes with a recommended answer, worded so "yes" accepts
          it.
        </li>
        <li>
          Facts are Claude's job: it looks up what it can find. Decisions are
          yours.
        </li>
        <li>
          It writes no files and does nothing until you confirm that you both
          understand the plan.
        </li>
      </ul>

      <h2>How to get a good result</h2>
      <ul>
        <li>
          Start it in a fresh chat, not on top of a plan the AI already wrote.
        </li>
        <li>
          Answer actively. The skill's docs name the main failure: saying
          "agreed" to forty questions and leaving with a plan the AI wrote. Push
          back, say when the scope drifts, and answer "I don't know" when you
          don't.
        </li>
        <li>
          Some questions can't be settled by talking, like how a page should
          feel. When you hit one, stop, make a rough draft, look at it, and come
          back with a one-line answer.
        </li>
      </ul>

      <h2>Install</h2>
      <p>In Claude Code, one command:</p>
      <pre>
        <code>{install}</code>
      </pre>
      <p>
        In the Claude app, skills are uploaded as a ZIP. Download the repo, zip
        the <code>skills/productivity/grilling</code> folder (grill-me calls
        it), then go to Customize → Skills → "+" → Create skill → Upload a
        skill. Skills also need code execution turned on in Settings →
        Capabilities. Anthropic asks you to install skills only from sources you
        trust, so read the SKILL.md first: this one is a single page of text.
      </p>

      <h2>No Claude? Use the prompt</h2>
      <p>
        The same idea works in ChatGPT or any chat as a prompt. This one is
        adapted from the skill:
      </p>
      <pre>
        <code>{promptEn}</code>
      </pre>

      <h2>Sources</h2>
      <ul>
        <li>
          <a href="https://github.com/mattpocock/skills">
            mattpocock/skills on GitHub
          </a>{' '}
          (README, <code>skills/productivity/grilling/SKILL.md</code>,{' '}
          <code>docs/productivity/grill-me.md</code>)
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

export function GrillMeRu() {
  return (
    <>
      <p>
        Обычно у AI просят план одним сообщением и получают уверенный ответ,
        построенный на догадках. Matt Pocock называет корень проблемы
        рассогласованием: вам кажется, что другая сторона знает, чего вы хотите,
        а потом вы видите результат. Он предлагает сессию-допрос, в которой AI
        сначала задаёт вопросы и только потом пишет.
      </p>
      <p>
        <code>grill-me</code> упаковывает такую сессию в скилл для Claude. Он
        лежит в бесплатном репозитории скиллов Pocock на GitHub (лицензия MIT),
        и автор называет его одним из самых популярных своих скиллов.
      </p>

      <h2>Как проходит сессия</h2>
      <ul>
        <li>
          Вы пишете <code>/grill-me</code> и описываете сырую идею. Сам Claude
          этот скилл не запускает.
        </li>
        <li>
          Вопросы идут нумерованными раундами. В раунд попадают только те
          вопросы, которые не зависят от ещё не данных ответов.
        </li>
        <li>
          К каждому вопросу есть рекомендуемый ответ, сформулированный так,
          чтобы хватило «да».
        </li>
        <li>Факты ищет Claude, решения принимаете вы.</li>
        <li>
          Он не создаёт файлов и ничего не делает, пока вы не подтвердите, что
          план понятен обоим.
        </li>
      </ul>

      <h2>Как получить хороший результат</h2>
      <ul>
        <li>
          Начинайте в новом чате, а не поверх плана, который AI уже написал.
        </li>
        <li>
          Отвечайте активно. В документации скилла названа главная ошибка: сорок
          раз ответить «согласен» и уйти с планом, который написал AI. Спорьте,
          говорите, когда задача расползается, и отвечайте «не знаю», если не
          знаете.
        </li>
        <li>
          Некоторые вопросы разговором не решить, например, как должна ощущаться
          страница. На таком вопросе остановитесь, сделайте черновик, посмотрите
          на него и вернитесь с ответом в одну строку.
        </li>
      </ul>

      <h2>Установка</h2>
      <p>В Claude Code одна команда:</p>
      <pre>
        <code>{install}</code>
      </pre>
      <p>
        В приложении Claude скиллы загружаются ZIP-архивом. Скачайте
        репозиторий, заархивируйте папку{' '}
        <code>skills/productivity/grilling</code> (grill-me вызывает именно её)
        и откройте Customize → Skills → «+» → Create skill → Upload a skill. Для
        скиллов ещё нужно включить выполнение кода в Settings → Capabilities.
        Anthropic просит ставить скиллы только из источников, которым вы
        доверяете, поэтому сначала прочитайте SKILL.md: здесь это одна страница
        текста.
      </p>

      <h2>Нет Claude? Есть промпт</h2>
      <p>
        Та же идея работает в ChatGPT и любом чате как промпт. Этот собран по
        мотивам скилла:
      </p>
      <pre>
        <code>{promptRu}</code>
      </pre>

      <h2>Источники</h2>
      <ul>
        <li>
          <a href="https://github.com/mattpocock/skills">
            mattpocock/skills на GitHub
          </a>{' '}
          (README, <code>skills/productivity/grilling/SKILL.md</code>,{' '}
          <code>docs/productivity/grill-me.md</code>)
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
