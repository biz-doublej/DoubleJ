import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function ContactPage({ params }: { params: { locale: string } }) {
  const t = await getDictionary(params.locale as any);
  return (
    <section>
      <div className="container">
        <h2>{t.pages.contact.title}</h2>
        <div className="cards">
          <div className="card">
            <h3>{t.pages.contact.offices}</h3>
            <p>KR: 서울
              <br />US: San Francisco</p>
          </div>
          <div className="card">
            <h3>{t.pages.contact.email}</h3>
            <p><a href="mailto:contact@doublej.co">contact@doublej.co</a></p>
            <h3 style={{marginTop:12}}>{t.pages.contact.phone}</h3>
            <p>+82-2-000-0000</p>
          </div>
          <div className="card">
            <h3>Contact Form</h3>
            <form action={`mailto:contact@doublej.co`} method="post">
              <div className="row" style={{gap:8, marginBottom:8}}>
                <input name="name" placeholder="Name" required className="input" />
                <input type="email" name="email" placeholder="Email" required className="input" />
              </div>
              <textarea name="message" placeholder="Message" rows={5} className="input" required />
              <div style={{marginTop:8}}>
                <button className="btn primary" type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
