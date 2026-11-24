const promptEn = `Turn this transcript into a recap:
decisions, tasks with owners, open questions.
Keep names as they appear.
If something is unclear, list it under open questions.
Don't add anything that isn't in the text.

Transcript:
[paste here]`

const promptRu = `Преврати эту расшифровку в итоги встречи:
решения, задачи с исполнителями, открытые вопросы.
Имена оставь так, как они написаны.
Если что-то неясно, внеси это в открытые вопросы.
Не добавляй ничего, чего нет в тексте.

Расшифровка:
[вставьте текст]`

export function PhoneTranscriptEn() {
  return (
    <>
      <p>
        Many people pay for a transcription app, or skip notes in meetings,
        without checking the recorder that is already on their phone. Apple,
        Google and Samsung all ship one with transcription. It depends on your
        model, your language and your country, so check before you rely on it.
      </p>

      <h2>What each phone offers</h2>
      <h3>iPhone: Voice Memos</h3>
      <p>
        Apple says: "Audio transcription is available on iPhone 12 or later", in
        English (all variants), Spanish, Portuguese, Italian, French, German,
        Japanese, Korean and Chinese. It "is not available in all countries or
        regions".
      </p>
      <ul>
        <li>
          During a recording: swipe up from the top of the waveform and tap the
          Transcription button.
        </li>
        <li>
          After a recording: open it, tap More, then View Transcript or Copy
          Transcript.
        </li>
        <li>
          On supported devices with Apple Intelligence, Writing Tools can
          summarize a transcript.
        </li>
      </ul>
      <h3>Pixel: Recorder</h3>
      <p>
        Google lists live transcription on "Pixel 6 &amp; later, including
        Fold". Pixel 3 to 5a support fewer languages.
      </p>
      <ul>
        <li>
          Open Recorder, tap your profile icon, open Recorder settings and pick
          the transcription language.
        </li>
        <li>Open a recording and choose Transcript to read it.</li>
        <li>
          Summaries are "available for Pixel 8 and later", for recordings from 5
          minutes up to 1 hour, in English, Mandarin, Hindi, Italian, French,
          German and Japanese.
        </li>
      </ul>
      <h3>Samsung Galaxy: Voice Recorder</h3>
      <p>
        Transcript assist is "available on select phones and tablets running
        Android 14 with One UI 6.1 or higher". It supports English, Spanish,
        French, German, Italian, Polish, Russian and more. Samsung says certain
        languages may not be supported.
      </p>
      <ul>
        <li>Record, stop and save the recording.</li>
        <li>Open it and tap the Transcript assist icon (four stars).</li>
        <li>Choose to transcribe. The same icon offers a summary.</li>
        <li>
          Use the three dots to save the text to Samsung Notes or share it.
        </li>
      </ul>
      <p>
        Samsung says its basic Galaxy AI features are free, and that enhanced or
        third-party features may have other terms. The Apple and Google pages
        don't talk about price, so check your own plan and device.
      </p>

      <h2>The recap prompt</h2>
      <p>
        Copy the transcript, open ChatGPT or Claude, and paste it under this
        prompt:
      </p>
      <pre>
        <code>{promptEn}</code>
      </pre>
      <p>
        Read the recap against the transcript before you send it to anyone.
        Names and owners are where AI slips most often.
      </p>

      <h2>Two rules before you press record</h2>
      <ul>
        <li>Ask everyone in the meeting. Recording rules differ by country.</li>
        <li>
          Remove anything private (salaries, health, client data) before you
          paste the text into a chat. Check your company's AI policy first.
        </li>
      </ul>

      <h2>Limits</h2>
      <p>
        The transcript is a draft. Accents, noise and several people talking at
        once cause errors. The pages above don't say where processing happens,
        so don't assume it stays on the phone.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a href="https://support.apple.com/guide/iphone/view-a-transcription-iph00953a982/ios">
            Apple: view a transcription in Voice Memos
          </a>
        </li>
        <li>
          <a href="https://support.google.com/pixelphone/answer/16267698">
            Google: Recorder transcription and summaries on Pixel
          </a>
        </li>
        <li>
          <a href="https://www.samsung.com/us/support/answer/ANS10000942/">
            Samsung: Transcript assist in Voice Recorder
          </a>
        </li>
      </ul>
    </>
  )
}

