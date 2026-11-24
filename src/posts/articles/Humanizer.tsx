const sampleBefore = `I'm thrilled to announce that our new report is a game-changer,
showcasing the pivotal role of data in today's fast-paced landscape.`

const sampleAfter = `Our new report is out. It shows how teams use data in their daily work.`

const sampleBeforeRu = `Рады сообщить, что наш новый отчёт стал переломным моментом и
подчёркивает ключевую роль данных в стремительном мире.`

const sampleAfterRu = `Вышел наш новый отчёт. В нём показано, как команды работают с данными каждый день.`

const installCode = `/plugin marketplace add blader/humanizer
/plugin install humanizer@humanizer`

const installOld = `npx skills add blader/humanizer --global --agent claude-code`

export function HumanizerEn() {
  return (
    <>
      <p>
        LinkedIn now has a "Seems like AI slop" button. Fortune reports that
        members see 40% fewer views on what the platform classified as AI slop.
        A raw AI draft is the easiest thing to flag.
      </p>
      <p>
        <code>humanizer</code> is a free skill by blader that checks your text
        for the signs of AI writing and rewrites them. The repo has 72.9K stars
        on GitHub (24 November 2026) and an MIT license.
      </p>

      <h2>What it does</h2>
      <p>
        The README says it "makes AI-written text sound like a person wrote it,
        without changing what it says." The pattern list is built on Wikipedia's
        "Signs of AI writing", the guide Wikipedia editors use to catch
        AI-generated text.
      </p>
      <p>A sample written to show the idea, not a real test:</p>
      <pre>
        <code>{'Before: ' + sampleBefore + '\n\nAfter: ' + sampleAfter}</code>
      </pre>
      <p>
        The "after" is plainer and shorter. It also shows the limit: the tool
        cuts filler, but it cannot add a detail only you know.
      </p>

      <h2>Three ways to use it</h2>
      <ul>
        <li>
          Type <code>/humanizer</code>, then paste your text.
        </li>
        <li>Write in plain words: "Please humanize this text: [your text]".</li>
        <li>
          Point it at a file: "Humanize the prose in docs/launch-post.md".
        </li>
      </ul>

      <h2>Install in Claude Code</h2>
      <p>Two commands. The plugin needs Claude Code 2.1.142 or newer.</p>
      <pre>
        <code>{installCode}</code>
      </pre>
      <p>On an older version, the README gives this command instead:</p>
      <pre>
        <code>{installOld}</code>
      </pre>

      <h2>Install in the Claude app</h2>
      <p>
        On the repo page, open Code → Download ZIP. In Claude, go to Settings →
        Capabilities and make sure "Code execution and file creation" is on (it
        is called "Create and edit files" in the newer layout). Then open
        Customize → Skills, click "+", choose Create skill → Upload a skill and
        upload the ZIP. Anthropic's advice is to install skills only from
        sources you trust, so read the SKILL.md first.
      </p>

      <h2>A 30-second check before you post</h2>
      <ul>
        <li>Read the result aloud. Fix any line you would never say.</li>
        <li>Put back every fact, number and name that the rewrite dropped.</li>
        <li>Add one detail that only you can know.</li>
      </ul>

      <h2>The limit</h2>
      <p>
        The README is direct about it: the tool "does not try to get past AI
        detectors, and detectors still flag most of its output." It edits for
        human readers. Your voice and your facts stay your job.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a href="https://github.com/blader/humanizer">
            blader/humanizer on GitHub
          </a>{' '}
          (README)
        </li>
        <li>
          <a href="https://fortune.com/2026/08/25/1-million-people-clicked-linkedin-ai-slop/">
            Fortune: over 1 million people clicked LinkedIn's "seems like AI
            slop" button
          </a>
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

export function HumanizerRu() {
  return (
    <>
      <p>
        В LinkedIn появилась кнопка «Seems like AI slop». Fortune пишет, что у
        контента, который платформа отнесла к AI slop, на 40% меньше просмотров.
        Сырой черновик от AI пометить проще всего.
      </p>
      <p>
        <code>humanizer</code> это бесплатный скилл от blader. Он ищет в тексте
        признаки AI-письма и переписывает их. В репозитории 72,9 тыс. звёзд на
        GitHub (на 24 ноября 2026) и лицензия MIT.
      </p>

      <h2>Что он делает</h2>
      <p>
        В README сказано, что он «делает текст от AI похожим на написанный
        человеком, не меняя смысл». Список признаков построен на странице
        Википедии «Signs of AI writing», которой редакторы Википедии пользуются,
        чтобы находить тексты от AI.
      </p>
      <p>Пример для иллюстрации, а не реальный тест:</p>
      <pre>
        <code>{'До: ' + sampleBeforeRu + '\n\nПосле: ' + sampleAfterRu}</code>
      </pre>
      <p>
        «После» проще и короче. Здесь же виден предел: инструмент убирает воду,
        но не добавит деталь, которую знаете только вы.
      </p>

      <h2>Три способа запустить</h2>
      <ul>
        <li>
          Напишите <code>/humanizer</code> и вставьте текст.
        </li>
        <li>
          Напишите обычными словами: «Please humanize this text: [текст]».
        </li>
        <li>Укажите файл: «Humanize the prose in docs/launch-post.md».</li>
      </ul>

      <h2>Установка в Claude Code</h2>
      <p>Две команды. Плагину нужен Claude Code 2.1.142 или новее.</p>
      <pre>
        <code>{installCode}</code>
      </pre>
      <p>Для более старой версии в README дана другая команда:</p>
      <pre>
        <code>{installOld}</code>
      </pre>

      <h2>Установка в приложении Claude</h2>
      <p>
        На странице репозитория откройте Code → Download ZIP. В Claude зайдите в
        Settings → Capabilities и убедитесь, что включено «Code execution and
        file creation» (в новом интерфейсе оно называется «Create and edit
        files»). Затем откройте Customize → Skills, нажмите «+», выберите Create
        skill → Upload a skill и загрузите ZIP. Anthropic советует ставить
        скиллы только из источников, которым вы доверяете, поэтому сначала
        прочитайте SKILL.md.
      </p>

      <h2>Проверка за 30 секунд перед публикацией</h2>
      <ul>
        <li>
          Прочитайте результат вслух. Исправьте строки, которые вы бы не
          сказали.
        </li>
        <li>Верните факты, цифры и имена, которые при правке пропали.</li>
        <li>Добавьте одну деталь, которую знаете только вы.</li>
      </ul>

      <h2>Ограничение</h2>
      <p>
        В README об этом сказано прямо: инструмент «не пытается обойти
        AI-детекторы, и детекторы всё равно помечают большую часть его
        результата». Он правит для живых читателей. Голос и факты остаются на
        вас.
      </p>

      <h2>Источники</h2>
      <ul>
        <li>
          <a href="https://github.com/blader/humanizer">
            blader/humanizer на GitHub
          </a>{' '}
          (README)
        </li>
        <li>
          <a href="https://fortune.com/2026/08/25/1-million-people-clicked-linkedin-ai-slop/">
            Fortune: более миллиона человек нажали кнопку «seems like AI slop» в
            LinkedIn
          </a>
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
