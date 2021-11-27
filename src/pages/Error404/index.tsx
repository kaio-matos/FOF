import Hero from "../../components/Hero";

export default function Error404() {
  return (
    <main>
      <Hero
        title="Page not found"
        paragraph=""
        link={{
          url: "FOF",
          text: "Go Home",
        }}
        image="https://source.unsplash.com/random"
      />
    </main>
  );
}
