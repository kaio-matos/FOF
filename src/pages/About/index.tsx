import "./index.css";
import Hero from "../../components/Hero";

export default function About() {
  return (
    <main>
      <section>
        <Hero
          title="FOF | Foundation of Foundations"
          paragraph=""
          link={{
            url: "https://www.globalgiving.org/",
            otherLocation: true,
            text: "Global Giving",
          }}
          image="https://source.unsplash.com/random"
        />
      </section>
      <section className="about">
        <div className="about_container">
          <div>
            <h2>See what we are doing</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut eos
              fugit nihil blanditiis consectetur, minima eaque quia dignissimos.
              Aliquam suscipit ullam voluptates quis numquam laborum velit,
              consectetur iste magni incidunt voluptatibus rem voluptas ipsa hic
              id consequatur odit autem ea accusamus impedit totam expedita
              nostrum libero? Culpa sint in doloremque.
            </p>
          </div>
          <div>
            <img src="https://source.unsplash.com/random" alt="" />
          </div>
        </div>
        <div className="about_container">
          <div>
            <img src="https://source.unsplash.com/random" alt="" />
          </div>
          <div>
            <h2>See what we are doing</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut eos
              fugit nihil blanditiis consectetur, minima eaque quia dignissimos.
              Aliquam suscipit ullam voluptates quis numquam laborum velit,
              consectetur iste magni incidunt voluptatibus rem voluptas ipsa hic
              id consequatur odit autem ea accusamus impedit totam expedita
              nostrum libero? Culpa sint in doloremque.
            </p>
          </div>
        </div>
        <div className="about_container">
          <div>
            <h2>See what we are doing</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut eos
              fugit nihil blanditiis consectetur, minima eaque quia dignissimos.
              Aliquam suscipit ullam voluptates quis numquam laborum velit,
              consectetur iste magni incidunt voluptatibus rem voluptas ipsa hic
              id consequatur odit autem ea accusamus impedit totam expedita
              nostrum libero? Culpa sint in doloremque.
            </p>
          </div>
          <div>
            <img src="https://source.unsplash.com/random" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
