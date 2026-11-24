const promptEn = `Here is last month's list of expenses (messy, pasted below).
Make a budget spreadsheet from it:
- one sheet with the cleaned list: date, item, category, amount
- one sheet with totals per category and a grand total
- use formulas for every total, no typed numbers
- add a column for the planned amount and a column for the difference

[paste the list]`

const promptRu = `Вот список расходов за прошлый месяц (неаккуратный, вставлен ниже).
Сделай из него таблицу бюджета:
- один лист с чистым списком: дата, статья, категория, сумма
- один лист с итогами по категориям и общим итогом
- во всех итогах используй формулы, без чисел, набранных руками
- добавь столбец с плановой суммой и столбец с разницей

[вставьте список]`

const checkList = `1. Click a total cell. The bar should show a formula, like =SUM(D2:D40).
2. Add the list yourself with a calculator. Compare with the grand total.
3. Check that the formula range covers the last row.
4. Check that no category is missing or counted twice.`

const checkListRu = `1. Кликните ячейку с итогом. В строке формул должна быть формула, например =SUM(D2:D40).
2. Сложите список сами на калькуляторе. Сравните с общим итогом.
3. Проверьте, что диапазон формулы доходит до последней строки.
4. Проверьте, что ни одна категория не пропала и не посчитана дважды.`

export function XlsxSkillEn() {
  return (
    <>
      <p>
        Building a spreadsheet by hand means typing, copying and fixing sums.
        Claude can do the first draft: you describe the sheet, it produces an
        Excel file you download and open as usual.
      </p>
      <p>
        Anthropic says Claude "creates it with working formulas and multiple
        sheets", and gives budget templates with variance calculations as an
        example. Behind it is a built-in skill, so you install nothing.
      </p>

      <h2>Who has it</h2>
      <p>
        Anthropic's help center says code execution and file creation "is
        available to all Claude users (Free, Pro, Max, Ultra, Team, and
        Enterprise)". On Team and Enterprise, an organization owner can turn it
        off. Skills are available on the same plans.
      </p>

      <h2>Turn it on</h2>
      <ul>
        <li>
          On web or desktop: Settings → Capabilities → switch on "Code execution
          and file creation". In the newer layout it is called "Create and edit
          files".
        </li>
        <li>
          On mobile: tap your name in the left sidebar → Settings →
          Capabilities.
        </li>
        <li>
          Team and Enterprise: the owner uses Organization settings →
          Capabilities.
        </li>
        <li>
          To see the document skills, open Customize → Skills and check that the
          built-in ones are on.
        </li>
      </ul>

      <h2>A one-minute demo</h2>
      <p>Paste a messy list of last month's expenses, then use this prompt:</p>
      <pre>
        <code>{promptEn}</code>
      </pre>
      <p>
        Claude makes the file and gives you a download link. Open it in Excel,
        Numbers or Google Sheets.
      </p>

      <h2>Check it before you send it</h2>
      <p>
        Anthropic's own note: "You may need to review and refine Claude's
        outputs to meet your exact requirements." A wrong range or a missed row
        gives a clean-looking sheet with a wrong total.
      </p>
      <pre>
        <code>{checkList}</code>
      </pre>

      <h2>Limits and risks</h2>
      <ul>
        <li>File size: up to 30MB for uploads and downloads.</li>
        <li>
          Creating files uses more of your usage limit than a normal chat.
        </li>
        <li>
          Prompt injection: Anthropic warns that hidden instructions in files or
          websites you give Claude could make it run untrusted code or send data
          out. Don't upload files from sources you don't trust, and stop it if
          it touches data you didn't expect.
        </li>
        <li>
          Public sharing of conversations with files is disabled on Free, Pro,
          Max and Ultra.
        </li>
      </ul>

      <h2>Sources</h2>
      <ul>
        <li>
          <a href="https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude">
            Anthropic help center: create and edit files with Claude
          </a>
        </li>
        <li>
          <a href="https://claude.com/blog/create-files">
            Claude blog: Claude can now create and edit files
          </a>{' '}
          (September 2025, updated October 2025)
        </li>
        <li>
          <a href="https://support.claude.com/en/articles/12512180-using-skills-in-claude">
            Anthropic: using skills in Claude
          </a>
        </li>
      </ul>
    </>
  )
}

