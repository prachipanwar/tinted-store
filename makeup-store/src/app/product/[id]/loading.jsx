import Container from "@/components/layout/Container";

export default function Loading() {

  return (

    <section className="pt-20 md:pt-28 pb-16 md:pb-20 animate-pulse">

      <Container>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

          {/* IMAGE */}
          <div className="h-[320px] sm:h-[460px] lg:h-[700px] rounded-[24px] md:rounded-[40px] bg-accent" />

          {/* CONTENT */}
          <div className="space-y-6">

            <div className="h-4 w-32 bg-accent rounded-full" />

            <div className="h-14 w-full bg-accent rounded-2xl" />

            <div className="h-10 w-40 bg-accent rounded-full" />

            <div className="space-y-3">

              <div className="h-4 w-full bg-accent rounded-full" />

              <div className="h-4 w-[90%] bg-accent rounded-full" />

              <div className="h-4 w-[70%] bg-accent rounded-full" />

            </div>

            <div className="h-14 w-[220px] bg-accent rounded-full" />

          </div>

        </div>

      </Container>

    </section>

  );
}