import Container from "./Container";
import Image from "next/image";
import heroImg from '@/public/blush.jpeg'

export default function Hero() {
  return (
    <section className="py-20 md:py-28">

      <Container>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>

            <p className="uppercase tracking-[5px] text-sm text-muted-foreground mb-5">
              Luxury Beauty Collection
            </p>

            <h1 className="text-5xl md:text-7xl leading-tight font-semibold mb-6">
              Discover Beauty That Defines You
            </h1>

            <p className="text-muted-foreground text-lg leading-8 mb-10 max-w-lg">
              Explore premium skincare and makeup essentials
              designed to elevate confidence, elegance, and
              everyday beauty rituals.
            </p>

            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Shop Collection
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div>

            <div className="relative h-[500px] rounded-[40px] overflow-hidden bg-accent">

              <Image
                src={heroImg}
                alt="Beauty Model"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}