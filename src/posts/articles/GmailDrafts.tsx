const promptEn = `Look at my Gmail threads from the last 7 days that are unread and wait for my answer.
For each one, write a reply draft I can edit. Keep it short and polite.
Do not send, forward or label anything.
After the drafts, list the threads you skipped and why.`

const promptRu = `Посмотри мои цепочки в Gmail за последние 7 дней: непрочитанные и те, что ждут моего ответа.
К каждой напиши черновик ответа, который я смогу поправить. Коротко и вежливо.
Ничего не отправляй, не пересылай и не помечай.
После черновиков перечисли цепочки, которые ты пропустил, и почему.`

export function GmailDraftsEn() {
  return (
    <>
      <p>
        An inbox is full of replies that take two minutes each and still pile
        up. Claude can read the thread and write the reply for you. The worry is
        fair: you don't want an AI to send mail in your name.
      </p>
      <p>
        Here is the catch. Anthropic's help center says the Gmail connector can
        search and read email, draft email, and "send, reply to, and forward"
        email. So "drafts only" is a setting you choose, plus a habit.
      </p>

      <h2>What the source says</h2>
      <ul>
        <li>
          Plans: the help center says the Google Workspace connectors are
          "available for all users". On Team and Enterprise, an Owner enables
          them for the organization first.
        </li>
        <li>
          Approval: "By default, outside Auto mode, Claude asks for your
          approval before each of these actions" (sending, replying,
          forwarding).
        </li>
        <li>
          In Auto mode those actions can run without asking, "unless an
          automated check flags them as risky". The page adds: "The check can
          miss risky actions."
        </li>
        <li>
          Per tool, each connector has a Tool permissions section with three
          choices: Always allow, Needs approval, Blocked.
        </li>
      </ul>

      <h2>Set up drafts only</h2>
      <ol>
        <li>
          Open Customize → Connectors. Find Gmail, select Connect (the button
          may read Connect to Claude or Add), and sign in to Google.
        </li>
        <li>
          Open Gmail on the page with your connectors. Under Tool permissions,
          set every tool that sends or forwards mail to Blocked. Leave the
          drafting tools on.
        </li>
        <li>
          In a chat, select + at the lower left of the message box and turn
          Gmail on.
        </li>
        <li>Paste the prompt below and read what comes back.</li>
        <li>Open Drafts in Gmail, edit each one, and press send yourself.</li>
      </ol>
      <p>
        The exact tool names depend on your account, so they are not copied
        here. Anthropic's page says you can set the permission "for each group
        of tools or for a single tool". Read the names in your own account and
        block anything that sends or forwards.
      </p>

      <h2>A prompt to copy</h2>
      <pre>
        <code>{promptEn}</code>
      </pre>

      <h2>What to check in every draft</h2>
      <ul>
        <li>Is the recipient the person you meant? Check cc and bcc too.</li>
        <li>
          Does it promise a date, a price or a decision you have not made?
        </li>
        <li>
          Does it contain an instruction or a link that came from the incoming
          email and not from you?
        </li>
        <li>
          Does it sound like you? If not, paste an old reply as an example.
        </li>
      </ul>

      <h2>The risk</h2>
      <p>
        Claude reads text written by other people, and that text can try to give
        it orders. Anthropic describes prompt injection as "adversarial
        instructions hidden within the content that AI models process". Its
        example is a vendor email with hidden instructions in white text, and it
        says prompt injection "is far from a solved problem".
      </p>
      <p>
        A blocked tool cannot send mail, so a hidden instruction cannot send
        something in your name. It could still shape a draft. That is why step 5
        is not optional. For the same reason, avoid Auto mode for email.
      </p>

      <h2>Limits</h2>
      <ul>
        <li>Claude can't open a Gmail attachment over about 12 MB.</li>
        <li>Some advanced Gmail filters may not be supported.</li>
        <li>Performance may vary for large mailboxes.</li>
        <li>
          Anthropic's pages disagree on one point. The help center article
          describes drafting, sending and plans for all users. The Gmail page in
          the connectors docs says the connector is read-only and lists paid
          plans. Check what your own account shows before you rely on drafts.
        </li>
      </ul>

      <h2>Sources</h2>
      <ul>
        <li>
          <a href="https://support.claude.com/en/articles/10166901-use-google-workspace-connectors">
            Anthropic: use Google Workspace connectors
          </a>
        </li>
        <li>
          <a href="https://claude.com/docs/connectors/getting-started.md">
            Anthropic: get started with connectors
          </a>{' '}
          (Tool permissions, the + menu)
        </li>
        <li>
          <a href="https://claude.com/docs/connectors/google/gmail.md">
            Anthropic: Gmail connector page
          </a>
        </li>
        <li>
          <a href="https://www.anthropic.com/research/prompt-injection-defenses">
            Anthropic: mitigating prompt injections in browser use
          </a>
        </li>
      </ul>
    </>
  )
}

