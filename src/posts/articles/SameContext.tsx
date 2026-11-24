const instructionsEn = `I work as a [role] at a [type of company].
Write in plain English, in short paragraphs.
If something is unclear, ask me one question first.
Don't invent numbers or names.`

const instructionsRu = `Я работаю [должность] в [тип компании].
Пиши простым языком, короткими абзацами.
Если что-то неясно, сначала задай один вопрос.
Не выдумывай цифры и имена.`

export function SameContextEn() {
  return (
    <>
      <p>
        Many people start every chat the same way: "I work in HR at a small
        company, keep it short, no jargon." Then they do it again tomorrow. Both
        ChatGPT and Claude have settings that keep this for you, so you type it
        once.
      </p>
      <p>
        There are three places to put it. Each one fits a different kind of
        context.
      </p>

      <h2>The six slides, as text</h2>
      <p>
        The PDF carousel from LinkedIn has six slides. Here is what is on them,
        as of December 2026.
      </p>

      <h3>1. Instructions: who you are and how you like answers</h3>
      <p>Every new chat uses them.</p>
      <ul>
        <li>
          ChatGPT: Settings → Personalization → Custom Instructions. They are
          available on all plans. Free and Go users can save up to 1,500
          characters; Plus, Pro and the business plans up to 5,000.
        </li>
        <li>
          Claude: Settings → Your Claude → Instructions. They apply to all your
          conversations.
        </li>
      </ul>

      <h3>2. Projects: files and rules for one piece of work</h3>
      <p>
        A client, a report, a job search. The chats inside a project share the
        same files and instructions.
      </p>
      <ul>
        <li>
          ChatGPT: open a project, then ••• → Project settings. Availability
          depends on your plan and workspace settings.
        </li>
        <li>
          Claude: Projects → New project. Free accounts can have up to five
          projects.
        </li>
      </ul>

      <h3>3. Memory: what the AI picks up from your chats</h3>
      <p>
        Useful, and sometimes wrong. Open it once a month and delete what is
        off.
      </p>
      <ul>
        <li>
          ChatGPT: Settings → Personalization → Memory. Controls vary by plan,
          region, platform and workspace settings.
        </li>
        <li>
          Claude: on by default for Free, Pro, Max and Ultra plans. To read,
          edit or delete it: Settings → Your Claude → Manage, next to "Your
          memory". Each project also keeps its own memory.
        </li>
      </ul>

      <h3>4. Instructions to start with</h3>
      <p>
        Fill in the brackets. Change one line a week, not all at once, so you
        can see which line made the difference.
      </p>
      <pre>
        <code>{instructionsEn}</code>
      </pre>

      <h3>5. The rule of thumb</h3>
      <ul>
        <li>True for every chat: instructions.</li>
        <li>True for one job: a project.</li>
        <li>Picked up along the way: memory, checked monthly.</li>
      </ul>

      <h2>Two things worth knowing</h2>
      <ul>
        <li>
          In ChatGPT, project instructions apply only inside that project and
          override your global custom instructions. So a project can say "write
          formally" while your instructions say "keep it casual".
        </li>
        <li>
          Deleting a chat does not always delete what ChatGPT saved from it.
          OpenAI says you may need to delete the saved memory as well.
        </li>
      </ul>

      <h2>Limits</h2>
      <p>
        Menus and plan limits change often, and both companies say availability
        varies by plan. If a setting is missing, check your plan first. Don't
        put private client data into instructions or memory, and check what your
        company allows.
      </p>

      <h2>Download</h2>
      <p>
        <a href="/posts/same-context/carousel.pdf">
          The carousel as a PDF, 6 slides
        </a>
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a href="https://help.openai.com/en/articles/8096356-chatgpt-custom-instructions">
            OpenAI: custom instructions
          </a>
        </li>
        <li>
          <a href="https://help.openai.com/en/articles/10169521">
            OpenAI: projects in ChatGPT
          </a>
        </li>
        <li>
          <a href="https://help.openai.com/en/articles/8590148-memory-in-chatgpt">
            OpenAI: memory in ChatGPT
          </a>
        </li>
        <li>
          <a href="https://support.claude.com/en/articles/10185728">
            Claude: profile preferences and projects
          </a>
        </li>
        <li>
          <a href="https://support.claude.com/en/articles/11817273">
            Claude: memory
          </a>
        </li>
      </ul>
    </>
  )
}