export function XlsxSkillRu() {
  return (
    <>
      <p>
        Таблицу вручную собирать долго: набирать, копировать, чинить суммы.
        Первый черновик может сделать Claude: вы описываете таблицу, он создаёт
        файл Excel, который вы скачиваете и открываете как обычно.
      </p>
      <p>
        Anthropic пишет, что Claude «создаёт файл с рабочими формулами и
        несколькими листами», и приводит как пример шаблоны бюджета с расчётом
        отклонений. За этим стоит встроенный скилл, ставить ничего не нужно.
      </p>

      <h2>На каких тарифах</h2>
      <p>
        В справочном центре Anthropic сказано, что выполнение кода и создание
        файлов «доступно всем пользователям Claude (Free, Pro, Max, Ultra, Team
        и Enterprise)». В Team и Enterprise владелец организации может это
        отключить. Скиллы доступны на тех же тарифах.
      </p>

      <h2>Как включить</h2>
      <ul>
        <li>
          В вебе и на десктопе: Settings → Capabilities → включите «Code
          execution and file creation». В новом интерфейсе он называется «Create
          and edit files».
        </li>
        <li>
          В мобильном приложении: нажмите на своё имя в боковой панели →
          Settings → Capabilities.
        </li>
        <li>
          Team и Enterprise: владелец заходит в Organization settings →
          Capabilities.
        </li>
        <li>
          Чтобы увидеть документные скиллы, откройте Customize → Skills и
          проверьте, что встроенные включены.
        </li>
      </ul>

      <h2>Демо на одну минуту</h2>
      <p>
        Вставьте неаккуратный список расходов за прошлый месяц и используйте
        такой запрос:
      </p>
      <pre>
        <code>{promptRu}</code>
      </pre>
      <p>
        Claude создаёт файл и даёт ссылку на скачивание. Откройте его в Excel,
        Numbers или Google Sheets.
      </p>

      <h2>Проверьте, прежде чем отправлять</h2>
      <p>
        Слова самой Anthropic: «возможно, вам придётся проверить и доработать
        результат Claude под ваши требования». Неверный диапазон или пропущенная
        строка дают аккуратную таблицу с неверным итогом.
      </p>
      <pre>
        <code>{checkListRu}</code>
      </pre>

      <h2>Ограничения и риски</h2>
      <ul>
        <li>Размер файла: до 30 МБ на загрузку и скачивание.</li>
        <li>
          Создание файлов расходует больше вашего лимита, чем обычный чат.
        </li>
        <li>
          Prompt injection: Anthropic предупреждает, что скрытые инструкции в
          файлах или на сайтах, которые вы даёте Claude, могут заставить его
          запустить ненадёжный код или отправить данные наружу. Не загружайте
          файлы из недоверенных источников и останавливайте Claude, если он
          трогает неожиданные данные.
        </li>
        <li>
          Публичный доступ к разговорам с файлами отключён на Free, Pro, Max и
          Ultra.
        </li>
      </ul>

      <h2>Источники</h2>
      <ul>
        <li>
          <a href="https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude">
            Справочный центр Anthropic: создание и правка файлов в Claude
          </a>
        </li>
        <li>
          <a href="https://claude.com/blog/create-files">
            Блог Claude: Claude теперь создаёт и редактирует файлы
          </a>{' '}
          (сентябрь 2025, обновление октябрь 2025)
        </li>
        <li>
          <a href="https://support.claude.com/en/articles/12512180-using-skills-in-claude">
            Anthropic: как пользоваться скиллами в Claude
          </a>
        </li>
      </ul>
    </>
  )
}
