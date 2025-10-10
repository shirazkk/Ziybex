import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-sm uppercase tracking-widest text-muted-foreground">
        Error 404
      </p>
      <h1 className="text-4xl font-bold sm:text-5xl font-heading">
        Blog not found
      </h1>
      <p className="max-w-prose text-muted-foreground">
        Sorry, we couldn&apos;t find the blog you&apos;re looking for. It may
        have been moved or deleted.
      </p>
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Go home
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          Visit blog
        </Link>
      </div>
    </main>
  );
}
