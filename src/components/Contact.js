import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("template_13ksuta", {
      name,
      phone,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {
    let formMess = document.querySelector(".form-message");

    window.emailjs
    .send("service_u2echxa", templateId, variables)
      .then((res) => {
        formMess.innerHTML =
        "Message envoyé ! Nous vous recontacterons dès que possible.";
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };

  return (
    <form className="px-10 py-10flex-col self-center md:border-opacity-55 rounded-lg sm:text-center lg:text-center md:text-center">
    <img src="./img/etang-panoram-2.jpg" width="1450" alt="" className="shadow-lg rounded-md" />
    <h2 className="text-black-500 font-black mb-8 pt-2">Pour nous contacter</h2>
    <div className="px-4 py-3 rounded-full" style={{}}>
        <input
            className="text-black-500 px-4 py-1 mx-2 my-2 border-2 border-green-500 md:border-opacity-50 rounded-md"
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="nom, prénom"
            value={name}
        />

        <input
            className="text-black-500 px-4 py-1 mx-2 my-2 border-2 border-green-500 md:border-opacity-50 placeholder-gray-500 placeholder-opacity-50 rounded-md"
            type="tel"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="téléphone"
            value={phone}
        />
        <div className="text-black px-4 py-1 mx-2 my- md:border-opacity-50 rounded-md">
            <label id="not-mail "> Votre email :</label>
            <input
                className="text-black-500 px-4 py-1 mx-2 my-2 border-2 border-green-500 border-opacity-75 md:border-opacity-50 rounded-md "
                type="email"
                id="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email *"
                value={email}
            />
        </div>
        <textarea
            className="text-black-500 px-4 py-1 mx-2 my-2 border-2 border-green-500 border-opacity-75 md:border-opacity-100 border rounded-md "
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message *"
            value={message}
            required
        />
    </div>
    <input
        className="cursor-pointer px-2 transition duration-500 ease-in-out bg-green-200 hover:bg-red-400 transform hover:-translate-y-1 hover:scale-150 rounded-md"
        type="submit"
        value="envoyer"
        onClick={handleSubmit}
    />
    <div className="form-message"></div>
    
</form>
  );
};

export default App;