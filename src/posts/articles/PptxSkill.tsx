const promptEn = `Make a 5-slide deck from the summary below.
Slide 1: the main point as the title. Slide 2: the problem.
Slide 3: the key numbers. Slide 4: the options or the plan.
Slide 5: what I ask the audience to decide.
One idea per slide, a title that states the point, at most 3 bullets.
Use only the numbers and names I give. If something is missing, say so
instead of filling it in.

Summary:
[paste one page]`

const promptRu = `Сделай презентацию из 5 слайдов по сводке ниже.
Слайд 1: главная мысль в заголовке. Слайд 2: проблема.
Слайд 3: ключевые цифры. Слайд 4: варианты или план.
Слайд 5: какое решение я прошу принять.
Одна мысль на слайд, заголовок утверждает вывод, не больше 3 пунктов.
Используй только цифры и имена из сводки. Если чего-то не хватает,
так и скажи, не придумывай.

Сводка:
[вставьте одну страницу]`

export function PptxSkillEn() {
  return (
    <>
      <p>
        A first slide deck is mostly typing: you already know what you want to
        say, but you have to cut it into slides, pick titles and fix the layout.
        Claude can do that cutting for you.
      </p>
      <p>
        Anthropic lists PowerPoint generation among the skills built into
        Claude. You don't install it or call it by name. The help center says
        that with code execution and file creation on, "Claude will
        automatically use these tools when relevant". Its own example is a
        request to create a PowerPoint presentation about Q3 results.
      </p>

      <h2>Turn it on</h2>
      <ol>
        <li>
          Open <strong>Settings &gt; Capabilities</strong>.
        </li>
        <li>
          Switch on <strong>Code execution and file creation</strong>. In the
          newer layout it is called <strong>Create and edit files</strong>.
        </li>
        <li>
          Open <strong>Customize &gt; Skills</strong> and check that the
          built-in skills are on.
        </li>
      </ol>
      <p>
        Team and Enterprise plans differ: an owner turns the feature on under
        Organization settings. Anthropic's article says code execution and file
        creation is available to all Claude users, Free included, so check the
        toggle in your own account first.
      </p>

      <h2>Demo: one page into five slides</h2>
      <p>
        Take a one-page summary, such as a project update or a proposal. Paste
        it into a new chat with this prompt:
      </p>
      <pre>
        <code>{promptEn}</code>
      </pre>
      <p>
        Claude builds a .pptx file. You can download it or save it to Google
        Drive. Files can be up to 30 MB. Open it in PowerPoint and edit it like
        any other deck.
      </p>

      <h2>Why this prompt works</h2>
      <ul>
        <li>
          It names what each slide holds, so Claude doesn't invent its own
          structure.
        </li>
        <li>
          "A title that states the point" gives you titles like "Costs fell 12%"
          instead of "Results".
        </li>
        <li>
          "Use only the numbers I give" cuts the risk of invented figures.
        </li>
      </ul>

      <h2>Check before you send</h2>
      <ul>
        <li>Every number matches your summary.</li>
        <li>Names, dates and currencies are right.</li>
        <li>
          No slide says something your summary does not. Delete or fix it.
        </li>
        <li>
          Your logo, colours and fonts are applied. The default look is generic,
          so expect to restyle it.
        </li>
        <li>
          Anything confidential is yours to judge before you paste it. Don't
          paste data you wouldn't share.
        </li>
      </ul>

      <h2>Limits</h2>
      <ul>
        <li>
          Anthropic's security note for file creation warns that a bad actor can
          hide instructions in external files or websites. Paste your own text,
          and stop Claude if it touches data you didn't expect.
        </li>
        <li>
          The skill produces a draft. The design is plain and the facts are only
          as good as your source.
        </li>
      </ul>

      <h2>Sources (checked 2026-11-24)</h2>
      <ul>
        <li>
          <a href="https://support.claude.com/en/articles/12512180-using-skills-in-claude">
            Claude Help Center: using skills in Claude
          </a>
        </li>
        <li>
          <a href="https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude">
            Claude Help Center: create and edit files with Claude
          </a>
        </li>
      </ul>
    </>
  )
}

