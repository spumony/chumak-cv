const sheetEn = `OPEN GOOGLE FIRST
- prices, opening hours, exchange rates
- the official page of a company, a service or a law
- today's news
- anything you need to cite or forward

OPEN CHATGPT FIRST
- a first draft of an email or a post
- a summary of your own notes or a long document
- a clause in a contract or a report, in plain words
- a comparison of options you already have

BEFORE YOU USE THE ANSWER
- numbers, quotes, names: open the source and check them
- dates: check when the source was published`

const sheetRu = `СНАЧАЛА GOOGLE
- цены, часы работы, курсы валют
- официальная страница компании, сервиса или закона
- новости за сегодня
- всё, что нужно процитировать или переслать

СНАЧАЛА CHATGPT
- первый черновик письма или поста
- краткое изложение ваших заметок или длинного документа
- пункт договора или отчёта простыми словами
- сравнение вариантов, которые у вас уже есть

ПЕРЕД ТЕМ КАК ИСПОЛЬЗОВАТЬ ОТВЕТ
- цифры, цитаты, имена: откройте источник и проверьте
- даты: проверьте, когда источник опубликован`

export function GoogleOrChatgptEn() {
  return (
    <>
      <p>
        When you have a question at work, it is easy to open whichever tab is
        closest. But the two tools are good at different things. A search engine
        points you to pages. A chat assistant writes new text from what you give
        it.
      </p>
      <p>
        A simple split: if you need a fact you must trust, start with Google. If
        you need words you will edit, start with ChatGPT.
      </p>

      <h2>Why the split</h2>
      <p>
        OpenAI's help center says about ChatGPT: "Sometimes, it might sound
        confident, even when it's wrong." It also lists made-up quotes, studies
        and references as a known problem, and tells users to "verify important
        information from reliable sources". A chat answer reads equally smooth
        whether the fact is right or not, so you cannot judge it by tone.
      </p>
      <p>
        Many chats can search the web now. ChatGPT search is available on Free,
        Go, Plus, Pro, Business, Enterprise and Edu plans, and its answers can
        include links to sources. OpenAI adds a warning: "Search results and
        citations can be incomplete, outdated, or incorrect." So open the link
        and check the date before you use a number.
      </p>

      <h2>A cheat sheet to copy</h2>
      <pre>
        <code>{sheetEn}</code>
      </pre>

      <h2>Two quick examples</h2>
      <ul>
        <li>
          "Is the bank open on Saturday?" is a fact that changes. Google it and
          open the bank's own page.
        </li>
        <li>
          "Turn these meeting notes into three bullet points." This is your
          text, and you will edit the result anyway. Use the chat.
        </li>
      </ul>
      <p>
        Some tasks need both. For a report, ask the chat to draft the structure,
        then find each number on the official page.
      </p>

      <h2>Limits</h2>
      <p>
        The split is a rule of thumb. Google's own results can be outdated or
        wrong too, so check the date and who published the page. And never paste
        private or client data into a chat unless your company allows it.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a href="https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth">
            OpenAI: Does ChatGPT tell the truth?
          </a>
        </li>
        <li>
          <a href="https://help.openai.com/en/articles/9237897-chatgpt-search">
            OpenAI: ChatGPT search
          </a>
        </li>
      </ul>
    </>
  )
}

export function GoogleOrChatgptRu() {
  return (
    <>
      <p>
        Когда на работе возникает вопрос, проще всего открыть ближайшую вкладку.
        Но у двух инструментов разные сильные стороны. Поисковик показывает
        страницы. Чат-ассистент пишет новый текст из того, что вы ему дали.
      </p>
      <p>
        Простое правило: если нужен факт, которому можно доверять, начните с
        Google. Если нужны слова, которые вы потом отредактируете, начните с
        ChatGPT.
      </p>

      <h2>Почему так</h2>
      <p>
        В справке OpenAI про ChatGPT сказано: «Sometimes, it might sound
        confident, even when it's wrong», то есть он может звучать уверенно,
        даже когда ошибается. Там же выдуманные цитаты, исследования и ссылки
        названы известной проблемой, а пользователям советуют проверять важную
        информацию по надёжным источникам. Ответ чата читается одинаково гладко,
        верен факт или нет, поэтому по тону его не оценить.
      </p>
      <p>
        Многие чаты теперь умеют искать в интернете. Поиск ChatGPT доступен на
        тарифах Free, Go, Plus, Pro, Business, Enterprise и Edu, а в ответах
        могут быть ссылки на источники. OpenAI предупреждает: результаты поиска
        и цитаты могут быть неполными, устаревшими или неверными. Поэтому
        откройте ссылку и проверьте дату, прежде чем использовать цифру.
      </p>

      <h2>Шпаргалка для копирования</h2>
      <pre>
        <code>{sheetRu}</code>
      </pre>

      <h2>Два быстрых примера</h2>
      <ul>
        <li>
          «Банк открыт в субботу?» Это факт, который меняется. Найдите его в
          Google и откройте страницу самого банка.
        </li>
        <li>
          «Сделай из этих заметок со встречи три пункта». Это ваш текст, и
          результат вы всё равно отредактируете. Используйте чат.
        </li>
      </ul>
      <p>
        Некоторым задачам нужны оба. Для отчёта попросите чат набросать
        структуру, а каждую цифру найдите на официальной странице.
      </p>

      <h2>Ограничения</h2>
      <p>
        Это правило для ориентира. Результаты Google тоже бывают устаревшими или
        неверными, поэтому проверяйте дату и того, кто опубликовал страницу. И
        не вставляйте в чат личные данные или данные клиентов, если компания это
        не разрешает.
      </p>

      <h2>Источники</h2>
      <ul>
        <li>
          <a href="https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth">
            OpenAI: Does ChatGPT tell the truth?
          </a>
        </li>
        <li>
          <a href="https://help.openai.com/en/articles/9237897-chatgpt-search">
            OpenAI: ChatGPT search
          </a>
        </li>
      </ul>
    </>
  )
}
