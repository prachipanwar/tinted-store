import Container from "@/components/layout/Container";

export default function Loading() {

  return (

    <section className="pt-28 pb-20 animate-pulse">

      <Container>

        {/* HEADER */}
        <div className="mb-10 space-y-4">

          <div className="h-4 w-40 bg-accent rounded-full" />

          <div className="h-12 w-[300px] bg-accent rounded-2xl" />

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8">

          {Array.from({ length: 8 }).map(
            (_, index) => (

              <div
                key={index}
                className="border border-border rounded-[28px] overflow-hidden"
              >

                <div className="h-[260px] bg-accent" />

                <div className="p-4 space-y-4">

                  <div className="h-3 w-24 bg-accent rounded-full" />

                  <div className="h-5 w-full bg-accent rounded-full" />

                  <div className="h-5 w-[70%] bg-accent rounded-full" />

                  <div className="h-10 w-full bg-accent rounded-full" />

                </div>

              </div>

            )
          )}

        </div>

      </Container>

    </section>

  );
}