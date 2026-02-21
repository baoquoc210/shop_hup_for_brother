import Link from "next/link";

export function SimplePage({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {description ? (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>

      {children ? (
        <div className="rounded-3xl border border-border bg-card p-8">
          {children}
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/san-pham"
          className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Xem sản phẩm
        </Link>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-4 text-sm font-semibold text-foreground hover:bg-muted"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
