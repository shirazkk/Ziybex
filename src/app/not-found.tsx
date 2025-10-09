import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mx-auto max-w-2xl">
        <div className="mx-auto mb-6 h-14 w-14 overflow-hidden rounded-full border bg-background shadow-sm">
          <Image
            src="/notfound_ziybex_logo.jpg"
            alt="Ziybex logo"
            width={56}
            height={56}
            className="h-15 w-15 object-contain"
          />
        </div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          404 • Not Found
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          The page you are looking for doesn&apos;t exist or was moved. Please
          check the URL or return to a safe page.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="bg-accent hover:bg-accent/90 inline-flex items-center rounded-md  px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Go to Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground"
          >
            Visit Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