export function SameContextRu() {
  return (
    <>
      <p>
        Многие начинают каждый чат одинаково: «Я работаю в HR в небольшой
        компании, отвечай коротко, без жаргона». А завтра пишут то же самое
        снова. И в ChatGPT, и в Claude есть настройки, которые хранят это за
        вас, так что набрать нужно один раз.
      </p>
      <p>
        Хранить контекст можно в трёх местах. Каждое подходит для своего вида
        информации.
      </p>

      <h2>Шесть слайдов текстом</h2>
      <p>
        В PDF-карусели из LinkedIn шесть слайдов. Вот что на них, по состоянию
        на декабрь 2026 года.
      </p>

      <h3>1. Инструкции: кто вы и какие ответы любите</h3>
      <p>Их используют все новые чаты.</p>
      <ul>
        <li>
          ChatGPT: Settings → Personalization → Custom Instructions. Они есть на
          всех тарифах. На Free и Go можно сохранить до 1 500 символов, на Plus,
          Pro и бизнес-тарифах до 5 000.
        </li>
        <li>
          Claude: Settings → Your Claude → Instructions. Они действуют во всех
          ваших разговорах.
        </li>
      </ul>

      <h3>2. Проекты: файлы и правила для одной работы</h3>
      <p>
        Клиент, отчёт, поиск работы. Чаты внутри проекта используют одни и те же
        файлы и инструкции.
      </p>
      <ul>
        <li>
          ChatGPT: откройте проект, затем ••• → Project settings. Доступность
          зависит от тарифа и настроек рабочего пространства.
        </li>
        <li>
          Claude: Projects → New project. На бесплатном аккаунте можно создать
          до пяти проектов.
        </li>
      </ul>

      <h3>3. Память: что AI запоминает из ваших чатов</h3>
      <p>
        Полезно, но иногда неверно. Раз в месяц открывайте её и удаляйте лишнее.
      </p>
      <ul>
        <li>
          ChatGPT: Settings → Personalization → Memory. Набор настроек зависит
          от тарифа, региона, платформы и настроек рабочего пространства.
        </li>
        <li>
          Claude: включена по умолчанию на тарифах Free, Pro, Max и Ultra.
          Прочитать, изменить или удалить: Settings → Your Claude → Manage рядом
          с «Your memory». У каждого проекта своя память.
        </li>
      </ul>

      <h3>4. Инструкции для старта</h3>
      <p>
        Заполните скобки. Меняйте по одной строке в неделю, а не всё сразу,
        чтобы видеть, какая строка что изменила.
      </p>
      <pre>
        <code>{instructionsRu}</code>
      </pre>

      <h3>5. Правило</h3>
      <ul>
        <li>Верно для каждого чата: инструкции.</li>
        <li>Верно для одной работы: проект.</li>
        <li>Накопилось по ходу дела: память, проверяйте раз в месяц.</li>
      </ul>

      <h2>Что ещё полезно знать</h2>
      <ul>
        <li>
          В ChatGPT инструкции проекта действуют только внутри проекта и
          перекрывают ваши общие Custom Instructions. Проект может требовать
          «пиши официально», а в общих инструкциях стоит «пиши неформально».
        </li>
        <li>
          Удаление чата не всегда удаляет то, что ChatGPT из него сохранил. По
          словам OpenAI, сохранённую память иногда нужно удалить отдельно.
        </li>
      </ul>

      <h2>Ограничения</h2>
      <p>
        Меню и лимиты тарифов меняются часто, и обе компании пишут, что
        доступность зависит от тарифа. Если настройки нет, сначала проверьте
        тариф. Не кладите в инструкции и память личные данные клиентов и
        проверьте, что разрешает ваша компания.
      </p>

      <h2>Скачать</h2>
      <p>
        <a href="/posts/same-context/carousel.pdf">
          Карусель в PDF, 6 слайдов (на английском)
        </a>
      </p>

      <h2>Источники</h2>
      <ul>
        <li>
          <a href="https://help.openai.com/en/articles/8096356-chatgpt-custom-instructions">
            OpenAI: custom instructions
          </a>
        </li>
        <li>
          <a href="https://help.openai.com/en/articles/10169521">
            OpenAI: проекты в ChatGPT
          </a>
        </li>
        <li>
          <a href="https://help.openai.com/en/articles/8590148-memory-in-chatgpt">
            OpenAI: память в ChatGPT
          </a>
        </li>
        <li>
          <a href="https://support.claude.com/en/articles/10185728">
            Claude: настройки профиля и проекты
          </a>
        </li>
        <li>
          <a href="https://support.claude.com/en/articles/11817273">
            Claude: память
          </a>
        </li>
      </ul>
    </>
  )
}
