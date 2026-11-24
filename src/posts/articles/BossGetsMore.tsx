const templateEn = `Task: [what to produce, starting with a verb]
Who reads it: [the reader and what they care about]
Done means: [length, format, what must be in it]`

const templateRu = `Задача: [что сделать, начиная с глагола]
Кто читает: [читатель и что для него важно]
«Готово» значит: [длина, формат, что обязательно должно быть]`

const filledEn = `Task: Write an update on the late launch.
Who reads it: Our client, a busy director who wants dates, not causes.
Done means: Under 100 words, the new date in the first line, one question for them.`

const filledRu = `Задача: Напиши апдейт о задержке запуска.
Кто читает: наш клиент, занятой директор, которому нужны даты, а не причины.
«Готово» значит: меньше 100 слов, новая дата в первой строке, один вопрос к нему.`

export function BossGetsMoreEn() {
  return (
    <>
      <p>
        You and your manager may use the same AI tool, and still get different
        results from it. A Microsoft survey shows that leaders use AI more often
        than employees. The survey does not say why, but there is a habit worth
        borrowing from managers.
      </p>

      <h2>What the survey found</h2>
      <p>
        Microsoft's Work Trend Index 2025 is based on a survey of about 31,000
        knowledge workers in 31 markets, run by Edelman Data x Intelligence from
        6 February to 24 March 2025. The answers are self-reported. People with
        some decision-making influence count as leaders, everyone else as
        employees. Leaders come first on every measure of the survey's "agent
        boss" chart:
      </p>
      <ul>
        <li>
          use AI at least several times a week: 69% of leaders, 45% of
          employees;
        </li>
        <li>
          save at least one hour a day with AI: 29% of leaders, 20% of
          employees;
        </li>
        <li>
          treat AI as a thought partner: 54% of leaders, 41% of employees.
        </li>
      </ul>
      <p>
        The report also says that employees led the AI wave last year, and "this
        year, it's flipped".
      </p>

      <h2>One possible reason</h2>
      <p>
        The report does not explain the gap, so this part is a guess. Managers
        spend their days briefing people: here is the goal, here is who it is
        for, here is what finished looks like. A brief like that works on AI
        too. The report itself says employees need "prompting with context and
        intent, refining outputs instead of accepting first drafts".
      </p>
      <p>
        Most of us type a short request ("write an update") and then fix the
        answer by hand. A three-line brief often saves the fixing.
      </p>

      <h2>A template to copy</h2>
      <pre>
        <code>{templateEn}</code>
      </pre>
      <p>A filled example:</p>
      <pre>
        <code>{filledEn}</code>
      </pre>
      <ul>
        <li>
          Task says what to make. A verb first, as with a colleague: write,
          summarise, compare.
        </li>
        <li>
          Who reads it gives the tone and the level of detail without you naming
          either.
        </li>
        <li>
          Done means lets you check the answer in ten seconds. If it is over 100
          words, it is not done.
        </li>
      </ul>

      <h2>Two limits</h2>
      <p>
        The survey shows who uses AI more and who saves more time. It does not
        show that better briefs are the cause. Treat the template as a
        reasonable habit to test, not as a proven fix. Compare one task done
        both ways and see how much editing each needs.
      </p>
      <p>
        And the figures are self-reported: they show what people say about their
        own use.
      </p>

      <h2>Source</h2>
      <ul>
        <li>
          <a href="https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born">
            Microsoft: Work Trend Index 2025, "The Year the Frontier Firm Is
            Born"
          </a>
        </li>
      </ul>
    </>
  )
}

export function BossGetsMoreRu() {
  return (
    <>
      <p>
        Вы и ваш руководитель можете пользоваться одним и тем же AI и получать
        разный результат. Опрос Microsoft показывает, что руководители
        пользуются AI чаще, чем сотрудники. Почему так, опрос не говорит, но у
        руководителей есть привычка, которую стоит перенять.
      </p>

      <h2>Что показал опрос</h2>
      <p>
        Work Trend Index 2025 от Microsoft построен на опросе около 31 000
        работников умственного труда в 31 стране и регионе. Его провела Edelman
        Data x Intelligence с 6 февраля по 24 марта 2025 года. Ответы
        самооценочные. Руководителями считались те, у кого есть влияние на
        решения, остальные считались сотрудниками. По всем показателям на
        диаграмме «agent boss» руководители впереди:
      </p>
      <ul>
        <li>
          пользуются AI хотя бы несколько раз в неделю: 69% руководителей и 45%
          сотрудников;
        </li>
        <li>
          экономят с помощью AI не меньше часа в день: 29% руководителей и 20%
          сотрудников;
        </li>
        <li>
          воспринимают AI как партнёра для размышлений: 54% руководителей и 41%
          сотрудников.
        </li>
      </ul>
      <p>
        В отчёте также сказано, что в прошлом году волну AI вели сотрудники, а в
        этом году всё перевернулось.
      </p>

      <h2>Одна из возможных причин</h2>
      <p>
        Отчёт этот разрыв не объясняет, поэтому дальше моё предположение.
        Руководители целыми днями ставят задачи людям: вот цель, вот для кого,
        вот как выглядит готовое. Такая постановка работает и с AI. В самом
        отчёте сказано, что сотрудникам нужно «prompting with context and
        intent, refining outputs instead of accepting first drafts», то есть
        писать промпты с контекстом и целью и дорабатывать ответ, а не брать
        первый черновик.
      </p>
      <p>
        Большинство из нас пишет короткий запрос («напиши апдейт») и потом
        правит ответ руками. Задача из трёх строк часто избавляет от правок.
      </p>

      <h2>Шаблон</h2>
      <pre>
        <code>{templateRu}</code>
      </pre>
      <p>Заполненный пример:</p>
      <pre>
        <code>{filledRu}</code>
      </pre>
      <ul>
        <li>
          Задача говорит, что сделать. Глагол в начале, как коллеге: напиши,
          сократи, сравни.
        </li>
        <li>
          «Кто читает» задаёт тон и степень подробности, и вам не нужно
          описывать их отдельно.
        </li>
        <li>
          «Готово значит» позволяет проверить ответ за десять секунд. Если
          больше 100 слов, значит, не готово.
        </li>
      </ul>

      <h2>Два ограничения</h2>
      <p>
        Опрос показывает, кто пользуется AI чаще и кто экономит больше времени.
        Он не показывает, что причина в более точных задачах. Считайте шаблон
        разумной привычкой, которую стоит проверить, а не доказанным средством.
        Сделайте одну задачу обоими способами и сравните, сколько правок нужно
        каждому результату.
      </p>
      <p>
        И цифры самооценочные: они показывают, что люди говорят о собственном
        использовании.
      </p>

      <h2>Источник</h2>
      <ul>
        <li>
          <a href="https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born">
            Microsoft: Work Trend Index 2025, «The Year the Frontier Firm Is
            Born»
          </a>
        </li>
      </ul>
    </>
  )
}