export function PhoneTranscriptRu() {
  return (
    <>
      <p>
        Многие платят за приложение для расшифровки или вообще не ведут заметки
        на встречах, не заглянув в диктофон, который уже есть в телефоне. У
        Apple, Google и Samsung он есть, и в нём есть расшифровка. Она зависит
        от модели, языка и страны, поэтому сначала проверьте свой случай.
      </p>

      <h2>Что есть на каждом телефоне</h2>
      <h3>iPhone: Диктофон (Voice Memos)</h3>
      <p>
        Apple пишет: расшифровка аудио доступна на iPhone 12 и новее, на
        английском (все варианты), испанском, португальском, итальянском,
        французском, немецком, японском, корейском и китайском. Она доступна не
        во всех странах и регионах.
      </p>
      <ul>
        <li>
          Во время записи: проведите вверх от верхнего края волны и нажмите
          кнопку Transcription.
        </li>
        <li>
          После записи: откройте её, нажмите More, затем View Transcript или
          Copy Transcript.
        </li>
        <li>
          На поддерживаемых устройствах с Apple Intelligence инструменты письма
          (Writing Tools) могут сделать краткое изложение расшифровки.
        </li>
      </ul>
      <h3>Pixel: Recorder</h3>
      <p>
        Google указывает живую расшифровку на Pixel 6 и новее, включая Fold. На
        Pixel 3 до 5a список языков короче.
      </p>
      <ul>
        <li>
          Откройте Recorder, нажмите значок профиля, зайдите в настройки
          Recorder и выберите язык расшифровки.
        </li>
        <li>Откройте запись и выберите Transcript, чтобы прочитать текст.</li>
        <li>
          Краткое изложение доступно на Pixel 8 и новее, для записей от 5 минут
          до 1 часа, на английском, китайском (мандарин), хинди, итальянском,
          французском, немецком и японском.
        </li>
      </ul>
      <h3>Samsung Galaxy: Voice Recorder</h3>
      <p>
        Transcript assist доступен на отдельных телефонах и планшетах с Android
        14 и One UI 6.1 или новее. Он поддерживает английский, испанский,
        французский, немецкий, итальянский, польский, русский и другие языки.
        Samsung предупреждает, что часть языков может не поддерживаться.
      </p>
      <ul>
        <li>Запишите, остановите и сохраните запись.</li>
        <li>Откройте её и нажмите значок Transcript assist (четыре звезды).</li>
        <li>
          Выберите расшифровку. Тот же значок предлагает краткое изложение.
        </li>
        <li>
          Через три точки текст можно сохранить в Samsung Notes или отправить.
        </li>
      </ul>
      <p>
        Samsung пишет, что базовые функции Galaxy AI бесплатны, а расширенные и
        сторонние могут иметь другие условия. На страницах Apple и Google о цене
        ничего нет, поэтому проверьте свой тариф и устройство.
      </p>

      <h2>Промпт для итогов</h2>
      <p>
        Скопируйте расшифровку, откройте ChatGPT или Claude и вставьте её под
        этот промпт:
      </p>
      <pre>
        <code>{promptRu}</code>
      </pre>
      <p>
        Сверьте итоги с расшифровкой, прежде чем кому-то их отправлять. Чаще
        всего AI ошибается в именах и исполнителях.
      </p>

      <h2>Два правила до начала записи</h2>
      <ul>
        <li>
          Спросите согласие всех участников. Правила записи отличаются по
          странам.
        </li>
        <li>
          Уберите всё личное (зарплаты, здоровье, данные клиентов), прежде чем
          вставлять текст в чат. Сначала загляните в политику компании по AI.
        </li>
      </ul>

      <h2>Ограничения</h2>
      <p>
        Расшифровка это черновик. Акценты, шум и разговор нескольких людей
        одновременно дают ошибки. На страницах выше не сказано, где идёт
        обработка, поэтому не считайте, что всё остаётся на телефоне.
      </p>

      <h2>Источники</h2>
      <ul>
        <li>
          <a href="https://support.apple.com/guide/iphone/view-a-transcription-iph00953a982/ios">
            Apple: расшифровка в Voice Memos
          </a>
        </li>
        <li>
          <a href="https://support.google.com/pixelphone/answer/16267698">
            Google: расшифровка и краткое изложение в Recorder на Pixel
          </a>
        </li>
        <li>
          <a href="https://www.samsung.com/us/support/answer/ANS10000942/">
            Samsung: Transcript assist в Voice Recorder
          </a>
        </li>
      </ul>
    </>
  )
}