export function PptxSkillRu() {
  return (
    <>
      <p>
        Первая версия презентации это в основном набор текста: вы уже знаете,
        что хотите сказать, но нужно разрезать это на слайды, придумать
        заголовки и выровнять макет. Эту нарезку Claude может взять на себя.
      </p>
      <p>
        Anthropic называет создание презентаций PowerPoint среди скиллов,
        встроенных в Claude. Ставить его и вызывать по имени не нужно. Справка
        пишет, что при включённом выполнении кода и создании файлов Claude сам
        использует эти инструменты, когда они нужны. Их собственный пример:
        просьба создать презентацию PowerPoint об итогах третьего квартала.
      </p>

      <h2>Как включить</h2>
      <ol>
        <li>
          Откройте <strong>Settings &gt; Capabilities</strong>.
        </li>
        <li>
          Включите <strong>Code execution and file creation</strong>. В новом
          интерфейсе пункт называется <strong>Create and edit files</strong>.
        </li>
        <li>
          Откройте <strong>Customize &gt; Skills</strong> и проверьте, что
          встроенные скиллы включены.
        </li>
      </ol>
      <p>
        В Team и Enterprise иначе: функцию включает владелец в Organization
        settings. В статье Anthropic сказано, что выполнение кода и создание
        файлов доступны всем пользователям Claude, включая Free, но
        переключатель сначала проверьте в своём аккаунте.
      </p>

      <h2>Демо: одна страница в пять слайдов</h2>
      <p>
        Возьмите сводку на одну страницу, например отчёт по проекту или
        предложение. Вставьте её в новый чат с таким промптом:
      </p>
      <pre>
        <code>{promptRu}</code>
      </pre>
      <p>
        Claude соберёт файл .pptx. Его можно скачать или сохранить в Google
        Drive. Размер файла до 30 МБ. Откройте его в PowerPoint и правьте как
        любую другую презентацию.
      </p>

      <h2>Почему этот промпт работает</h2>
      <ul>
        <li>
          Он называет содержание каждого слайда, и Claude не придумывает свою
          структуру.
        </li>
        <li>
          «Заголовок утверждает вывод» даёт заголовки вроде «Расходы упали на
          12%» вместо «Результаты».
        </li>
        <li>«Используй только мои цифры» снижает риск выдуманных данных.</li>
      </ul>

      <h2>Проверьте перед отправкой</h2>
      <ul>
        <li>Каждая цифра совпадает со сводкой.</li>
        <li>Имена, даты и валюты верны.</li>
        <li>
          Ни один слайд не говорит то, чего нет в сводке. Такое удалите или
          исправьте.
        </li>
        <li>
          Применены ваш логотип, цвета и шрифты. Оформление по умолчанию
          типовое, его придётся перекрашивать.
        </li>
        <li>
          Конфиденциальное вы оцениваете сами до вставки. Не вставляйте данные,
          которыми не стали бы делиться.
        </li>
      </ul>

      <h2>Ограничения</h2>
      <ul>
        <li>
          В заметке Anthropic о безопасности создания файлов сказано, что
          злоумышленник может спрятать инструкции во внешних файлах или на
          сайтах. Вставляйте свой текст и останавливайте Claude, если он
          обращается к неожиданным данным.
        </li>
        <li>
          Скилл делает черновик. Дизайн простой, а факты настолько хороши,
          насколько хорош ваш источник.
        </li>
      </ul>

      <h2>Источники (проверено 24.11.2026)</h2>
      <ul>
        <li>
          <a href="https://support.claude.com/en/articles/12512180-using-skills-in-claude">
            Справочный центр Claude: скиллы в Claude
          </a>
        </li>
        <li>
          <a href="https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude">
            Справочный центр Claude: создание и правка файлов
          </a>
        </li>
      </ul>
    </>
  )
}
