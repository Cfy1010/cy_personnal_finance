import { useState } from "react";
import { useUser } from "@clerk/clerk-react";

export const FinancialRecordForm = () => {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [payementMethod, setPayementMethod] = useState<string>("");

  const user = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newRecord = {
      userId: user?.id,
      date: new Date(),
      description: description,
      amount: parseFloat(amount),
      category: category,
      payementMethod: payementMethod,
    };

    // addRecord(newRecord)
    setDescription("");
    setAmount("");
    setCategory("");
    setPayementMethod("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="">Description : </label>
          <input type="text" className="input" required value={description} />
        </div>
        <div className="form-field">
          <label htmlFor="">Montant : </label>
          <input type="number" className="input" required value={amount} />
        </div>
        <div className="form-field">
          <label htmlFor="">Categorie : </label>
          <select className="input" required value={category}>
            <option value="Food">Nourriture</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salaire</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="">Methode de Payement : </label>
          <select className="input" required value={payementMethod}>
            <option value="Food">Selectionne une methode de paiement</option>
            <option value="Rent">Carte de Credit</option>
            <option value="Salary">Cash</option>
            <option value="Utilities">Virement</option>
          </select>
        </div>
        <button type="submit" className="button">
          Ajoute un enregistrement
        </button>
      </form>
    </div>
  );
};
