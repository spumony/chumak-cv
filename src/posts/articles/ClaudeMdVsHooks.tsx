const settingsJson = String.raw`{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/guard-bash.mjs\""
          }
        ]
      }
    ]
  }
}`

const guardScript = String.raw`// .claude/hooks/guard-bash.mjs
import fs from 'node:fs'

const input = JSON.parse(fs.readFileSync(0, 'utf8'))
const cmd = String(input.tool_input?.command ?? '')

const rules = [
  [/\brm -[a-zA-Z]*[rR][a-zA-Z]*f|\brm -[a-zA-Z]*f[a-zA-Z]*[rR]/,
    'rm -rf is blocked. Delete specific files, and ask the user first.'],
  [/\bgit push\b.*(--force|\s-f\b)/,
    'Force push is blocked. Ask the user to do it.'],
  [/\bgit reset --hard\b/,
    'git reset --hard is blocked: another agent may have unsaved work here.'],
]

const hit = rules.find(([re]) => re.test(cmd))
if (hit) {
  console.log(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: 'deny',
      permissionDecisionReason: hit[1],
    },
  }))
}`

export function ClaudeMdVsHooksEn() {
  return (
    <>
      <p>
        Most Claude Code setups keep everything in CLAUDE.md: the stack, the
        code style, the test commands, and lines like "never run rm -rf" or
        "don't touch .env".
      </p>
      <p>
        The Claude Code docs describe CLAUDE.md as context. Claude reads it at
        the start of every session and uses it to make choices, but nothing
        enforces it. For an action that must be blocked whatever Claude decides,
        the docs point you to a PreToolUse hook.
      </p>

      <h2>What a hook is</h2>
      <p>
        A hook is a command that Claude Code runs at a fixed point of its work.
        A PreToolUse hook runs before a tool call and gets the call as JSON on
        stdin. For the Bash tool that includes the shell command. The hook can
        answer with a decision. When it denies the call, the command doesn't
        run, and Claude gets your reason back and has to find another way.
      </p>

      <h2>What goes where</h2>
      <p>
        I split a setup with one question: what happens if this rule is broken
        once?
      </p>
      <p>CLAUDE.md keeps the rules that help Claude make better choices:</p>
      <ul>
        <li>the stack and the folder structure;</li>
        <li>how to build, run and test the project;</li>
        <li>naming and style conventions that differ from the defaults.</li>
      </ul>
      <p>Hooks keep the rules where one mistake costs data or a day of work:</p>
      <ul>
        <li>
          <code>rm -rf</code> and <code>git push --force</code>;
        </li>
        <li>
          <code>git reset --hard</code>, <code>git clean</code> and{' '}
          <code>git stash</code> when another agent may be working in the same
          folder;
        </li>
        <li>installing a new package without your approval;</li>
        <li>
          reading or editing <code>.env</code> files.
        </li>
      </ul>

      <h2>A minimal hook</h2>
      <p>
        Register the hook in <code>.claude/settings.json</code>:
      </p>
      <pre>
        <code>{settingsJson}</code>
      </pre>
      <p>And the script itself:</p>
      <pre>
        <code>{guardScript}</code>
      </pre>
      <p>
        Write the reason so Claude knows what to do next. "Ask the user to do
        it" gives it the next step, so it doesn't have to guess.
      </p>
      <p>
        These regexes catch the common forms of each command. A script that
        deletes files will still pass them, so for real isolation run the agent
        in a container or under a separate user account.
      </p>

      <h2>Keep CLAUDE.md short</h2>
      <p>
        Once the "never" rules live in hooks, CLAUDE.md gets shorter. The docs
        note that Claude follows specific, concise instructions more
        consistently. Long procedures, like a release checklist, fit better in a
        skill, which loads only when the task needs it.
      </p>

      <h2>Docs</h2>
      <ul>
        <li>
          <a href="https://code.claude.com/docs/en/hooks">Hooks reference</a>
        </li>
        <li>
          <a href="https://code.claude.com/docs/en/memory">
            How Claude remembers your project
          </a>
        </li>
      </ul>
    </>
  )
}

export function ClaudeMdVsHooksRu() {
  return (
    <>
      <p>
        Обычно в Claude Code всё складывают в CLAUDE.md: стек, стиль кода,
        команды для тестов и строки вроде «никогда не запускай rm -rf» или «не
        трогай .env».
      </p>
      <p>
        В документации Claude Code этот файл описан как контекст. Claude читает
        его в начале каждой сессии и учитывает, когда выбирает действие, но
        ничто не заставляет его эти правила соблюдать. Если действие нужно
        запретить, что бы Claude ни решил, документация советует PreToolUse
        hook.
      </p>

      <h2>Как работает hook</h2>
      <p>
        Hook это обычная команда, которую Claude Code запускает в заданный
        момент своей работы. PreToolUse hook срабатывает перед вызовом
        инструмента и получает этот вызов в виде JSON на stdin. Для инструмента
        Bash там есть и сама команда. Hook может ответить решением. Если он
        запрещает вызов, команда не выполняется, Claude получает вашу причину и
        ищет другой путь.
      </p>

      <h2>Что куда класть</h2>
      <p>
        Я делю настройку одним вопросом: что будет, если правило нарушат хотя бы
        раз?
      </p>
      <p>
        В CLAUDE.md остаются правила, которые помогают Claude выбирать лучше:
      </p>
      <ul>
        <li>стек и структура папок;</li>
        <li>как собрать, запустить и протестировать проект;</li>
        <li>соглашения об именах и стиле, которые отличаются от привычных.</li>
      </ul>
      <p>
        В hooks уходят правила, где одна ошибка стоит данных или рабочего дня:
      </p>
      <ul>
        <li>
          <code>rm -rf</code> и <code>git push --force</code>;
        </li>
        <li>
          <code>git reset --hard</code>, <code>git clean</code> и{' '}
          <code>git stash</code>, если в той же папке может работать другой
          агент;
        </li>
        <li>установка нового пакета без вашего согласия;</li>
        <li>
          чтение и правка файлов <code>.env</code>.
        </li>
      </ul>

      <h2>Минимальный hook</h2>
      <p>
        Подключите hook в <code>.claude/settings.json</code>:
      </p>
      <pre>
        <code>{settingsJson}</code>
      </pre>
      <p>И сам скрипт:</p>
      <pre>
        <code>{guardScript}</code>
      </pre>
      <p>
        Причину пишите так, чтобы Claude понял, что делать дальше. «Ask the user
        to do it» даёт ему следующий шаг, и угадывать не приходится.
      </p>
      <p>
        Эти регулярные выражения ловят обычные формы команд. Скрипт, который
        удаляет файлы, через них пройдёт, поэтому для настоящей изоляции
        запускайте агента в контейнере или под отдельным пользователем.
      </p>

      <h2>Держите CLAUDE.md коротким</h2>
      <p>
        Когда правила с «никогда» переезжают в hooks, CLAUDE.md становится
        короче. В документации сказано, что конкретные и короткие инструкции
        Claude выполняет стабильнее. Длинным процедурам вроде чек-листа релиза
        место в skill: он загружается, только когда задача его требует.
      </p>

      <h2>Документация</h2>
      <ul>
        <li>
          <a href="https://code.claude.com/docs/en/hooks">
            Справочник по hooks
          </a>
        </li>
        <li>
          <a href="https://code.claude.com/docs/en/memory">
            Как Claude запоминает проект
          </a>
        </li>
      </ul>
    </>
  )
}