export function GmailDraftsRu() {
  return (
    <>
      <p>
        В ящике всегда лежат ответы, которые пишутся за две минуты, но всё равно
        копятся. Claude может прочитать цепочку и написать ответ за вас.
        Опасение понятно: не хочется, чтобы ИИ отправлял письма от вашего имени.
      </p>
      <p>
        Тут есть подвох. Справочный центр Anthropic говорит, что коннектор Gmail
        умеет искать и читать письма, писать черновики, а также отправлять,
        отвечать и пересылать. Значит, «только черновики» это настройка, которую
        выбираете вы, и привычка.
      </p>

      <h2>Что говорит источник</h2>
      <ul>
        <li>
          Тарифы: справочный центр пишет, что коннекторы Google Workspace
          «доступны всем пользователям». На Team и Enterprise сначала включает
          владелец организации.
        </li>
        <li>
          Подтверждение: вне режима Auto Claude по умолчанию просит согласия
          перед каждым таким действием (отправка, ответ, пересылка).
        </li>
        <li>
          В режиме Auto эти действия могут идти без вопросов, если
          автоматическая проверка не сочтёт их рискованными. Страница добавляет:
          проверка может пропустить рискованные действия.
        </li>
        <li>
          У каждого коннектора есть раздел Tool permissions с тремя вариантами:
          Always allow, Needs approval, Blocked. Их можно задать для каждого
          инструмента отдельно.
        </li>
      </ul>

      <h2>Как включить режим «только черновики»</h2>
      <ol>
        <li>
          Откройте Customize → Connectors. Найдите Gmail, нажмите Connect
          (кнопка может называться Connect to Claude или Add) и войдите в
          аккаунт Google.
        </li>
        <li>
          Откройте Gmail на странице ваших коннекторов. В Tool permissions
          поставьте Blocked на каждый инструмент, который отправляет или
          пересылает письма. Инструменты для черновиков оставьте включёнными.
        </li>
        <li>В чате нажмите + слева внизу поля сообщения и включите Gmail.</li>
        <li>Вставьте промпт ниже и прочитайте, что получилось.</li>
        <li>
          Откройте «Черновики» в Gmail, поправьте каждый и нажмите «Отправить»
          сами.
        </li>
      </ol>
      <p>
        Точные названия инструментов зависят от аккаунта, поэтому здесь их нет.
        Anthropic пишет, что разрешение можно задать для группы инструментов или
        для одного. Посмотрите названия в своём аккаунте и заблокируйте всё, что
        отправляет или пересылает.
      </p>

      <h2>Промпт для копирования</h2>
      <pre>
        <code>{promptRu}</code>
      </pre>

      <h2>Что проверить в каждом черновике</h2>
      <ul>
        <li>Тот ли получатель? Проверьте и копию, и скрытую копию.</li>
        <li>
          Нет ли обещания даты, цены или решения, которых вы не принимали?
        </li>
        <li>
          Нет ли в нём инструкции или ссылки, которая пришла из входящего
          письма, а не от вас?
        </li>
        <li>
          Звучит ли он как вы? Если нет, вставьте старый ответ как пример.
        </li>
      </ul>

      <h2>Риск</h2>
      <p>
        Claude читает тексты, которые написали другие люди, и эти тексты могут
        пытаться им командовать. Anthropic описывает prompt injection как
        скрытые во входных данных враждебные инструкции для ИИ. Их пример:
        письмо от поставщика со скрытым белым текстом. И они пишут, что проблема
        «далека от решения».
      </p>
      <p>
        Заблокированный инструмент не отправит письмо, поэтому скрытая
        инструкция не отправит ничего от вашего имени. Но она может повлиять на
        черновик. Поэтому пятый шаг обязателен. По той же причине не включайте
        режим Auto для почты.
      </p>

      <h2>Ограничения</h2>
      <ul>
        <li>Claude не откроет вложение Gmail больше примерно 12 МБ.</li>
        <li>Некоторые сложные фильтры Gmail могут не поддерживаться.</li>
        <li>На больших ящиках скорость может падать.</li>
        <li>
          Страницы Anthropic расходятся в одном. Статья справочного центра
          описывает черновики, отправку и доступ для всех. Страница Gmail в
          документации коннекторов пишет, что коннектор только читает, и
          перечисляет платные тарифы. Сверьтесь с вашим аккаунтом, прежде чем
          рассчитывать на черновики.
        </li>
      </ul>

      <h2>Источники</h2>
      <ul>
        <li>
          <a href="https://support.claude.com/en/articles/10166901-use-google-workspace-connectors">
            Anthropic: коннекторы Google Workspace
          </a>
        </li>
        <li>
          <a href="https://claude.com/docs/connectors/getting-started.md">
            Anthropic: начало работы с коннекторами
          </a>{' '}
          (Tool permissions, меню +)
        </li>
        <li>
          <a href="https://claude.com/docs/connectors/google/gmail.md">
            Anthropic: страница коннектора Gmail
          </a>
        </li>
        <li>
          <a href="https://www.anthropic.com/research/prompt-injection-defenses">
            Anthropic: защита от prompt injection при работе в браузере
          </a>
        </li>
      </ul>
    </>
  )
}
