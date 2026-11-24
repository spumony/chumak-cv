const install = `/plugin install hookify@claude-plugins-official`

const firstRule = `/hookify Warn me when I use rm -rf commands`

const ruleFile = `---
name: warn-rm
enabled: true
event: bash
pattern: rm\\s+-rf
action: warn
---

rm -rf found. Check the path before you run it.`

const testSteps = `mkdir hookify-test
cd hookify-test
claude`

const advancedRule = `---
name: warn-sensitive-files
enabled: true
event: file
action: warn
conditions:
  - field: file_path
    operator: regex_match
    pattern: \\.env$|credentials|secrets
  - field: new_text
    operator: contains
    pattern: KEY
---

Sensitive file edit detected. Check that no key is hardcoded.`

export function HookifyEn() {
  return (
    <>
      <p>
        You tell Claude Code the same thing again and again: don't run this
        command, don't touch that file, don't stop before the tests pass. Notes
        in CLAUDE.md help, but Claude can still miss them. A hook is the
        stronger tool, because it is a small program that runs every time. The
        catch is that writing one by hand means editing a hooks config and
        writing a script.
      </p>
      <p>
        hookify is Anthropic's answer. Its README describes it as a way to
        "create custom hooks to prevent unwanted behaviors by analyzing
        conversation patterns or from explicit instructions". You write the rule
        in a sentence, and the plugin turns it into a small markdown file.
      </p>
      <p>
        If you want the basics of what a hook is and why it beats a line in
        CLAUDE.md, the earlier post covers that. This one is about the shortcut
        for writing them.
      </p>

      <h2>Install</h2>
      <p>
        hookify lives in Anthropic's official plugin directory, which Claude
        Code adds for you the first time you start an interactive session. In a
        session:
      </p>
      <pre>
        <code>{install}</code>
      </pre>
      <p>
        This opens the plugin's details, and you choose a scope: for you in
        every project, for the repository, or for you in this repository only.
        If Claude Code says to run <code>/reload-plugins</code>, run it. The
        plugin needs Python 3.7 or newer, with no other dependencies.
      </p>

      <h2>Create your first rule</h2>
      <p>Describe the rule in plain words:</p>
      <pre>
        <code>{firstRule}</code>
      </pre>
      <p>
        The README says this creates a file named{' '}
        <code>.claude/hookify.warn-rm.local.md</code> in your project. It is a
        short markdown file with a header and a message:
      </p>
      <pre>
        <code>{ruleFile}</code>
      </pre>
      <p>
        The README is clear that rules take effect on the very next tool use, so
        you don't restart anything. Ask Claude to run something that matches the
        rule and the warning appears.
      </p>

      <h2>Warn or block</h2>
      <ul>
        <li>
          <code>warn</code> shows the message and lets the action go ahead. This
          is the default.
        </li>
        <li>
          <code>block</code> stops the action before it runs. On a stop event it
          stops the session.
        </li>
      </ul>
      <p>
        Start with warn. Switch a rule to block once you have seen it fire
        correctly.
      </p>

      <h2>What a rule can watch</h2>
      <ul>
        <li>
          <code>bash</code>: shell commands Claude runs
        </li>
        <li>
          <code>file</code>: edits and writes to files
        </li>
        <li>
          <code>stop</code>: when Claude wants to stop, useful for completion
          checks
        </li>
        <li>
          <code>prompt</code>: when you submit a prompt
        </li>
        <li>
          <code>all</code>: every event
        </li>
      </ul>
      <p>
        Patterns use Python regex syntax. A rule can also list several
        conditions, and all of them must match before it fires:
      </p>
      <pre>
        <code>{advancedRule}</code>
      </pre>

      <h2>Let it find the rules for you</h2>
      <p>
        Run <code>/hookify</code> with no text. The plugin reads your recent
        conversation for things you corrected or got frustrated by, and proposes
        rules from them. Read each proposal before you accept it.
      </p>

      <h2>Manage your rules</h2>
      <ul>
        <li>
          <code>/hookify:list</code> shows all rules
        </li>
        <li>
          <code>/hookify:configure</code> turns rules on and off in an
          interactive list
        </li>
        <li>
          <code>/hookify:help</code> shows help
        </li>
      </ul>

      <h2>Test it in an empty folder first</h2>
      <p>
        A rule is a regex running on every matching action. A pattern that is
        too wide can warn on harmless commands, and a block rule can stop work
        you wanted. So try it where nothing is at stake:
      </p>
      <pre>
        <code>{testSteps}</code>
      </pre>
      <ol>
        <li>Install the plugin and create the rm rule above.</li>
        <li>
          Ask Claude to run <code>rm -rf /tmp/test</code>. The README uses this
          exact check. The warning should appear.
        </li>
        <li>
          Run <code>/hookify:list</code> to confirm the rule loaded.
        </li>
        <li>
          Change <code>action: warn</code> to <code>action: block</code> in the
          rule file and ask again. The command should now be stopped.
        </li>
        <li>Only then add the rule to a real project.</li>
      </ol>

      <h2>Limits</h2>
      <ul>
        <li>
          The plugin is version 0.1.1 in its manifest. The README's own list of
          future ideas includes severity levels, rule templates and hook testing
          utilities, so none of those exist yet.
        </li>
        <li>
          A rule file is a pattern match on text. It does not understand what a
          command means, so a differently written command can slip past a narrow
          pattern.
        </li>
        <li>
          If a rule does not fire, check that the file is in the{' '}
          <code>.claude/</code> folder of the project root, that it says{' '}
          <code>enabled: true</code>, and that <code>python3</code> works.
        </li>
        <li>
          Plugins can run hooks on your machine. Anthropic asks you to read what
          a plugin adds before installing it.
        </li>
        <li>
          The licence line differs between pages: the README says MIT, and
          GitHub shows Apache-2.0 for the whole repository. Both are open source
          licences, and the plugin is free.
        </li>
      </ul>

      <h2>Sources (checked 2026-11-24)</h2>
      <ul>
        <li>
          <a href="https://github.com/anthropics/claude-plugins-official/tree/main/plugins/hookify">
            hookify README on GitHub
          </a>
        </li>
        <li>
          <a href="https://code.claude.com/docs/en/discover-plugins">
            Claude Code docs: install and manage plugins
          </a>
        </li>
        <li>
          <a href="https://code.claude.com/docs/en/plugins/security.md">
            Claude Code docs: plugin security and trust
          </a>
        </li>
      </ul>
    </>
  )
}

