const templateEn = `You are [a job title] who [what you do for this reader].

[Your task, starting with a verb.]

[The text, data or notes to work with.]`

const templateRu = `Ты [должность], который [что делает для этого читателя].

[Ваша задача, начиная с глагола.]

[Текст, данные или заметки, с которыми нужно работать.]`

const rolesEn = `Customer reply:
You are a calm support lead who writes short, polite replies.

Meeting notes:
You are a project manager who turns notes into action items with owners.

Spreadsheet:
You are a finance analyst who explains numbers to people who are not experts.

Job ad:
You are a recruiter who writes clear job ads for people scanning on a phone.

Report to your manager:
You are an operations manager who writes one-page updates for busy executives.`

const rolesRu = `Ответ клиенту:
Ты спокойный руководитель поддержки, который пишет короткие вежливые ответы.

Заметки со встречи:
Ты менеджер проектов, который превращает заметки в список задач с ответственными.

Таблица:
Ты финансовый аналитик, который объясняет цифры людям, далёким от финансов.

Объявление о вакансии:
Ты рекрутер, который пишет понятные объявления для тех, кто читает с телефона.

Отчёт руководителю:
Ты операционный менеджер, который пишет одностраничные апдейты для занятых руководителей.`

export function RoleInOneLineEn() {
  return (
    <>
      <p>
        When you type a request into an AI chat, it has to guess who it should
        be. Should it sound like a lawyer, a friend or a customer service agent?
        Without a hint it picks a neutral, polite middle, and that is where much
        of the generic text comes from.
      </p>
      <p>
        One line fixes the guess. You say who the AI is for this task, and the
        tone and focus of the answer follow.
      </p>

      <h2>What Anthropic's guide says</h2>
      <p>
        Anthropic's prompting guide has a short section called "Give Claude a
        role". It says that setting a role "focuses Claude's behavior and tone
        for your use case" and that "even a single sentence makes a difference".
        The guide's own example is one line:
      </p>
      <pre>
        <code>You are a helpful coding assistant specializing in Python.</code>
      </pre>
      <p>
        Google's Workspace prompting guide gives the same advice in its
        "Leveling up your prompt writing" tips: "Assign a role", with the
        example "You are the head of a creative department for a leading
        advertising agency".
      </p>

      <h2>Five role lines for office work</h2>
      <p>
        Copy one, then add your task under it. Each line has a job and a reader,
        so the AI knows what "good" looks like.
      </p>
      <pre>
        <code>{rolesEn}</code>
      </pre>

      <h2>A template to copy</h2>
      <pre>
        <code>{templateEn}</code>
      </pre>
      <p>
        In a chat app such as ChatGPT, Claude or Gemini, put the role as the
        first line of your message. The Anthropic section talks about the system
        prompt, which is the API setting for the same thing.
      </p>

      <h2>How to write a good role</h2>
      <ul>
        <li>
          Use a job a real person has: "support lead", "analyst", "recruiter".
        </li>
        <li>
          Add what that person does for the reader: "who explains numbers to
          non-experts". This is the part that shapes the answer.
        </li>
        <li>Keep it to one sentence, then write the task.</li>
      </ul>

      <h2>A limit</h2>
      <p>
        A role changes tone and focus. It does not give the AI facts it does not
        have. A "finance analyst" can still get a number wrong, so check names,
        figures and dates yourself before you send anything.
      </p>
      <p>
        To see what the role does, run the same task twice, once with the line
        and once without, and compare the two answers.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices">
            Anthropic: prompting best practices, "Give Claude a role"
          </a>
        </li>
        <li>
          <a href="https://services.google.com/fh/files/misc/workspace_with_gemini_prompting_guide.pdf">
            Google: Workspace with Gemini prompting guide (PDF), "Leveling up
            your prompt writing"
          </a>
        </li>
      </ul>
    </>
  )
}

export function RoleInOneLineRu() {
  return (
    <>
      <p>
        Когда вы пишете запрос в AI-чат, ему приходится гадать, кем быть:
        юристом, другом или оператором поддержки. Без подсказки он выбирает
        нейтральную вежливую середину. Отсюда берётся много безликого текста.
      </p>
      <p>
        Одна строка снимает эту догадку. Вы говорите, кем AI является в этой
        задаче, и за этим подтягиваются тон и фокус ответа.
      </p>

      <h2>Что пишет Anthropic</h2>
      <p>
        В руководстве Anthropic по промптам есть короткий раздел «Give Claude a
        role». Там сказано, что роль «focuses Claude's behavior and tone for
        your use case», то есть направляет поведение и тон Claude под вашу
        задачу, и что «even a single sentence makes a difference», то есть
        хватает даже одного предложения. Пример в руководстве тоже из одной
        строки:
      </p>
      <pre>
        <code>You are a helpful coding assistant specializing in Python.</code>
      </pre>
      <p>
        Руководство Google по промптам для Workspace даёт тот же совет среди
        подсказок «Leveling up your prompt writing»: «Assign a role», с примером
        «You are the head of a creative department for a leading advertising
        agency».
      </p>

      <h2>Пять строк с ролью для офисной работы</h2>
      <p>
        Скопируйте одну и допишите под ней задачу. В каждой строке есть
        профессия и читатель, поэтому AI понимает, что такое «хорошо».
      </p>
      <pre>
        <code>{rolesRu}</code>
      </pre>

      <h2>Шаблон</h2>
      <pre>
        <code>{templateRu}</code>
      </pre>
      <p>
        В чате вроде ChatGPT, Claude или Gemini ставьте роль первой строкой
        сообщения. В разделе Anthropic речь о системном промпте: это настройка в
        API для того же самого.
      </p>

      <h2>Как написать хорошую роль</h2>
      <ul>
        <li>
          Берите профессию, которая есть у реальных людей: «руководитель
          поддержки», «аналитик», «рекрутер».
        </li>
        <li>
          Добавьте, что этот человек делает для читателя: «объясняет цифры тем,
          кто в них не разбирается». Именно эта часть формирует ответ.
        </li>
        <li>Уложитесь в одно предложение, затем пишите задачу.</li>
      </ul>

      <h2>Ограничение</h2>
      <p>
        Роль меняет тон и фокус. Фактов, которых у AI нет, она не добавляет.
        «Финансовый аналитик» всё равно может ошибиться в цифре, поэтому имена,
        суммы и даты проверяйте сами, прежде чем что-то отправлять.
      </p>
      <p>
        Чтобы увидеть, что делает роль, прогоните одну задачу дважды, с этой
        строкой и без неё, и сравните ответы.
      </p>

      <h2>Источники</h2>
      <ul>
        <li>
          <a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices">
            Anthropic: prompting best practices, раздел «Give Claude a role»
          </a>
        </li>
        <li>
          <a href="https://services.google.com/fh/files/misc/workspace_with_gemini_prompting_guide.pdf">
            Google: руководство по промптам Workspace with Gemini (PDF), раздел
            «Leveling up your prompt writing»
          </a>
        </li>
      </ul>
    </>
  )
}
