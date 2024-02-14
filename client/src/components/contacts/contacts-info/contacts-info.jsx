import styles from "./contacts-info.module.css";

export const Contacts_info = () => {
  return (
    <div className="container-fluid mt-3" style={{ background: 'rgba(255, 255, 255, 1)', color: "black" }}>
      <div className={styles.container}> 
        <div className={styles.content}>
          <div className={styles.title}>WE ARE HERE FOR YOU</div>
          <div className={styles.description}>
            At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, please forward it to our support desk and we will get back to you as soon as possible.
          </div>
        </div>     
      </div>
      <div className="row" style={{marginBottom: 30}}>
        <div
          className="col p-6 text-black"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18
          }}
        >
          <div className={styles.direction}>
            497 Evergreen Rd. Roseville, CA 95673
          </div>
          <div className={styles.direction}>
            Phone: +44 345 678 903
            Email: luxury_hotels@gmail.com
          </div>
        </div>
        <div
          className="col p-6 text-black" 
          style={{
            display: "flex",
            justifyContent: 'center',
            margin: "20px 0"
          }}
        >
        <form action="https://formsubmit.co/luxuryhotel@yopmail.com" method="POST">
          <input type="hidden" name="_subject" value="Contacto"/>
          <label for="name" class="form-label" className={styles.description}>Nombre:</label><br></br>
          <input type="text" class="form-control" className={styles.entradas} id="name" placeholder="Ingrese su nombre" name="name" required></input><br></br>

          <label for="email" class="form-label" className={styles.description}>Email:</label><br></br>
          <input type="email" class="form-control" className={styles.entradas} id="email" placeholder="Ingrese su correo electronico" name="email" required></input><br></br>

          <label for="message" class="form-label" className={styles.description}>Mensaje:</label><br></br>
          <textarea class="form-control" rows="5" className={styles.entradaTexto} id="message" name="message" placeholder="Escriba su mensaje" required></textarea><br></br>
          <button className="btn btn-info" type="submit">Enviar mensaje</button>
        </form>
        </div>
      </div>
    </div>
  );
};