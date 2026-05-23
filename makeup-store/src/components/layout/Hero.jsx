import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12">
      <Container>
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-14 items-center">
          {/* CONTENT */}
          <div className="max-w-[620px]">
            {/* SUBTITLE */}
            <p className="uppercase tracking-[4px] text-xs md:text-sm text-muted-foreground mb-5">
              Luxury Beauty Collection
            </p>

            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl leading-[1.05] tracking-tight font-semibold mb-6">
              Beauty crafted for modern elegance.
            </h1>

            {/* DESCRIPTION */}
            <p className="text-base md:text-lg text-muted-foreground leading-7 md:leading-8 mb-8 max-w-[540px]">
              Discover premium makeup essentials designed to elevate your
              everyday ritual with timeless sophistication.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/shop"
                className="h-12 px-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Shop Collection
              </Link>

              <Link
                href="/#best-sellers"
                className="h-12 px-8 rounded-full border border-border flex items-center justify-center hover:bg-accent transition"
              >
                Best Sellers
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[500px] lg:h-[620px] rounded-[32px] md:rounded-[48px] overflow-hidden bg-gradient-to-b from-[#f8f4f1] to-[#efe7e2] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <Image
                src="/blush.jpeg"
                alt="Beauty Model"
                fill
                priority
                sizes="(max-width:768px) 100vw,
                     (max-width:1200px) 50vw,
                     50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
