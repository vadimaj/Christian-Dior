const AboutSection = () => {
  return (
    <section className="about mb-[150px]">
      <div className="container mx-auto">
        <div className="about__inner pl-[200px]">
          <h2 className="about__title uppercase text-[32px] font-secondary leading-[1.35] mb-5 max-w-[185px]">
            DARE IN GRIS DIOR
          </h2>
          <div className="about__textbox flex justify-between">
            <div className="flex flex-col gap-4 basis-[385px]">
              <p>
                Gris Dior is the olfactory expression of gray, the iconic color
                of the House of Dior that embodies the bold spirit of Christian
                Dior.
              </p>
              <p>
                A unisex eau de parfum that defies gender, Gris Dior is an
                intense chypre fragrance that makes a strong, recognizable
                statement, a fragrance you adopt and interpret to suit your own
                rules.
              </p>
              <p>
                Gris Dior uninhibitedly combines heritage with a modern twist
                and plays the unisex card with confidence. It is multifaceted
                and not as obvious as it seems, like the color gray, richly
                nuanced with its subtleties, anything but a simple mix of black
                and white.
              </p>
            </div>
            <div className="flex flex-col gap-4 font-bold self-end basis-[385px]">
              <p>
                A backdrop for all desires, revealing all shades: dare to go
                gray with Gris Dior.
              </p>
              <p>
                A bold embodiment of this elusive color, Gris Dior is a light
                chypre fragrance that has become an icon, an unexpected master
                of the game. Both a fragrance for women and a fragrance for men,
                its unisex trail invites uninhibited expression today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
