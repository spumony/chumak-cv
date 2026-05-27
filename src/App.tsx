function App() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-6 px-5 py-16 sm:px-6 md:px-8">
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl md:text-7xl">
        Дизайн-токены готовы
      </h1>
      <p className="text-base text-text-secondary sm:text-lg">
        Inter покрывает латиницу и кириллицу — typography is consistent across
        RU and EN. Это базовый текст вторичного цвета.
      </p>
      <p className="text-base text-text-muted">
        Приглушённый текст (text-muted) для подписей и метаданных.
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="rounded-md border border-border bg-bg-elevated px-3 py-1 font-mono text-sm whitespace-nowrap text-text-secondary">
          TypeScript
        </span>
        <span className="rounded-md border border-border bg-bg-elevated px-3 py-1 font-mono text-sm whitespace-nowrap text-text-secondary">
          React 19
        </span>
        <span className="rounded-md border border-accent px-3 py-1 font-mono text-sm whitespace-nowrap text-accent">
          accent
        </span>
      </div>
      <a
        href="#"
        className="font-mono text-accent transition-colors hover:text-accent-hover"
      >
        ссылка с hover →
      </a>
    </main>
  )
}

export default App