export function HookifyRu() {
  return (
    <>
      <p>
        Вы снова и снова говорите Claude Code одно и то же: не запускай эту
        команду, не трогай тот файл, не останавливайся, пока тесты не пройдут.
        Заметки в CLAUDE.md помогают, но Claude может их пропустить. Hook
        надёжнее: это небольшая программа, которая запускается каждый раз. Но
        писать её вручную значит править конфиг hooks и писать скрипт.
      </p>
      <p>
        hookify от Anthropic убирает эту работу. README описывает плагин как
        способ создавать hooks, которые не дают Claude делать нежелательное, по
        шаблонам из разговора или по прямым указаниям. Вы пишете правило одной
        фразой, а плагин превращает его в небольшой markdown-файл.
      </p>
      <p>
        Что такое hook и почему он надёжнее строки в CLAUDE.md, объяснено в
        прошлом посте. Этот пост про короткий путь к таким правилам.
      </p>

      <h2>Установка</h2>
      <p>
        hookify лежит в официальном каталоге плагинов Anthropic. Claude Code сам
        добавляет этот каталог при первом запуске интерактивной сессии. В
        сессии:
      </p>
      <pre>
        <code>{install}</code>
      </pre>
      <p>
        Откроется страница плагина, и вы выберете область: для вас во всех
        проектах, для репозитория или для вас только в этом репозитории. Если
        Claude Code просит выполнить <code>/reload-plugins</code>, выполните.
        Плагину нужен Python 3.7 или новее, других зависимостей нет.
      </p>

      <h2>Первое правило</h2>
      <p>Опишите правило обычными словами:</p>
      <pre>
        <code>{firstRule}</code>
      </pre>
      <p>
        По README, это создаёт в проекте файл{' '}
        <code>.claude/hookify.warn-rm.local.md</code>. Это короткий
        markdown-файл с заголовком и сообщением:
      </p>
      <pre>
        <code>{ruleFile}</code>
      </pre>
      <p>
        README прямо пишет, что правила работают со следующего вызова
        инструмента, поэтому ничего перезапускать не нужно. Попросите Claude
        выполнить команду под правило, и появится предупреждение.
      </p>

      <h2>Предупредить или заблокировать</h2>
      <ul>
        <li>
          <code>warn</code> показывает сообщение и разрешает действие. Это
          значение по умолчанию.
        </li>
        <li>
          <code>block</code> останавливает действие до запуска. На событии stop
          он останавливает сессию.
        </li>
      </ul>
      <p>
        Начните с warn. Переключайте правило на block, когда увидите, что оно
        срабатывает правильно.
      </p>

      <h2>За чем может следить правило</h2>
      <ul>
        <li>
          <code>bash</code>: команды оболочки, которые запускает Claude
        </li>
        <li>
          <code>file</code>: правки и запись файлов
        </li>
        <li>
          <code>stop</code>: момент, когда Claude хочет закончить, полезно для
          проверок завершённости
        </li>
        <li>
          <code>prompt</code>: отправка вашего запроса
        </li>
        <li>
          <code>all</code>: все события
        </li>
      </ul>
      <p>
        Шаблоны пишутся на регулярных выражениях Python. В правиле можно указать
        несколько условий, и сработает оно, только если совпали все:
      </p>
      <pre>
        <code>{advancedRule}</code>
      </pre>

      <h2>Пусть плагин сам найдёт правила</h2>
      <p>
        Выполните <code>/hookify</code> без текста. Плагин прочитает недавний
        разговор, найдёт то, что вы поправляли или что вас раздражало, и
        предложит правила. Читайте каждое предложение, прежде чем принять.
      </p>

      <h2>Управление правилами</h2>
      <ul>
        <li>
          <code>/hookify:list</code> показывает все правила
        </li>
        <li>
          <code>/hookify:configure</code> включает и выключает правила в
          интерактивном списке
        </li>
        <li>
          <code>/hookify:help</code> показывает справку
        </li>
      </ul>

      <h2>Сначала проверьте в пустой папке</h2>
      <p>
        Правило это регулярное выражение, которое проверяет каждое подходящее
        действие. Слишком широкий шаблон будет предупреждать о безобидных
        командах, а правило block может остановить нужную работу. Поэтому
        попробуйте там, где ничего не поставлено на карту:
      </p>
      <pre>
        <code>{testSteps}</code>
      </pre>
      <ol>
        <li>Установите плагин и создайте правило rm выше.</li>
        <li>
          Попросите Claude выполнить <code>rm -rf /tmp/test</code>. Именно эту
          проверку использует README. Должно появиться предупреждение.
        </li>
        <li>
          Выполните <code>/hookify:list</code>, чтобы убедиться, что правило
          загружено.
        </li>
        <li>
          Замените <code>action: warn</code> на <code>action: block</code> в
          файле правила и повторите просьбу. Теперь команда должна быть
          остановлена.
        </li>
        <li>Только после этого добавляйте правило в рабочий проект.</li>
      </ol>

      <h2>Ограничения</h2>
      <ul>
        <li>
          В манифесте плагин имеет версию 0.1.1. В списке будущих идей в README
          есть уровни важности, шаблоны правил и инструменты для проверки hooks,
          так что этого пока нет.
        </li>
        <li>
          Файл правила сравнивает текст по шаблону. Он не понимает смысл
          команды, поэтому команда, записанная иначе, может обойти узкий шаблон.
        </li>
        <li>
          Если правило не срабатывает, проверьте, что файл лежит в папке{' '}
          <code>.claude/</code> в корне проекта, что в нём стоит{' '}
          <code>enabled: true</code> и что работает <code>python3</code>.
        </li>
        <li>
          Плагины могут запускать hooks на вашем компьютере. Anthropic просит
          читать, что плагин добавляет, до установки.
        </li>
        <li>
          Лицензия указана по-разному: в README написано MIT, а GitHub
          показывает Apache-2.0 для всего репозитория. Обе лицензии открытые,
          плагин бесплатный.
        </li>
      </ul>

      <h2>Источники (проверено 24.11.2026)</h2>
      <ul>
        <li>
          <a href="https://github.com/anthropics/claude-plugins-official/tree/main/plugins/hookify">
            README плагина hookify на GitHub
          </a>
        </li>
        <li>
          <a href="https://code.claude.com/docs/en/discover-plugins">
            Документация Claude Code: установка плагинов
          </a>
        </li>
        <li>
          <a href="https://code.claude.com/docs/en/plugins/security.md">
            Документация Claude Code: безопасность плагинов
          </a>
        </li>
      </ul>
    </>
  )
}
