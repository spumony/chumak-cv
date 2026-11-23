const templateEn = `This text goes to [who reads it].
They will read it [where and how: on a phone, out loud, in a weekly report].
Before this, [what already happened: they said no, they asked twice, it's our first contact].
After reading, I want them to [one action or feeling].`

const templateRu = `Этот текст прочитает [кто].
Читать будет [где и как: с телефона, вслух, в еженедельном отчёте].
До этого [что уже было: человек отказал, спрашивал дважды, пишем впервые].
После прочтения я хочу, чтобы он [одно действие или ощущение].`

export function WriteTheReasonEn() {
  return (
    <>
      <p>
        A lot of prompts read like a list of orders: "NEVER use jargon." "DO NOT
        sound salesy." "Keep it SHORT." The AI follows the words, but it still
        has to guess what you actually need.
      </p>

      <h2>What Anthropic's guide says</h2>
      <p>
        Anthropic's prompting guide has a section called "Add context to improve
        performance". It says that explaining why an instruction matters gives
        Claude more information about your goals. Their example is a formatting
        rule:
      </p>
      <ul>
        <li>
          less effective: <code>NEVER use ellipses</code>;
        </li>
        <li>
          more effective: the answer will be read aloud by a text-to-speech
          engine, so never use ellipses, because the engine won't know how to
          pronounce them.
        </li>
      </ul>
      <p>
        The guide adds that Claude can generalize from the explanation. Once it
        knows the text will be spoken, it can also avoid other things a speech
        engine reads badly, which the rule never listed.
      </p>
      <p>
        The same guide notes that recent Claude models follow the system prompt
        closely, so shouting can make them overdo a rule. Where a prompt used to
        say "CRITICAL: You MUST use this tool when...", it suggests "Use this
        tool when..." instead.
      </p>

      <h2>Three rewrites</h2>
      <ul>
        <li>
          "NEVER use jargon" → "This email goes to a client who runs a bakery.
          She doesn't know our internal terms."
        </li>
        <li>
          "Keep it short" → "My manager reads this on her phone between
          meetings. Three sentences at most."
        </li>
        <li>
          "Don't sound salesy" → "This person said no last month. I want to stay
          in touch without pushing."
        </li>
      </ul>
      <p>
        Each order says what to avoid. Each reason says who reads the text and
        in what situation, so the AI can choose the words, the length and the
        tone for that person.
      </p>

      <h2>A template for the reason</h2>
      <p>
        Most reasons answer four questions. Fill in the brackets and put this at
        the start of your request:
      </p>
      <pre>
        <code>{templateEn}</code>
      </pre>
      <p>
        You don't need all four lines every time. For a quick reply, the first
        one is often enough.
      </p>

      <h2>When to keep a hard rule</h2>
      <p>
        Some rules are fixed: a legal phrase that must stay word for word, or a
        format another program will read. Keep those as rules, and still add one
        line on why. "Keep this sentence as is, our lawyer approved it" tells
        the AI not to "improve" it.
      </p>

      <h2>Source</h2>
      <ul>
        <li>
          <a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices">
            Anthropic: prompting best practices, "Add context to improve
            performance"
          </a>
        </li>
      </ul>
    </>
  )
}

export function WriteTheReasonRu() {
  return (
    <>
      <p>
        Многие промпты похожи на список приказов: «НИКОГДА не используй жаргон»,
        «НЕ пиши как продажник», «КОРОТКО». AI выполняет слова, но что вам на
        самом деле нужно, ему всё равно приходится угадывать.
      </p>

      <h2>Что пишет Anthropic</h2>
      <p>
        В руководстве Anthropic по промптам есть раздел «Add context to improve
        performance». Там сказано, что объяснение, зачем нужна инструкция, даёт
        Claude больше информации о ваших целях. Пример у них про форматирование:
      </p>
      <ul>
        <li>
          хуже: <code>NEVER use ellipses</code> (никогда не ставь многоточия);
        </li>
        <li>
          лучше: ответ прочитает вслух синтезатор речи, поэтому многоточий не
          ставь, он не знает, как их произносить.
        </li>
      </ul>
      <p>
        Дальше в руководстве написано, что Claude умеет обобщать объяснение.
        Если он знает, что текст будут читать вслух, он может избегать и
        другого, что синтезатор читает плохо, хотя в правиле этого не было.
      </p>
      <p>
        Там же сказано, что новые модели Claude внимательно следуют системному
        промпту, и от крика они начинают перегибать с правилом. Вместо
        «CRITICAL: You MUST use this tool when...» руководство советует писать
        просто «Use this tool when...».
      </p>

      <h2>Три замены</h2>
      <ul>
        <li>
          «Без жаргона» → «Письмо уйдёт клиентке, у которой своя пекарня. Наших
          внутренних терминов она не знает».
        </li>
        <li>
          «Покороче» → «Руководитель читает это с телефона между встречами.
          Максимум три предложения».
        </li>
        <li>
          «Не дави на продажу» → «Этот человек отказал в прошлом месяце. Хочу
          остаться на связи и не давить».
        </li>
      </ul>
      <p>
        Приказ говорит, чего избегать. Причина говорит, кто будет читать и в
        какой ситуации, и AI сам подбирает слова, длину и тон под этого
        человека.
      </p>

      <h2>Шаблон для причины</h2>
      <p>
        Обычно причина отвечает на четыре вопроса. Заполните скобки и поставьте
        это в начало запроса:
      </p>
      <pre>
        <code>{templateRu}</code>
      </pre>
      <p>
        Все четыре строки нужны не всегда. Для быстрого ответа часто хватает
        первой.
      </p>

      <h2>Когда правило всё-таки нужно</h2>
      <p>
        Бывают жёсткие требования: юридическая фраза, которую нельзя менять, или
        формат, который потом прочитает другая программа. Их оставьте правилами,
        но добавьте одну строку о причине. «Это предложение не меняй, его
        согласовал юрист» подскажет AI, что «улучшать» его не надо.
      </p>

      <h2>Источник</h2>
      <ul>
        <li>
          <a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices">
            Anthropic: prompting best practices, раздел «Add context to improve
            performance»
          </a>
        </li>
      </ul>
    </>
  )
}
