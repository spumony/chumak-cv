// Not listed yet: register in src/posts/notes.ts and src/posts/meta.json on the
// day the LinkedIn post goes out (rule: page ready before, listed after).

const templateEn = `Here are my past weekly updates. Match their length, tone and structure.
Use only the facts I give below, not the facts from the examples.

<examples>
<example>
[paste update 1]
</example>
<example>
[paste update 2]
</example>
<example>
[paste update 3]
</example>
</examples>

This week's facts:
- [fact]
- [fact]
- [fact]`

const templateRu = `Вот мои прошлые еженедельные отчёты. Повтори их длину, тон и структуру.
Факты бери только из списка ниже, не из примеров.

<examples>
<example>
[отчёт 1]
</example>
<example>
[отчёт 2]
</example>
<example>
[отчёт 3]
</example>
</examples>

Факты за эту неделю:
- [факт]
- [факт]
- [факт]`

export function PasteAnExampleEn() {
  return (
    <>
      <p>
        Most of us describe the style we want: "professional but friendly" or
        "make it sound like me". Those words mean something different to
        everyone. The AI has never read your emails, so it fills the gap with
        the same polite, generic text it writes for everyone else.
      </p>
      <p>
        A finished text you already like carries the length, the greeting, the
        level of detail and the tone at once. Paste it, and the AI has something
        concrete to copy.
      </p>

      <h2>What Anthropic's guide says</h2>
      <p>
        Anthropic's prompting guide has a section called "Use examples
        effectively". It calls examples "one of the most reliable ways to steer
        Claude's output format, tone, and structure" and suggests 3 to 5 of them
        for the best results. It also says what a good example looks like:
      </p>
      <ul>
        <li>relevant: close to the text you actually need;</li>
        <li>
          diverse: different enough that the AI doesn't pick up a pattern you
          didn't mean, like the same opening line in every email;
        </li>
        <li>
          structured: wrapped in <code>&lt;example&gt;</code> tags, so the AI
          can tell your examples from your instructions.
        </li>
      </ul>
      <p>
        The guide adds that you can ask Claude to check your examples for
        relevance and variety, or to write more of them from the ones you have.
      </p>

      <h2>A weekly update in three steps</h2>
      <ul>
        <li>Find two or three past updates that got a good reaction.</li>
        <li>
          Paste them and write: "These are my past updates. Match their length
          and tone."
        </li>
        <li>Add this week's facts as a rough list.</li>
      </ul>
      <p>
        Pick updates from different weeks: one where everything went to plan and
        one with a delay or a problem. Then the AI sees how you write both, and
        it won't force good news into a bad week.
      </p>

      <h2>A template to copy</h2>
      <pre>
        <code>{templateEn}</code>
      </pre>
      <p>
        The tags come from Anthropic's guide. If they look odd in your chat app,
        label the texts "Example 1", "Example 2" and so on. What matters is that
        the AI can see where your examples end and your request starts.
      </p>
      <p>
        The same template works for client replies and meeting notes. Change the
        first line to say what the examples are.
      </p>

      <h2>Before you paste</h2>
      <ul>
        <li>
          Remove names, client details, prices and anything else private, and
          check what your company allows you to put into AI tools.
        </li>
        <li>
          If you have no good examples yet, write one by hand first. The AI will
          copy a weak example just as closely as a good one.
        </li>
      </ul>

      <h2>Source</h2>
      <ul>
        <li>
          <a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices">
            Anthropic: prompting best practices, "Use examples effectively"
          </a>
        </li>
      </ul>
    </>
  )
}

export function PasteAnExampleRu() {
  return (
    <>
      <p>
        Обычно мы описываем нужный стиль словами: «профессионально, но
        дружелюбно» или «чтобы звучало как я». Каждый понимает эти слова
        по-своему. AI ваших писем не читал, поэтому заполняет пробел тем же
        вежливым безликим текстом, который пишет всем.
      </p>
      <p>
        В готовом тексте, который вам нравится, уже есть всё сразу: длина,
        приветствие, степень подробности и тон. Вставьте его, и AI будет с чего
        списывать.
      </p>

      <h2>Что пишет Anthropic</h2>
      <p>
        В руководстве Anthropic по промптам есть раздел «Use examples
        effectively». Примеры там названы одним из самых надёжных способов
        управлять форматом, тоном и структурой ответа Claude, и для лучшего
        результата советуют давать от 3 до 5 примеров. Там же описано, какими
        должны быть примеры:
      </p>
      <ul>
        <li>похожими на тот текст, который вам нужен;</li>
        <li>
          разными, чтобы AI не перенял то, чего вы не задумывали, например одну
          и ту же первую фразу в каждом письме;
        </li>
        <li>
          отделёнными тегами <code>&lt;example&gt;</code>, чтобы AI отличал
          примеры от инструкций.
        </li>
      </ul>
      <p>
        Ещё в руководстве сказано, что можно попросить Claude проверить,
        насколько примеры подходят и отличаются друг от друга, или дописать
        новые по образцу ваших.
      </p>

      <h2>Еженедельный отчёт за три шага</h2>
      <ul>
        <li>Найдите два-три прошлых отчёта, которые хорошо приняли.</li>
        <li>
          Вставьте их и напишите: «Это мои прошлые отчёты. Повтори их длину и
          тон».
        </li>
        <li>Добавьте факты за эту неделю черновым списком.</li>
      </ul>
      <p>
        Берите отчёты за разные недели: одну, где всё шло по плану, и одну с
        задержкой или проблемой. Тогда AI увидит, как вы пишете в обоих случаях,
        и не станет подгонять плохую неделю под хорошие новости.
      </p>

      <h2>Шаблон</h2>
      <pre>
        <code>{templateRu}</code>
      </pre>
      <p>
        Теги взяты из руководства Anthropic. Если в вашем чате они смотрятся
        странно, подпишите тексты «Пример 1», «Пример 2» и так далее. Главное,
        чтобы AI видел, где заканчиваются примеры и начинается ваша просьба.
      </p>
      <p>
        Этот же шаблон подходит для ответов клиентам и заметок со встреч.
        Поменяйте первую строку, чтобы она говорила, что это за примеры.
      </p>

      <h2>Перед тем как вставить</h2>
      <ul>
        <li>
          Уберите имена, данные клиентов, цены и всё личное. Проверьте, что ваша
          компания разрешает отправлять в AI-инструменты.
        </li>
        <li>
          Если хороших примеров пока нет, сначала напишите один сами. Слабый
          пример AI скопирует так же точно, как удачный.
        </li>
      </ul>

      <h2>Источник</h2>
      <ul>
        <li>
          <a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices">
            Anthropic: prompting best practices, раздел «Use examples
            effectively»
          </a>
        </li>
      </ul>
    </>
  )
}
