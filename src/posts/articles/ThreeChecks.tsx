const checklistEn = `Before I send AI-written text:
[ ] 1. Every number, date and name checked against the source.
[ ] 2. Every claim is one I can defend in a meeting.
[ ] 3. Length and tone compared with what I would write myself.`

const checklistRu = `Перед отправкой текста, который писал AI:
[ ] 1. Каждая цифра, дата и имя сверены с источником.
[ ] 2. Каждое утверждение я смогу защитить на встрече.
[ ] 3. Длина и тон сравнены с тем, как написал бы я сам.`

const promptEn = `Read the draft below. List every number, date, name and
claim in it, one per line, so I can check each one.
Don't fix anything and don't add facts.

Draft:
[paste here]`

const promptRu = `Прочитай черновик ниже. Выпиши все цифры, даты, имена и
утверждения, по одному на строку, чтобы я проверил каждое.
Ничего не исправляй и не добавляй фактов.

Черновик:
[вставьте текст]`

export function ThreeChecksEn() {
  return (
    <>
      <p>
        AI text looks finished. The grammar is clean, the structure is tidy, and
        that is why it slips through. Researchers at BetterUp and the Stanford
        Social Media Lab call AI work that looks good but lacks substance
        "workslop".
      </p>

      <h2>What the survey found</h2>
      <p>
        In an online survey of 1,150 full-time US desk workers in September
        2025, 40% said they had received workslop in the last month. Each case
        took about 2 hours to deal with. BetterUp's write-up gives the average
        as 1 hour and 51 minutes.
      </p>
      <p>
        It costs the sender too. 42% saw a colleague who sent workslop as less
        trustworthy, and 53% admitted that some of the work they send may be
        workslop.
      </p>
      <p>
        All of these numbers are self-reported. BetterUp's blog text says 1,004
        respondents while its main page says 1,150. This page uses 1,150 from
        the main page.
      </p>

      <h2>The three checks</h2>
      <ol>
        <li>
          Every number and name against the source. AI invents details that
          sound right. Open the source, not the AI's memory of it.
        </li>
        <li>
          Every claim you would defend in a meeting. If a colleague asked "why
          do you say that?", you need an answer that isn't "the AI wrote it".
        </li>
        <li>
          Length and tone next to what you would write yourself. AI text tends
          to run long. Cut what you wouldn't say out loud.
        </li>
      </ol>

      <h2>The checklist to copy</h2>
      <pre>
        <code>{checklistEn}</code>
      </pre>

      <h2>A prompt that helps with check 1</h2>
      <p>
        It doesn't replace the check. It lists what you must verify, so nothing
        is skipped:
      </p>
      <pre>
        <code>{promptEn}</code>
      </pre>

      <h2>Limit</h2>
      <p>
        The checks catch mistakes in details and tone. They don't tell you
        whether the text is worth sending at all. The survey is self-reported,
        so read the percentages as perceptions of workers, not measured facts.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a href="https://www.betterup.com/workslop">BetterUp: workslop</a>
        </li>
        <li>
          <a href="https://www.betterup.com/blog/hidden-costs-workslop">
            BetterUp: the hidden costs of workslop
          </a>
        </li>
        <li>
          <a href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity">
            Harvard Business Review: AI-generated "workslop" is destroying
            productivity
          </a>
        </li>
      </ul>
    </>
  )
}

export function ThreeChecksRu() {
  return (
    <>
      <p>
        AI-текст выглядит законченным. Грамматика чистая, структура аккуратная,
        и поэтому он проскакивает незамеченным. Исследователи BetterUp и
        Stanford Social Media Lab называют AI-работу, которая выглядит хорошо,
        но не содержит сути, «workslop».
      </p>

      <h2>Что показал опрос</h2>
      <p>
        В онлайн-опросе 1 150 офисных сотрудников в США на полной ставке, в
        сентябре 2025 года, 40% сказали, что за последний месяц получали
        workslop. Разбор каждого случая занимал около 2 часов. В тексте BetterUp
        среднее указано точнее: 1 час 51 минута.
      </p>
      <p>
        Это бьёт и по отправителю. 42% сочли коллегу, приславшего workslop,
        менее надёжным, а 53% признались, что часть их собственной работы тоже
        может быть workslop.
      </p>
      <p>
        Все цифры самооценочные. В тексте блога BetterUp указано 1 004
        респондента, на главной странице 1 150. Здесь взято 1 150 с главной
        страницы.
      </p>

      <h2>Три проверки</h2>
      <ol>
        <li>
          Каждая цифра и имя против источника. AI придумывает правдоподобные
          детали. Откройте источник, а не «память» AI о нём.
        </li>
        <li>
          Каждое утверждение, которое вы защитите на встрече. Если коллега
          спросит «почему ты так говоришь?», нужен ответ, отличный от «так
          написал AI».
        </li>
        <li>
          Длина и тон рядом с тем, как написали бы вы. AI-текст обычно
          получается длиннее. Уберите то, чего вы не сказали бы вслух.
        </li>
      </ol>

      <h2>Чек-лист, чтобы скопировать</h2>
      <pre>
        <code>{checklistRu}</code>
      </pre>

      <h2>Промпт, который помогает с проверкой 1</h2>
      <p>
        Он не заменяет проверку. Он перечисляет то, что нужно сверить, чтобы
        ничего не пропустить:
      </p>
      <pre>
        <code>{promptRu}</code>
      </pre>

      <h2>Ограничение</h2>
      <p>
        Проверки ловят ошибки в деталях и тоне. Они не отвечают, стоит ли вообще
        отправлять этот текст. Опрос самооценочный, поэтому проценты это
        восприятие сотрудников, а не измеренные факты.
      </p>

      <h2>Источники</h2>
      <ul>
        <li>
          <a href="https://www.betterup.com/workslop">BetterUp: workslop</a>
        </li>
        <li>
          <a href="https://www.betterup.com/blog/hidden-costs-workslop">
            BetterUp: скрытые издержки workslop
          </a>
        </li>
        <li>
          <a href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity">
            Harvard Business Review: AI-«workslop» разрушает продуктивность
          </a>
        </li>
      </ul>
    </>
  )
}
